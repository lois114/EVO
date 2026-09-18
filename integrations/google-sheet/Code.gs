/* =========================================================
   Evø · Réception des candidatures dans Google Sheets
   À coller dans le tableur « Evø · Candidatures » : Extensions > Apps Script.
   Deux fonctions à connaître :
     - installer() : met le tableur en forme (à lancer une seule fois)
     - doPost(e)   : reçoit chaque candidature envoyée par le formulaire du site
   Marche à suivre complète : README.md, dans ce même dossier.
   ========================================================= */

var ONGLET = 'Candidatures';

/* Adresse prévenue à chaque nouvelle candidature : celle du client, pas forcément la vôtre.
   Plusieurs adresses possibles, séparées par des virgules. Laisser vide pour ne pas envoyer d'email. */
var EMAIL_NOTIFICATION = '';

var COLONNES = [
  { titre: 'Reçue le',            largeur: 140 },
  { titre: 'Répondre avant',      largeur: 140 },
  { titre: 'Statut',              largeur: 150 },
  { titre: 'Nom',                 largeur: 180 },
  { titre: 'Entreprise',          largeur: 200 },
  { titre: 'Email',               largeur: 240 },
  { titre: 'Téléphone',           largeur: 140 },
  { titre: 'Effectif',            largeur: 150 },
  { titre: "Chiffre d'affaires",  largeur: 190 },
  { titre: 'Ce qui bloque',       largeur: 420 },
  { titre: 'Page',                largeur: 170 },
  { titre: 'Notes',               largeur: 320 }
];

var STATUTS = ['Nouveau', 'À rappeler', 'Échange planifié', 'Retenu', 'Non retenu'];

var EFFECTIFS = {
  '1-5': '1 à 5 salariés', '6-10': '6 à 10 salariés', '11-20': '11 à 20 salariés',
  '21-50': '21 à 50 salariés', '50+': 'Plus de 50 salariés'
};
var CHIFFRES = {
  '-250k': 'Moins de 250 000 €', '250k-500k': '250 000 à 500 000 €', '500k-1m': '500 000 € à 1 million',
  '1m-3m': '1 à 3 millions', '3m-10m': '3 à 10 millions', '10m+': 'Plus de 10 millions'
};

/* Couleurs de la charte Evø */
var VERT = '#2C5A48', DORE = '#D89B3D', PAPIER = '#F1EBE1', PAPIER_CLAIR = '#FAF6F0', ENCRE = '#26231E';

/* ---------- 1. Mise en forme du tableur, à lancer une fois ---------- */
function installer() {
  var classeur = SpreadsheetApp.getActiveSpreadsheet();
  var feuille = classeur.getSheetByName(ONGLET) || classeur.getSheets()[0];
  feuille.setName(ONGLET);
  classeur.setSpreadsheetLocale('fr_FR');
  classeur.setSpreadsheetTimeZone('Europe/Paris');

  var n = COLONNES.length;
  var lignes = Math.max(feuille.getMaxRows(), 1000);
  if (feuille.getMaxRows() < lignes) { feuille.insertRowsAfter(feuille.getMaxRows(), lignes - feuille.getMaxRows()); }
  if (feuille.getMaxColumns() > n) { feuille.deleteColumns(n + 1, feuille.getMaxColumns() - n); }
  if (feuille.getMaxColumns() < n) { feuille.insertColumnsAfter(feuille.getMaxColumns(), n - feuille.getMaxColumns()); }

  /* En-tête */
  var entete = feuille.getRange(1, 1, 1, n);
  entete.setValues([COLONNES.map(function (c) { return c.titre; })])
    .setBackground(VERT).setFontColor(PAPIER).setFontWeight('bold').setFontSize(10)
    .setVerticalAlignment('middle').setHorizontalAlignment('left').setWrap(false);
  feuille.setRowHeight(1, 40);
  feuille.setFrozenRows(1);
  feuille.setFrozenColumns(4);
  COLONNES.forEach(function (c, i) { feuille.setColumnWidth(i + 1, c.largeur); });

  /* Corps */
  var corps = feuille.getRange(2, 1, lignes - 1, n);
  corps.setFontFamily('DM Sans').setFontSize(10).setFontColor(ENCRE).setVerticalAlignment('top').setWrap(true);
  entete.setFontFamily('DM Sans');
  feuille.getRange(2, 1, lignes - 1, 2).setNumberFormat('dd/mm/yyyy hh:mm');
  /* Texte brut : évite qu'un téléphone perde son 0 ou qu'une valeur soit lue comme une formule */
  feuille.getRange(2, 4, lignes - 1, n - 3).setNumberFormat('@');

  /* Lignes alternées papier */
  feuille.getBandings().forEach(function (b) { b.remove(); });
  feuille.getRange(1, 1, lignes, n).applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY, true, false)
    .setHeaderRowColor(VERT).setFirstRowColor(PAPIER_CLAIR).setSecondRowColor(PAPIER);

  /* Liste déroulante des statuts */
  var regle = SpreadsheetApp.newDataValidation().requireValueInList(STATUTS, true).setAllowInvalid(false).build();
  feuille.getRange(2, 3, lignes - 1, 1).setDataValidation(regle);

  /* Couleurs des statuts, et alerte quand la promesse « réponse sous 48h » est dépassée */
  var zoneStatut = feuille.getRange(2, 3, lignes - 1, 1);
  var zoneEcheance = feuille.getRange(2, 2, lignes - 1, 1);
  function siTexte(texte, fond, couleur) {
    return SpreadsheetApp.newConditionalFormatRule().whenTextEqualTo(texte)
      .setBackground(fond).setFontColor(couleur).setBold(true).setRanges([zoneStatut]).build();
  }
  feuille.setConditionalFormatRules([
    siTexte('Nouveau', DORE, ENCRE),
    siTexte('À rappeler', '#F3D9A8', ENCRE),
    siTexte('Échange planifié', '#CFE0D8', ENCRE),
    siTexte('Retenu', VERT, PAPIER),
    siTexte('Non retenu', '#DDD6CB', '#7A736A'),
    SpreadsheetApp.newConditionalFormatRule()
      /* écrit sans séparateur d'arguments, pour marcher quelle que soit la langue du tableur */
      .whenFormulaSatisfied('=($C2="Nouveau")*($B2<>"")*($B2<NOW())')
      .setBackground('#B4412F').setFontColor(PAPIER).setBold(true).setRanges([zoneEcheance]).build()
  ]);

  if (feuille.getFilter()) { feuille.getFilter().remove(); }
  feuille.getRange(1, 1, lignes, n).createFilter();
  feuille.setTabColor(VERT);
  feuille.setHiddenGridlines(true);
  SpreadsheetApp.flush();
}

