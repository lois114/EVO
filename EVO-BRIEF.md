# EVØ · Brief marque et contenu

> Document de référence **métier** pour la landing page Evø.
> Compilé à partir de trois sessions de travail (références design, copywriting v1 à v3, schéma de parcours) et des documents du projet.
> Les instructions d'exécution technique sont dans `CLAUDE.md`. Ce document-ci contient le quoi et le pourquoi, pas le comment.
> Ce qui n'est pas encore tranché est signalé `[À CONFIRMER]`.

---

## 0. Ce qu'il faut construire

Une **landing page unique, longue, à but de conversion**, en français, dont l'unique action possible est de candidater à la prochaine promotion Evø.

- Un seul objectif, un seul CTA répété : **candidater**
- Pas de menu de navigation, pas de liens sortants, pas de blog, pas de pages secondaires
- Mobile first, la majorité du trafic sera du LinkedIn et du mobile
- Le seul lien de la page est le bouton de candidature, présent dans le header et répété après chaque section

---

## 1. La marque

### 1.1 Qui est Evø

Evø est un **fonds d'investissement spécialisé dans la croissance d'entreprise**, créé par **Greg**.

Le modèle est inversé par rapport à un fonds classique : au lieu d'investir puis d'accompagner, Evø **accompagne pendant 6 mois, puis décide d'investir**. Pendant ces 6 mois, l'entreprise a accès à un écosystème d'experts, de coachs, de formations, de plans personnalisés et d'un catalogue de services. L'objectif est de rendre l'investissement intéressant pour les deux parties.

**Ce que Evø n'est pas :** du coaching. C'est un fonds d'investissement qui apporte une aide stratégique et opérationnelle, dont la promesse finale est la croissance.

### 1.2 Positionnement de ton (demande explicite de Greg)

> « La page de base c'est une proposition d'un fonds d'investissement, alors ça peut être un peu fun et décalé par rapport à un fonds d'investissement. Autant avoir quelque chose qui est un peu sympa, un branding un peu jeune dynamique, voilà et en plus ça va mieux nous correspondre. »

Traduction opérationnelle, validée après un audit de ton en session 2 :

- **On charrie le milieu du capital-investissement et on se charrie soi-même. Jamais le dirigeant.** C'est la règle d'or.
- Le gisement d'humour est le contraste avec l'univers VC classique : costumes, anglicismes, term sheets, open space à La Défense, « nous accompagnons les champions de demain ».
- **Le `Ø` est un running gag** qui se lit « zéro » : Ø slide, Ø anglicisme, Ø costume, Ø term sheet de 40 pages. Il ouvre la page (sous-titre du hero) et la referme (dernière question de la FAQ).
- **Le garde-fou : léger sur la forme, irréprochable sur les chiffres.** Le ton léger vit dans les transitions, sous-titres, micro-copies et CTA. Dès qu'on parle prix, participation au capital, confidentialité ou conformité, on redevient carré. Un dirigeant qui rigole c'est bien, un dirigeant qui doute du sérieux financier c'est mort.

### 1.3 Charte graphique

Wordmark **Evø**, avec le `ø` en couleur d'accent. Baseline : **Faire évoluer.**
Palette : **vert profond, doré, papier, encre**. Sobre, posé, premium, pas startup bruyante.

Intentions visuelles :
- Le **doré est rare**. Il sert au `ø`, aux CTA, et aux moments de bascule. S'il est partout, il ne vaut plus rien.
- Beaucoup de blanc, de grandes respirations.
- Discipline typographique stricte : deux tailles de titre maximum par section, un seul accent de couleur. Référence assumée : Singular.
- Le `ø` peut remplacer une puce, un numéro ou un séparateur. C'est la signature graphique.

Les valeurs hexadécimales exactes et les règles d'implémentation sont dans `CLAUDE.md`.

### 1.4 Assets disponibles

PNG 2000px fournis dans le projet. **À convertir en SVG avant intégration**, les PNG servent de référence de tracé.

