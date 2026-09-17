# CLAUDE.md · Landing page Evø

Instructions d'exécution pour ce dépôt.

**Le contenu, le copywriting, la marque et les arbitrages métier sont dans `EVO-BRIEF.md`.** Lis-le en entier avant de commencer. Ce fichier-ci ne contient que le comment.

---

## Le projet en une ligne

Landing page unique, statique, en français, à but de conversion. Un seul objectif : faire candidater un dirigeant de TPE ou PME à la prochaine promotion Evø.

---

## Stack et contraintes


- **Aucune dépendance runtime** en dehors des Google Fonts.
- Déploiement statique, Vercel ou Netlify.
- Pas de build step obligatoire. Si un build est ajouté, il doit rester trivial (`npm run build`).

### Ce qu'il ne faut pas faire


- Pas de second CTA concurrent. Un seul call to action sur toute la page, répété, formulé différemment selon la section.
- Pas de menu de navigation, pas de lien sortant, pas de page secondaire.
- Pas de carrousel. Pas de pop-up d'exit intent. Pas de compte à rebours animé.
- Pas de `div` cliquable là où un `button` ou un `a` est attendu.

---

## Structure de fichiers

```
/
├─ index.html
├─ CLAUDE.md
├─ EVO-BRIEF.md
├─ /assets
│  ├─ /img          logos SVG, favicon, photos équipe, OG image
│  └─ /fonts        si self-hosting plutôt que Google Fonts
├─ /css
│  ├─ tokens.css    variables, ci-dessous
│  ├─ base.css      reset, typo, éléments globaux
│  └─ sections.css  une zone commentée par section de la page
└─ /js
   └─ main.js       accordéon FAQ, reveal au scroll, tracking, formulaire
```

Nommage : `kebab-case` partout. Classes préfixées `.evo-`, variables préfixées `--evo-`, pour éviter toute collision si une section est un jour embarquée dans un builder (Framer, Webflow, Wix).

---

## Design tokens

Valeurs qui font foi. Ne pas en inventer d'autres, ne pas écrire une couleur en dur dans le CSS.

```css
:root{
  /* Marque */
  --evo-green:      #2C5A48;  /* vert profond, couleur principale */
  --evo-green-soft: #3C6E5A;  /* vert secondaire, hover et fonds */
  --evo-gold:       #D89B3D;  /* doré, accent unique, le ø et les CTA */
  --evo-paper:      #F1EBE1;  /* papier, fond de page */
  --evo-paper-2:    #FAF6F0;  /* papier clair, cartes et surfaces */
  --evo-ink:        #26231E;  /* encre, texte principal */
  --evo-muted:      #7A736A;  /* texte secondaire */

  /* Sémantique */
  --bg:          var(--evo-paper);
  --surface:     var(--evo-paper-2);
  --text:        var(--evo-ink);
  --text-muted:  var(--evo-muted);
  --line:        rgba(38,35,30,.14);
  --line-strong: rgba(44,90,72,.30);
  --card-shadow: 0 1px 0 rgba(38,35,30,.05), 0 12px 32px -22px rgba(38,35,30,.45);

  /* Typo */
  --font-sans: 'DM Sans','Segoe UI',Helvetica,Arial,sans-serif;
  --font-mono: 'JetBrains Mono','SFMono-Regular',Menlo,Consolas,monospace;
}

@media (prefers-color-scheme: dark){
  :root:not([data-theme="light"]){
    --bg:#1E1B17;
    --surface:#262320;
    --text:#F1EBE1;
    --text-muted:#A79E93;
    --line:rgba(241,235,225,.14);
    --line-strong:rgba(216,155,61,.32);
    --evo-green:#5E9B83;
    --card-shadow:0 1px 0 rgba(0,0,0,.2), 0 12px 32px -22px rgba(0,0,0,.8);
  }
}
:root[data-theme="dark"]{ /* répéter les mêmes valeurs que le bloc ci-dessus */ }
```

**Note :** le document Word de copywriting utilise des variantes proches (`#2C5A4B`, `#D79B3D`, `#262119`, `#F2ECE1`). Ce sont des approximations de mise en page Word, elles ne font pas foi. On standardise sur les valeurs ci-dessus.

