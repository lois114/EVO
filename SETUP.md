# SETUP.md · À faire avant toute chose

Ces deux installations sont un prérequis. Tant qu'elles ne sont pas faites, **on ne commence pas à écrire du code**. Elles se font une seule fois par machine, pas à chaque session.

---

## Étape 1 · Plugin Superpowers

Plugin officiel Claude. Il apporte les skills de méthode (cadrage avant implémentation, revue de code, exécution de plan par étapes).

**Depuis le terminal :**
```bash
claude plugin install superpowers@claude-plugins-official
```

**Depuis une session Claude Code déjà ouverte :**
```
/plugin install superpowers@claude-plugins-official
```

La commande change selon l'endroit où tu la tapes, le résultat est le même. Utilise la seconde si tu es déjà dans Claude Code.

---

## Étape 2 · UI Pro

Skill de design d'interface. Deux commandes, dans l'ordre.

```bash
npm install -g uipro-cli
```

```bash
uipro init --ai claude --global
```

Le `--global` installe le skill pour tous tes projets, pas seulement ce dépôt. À ne lancer qu'une fois.

**Prérequis :** Node.js installé. Vérifie avec `node -v`. Si la commande ne renvoie rien, installe Node avant.

---

## Étape 3 · Vérification

Ouvre une session Claude Code à la racine du dépôt et vérifie que les skills sont bien chargés avant de lancer quoi que ce soit. Si Superpowers ou UI Pro n'apparaît pas, relance l'installation correspondante, ne continue pas sans.

---

## Étape 4 · Alors seulement, on démarre

Ordre de lecture pour Claude Code :

1. `SETUP.md` (ce fichier) pour confirmer que l'environnement est prêt
2. `EVO-BRIEF.md` en entier, c'est le contenu, la marque et le copywriting
3. `CLAUDE.md` pour les règles d'exécution technique

Puis on attaque **section par section**, pas la page entière d'un coup. Premier chantier : structure de fichiers et tokens CSS, ensuite le header et le hero.
