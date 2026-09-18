# Maquettes landing page Evø · cadrage des 3 directions

Trois maquettes HTML autonomes, même contenu (copy v3 du brief, mot pour mot), trois partis pris visuels.
Objectif : choisir une direction avant d'attaquer l'intégration section par section décrite dans `CLAUDE.md`.

## Inspirations relevées sur 21st.dev

Les composants 21st.dev sont en React et Tailwind. On n'en reprend que le pattern, réécrit en HTML, CSS et JS sans dépendance, avec les tokens Evø.

| Pattern 21st.dev | Auteur | Usage dans Evø |
|---|---|---|
| Us vs Them Comparison | 7ovr | `evo-compare` : carte Evø mise en avant avec coches, colonnes perdantes atténuées avec croix. Se recompose en cartes sur mobile. |
| Comparison Table | hirael | `evo-compare` version tableau, colonne gagnante surélevée. |
| How It Works Timeline, Vertical How It Works Timeline | 7ovr, LN | `evo-process` : pastilles alignées à gauche, ligne de liaison qui se remplit au scroll. |
| Partition Bar | 8starlabs | La frise « Candidature, Accompagnement 6 mois, Décision » en segments proportionnels. Sert aussi à montrer « 1 personne, 9 métiers ». |
| Bold Stats, Stats | ui layout, Méschac Irung | `evo-stats` : chiffres mono très gros, filets fins, compteur au scroll. |
| Feature Problem Cards | hirael | Dramatisation du problème, partie A de la section 2. |
| Grid Feature Cards, Bento | Efferd, Ruixen, KinfeMichael Tariku | `evo-team` : grille par fonction, carte Greg en format double. |
| Two-Column FAQ | LN | `evo-faq` : titre fixe à gauche, accordéon à droite sur desktop. |
| FAQ Chat Accordion | anshuman008 | `evo-objections` en conversation : bulle du dirigeant, réponse d'Evø. |
| Compare Reveal | Mehi | `evo-beforeafter` : idée d'interaction, transformée en lignes à cocher, comme le dit le copy. |
| Marquees | divers | Bandeau du running gag Ø, lent, coupé si `prefers-reduced-motion`. |
| Highlight Text, Blur Reveal | glasscn, tom_ui | Surlignage doré ponctuel, apparition sobre au scroll. |
| Spotlight Card | HJ | Halo discret au survol sur la carte Greg. |
| Calls to Action | divers | `evo-cta` répété, libellé variable, réassurance identique. |

## Direction A · « Papier »
Éditoriale et calme. Références : Sézane, Singular, Emblem.
Hero sur fond papier, H1 très grand aligné à gauche, filets fins, beaucoup de blanc. Le vert profond n'arrive qu'à la section finale. Tableau comparatif classique à colonne Evø surélevée. Frise en Partition Bar puis 5 cartes. FAQ en deux colonnes.
Risque pris : presque aucun aplat, tout repose sur la typographie et les filets.

## Direction B · « Vert profond »
Manifeste immersif. Références : Founders Fund, Hexa, Cherry Ventures.
Hero plein vert profond avec un `ø` géant en filigrane, H1 énorme, bandeau défilant du running gag Ø. Comparatif en cartes « Us vs Them ». Parcours en timeline verticale qui se remplit au scroll, titre fixe à gauche. Équipe en bento. Avant/Après avec lignes à cocher.
Risque pris : le `ø` géant comme seul élément graphique de la page.

## Direction C · « Carnet »
Joueuse et décalée, sans perdre le sérieux des chiffres. Références : Daphni, Big Mamma, Alan, Qonto.
Beaucoup de JetBrains Mono, étiquettes, cartes arrondies en bento, fiche « promotion » dans le hero, objections en conversation, barre de candidature fixe en bas sur mobile.
Risque pris : le mono très présent, façon carnet de bord.

## Variantes de hero à partir de la direction B

Copies de `b-vert-profond.html`. Tout est identique à B, sauf le haut de page. Les composants 21st.dev fournis sont en React et Tailwind : seul le pattern est repris, réécrit sans dépendance.

| Fichier | Pattern 21st.dev | Ce qui change par rapport à B |
|---|---|---|
| `b1-deux-colonnes.html` | Hero Fashion (Kokonut UI) | Hero en 2 colonnes sur desktop. À gauche, accroche, H1, sous-titre et CTA répartis sur la hauteur. À droite, une carte photo (artisane à son établi) avec le monogramme `ø` en pastille et l'urgence datée en pied de carte. Halo doré flou derrière la carte. Le `ø` en filigrane disparaît. |
| `b2-capsule.html` | Hero Section 6 (Tailark) | Filet pointillé sous le header. Pastille « Promotion [nom] · 100 places » au-dessus du titre, H1 plus compact, texte centré sur mobile et tablette. Le CTA devient une capsule champ email + bouton : l'email est reporté dans le formulaire `#candidater`, rien n'est envoyé depuis le hero. Photo décorative (échange autour de documents) : à fond perdu à droite avec fondu vers le vert sur desktop, en carte sous le CTA sur mobile et tablette. |
| `b3-centre.html` | Responsive Hero Banner | Hero centré. Dans le header, le bouton est logé dans une pastille de verre dépoli avec la mention « 100 places par cycle, deux cycles par an » (masquée sur mobile). Badge « Promotion [nom] · 100 places » au-dessus du titre, photo de fond (réunion d'équipe) passée en niveaux de gris sous le vert, avec un voile vert plein au centre pour garder le texte lisible. La réassurance secondaire remonte sous le CTA, à la place de la ligne « partenaires ». Entrée en cascade au chargement, en CSS seul, coupée si `prefers-reduced-motion`. |

Non repris des patterns d'origine, car contraires à `CLAUDE.md` : menu de navigation, liens sortants, second bouton, logos partenaires, police serif.

Photos : les 3 visuels de `/assets/img` (`hero-atelier`, `hero-echange`, `hero-reunion`, en WebP avec repli JPG) sont des **photos provisoires** Unsplash sous licence libre, servies en local. Elles sont décoratives (`alt=""`) et à remplacer par de vraies photos Evø avant publication.

## Règles communes aux 3 maquettes
- Un fichier HTML autonome par maquette, CSS et JS en ligne pour que la maquette se partage en un fichier. L'arborescence `/css` et `/js` de `CLAUDE.md` viendra avec la direction retenue.
- Tokens de `CLAUDE.md` uniquement, mode sombre compris.
- Copy de la section 5 du brief, tel quel. Les `[À CONFIRMER]` apparaissent en pastille pointillée visible et en commentaire HTML.
- Un seul CTA, vers `#candidater`, libellé variable, réassurance identique.
- Formulaire court en fin de page (priorité 2 du brief), emplacement calendrier documenté.
- `track(event, payload)` posé, sans outil branché.