### Typographie

- **DM Sans** pour tout le texte. Graisses 400, 500, 700, plus italique 400 pour la baseline « Faire *évoluer.* »
- **JetBrains Mono** pour les micro-labels, numéros d'étape, chiffres mis en avant, mentions type « 100 places · 2 cycles par an »
- Chargement via Google Fonts avec `preconnect` sur `fonts.googleapis.com` et `fonts.gstatic.com`, `font-display: swap`, fallback stack déclaré.
- Échelle typographique fluide avec `clamp()`. Deux tailles de titre maximum par section.

### Règles d'usage de la couleur

- Fond papier par défaut. Sections en vert profond uniquement pour marquer les ruptures (hero ou section finale).
- **Le doré est rare.** Réservé au `ø`, aux CTA et aux moments de bascule. S'il est partout, il ne vaut plus rien.
- Le doré ne porte **jamais** de texte courant sur fond clair, le contraste ne passe pas. Il sert de fond de bouton ou d'accent graphique.
- Le `ø` peut remplacer une puce, un numéro d'étape ou un séparateur. C'est la signature graphique, à utiliser avec parcimonie.

---

## Composants à construire

| Composant | Notes d'implémentation |
|---|---|
| `evo-header` | Sticky, compact au scroll. Logo à gauche, bouton unique à droite. |
| `evo-hero` | Fond vert profond ou papier selon maquette. H1 en `clamp()`. Calendrier embarqué si disponible, sinon ancre vers le formulaire. |
| `evo-benefits` | Liste de 3 items avec coche. Pas d'icônes décoratives, la coche suffit. |
| `evo-stats` | Grille de 4 blocs chiffrés. Chiffre en mono, très gros. Compteur animé au scroll accepté, désactivé si `prefers-reduced-motion`. |
| `evo-compare` | Tableau 3 colonnes en desktop. **Sur mobile, se transforme en cartes empilées, une par critère.** Pas de scroll horizontal du body. |
| `evo-process` | Le schéma de parcours. Version 3 étapes retenue. 5 colonnes desktop, 2 tablette, timeline verticale à pastilles alignées à gauche sur mobile. Dernière carte en vert profond, pastille dorée avec le `ø` à la place du numéro. Specs détaillées au §6 du brief. |
| `evo-team` | Grille par fonction, pas trombinoscope. Carte Greg en format différent, mise en avant. **Doit rester présentable avec une seule personne remplie**, les autres cartes affichent le domaine sans visage. |
| `evo-beforeafter` | Deux colonnes miroir. Sur mobile, deux blocs empilés avec en-têtes contrastés. |
| `evo-objections` | Même logique que le tableau comparatif, cartes empilées sur mobile. |
| `evo-faq` | Accordéon. `<button aria-expanded>` + panneau, jamais un `div` cliquable. Une seule question ouverte à la fois, ou multiple, au choix, mais cohérent. |
| `evo-cta` | Bloc réutilisable : libellé variable passé en paramètre, **ligne de réassurance identique à chaque occurrence**. Apparaît après chaque section. |
| `evo-footer` | Minimal. Logo, baseline, contact, mentions légales, politique de confidentialité. |

---

## Exigences transverses

### Responsive
Mobile first. Unités relatives, flexbox et grid, `max-width: 100%` sur les images. Tout contenu large scrolle dans son propre conteneur `overflow-x: auto`, ou mieux se recompose en cartes. **Le body ne scrolle jamais horizontalement, à aucune largeur.**

Breakpoints de test : 360, 390, 768, 1024, 1440.

### Accessibilité, cible WCAG 2.1 AA
- Contrastes vérifiés, en particulier doré sur papier, qui est le point faible de la palette.
- Navigation clavier complète, focus visible et stylé (pas de `outline: none` sans remplacement).
- Un seul `h1`, hiérarchie `h2` puis `h3` cohérente, jamais de saut de niveau.
- Cibles tactiles de 44px minimum.
- `prefers-reduced-motion: reduce` respecté sur toutes les animations.
- Labels de formulaire réels, messages d'erreur liés par `aria-describedby`.
- Texte alternatif sur les logos, `alt=""` sur le purement décoratif.