| Fichier | Usage |
|---|---|
| `evo-wordmark-green2000px.png` | Wordmark + baseline « Fonds d'investissement », fond vert |
| `evo-wordmark-paper2000px.png` | Idem, fond papier |
| `evo-wordmark-ink2000px.png` | Idem, fond encre |
| `evo-wordmark-transparent-light-text2000px.png` | Wordmark complet transparent, texte clair |
| `evo-wordmark-transparent-dark-text2000px.png` | Wordmark complet transparent, texte sombre |
| `evo-wordmark-only-*2000px.png` | Wordmark seul sans baseline (green, paper, ink, transparent light/dark) |
| `evo-monogram-green / paper / ink 2000px.png` | Monogramme `ø` en carré arrondi |
| `evo-monogram-glyph-green-transparent2000px.png` | Glyphe `ø` détouré, vert |
| `evo-monogram-glyph-paper-transparent2000px.png` | Glyphe `ø` détouré, papier |
| `evo-favicon2000px.png` | Favicon, monogramme doré sur encre |
| `evo-signature-tagline-transparent2000px.png` | « Faire *évoluer.* » détouré |
| `evo-signature-tagline-paper2000px.png` | « Faire *évoluer.* » sur papier |
| `evo-application-carte-signature2000px.png` | Exemple d'application carte |
| `evo-application-post2000px.png` | Exemple d'application post social |
| `evo-application-cover-podcast2000px.png` | Exemple cover podcast |

---

## 2. L'offre, les chiffres, la cible

### 2.1 Le modèle

| Élément | Valeur |
|---|---|
| Durée de l'accompagnement | **6 mois** |
| Tarif | **1 500 € / mois**, soit 9 000 € au total `[À CONFIRMER : HT ou TTC]` |
| Ce qui se passe ensuite | Décision d'entrée au capital, au mois 6 |
| Participation au capital | **Au cas par cas**, selon valorisation, montant et besoins réels. Aucune règle annoncée à l'avance. |
| Places | **100 par cycle, 2 cycles par an** (soit 200 entreprises par an) |
| Critère d'éligibilité | **TPE et PME**, tous secteurs. C'est le seul. |
| Équipe | Greg + 8 experts coachs associés |

### 2.2 Arbitrages stratégiques déjà tranchés

Ces trois décisions structurent tout le copy. Ne pas revenir dessus sans en mesurer l'effet.

1. **On ne promet pas « 9 experts dédiés dans votre boîte ».** À 9 000 € sur 6 mois, c'est intenable et ça crée une déception au mois 2. On promet **l'accès à un écosystème de 9 domaines d'expertise**, mobilisables selon le besoin, plus des plans, des formations et un catalogue de services.
2. **100 places × 2 cycles, ça ne se raconte pas comme de la rareté, ça se raconte comme une promotion.** Effet de cohorte, date d'ouverture, date de fermeture, réseau entre dirigeants. Urgence datée et crédible, pas un « places limitées » que personne ne croit.
3. **Le concurrent frontal n'est pas un fonds classique, c'est le consultant ou le coach.** Le tableau comparatif se construit contre lui. Le statut de fonds d'investissement est l'arme secrète, il se joue dans une autre section.

### 2.3 La cible

Dirigeant de **TPE ou PME, 1 à 50 salariés**, entreprise rentable ou proche de l'être, mais qui plafonne.

Il est le goulot d'étranglement : commercial le lundi, DRH le mardi, comptable le vendredi soir. Il arbitre à l'instinct. Il n'a ni les 9 expertises nécessaires pour passer le cap, ni les moyens de s'offrir 9 salaires de cadres.

Sa douleur profonde : la solitude du patron, le plafond de verre, et le sentiment de vendre son temps au lieu de construire un actif qui a de la valeur.

### 2.4 Chiffres utilisables dans le copy

- **9 métiers** à couvrir pour faire croître une PME
- **1 personne** pour les assumer aujourd'hui : le dirigeant
- **60 000 à 80 000 €** par an, coût chargé d'un seul cadre expérimenté `[À CONFIRMER]`
- **1 500 € / mois** pour accéder aux neuf
- **5 000 à 15 000 €** le coût d'une mission de consultant classique

---

## 3. L'équipe

Greg plus 8 experts coachs associés. Prénoms et visages à ajouter **au fur et à mesure**, Greg a demandé de lancer avec lui seul. La page doit donc gérer une grille d'équipe qui se remplit progressivement sans avoir l'air vide au lancement.

**Présenter l'équipe par fonction, pas en trombinoscope plat** (recommandation tirée de Serena, Founders Factory, Founders Future). On vend un catalogue de compétences, pas des têtes.