/* ---------- 2. Réception d'une candidature ---------- */
function doPost(e) {
  try {
    var d = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    /* Anti-spam, côté serveur : champ piège rempli ou envoi trop rapide, on répond ok sans rien écrire */
    if (d.site_web || (typeof d.delai_ms === 'number' && d.delai_ms < 2500)) { return reponse({ ok: true }); }
    if (!texte(d.nom, 120) || !texte(d.entreprise, 160) || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(texte(d.email, 200))) {
      return reponse({ ok: false, erreur: 'champs' });
    }

    var verrou = LockService.getScriptLock();
    verrou.waitLock(20000);
    try {
      var feuille = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ONGLET);
      var maintenant = new Date();
      var echeance = new Date(maintenant.getTime() + 48 * 60 * 60 * 1000);
      var ligne = [
        maintenant, echeance, 'Nouveau',
        texte(d.nom, 120), texte(d.entreprise, 160), texte(d.email, 200), texte(d.telephone, 40),
        EFFECTIFS[d.effectif] || '', CHIFFRES[d.chiffre_affaires] || '',
        texte(d.blocage, 3000), texte(d.page, 80), ''
      ];
      /* Première ligne vide sous l'en-tête (appendRow irait sous les 1000 lignes mises en forme) */
      var derniere = feuille.getRange('D:D').getValues().filter(function (r) { return r[0] !== ''; }).length;
      feuille.getRange(derniere + 1, 1, 1, ligne.length).setValues([ligne]);
    } finally {
      verrou.releaseLock();
    }

    if (EMAIL_NOTIFICATION) {
      MailApp.sendEmail(EMAIL_NOTIFICATION, 'Evø · nouvelle candidature : ' + texte(d.entreprise, 160),
        texte(d.nom, 120) + ' (' + texte(d.entreprise, 160) + ')\n' + texte(d.email, 200) + ' · ' + texte(d.telephone, 40) +
        '\n\nCe qui bloque :\n' + texte(d.blocage, 3000) + '\n\nRéponse promise sous 48h.\n' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
        /* « Répondre » dans la messagerie écrit directement au candidat */
        { name: 'Evø · Candidatures', replyTo: texte(d.email, 200) });
    }
    return reponse({ ok: true });
  } catch (err) {
    return reponse({ ok: false, erreur: 'serveur' });
  }
}

/* Permet de vérifier dans le navigateur que l'application web répond */
function doGet() { return reponse({ ok: true, service: 'evo-candidatures' }); }

function reponse(objet) {
  return ContentService.createTextOutput(JSON.stringify(objet)).setMimeType(ContentService.MimeType.JSON);
}

/* Nettoie une valeur : texte court, sans formule possible */
function texte(valeur, max) {
  var t = String(valeur == null ? '' : valeur).replace(/\s+/g, ' ').trim().slice(0, max);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}