### Performance
- Objectif LCP sous 2,5s, CLS sous 0,1, INP sous 200ms.
- Images en WebP avec fallback, `loading="lazy"` partout sauf le hero, `width` et `height` toujours déclarés pour éviter le CLS.
- Logos en SVG inline ou en sprite. Les PNG 2000px fournis servent de référence de tracé, **ils ne sont pas des assets de production**.
- Pas de JS pour ce que le CSS sait faire.

### SEO et partage
- `lang="fr"`, `<title>` et `meta description` rédigés, orientés « fonds d'investissement TPE PME accompagnement ».
- Open Graph et Twitter Card complets. Image OG à produire depuis le wordmark sur fond vert, 1200x630.
- Données structurées `Organization`.
- Favicon en 32, 180 et 512, généré depuis `evo-favicon2000px.png`.
- URL canonique déclarée.

### Animations
Sobres. Apparition au scroll en fondu avec léger décalage vertical, timeline qui se remplit à mesure du scroll. Rien de tape-à-l'œil : la marque vise « posé », pas « landing page d'infoproduit ».

---

## Le formulaire de candidature

C'est le seul point de conversion de la page, il mérite un soin particulier.

- **Priorité 1 :** calendrier embarqué (Calendly ou Cal.com) directement dans le hero et dans la section finale. Ça supprime une étape de conversion.
- **Priorité 2, si pas de calendrier :** formulaire court. Nom, entreprise, email, téléphone, effectif, chiffre d'affaires approximatif, une question ouverte « qu'est-ce qui bloque aujourd'hui ».
- Validation côté client non bloquante, messages d'erreur en français, sous le champ concerné.
- Message de confirmation qui reprend la promesse de réponse sous 48h.
- Protection anti-spam sans CAPTCHA (honeypot + timing).
- `[À DÉCIDER : outil de rendez-vous et destination des leads, CRM ou boîte mail]`. En attendant, prévoir un point d'intégration unique et documenté dans `main.js`.

---

## Tracking

Prévoir les événements dès la première version, même si l'outil d'analytics n'est pas encore branché. Point d'entrée unique, une fonction `track(event, payload)` dans `main.js`.

Événements à poser :
- vue de chaque section (seuil 50% visible)
- clic sur chaque CTA, en distinguant lequel par son libellé ou son id
- ouverture de chaque question de FAQ
- début de saisie du formulaire, puis soumission réussie

C'est ce qui permettra de savoir quelle section convertit et de faire de l'A/B testing sur le H1 plus tard.

---

## Contenu et rédaction

Tout le texte visible vient de `EVO-BRIEF.md`, section 5. **Ne pas réécrire le copy, ne pas le résumer, ne pas l'améliorer.** Il a été validé après trois itérations et un audit de ton.

Si un texte manque ou doit être créé (message d'erreur, confirmation, microcopie) :
- **jamais de tiret long (—)**, virgules ou deux-points à la place
- vouvoiement du dirigeant, « on » plutôt que « nous » pour Evø
- zéro jargon financier, zéro anglicisme non nécessaire
- phrases courtes, une idée par bloc
- chiffres en chiffres, pas en lettres

Les blocs marqués `[À CONFIRMER]` dans le brief restent visibles en commentaire HTML dans le code, pour être remplis facilement. Ne pas inventer de valeur à leur place.

---

## Definition of done

Avant de considérer une section terminée :

- [ ] Rendu correct à 360, 390, 768, 1024 et 1440px
- [ ] Aucun scroll horizontal du body
- [ ] Navigation clavier complète, focus visible
- [ ] Contrastes vérifiés
- [ ] `prefers-reduced-motion` respecté
- [ ] Mode sombre fonctionnel
- [ ] Aucune couleur écrite en dur, tout passe par les tokens
- [ ] Copy strictement conforme au brief
- [ ] Événements de tracking posés
- [ ] Lighthouse mobile : performance et accessibilité au-dessus de 90