| Rôle | Domaine |
|---|---|
| **Greg** · Fondateur | Vision, arbitrage, stratégie, croissance externe, M&A. C'est lui qui dit non quand c'est une mauvaise idée. |
| Management et RH cadre | Structurer une équipe, déléguer pour de vrai, gérer les collaborations qui coincent, piloter plusieurs sites |
| Vente | Closing, prospection, scripts, montée en puissance d'une équipe commerciale |
| Finance | Trésorerie, compte de résultat, marge, rentabilité, pilotage du cash |
| Opérations et point de vente | Organisation terrain, process, merchandising, exécution |
| Recrutement et staffing | Trouver les bons profils, les intégrer, construire un organigramme qui tient |
| Acquisition et data | Marketing digital, contenu, visibilité locale, tracking et pilotage par les chiffres |
| Parcours client et digital | Rétention, tunnels de conversion, expérience client en ligne |
| Coordination | Le chef d'orchestre qui fait tourner tout ça au bon rythme |

---

## 4. Principes de conception retenus

**Les trois questions, à répondre above the fold :**
1. Qu'est-ce que vous proposez ?
2. Pourquoi vous plutôt qu'un autre ?
3. Qu'est-ce que je dois faire maintenant ?

**Design for usability (Krug) :** hiérarchies visuelles nettes, zones clairement délimitées, évidence de ce qui est cliquable, élimination des distractions, contenu formaté pour être scanné.

**Conversion-Centered Design (Oli Gardner) :** attention, contexte, clarté, congruence, crédibilité, closing, continuité. En pratique : **un seul call to action sur toute la page**, répété. Deux CTA différents violent le principe de clarté.

**Mobile first :** on dessine les petits écrans d'abord, on enrichit ensuite.

**Type de page :** lead generation landing page, en long copy. La décision engage 9 000 €, le visiteur a besoin de lire.

---

## 5. Structure et copywriting de la page

> Version v3, ton relevé. C'est le copy à intégrer tel quel. Les blocs en citation `>` sont du texte publiable, les blocs `**Note :**` sont des consignes internes à ne pas afficher.

### SECTION 0 · Header

Logo `Evø` seul à gauche, sur fond papier. **Pas de menu.** À droite, un unique bouton : **Rejoindre la promotion**.

**Note :** on garde un bouton dans le header, contrairement au modèle de LP pur, parce qu'un dirigeant qui connaît déjà Evø ne doit pas scroller 9 sections pour candidater. C'est le seul lien de la page, ça ne crée donc pas de porte de sortie.

---

### SECTION 1 · Hero

**Accroche-problème** (petite ligne au-dessus du titre)
> Votre boîte tourne. Elle ne décolle pas. Et vous savez déjà pourquoi : vous êtes seul à bord.

**H1**
> # 6 mois pour structurer votre boîte. Ensuite, on envisage d'y mettre notre argent.

**Sous-titre**
> Evø est un fonds d'investissement qui fait tout à l'envers. Au lieu de vous faire signer après trois rendez-vous et un business plan que personne ne relira, on passe six mois à travailler avec vous. Si ça décolle, on met notre argent. **Ø slide. Ø anglicisme. Ø type en costume qui vous explique votre métier.**

**3 bénéfices-clés (checkmarks)**
- ✓ **Neuf experts, zéro fiche de paie.** Vente, finance, RH, recrutement, acquisition, opérations, digital. Vous piochez celui qu'il vous faut. Personne ne vous facture une journée pour vous dire de « challenger votre positionnement ».
- ✓ **Un plan qu'on déroule, pas qu'on vous rend.** Points réguliers, actions datées, chiffres suivis. Vous n'êtes pas laissé seul avec une recommandation.
- ✓ **Un investisseur potentiel qui connaîtra votre boîte par cœur.** Quand on parlera capital, on aura déjà passé 6 mois dedans.

**Réassurance secondaire**
> Pas besoin d'être une startup ni de lever des millions. On travaille avec des TPE et des PME qui ont des vrais clients et des vrais problèmes.
> Vous restez dirigeant, majoritaire, et maître de vos décisions du premier au dernier jour.

**CTA principal**
> **Candidater à la prochaine promotion**
> Un échange de 30 minutes avec Greg. Gratuit, sans dossier à préparer.

