# Candidatures Evø dans Google Sheets

Le formulaire du site envoie chaque candidature à un petit script Google (Apps Script) attaché au tableur **Evø · Candidatures**. Le script ajoute une ligne, et peut prévenir par email.

Tableur : https://docs.google.com/spreadsheets/d/17Re3edJzYZ57BlBpuLDXYe1Lj2xrlhTCPzrGwsImocw/edit

## Mise en route, une seule fois (5 minutes)

1. Ouvrir le tableur, puis **Extensions > Apps Script**.
2. Effacer le contenu de `Code.gs`, coller celui du fichier `Code.gs` de ce dossier, puis enregistrer.
3. Facultatif : renseigner `EMAIL_NOTIFICATION` en haut du script pour recevoir un email à chaque candidature.
4. Dans la liste des fonctions, choisir **installer**, cliquer sur **Exécuter**, et accepter l'autorisation demandée par Google (c'est votre propre script, sur votre propre tableur). Le tableur se met en forme tout seul.
5. **Déployer > Nouveau déploiement**, type **Application Web** :
   - Exécuter en tant que : **Moi**
   - Qui a accès : **Tout le monde**
6. Copier l'**URL de l'application Web** (elle finit par `/exec`).
7. C'est fait pour le compte de test (URL en place depuis le 18/09/2026). Pour un autre compte Google : la coller dans la constante `LEADS_ENDPOINT` de chaque maquette (`b1-deux-colonnes.html`, `b2-capsule.html`, `b3-centre.html`), bloc « 12. Formulaire de candidature ».

Pour vérifier : ouvrir l'URL `/exec` dans un navigateur, elle doit afficher `{"ok":true,"service":"evo-candidatures"}`.

## Après une modification du script

**Déployer > Gérer les déploiements > Modifier > Version : Nouvelle version**. L'URL ne change pas.

## Ce que contient le tableur

| Colonne | Contenu |
|---|---|
| Reçue le | Date et heure d'arrivée |
| Répondre avant | Reçue le + 48h. Passe en rouge si le statut est encore « Nouveau » une fois l'échéance dépassée |
| Statut | Liste : Nouveau, À rappeler, Échange planifié, Retenu, Non retenu |
| Nom, Entreprise, Email, Téléphone | Champs obligatoires du formulaire |
| Effectif, Chiffre d'affaires, Ce qui bloque | Champs facultatifs |
| Page | Variante du site d'où vient la candidature (B1, B2, B3) |
| Notes | Libre, pour le suivi |

## Anti-spam et sécurité

- Champ piège et délai minimum vérifiés dans le navigateur **et** dans le script.
- Toutes les valeurs sont nettoyées et tronquées, et aucune ne peut être lue comme une formule.
- L'URL du script est publique par nature (elle est dans le code du site). Elle ne permet que d'ajouter une ligne, jamais de lire le tableur.
- Le tableur contient des données personnelles : le partager seulement avec les personnes qui traitent les candidatures, et le mentionner dans la politique de confidentialité.