**Ligne de réassurance** (identique sous chaque CTA de la page, c'est un ancrage de sécurité récurrent)
> Sans engagement. Échange confidentiel. Réponse claire sous 48h, oui ou non.

**Urgence datée**
> Promotion `[À CONFIRMER : nom, ex. « Printemps 26 »]` · 100 places · candidatures ouvertes jusqu'au `[date]`. Deux promotions par an, pas une de plus.

**Note, arbitrage prix :** les 1 500 € ne sont pas dans le hero. À ce niveau de page, le visiteur ne comprend pas encore ce qu'il achète, le chiffre paraît cher dans le vide. Le prix apparaît en section 3, puis en FAQ n°1. En revanche il doit être **visible sans avoir à demander** : un fonds qui cache son prix perd toute crédibilité.

---

### SECTION 2 · Le problème, puis la comparaison

#### Partie A · Dramatisation

**Titre**
> ## Le problème n'est pas votre produit. C'est que vous faites neuf métiers à la fois.

**Corps**
> Vous êtes commercial le lundi, DRH le mardi, comptable le vendredi soir. Vous pilotez la trésorerie sur un tableur que vous êtes seul à comprendre. Vous recrutez à l'instinct, vous fixez vos prix à l'instinct, vous arbitrez à l'instinct.
>
> Ça a marché jusqu'ici. C'est exactement pour ça que ça bloque maintenant.
>
> Une TPE qui plafonne, ce n'est presque jamais un problème de marché. C'est un dirigeant qui n'a ni les neuf expertises nécessaires pour passer le cap, ni les moyens de s'offrir neuf salaires de cadres.

**Blocs chiffrés** (grille de 4, chiffres en mono, très gros)
- **9 métiers** à couvrir pour faire croître une PME
- **1 personne** pour les assumer aujourd'hui : vous
- **60 à 80 k€** par an, le coût chargé d'**un seul** cadre expérimenté `[À CONFIRMER]`
- **1 500 € / mois** pour avoir accès aux neuf

**Phrase de bascule**
> Vous n'avez pas besoin d'un consultant de plus qui repart avec un PowerPoint et votre argent. Vous avez besoin que le boulot soit fait.

#### Partie B · Tableau comparatif à 3 colonnes

Les deux premières colonnes sont perdantes (❌), la troisième gagne partout (✅).

| | **Vous, seul** | **Le consultant en costume** | **Evø** |
|---|---|---|---|
| **Expertises accessibles** | Les vôtres ❌ | Celle d'une personne ❌ | Neuf domaines, à la demande ✅ |
| **Ce qu'on vous livre** | Rien de plus qu'hier ❌ | Un rapport, des conseils ❌ | Un plan déroulé avec vous ✅ |
| **Coût** | Votre plafond de verre ❌ | 5 000 à 15 000 € la mission ❌ | 1 500 € par mois, tout compris ✅ |
| **Vocabulaire employé** | « Faut que je trouve le temps » ❌ | « Disruption », « scalabilité », « ROI omnicanal » ❌ | Des mots que votre équipe comprend ✅ |
| **Ce qu'il reste à la fin** | Les mêmes blocages ❌ | Un document ❌ | Une boîte structurée et des process ✅ |
| **Il met son argent dans votre boîte** | Vous êtes seul dessus ❌ | Jamais ❌ | C'est tout l'objectif des 6 mois ✅ |
| **Son intérêt** | Facturer sa journée ❌ | Vendre la mission suivante ❌ | Que votre valorisation grimpe ✅ |

**Bloc de clôture**
> C'est la seule ligne qui compte vraiment : un consultant gagne de l'argent quand il vous facture. Nous, on gagne de l'argent quand votre boîte prend de la valeur. Ce n'est pas le même métier.

**CTA contextualisé**
> **Voir si votre boîte rentre dans le cadre**

---

### SECTION 3 · Comment ça se passe

**Titre**
> ## 6 mois, 1 500 € par mois, puis on décide tous les deux.

**Sous-titre**
> Aucune zone grise. Voilà exactement ce que vous achetez.

#### Le schéma demandé par Greg

C'est la section que Greg a explicitement demandée. Elle a déjà été construite en HTML autonome lors de la session 3, les specs sont au §6.

Frise horizontale, lecture en trois temps :

`CANDIDATURE` → **`ACCOMPAGNEMENT · 6 MOIS · 1 500 €/mois`** (bloc large, vert profond) → `DÉCISION D'INVESTISSEMENT` (bloc doré)

Sous la frise, une ligne :
> **L'investissement arrive à la fin, pas au début. C'est la seule façon d'être certains tous les deux.**

#### Timeline détaillée

**Étape 0 · Le premier échange**
> 30 minutes, gratuit, et surtout pas de dossier à préparer. Vous racontez votre boîte, on écoute, et on vous dit honnêtement si on peut aider. Si la réponse est non, on vous le dit en 30 minutes plutôt qu'en six mois.
> **Livrable :** une réponse claire sous 48h.

**Note :** l'étape 0 est volontairement séparée du décompte des 6 mois. Ça raccourcit visuellement le parcours payant.

**Étape 1 · Le diagnostic** · Semaines 1 et 2
> On passe la boîte au scanner : finance, vente, organisation, acquisition, delivery. On sort les trois leviers qui débloquent réellement la croissance, pas les quinze qu'on pourrait lister.
> **De votre côté :** vous ouvrez vos chiffres.
> **Livrable :** un état des lieux chiffré et un plan de croissance sur 6 mois.

**Étape 2 · Le matching** · Semaine 3
> On vous affecte les experts dont vous avez besoin, et seulement ceux-là. Une boîte saturée en production n'a pas besoin du même duo qu'une boîte qui ne sait pas vendre.
> **Livrable :** vos référents nommés, le rythme des points, les objectifs chiffrés.

**Étape 3 · L'exécution** · Mois 2 à 5
> Points réguliers avec vos experts, plans d'action datés, formations ciblées, accès au catalogue de services Evø et à la communauté de la promotion.
> **De votre côté :** vous dirigez votre boîte. On ne prend pas votre place, on prend le travail que vous n'avez pas le temps de faire.
> **Livrable :** des chiffres qui bougent, mois après mois.

**Étape 4 · Le bilan** · Mois 6
> On compare la boîte du jour 1 et celle du jour 180. On met une proposition d'investissement sur la table, ou on vous explique précisément pourquoi on ne le fait pas.
> **De votre côté :** vous décidez aussi. Vous avez eu 6 mois pour nous juger.
> **Livrable :** une proposition d'entrée au capital, ou une sortie propre.

**Étape 5 · Après**
> Si on investit, l'accompagnement ne s'arrête pas, il change de nature. Nos intérêts sont alors définitivement liés aux vôtres.

**Phrase en gras sous la timeline**
> Pendant ces 6 mois, votre entreprise tourne normalement. Comptez une demi-journée par semaine, pas davantage.

**Ligne de clôture de section, elle porte le ton de la marque**
> On sait que « fonds d'investissement » évoque en général un open space à La Défense et un type qui vous demande votre EBITDA prévisionnel à trois ans. Nous, on va surtout vous demander pourquoi personne ne relance vos devis.

**CTA contextualisé**
> **Démarrer par l'étape 0**

---

### SECTION 4 · Qui va bosser sur votre boîte

**Note :** pas de témoignages tant qu'il n'y en a pas de réels. La preuve sociale est remplacée par de la **preuve d'équipe**. Prévoir l'emplacement d'une grille de témoignages à insérer à la fin de la promotion 1, structurellement prête mais masquée.

**Titre**
> ## Neuf métiers. Vous sollicitez celui dont vous avez besoin.

**Sous-titre**
> Vous n'aurez pas un interlocuteur unique qui fait semblant de tout savoir. Vous aurez celui qui sait, sur le sujet du moment.

**Carte Greg** (mise en avant, format différent des autres)
> **Greg · Fondateur**
> Vision, arbitrage, stratégie, croissance externe. C'est lui qui vous dit non quand c'est une mauvaise idée. Probablement le service le plus rentable de la liste.

**Les huit domaines** : voir le tableau du §3, une carte par domaine, visages et prénoms ajoutés au fur et à mesure.

**Bloc final**
> Un seul de ces profils en CDI vous coûterait plus cher sur un mois que les six mois d'accompagnement Evø.

**CTA contextualisé**
> **Rencontrer l'équipe**

---

### SECTION 5 · Avant / Après

**Titre**
> ## Vous êtes un bon dirigeant. C'est précisément pour ça que tout repose sur vous.

| **Aujourd'hui** | **Dans 6 mois** |
|---|---|
| Vous êtes le goulot d'étranglement | La boîte tourne quand vous n'êtes pas là |
| Vous arbitrez à l'instinct | Vous arbitrez sur des chiffres que vous maîtrisez |
| La croissance dépend de votre énergie | La croissance dépend d'un système |
| Vous refusez des opportunités faute de structure | Vous encaissez les opportunités |
| Vous vendez votre temps | Vous construisez un actif qui a une valeur |
| Personne ne comprend vos décisions autour de vous | Neuf experts et une promotion de dirigeants à vos côtés |

**Bloc de clôture, autodérision assumée**
> Oui, on vient de vous faire un tableau avant/après. C'est un peu cliché, mais dans six mois vous le relirez et vous cocherez les lignes une par une.

**CTA contextualisé**
> **Passer de l'un à l'autre**

---

### SECTION 6 · Ce que vous pensez / la réalité

**Titre**
> ## Les cinq objections qu'on entend à chaque premier échange.

| **Ce que vous pensez** | **La réalité** |
|---|---|
| « Je paie pour être audité avant que vous investissiez ? » | Vous payez pour six mois de travail sur votre boîte, qui vous appartiennent qu'on investisse ou non. Le diagnostic, le plan, les process, les compétences transférées : tout reste chez vous. L'investissement est une possibilité à la fin, pas une contrepartie. |
| « C'est du coaching déguisé » | Un coach vous facture et s'en va. Nous, on envisage de mettre notre propre argent dans votre boîte au mois 6. Si on se trompe sur vous, on perd avec vous. Aucun coach ne prend ce risque. |
| « 1 500 € par mois, c'est cher » | C'est le tarif d'un consultant pour deux journées. Vous avez neuf domaines d'expertise, un plan déroulé, des formations et un catalogue de services, pendant six mois. Faites le calcul dans l'autre sens : combien vous coûte une année de plateau ? |
| « Vous allez prendre le contrôle de ma boîte » | Vous restez dirigeant et majoritaire. La participation se discute au cas par cas, au mois 6, et seulement si vous le souhaitez. On investit dans des boîtes dirigées par des gens qui savent les diriger, sinon on n'investirait pas. |
| « Ma boîte est trop petite pour un fonds » | On ne cherche pas des licornes. On travaille avec des TPE et des PME solides qui plafonnent pour des raisons d'organisation, pas de marché. C'est exactement notre terrain. |

**CTA contextualisé**
> **Poser vos propres objections en direct**

---

### SECTION 7 · Récapitulatif + CTA final

**Phrase de frustration**
> Vous créez toute la valeur de votre entreprise. Et vous êtes le seul à ne jamais avoir le temps de la faire grandir.

**Headline**
> # Six mois pour structurer. Puis un investisseur à la table, si tout le monde est d'accord.

**Rappel des garanties**
> 1 500 € par mois, sans engagement au-delà des six mois, ni de votre côté ni du nôtre.

**Bénéfices en ✓**
- ✓ **Un diagnostic complet dès les deux premières semaines** (vous saurez enfin où ça coince, chiffres à l'appui)
- ✓ **Neuf domaines d'expertise accessibles** (sans les neuf salaires)
- ✓ **Un plan déroulé, pas rendu** (fin des recommandations qui dorment dans un dossier)
- ✓ **Une promotion de dirigeants qui vivent la même chose** (fin de la solitude du patron)
- ✓ **Une entreprise structurée dans tous les cas** (ce qu'on construit reste chez vous, investissement ou pas)

**CTA final**
> **Rejoindre la promotion `[nom]`**
> 100 places. Candidatures ouvertes jusqu'au `[date]`. Réponse sous 48h.

---

### SECTION 8 · FAQ

Accordéon. Les 4 premières questions sont les objections bloquantes, pas les questions les plus fréquentes. Chaque réponse commence par une phrase en gras qui donne la réponse courte, puis développe.

#### Tier 1 · Les objections bloquantes

**1. Combien ça coûte ?**
> **1 500 € par mois pendant six mois, soit 9 000 € au total.** Ce tarif couvre le diagnostic, le plan de croissance, l'accès aux experts, les formations, le catalogue de services et le suivi. Aucun frais de dossier, aucune commission cachée, aucun surcoût à l'entrée. `[À CONFIRMER : HT ou TTC, et finançable OPCO ou non sur la partie formation. Si oui, argument massif à remonter dans le hero.]`

**2. Qu'est-ce qui se passe si vous n'investissez pas au bout des six mois ?**
> **Vous gardez tout.** Le diagnostic, le plan, la structure, les process, les compétences transférées à votre équipe. On vous explique précisément pourquoi on ne va pas plus loin, et vous repartez avec une boîte en meilleur état qu'à l'arrivée. Ce n'est pas un lot de consolation, c'est la moitié du travail.

**3. Quelle part du capital prenez-vous si vous investissez ?**
> **Ça se décide au cas par cas, au mois 6.** La participation dépend de la valorisation, du montant investi et de vos besoins réels. On ne fixe pas de règle à l'avance parce qu'aucune entreprise ne ressemble à une autre. Ce qui est certain : vous restez dirigeant et majoritaire, et rien ne se fait sans votre accord.

**4. Combien de temps ça me prend par semaine ?**
> **Une demi-journée en moyenne.** Un point avec vos référents, plus du temps d'exécution qui remplace du travail que vous faisiez déjà mal ou pas du tout. Votre activité continue normalement, c'est même indispensable : on travaille sur des chiffres réels.

#### Tier 2 · Les questions logistiques

**5. Quelles entreprises acceptez-vous ?**
> TPE et PME, tous secteurs. On regarde surtout une chose au premier échange : est-ce que le blocage est organisationnel, donc réparable en six mois, ou structurel. Si c'est le second cas, on vous le dit et on ne vous prend pas votre argent.

**6. Combien de places et quand ?**
> **Deux promotions par an, 100 places chacune.** Une fois la promotion complète, les candidatures ferment jusqu'au cycle suivant. Ce fonctionnement par cohorte nous permet de mutualiser les formations et de créer un réseau entre dirigeants qui vivent les mêmes problématiques au même moment.

**7. À distance ou sur site ?**
> Les deux. La majorité des points se font en visio pour ne pas immobiliser votre agenda, et on se déplace quand le sujet l'exige, typiquement sur l'organisation terrain ou le point de vente.

**8. Quels documents dois-je fournir ?**
> Pour le premier échange, rien du tout. Pour le diagnostic, vos trois derniers bilans, vos chiffres de vente et un accès en lecture à vos outils. Tout est couvert par un accord de confidentialité signé avant le premier document transmis.

**9. C'est quoi ce Ø dans votre nom ?**
> Un clin d'œil. Ø slide inutile, Ø promesse en l'air, Ø jargon. Et accessoirement ça se prononce « Evo », donc n'ayez pas peur de le dire à voix haute.

---

### SECTION 9 · Footer

Minimal, comme le header. Logo `Evø` + baseline **Faire évoluer.** Contact, mentions légales, politique de confidentialité. Rien d'autre.

**Conformité, important :** mentionner le statut juridique d'Evø et **éviter toute formulation évoquant une promesse de rendement**. La page s'adresse à des entreprises cibles, pas à des souscripteurs, ça doit être explicite dans les mentions.

---

### Récapitulatif du pattern global

```
Hero (promesse)
  → Problème amplifié (pourquoi c'est urgent)
  → Comparaison (pourquoi nous)
  → Processus + schéma (comment ça marche)
  → Équipe (qui fait le travail)
  → Avant / Après (votre futur)
  → Objections détruites (vos doutes sont infondés)
  → Récap transformation (dernière motivation)
  → FAQ (détails pour les profils analytiques)
```

Chaque section est suivie d'un **CTA contextualisé** (la formulation change pour matcher l'état émotionnel du lecteur à ce point du scroll) **plus la ligne de réassurance, qui reste identique partout**.

---

## 6. Le schéma de parcours

Déjà construit et publié en HTML autonome lors de la session 3. À reprendre ou reconstruire à l'identique.

**Ce qu'il raconte :** l'inversion de l'ordre habituel. On accompagne d'abord, on investit ensuite.

**Version longue (5 étapes)**
Bandeau de phases au-dessus de la timeline :
1. Phase 1, en vert, sur les trois quarts de la largeur : candidature, diagnostic, accompagnement 6 mois
2. La charnière, en doré pointillé : le moment de décision
3. Phase 2, en doré plein : l'entrée au capital

**Version condensée (3 étapes), retenue comme meilleure**
Fusion de candidature + diagnostic dans un seul bloc, et de décision + investissement dans le dernier. Suppression du bandeau de phases (doublon avec la timeline), suppression du sous-titre d'intro et des blocs « durée / livrable » sous chaque carte. L'info de temps remonte en micro-label au-dessus du titre, ce qui donne une lecture en trois coups d'œil : **quand, quoi, pourquoi**.

**Mécanique de marque à conserver :**
- La dernière étape casse le rythme : carte en **vert profond**, pastille **dorée** avec le `ø` du logo à la place du numéro d'étape
- Titres de cartes volontairement parlés (« On ouvre le capot », « On se regarde dans les yeux »). `[À CONFIRMER : Greg valide ce niveau de ton ou préfère plus sobre]`
- Dernière carte : « **On entre au capital** · Ensuite · On se connaît vraiment, on décide ensemble. Evø investit et l'accompagnement continue, sans facture cette fois. »
- Pied de section, une seule ligne : « Réservé aux **TPE et PME**. **100 places par cycle**, deux cycles par an. » + bouton **Candidater `ø`**

**Décision d'affichage :** le tarif de 1 500 €/mois **n'est pas affiché sur le schéma**. À cet endroit du scroll le visiteur cherche à comprendre le mécanisme, pas à évaluer le prix.

**Note :** les durées des étapes sont des estimations posées pour rendre le parcours tangible. À corriger si la réalité diffère.

---

## 7. Références design

Sites analysés et retenus. Les quatre prioritaires sont en gras.

### Fonds avec un discours d'accompagnement fort

| Site | URL | Ce qu'on prend |
|---|---|---|
| **Serena** | serena.vc | La manière de présenter les experts comme un produit, pas un trombinoscope. Le plus proche du modèle Evø. |
| Emblem | emblem.vc | Le ton. Phrases assumées à la première personne du pluriel, très peu de texte, une idée par bloc. |
| Hexa | hexa.com | La timeline en étapes visuelles, et les chiffres en gros. |
| Founders Fund | foundersfund.com | La page manifeste, typographie énorme, presque pas d'images, si on veut une section « notre thèse ». |
| Point Nine | point9.com | Le curseur « décalé » sans tomber dans le cliché startup. |
| Kerala Ventures | kerala.vc | Le ton personnel à la première personne. Utile pour la section Greg. |
| Blast Club | blastclub.com | Le curseur maximum côté fun. À doser. |
| Founders Future | foundersfuture.com | La page équipe organisée par fonction, et le mot « plateforme » plutôt que « fonds ». |
| **Ring Capital** | ringcp.com | **Nommer l'accompagnement.** Un programme qui a un nom se vend dix fois mieux qu'un « accompagnement de 6 mois ». Cas d'école pour Evø. |
| Daphni | daphni.com | La preuve qu'on peut être joueur sur la forme en parlant de millions. Exactement la direction décrite par Greg. |
| Singular | singular.vc | La discipline typographique. Deux tailles, un seul accent de couleur. |
| Speedinvest | speedinvest.com | La section « ce que vous obtenez concrètement », en liste de services tangibles. |

### Modèles « on vous accompagne, puis on investit »

| Site | URL | Ce qu'on prend |
|---|---|---|
| **Founders Factory** | foundersfactory.com | La page qui présente les experts par spécialité. C'est littéralement notre tableau « qui fait quoi ». |
| **Sequoia Arc** | sequoiacap.com/arc | La mécanique de rareté sur une page dédiée au programme, avec calendrier, candidature et sélection annoncée comme rare. |
| First Round | firstround.com | L'idée de donner avant de vendre. Un diagnostic gratuit publié devient un aimant à leads. |
| Antler | antler.co | Le modèle programme puis investissement, en version très industrialisée. |
| Entrepreneur First | joinef.com | Idem, avec une mécanique de candidature très lisible. |

### Ambiance visuelle, hors finance

| Site | URL | Ce qu'on prend |
|---|---|---|
| Sézane | sezane.com/fr | **La référence absolue pour la palette crème et le traitement éditorial.** Photographie, respirations, sérénité. |
| Cherry Ventures | cherry.vc | Couleur unique très affirmée, photos d'équipe naturelles, ton chaleureux. |
| Maison Auge | maisonauge.com | Réf. fournie par l'équipe |
| Stanzza | stanzza.design | Réf. fournie par l'équipe |
| Big Mamma | bigmammagroup.com/fr | Réf. fournie par l'équipe, ton joueur et assumé |
| Alan | alan.com | Clarté pédagogique, illustration |
| Qonto | qonto.com | Rigueur financière sans austérité |

---

## 8. Ce qu'il reste à trancher

1. **Le nom et la date de la promotion** en cours (« Promotion Printemps 26 », date de clôture). C'est ce qui porte toute l'urgence de la page, sans ça les blocs d'urgence restent vides. **Bloquant.**
2. **1 500 € HT ou TTC**, et financement OPCO possible ou non sur la partie formation. Si OPCO possible, argument à remonter dans le hero. **Bloquant.**
3. **Outil de prise de rendez-vous** et destination des leads (CRM ou boîte mail). **Bloquant.**
4. **La fourchette de coût d'un cadre** assumée publiquement (60 à 80 k€ chargés est la réalité du marché, mais autant que ce soit validé).
5. **Le contenu exact du catalogue de services.** Plus c'est listé concrètement, plus les 1 500 € paraissent évidents.
6. **Nommer le programme d'accompagnement.** Recommandation issue de Ring Capital.
7. **Prénoms et photos des 8 experts**, à ajouter au fur et à mesure.
8. **Statut juridique exact d'Evø** pour les mentions légales.

---

## 9. Règles de rédaction pour toute production de texte sur ce projet

- **Jamais de tirets longs (—)** dans les textes rédigés. Virgules, deux-points ou phrases séparées.
- Français, vouvoiement du dirigeant, « on » plutôt que « nous » pour Evø.
- Zéro jargon financier, zéro anglicisme non nécessaire. C'est la promesse même de la marque.
- Phrases courtes. Une idée par bloc.
- Les chiffres s'écrivent en chiffres, pas en lettres, pour être repérés au scan.
