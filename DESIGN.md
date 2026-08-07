# DESIGN.md — Direction artistique : "Instrument Panel"

Statut : **construit et livré** (session `/impeccable craft`, exécutée avec autorisation explicite de Victor sur la règle impérative du CLAUDE.md racine — voir note en fin de document).
Portée : `/`, `/projets`, `/priv/nous`, `/priv/famille`. Aucun changement de route, de contenu factuel ou de copy de fond — style/tokens/composants uniquement, à l'exception d'une mention "Démonstration" ajoutée sur les cartes projet (décision produit, voir PRODUCT.md § Evidence on Hand).

Ce document décrit le système **réellement livré**, pas l'intention de départ : il a été corrigé pendant la construction (voir § Écarts par rapport au brief initial) au fil de deux contrôles — le seuil de contraste WCAG et le plancher qualité `craft-floor` d'Impeccable.

## Point de vue

Le site précédent se lisait comme générique parce qu'un seul effet décoratif (`.glass-card`) était répété sur toutes les surfaces, que tous les titres partageaient le même poids (800), et qu'une seule couleur saturée (`#ec3013`) servait à la fois de CTA, de bandeau de nav et de bordure de tag — rien n'était mis en valeur car tout l'était.

Référentiel retenu : une table de calibration, un cahier de spécifications techniques — matières chaudes (papier, encre, cuivre patiné), pas un écran qui brille. L'expertise IA est portée par la typographie et la structure, pas par la couleur : pas de dégradé, pas de glass généralisé, pas de glow.

**Élément signature :** un seul "moment instrument" sur tout le site — le cluster de 4 stats du hero (accueil). C'est le seul endroit où glass, chiffres en monospace et couleur d'accent se combinent. Partout ailleurs : papier/encre plat avec filets fins (hairline rules).

## 1. Palette

Base "stone/ink" chaude + accent cuivre désaturé + slate secondaire réservé (défini, non encore utilisé). Aucun dégradé nulle part dans le code livré.

**Clair**
| Token | Hex | Rôle |
|---|---|---|
| `--bg` (Paper) | `#F2F0EB` | fond de page |
| `--surface` (Panel) | `#E8E4DB` | cartes, tags |
| `--text` (Ink) | `#201D1A` | texte principal |
| `--text-muted` | `#635C52` | texte secondaire |
| `--accent` (Copper) | `#A8461C` | signal unique : CTA primaire, indicateur nav actif |
| `--accent-2` (Slate) | `#33505F` | réservé — non utilisé dans ce build |
| `--accent-contrast` | `--neutral-100` (`#F7F5F1`) | texte du bouton primaire |
| `--divider` | `color-mix(in srgb, #201D1A 12%, transparent)` | filets |

**Sombre**
| Token | Hex |
|---|---|
| `--bg` | `#17181A` |
| `--surface` | `#201F21` |
| `--text` | `#F1EEE7` |
| `--text-muted` | `#A8A199` |
| `--accent` | `#CB7A45` |
| `--accent-2` | `#6E93A3` (réservé) |
| `--accent-contrast` | `#17181A` (encre, pas neutral-100 — voir correctif contraste) |
| `--divider` | `color-mix(in srgb, #F1EEE7 16%, transparent)` |

**Correctif de contraste (trouvé pendant la construction) :** un texte clair (`--neutral-100`) sur l'accent cuivre éclairci du mode sombre (`#CB7A45`) ne tient que 3.01:1 — sous le seuil WCAG AA de 4.5:1 pour du texte de bouton. Vérifié par calcul de luminance relative sur toutes les paires de tokens. Solution : un token `--accent-contrast` séparé, clair (`neutral-100`, 5.42:1) en mode clair, encre (`#17181A`, 5.42:1) en mode sombre. Toutes les autres paires token/fond passent 4.5:1 (la plus basse, `--text-muted` sur `--surface` en clair, tient 5.20:1).

**Discipline d'accent :** `--accent` apparaît à seulement 2 endroits (CTA primaire, indicateur de lien de nav actif) — sous le budget de 3 fixé au départ. Absent des tags de compétences et des puces de statut (contraste par inversion, pas par couleur).

## 2. Typographie

- **Archivo** : police de travail (corps, titres, boutons, nav) — poids 400/600/800.
- **IBM Plex Mono** (nouveau, poids 400/500) : rôle technique, réservé aux puces de statut/démonstration et aux chiffres du cluster hero. **Non utilisé comme kicker/eyebrow au-dessus d'un titre** — voir § Écarts.

**Échelle réellement utilisée** (valeurs Tailwind arbitraires, cohérentes avec la convention déjà en place dans le code) :

| Rôle | Taille | Poids |
|---|---|---|
| Puce statut/démo | 10-11px mono, uppercase, 0.08em tracking | 400/500 |
| Footer, mentions | 12px | 400 |
| Corps de carte, méta | 13px | 400 |
| Méta expérience (date · société) | 12px mono | 400 |
| Corps par défaut | 15-16px | 400 |
| Intro hero | 17px | 400 |
| Titre carte (large) | 18px | 600 |
| H3 | ~22px | 600 |
| H2 | 30-40px (mobile/desktop) | 700 |
| H1 | 34-56px (`clamp`) | 800 |
| Chiffres stat hero | 28px mono, tabular-nums | 500 |

**Hiérarchie de poids :** 800 réservé au H1 (une fois par page) · 700 pour H2 · 600 pour H3/titres de carte/nav actif · 500 pour l'emphase mono · 400 pour le corps et le mono standard.

Titres en `text-wrap: balance` pour éviter les retours à la ligne déséquilibrés.

## 3. Glassmorphism : un seul emplacement

`.glass-card` n'est plus le traitement général. Conservé **uniquement** sur le cluster de stats du hero : `blur(20px) saturate(130%)`, bordure `color-mix(in srgb, var(--text) 14%, transparent)` (corrige la bordure blanche de l'ancien code, incohérente en mode sombre), radius 12px.

Retiré de : cartes projet, section expérience, page `/projets`, pages `/priv/*`. Les deux orbes floues colorées derrière le hero ont été supprimées (pas juste adoucies).

## 4. Système de composants livré

**Radius :** 6px (`--radius-sm`, puces) · 8px (`--radius-md`, boutons) · 12px (`--radius-lg`, cartes) · pill (tags de compétences).

**`.panel-card`** — remplace `.glass-card` pour les cartes non-hero : fond `--surface`, bordure 1px `--divider`, radius 12px, pas de `backdrop-filter`. Survol : bordure teintée accent, `translateY(-2px)`, `--shadow-card`, transition 200ms.

**`.btn-primary`** — fond `--accent`, texte `--accent-contrast`, radius 8px, poids 600. Survol : assombrir 8% vers le noir. Actif : `scale(0.98)`. Désactivé : opacité 0.4. Focus-visible : anneau accent 2px (règle globale, pas propre au bouton).

**`.btn-secondary`** — contour `--divider`, fond transparent. Survol : bordure pleine encre + fond `--surface`.

**`.link-ghost`** — pas de bordure/fond, soulignement qui apparaît au survol (transition 150ms).

**Puces projet (`.chip-live` / `.chip-pending` / `.chip-demo`)** — mono, 10-11px, uppercase. "En ligne" = puce inversée pleine (`bg: --text`, `text: --bg`, contraste plutôt que couleur sémantique). "À venir" et "Démonstration" = contour `--divider`, texte muted. Chaque carte projet porte désormais deux puces : le statut ET "Démonstration" (décision produit confirmée avec Victor — voir PRODUCT.md).

**`.tag-pill`** — tags de compétences, contour `--divider`, texte muted, radius pill. Accent retiré (dilution corrigée).

**Barre de nav** — fond `--color-background`, bordure basse 1px `--divider`, plus de bandeau de couleur ni de hex bruts. Marque en poids 600 (le 800 reste exclusif au H1). Lien actif : accent + soulignement 2px offset 6px (pas de bandeau). Le `ThemeToggle` n'a plus de couleur forcée en prop, il retrouve son style par défaut piloté par les tokens.

**Surfaces navigateur thémées :** `::selection` (accent 30%), anneau `:focus-visible` (accent 2px, offset 2px) posé globalement, `text-underline-offset: 4px` sur tous les liens.

## 5. Interactivité livrée

Hover uniquement, volontairement : transition couleur/bordure/opacité (150-200ms, easing partagé `cubic-bezier(0.2,0.8,0.2,1)`), lift de carte 2px, bouton `scale(0.98)` au clic, soulignement de lien au survol, crossfade sun/moon du toggle de thème (déjà existant, conservé).

**Non livré dans cette session** (documenté comme amélioration future optionnelle, pas comme dette) : compteur d'incrémentation sur les chiffres du hero et fade-in des titres de section à l'entrée en viewport. Nécessitent un composant client + `IntersectionObserver` ; le brief privilégiant explicitement la sobriété ("touches d'interactivité subtiles plutôt que décoratives"), l'absence de ces micro-animations n'est pas un manque perçu — à ajouter seulement si Victor le souhaite.

**Toujours interdit :** parallax, scroll-jacking, particules/canvas, cursor-follow, dégradés animés, tilt 3D, glitch, vidéo autoplay, marquee, confetti.

## 6. Écarts par rapport au brief de la phase teach

Le plancher qualité `craft-floor.md` d'Impeccable interdit absolument le motif "kicker/eyebrow au-dessus d'un titre" ("no brief earns it back"). Deux endroits du site actuel utilisaient ce motif et ont été restructurés :

1. **Hero** : le label "Automatisation & IA — appuyées sur 10 ans de terrain IT" au-dessus du H1 a été supprimé ; le H1 et le paragraphe d'intro portaient déjà ce message, aucune perte d'information.
2. **Expérience** : la date (`job.period`) n'est plus une ligne mono isolée au-dessus du H3 (rôle). La section est passée d'une grille de cartes glass à un **journal vertical** (rows séparées par des filets `--divider`) : H3 (rôle) d'abord, puis une ligne méta combinée "période · société — lieu" en mono muted, puis le corps. Ce n'était pas prévu dans la direction initiale mais corrige une violation directe du plancher qualité tout en restant fidèle à l'esprit "instrument/journal technique".

## 7. Cohérence entre les 3 surfaces

- **Accueil** : hero (seul moment glass/mono/cuivre), 6 cartes projet (`ProjectCard` variante par défaut), expérience en journal plat, CTA contact.
- **Projets** (`/projets`) : mêmes `ProjectCard`, variante `large`, aucun glass.
- **Privé** (`/priv/nous`, `/priv/famille`) : basculées sur l'échelle H2 et `--color-foreground-muted` ; texte placeholder inchangé, contenu réel à ajouter plus tard par Victor.

## Fichiers modifiés

- `src/app/globals.css` — tokens, `.glass-card`, `.panel-card`, boutons, puces, surfaces navigateur
- `src/app/layout.tsx` — police IBM Plex Mono, contrat de direction (commentaire HTML), footer
- `src/components/nav.tsx`
- `src/components/project-card.tsx`
- `src/app/page.tsx`
- `src/app/projets/page.tsx`
- `src/app/priv/nous/page.tsx`, `src/app/priv/famille/page.tsx`
- `src/components/theme-toggle.tsx` — inchangé en interne

## Vérification effectuée et limites de cette session

- `npm run build` (Next.js 16, Turbopack) : compile et type-check sans erreur, 5 routes statiques générées (`/`, `/projets`, `/priv/nous`, `/priv/famille`, `/_not-found`).
- Contraste WCAG vérifié par calcul de luminance relative sur toutes les paires token de texte/fond (voir § 1) ; un défaut trouvé et corrigé.
- Le hook de détection de conception Impeccable a scanné chaque fichier modifié pendant la construction sans signaler de problème mécanique.
- **Aucun outil de capture d'écran ou de navigateur n'était disponible dans cette session.** La manche d'inspection visuelle (desktop + mobile) prévue par la méthodologie Impeccable, ainsi que la revue par le sous-agent `impeccable-finish-reviewer` avec captures d'écran, n'ont pas pu être exécutées. Ce document a été rédigé directement par la session de build (substitution de l'`impeccable-documenter`), à partir du code réellement livré plutôt que d'un rendu visuel vérifié.
- **Recommandation avant mise en ligne :** lancer `npm run dev` et vérifier visuellement les 4 routes en clair et en sombre, desktop et mobile — en particulier le wrap du hero sur petit écran, la grille de cartes projet, et le journal d'expérience.

## 8. Correctifs post-critique (`/impeccable critique`)

Une critique à deux agents (revue de design + détecteur mécanique, ce dernier sans trouvaille) a suivi la construction. Cinq problèmes prioritaires ont été corrigés dans la foulée, avec validation de Victor sur les points nécessitant des faits réels (pas d'invention) :

1. **Copy honnête sur "code"** : la mention "démo live et code à chaque étape" / "dépôt de code public" (accueil + `/projets`) a été retirée — le bouton code n'existe plus depuis un commit antérieur. Remplacée par une mention factuelle : "développées avec Claude Code".
2. **Réassurance au contact** : le CTA email est désormais accompagné d'un second bouton avec le numéro de téléphone de Victor (06 23 42 29 25, `tel:+33623422925`), au lieu d'un délai de réponse inventé.
3. **Accueil vs `/projets`** : l'accueil n'affiche plus que 3 projets (`projects.slice(0, 3)`) au lieu des 6, pour que "Voir tous les projets →" mène vers un contenu réellement plus complet.
4. **Boutons démo désactivés** : le libellé passe de "Voir la démo" (identique au bouton actif) à "Démo à venir" pour les 5 projets non encore en ligne.
5. **Cluster de stats du hero** : le 4e tuile ("Claude Code") n'est plus stylée en mono/`tabular-nums` comme les 3 vrais chiffres — elle utilise désormais un traitement Archivo semibold distinct, pour ne pas prétendre être une mesure alors que c'est une catégorie.

Point de positionnement clarifié avec Victor : les 5 projets "À venir" ne sont pas censés être tous des produits IA — ils seront développés avec Claude Code (méthode), ce qui justifie leur place sur un site qui met en avant l'expertise Claude Code. La copy des sections projets a été ajustée en ce sens.

Rapport complet : `.impeccable/critique/2026-08-07T20-54-59Z__victor-site-complet-accueil-projets-espaces-prives.md` (score 21/28, aucun P0).

## 9. Correctifs post-audit (`/impeccable audit` → `/impeccable polish`)

Un audit technique (accessibilité, performance, responsive, theming, intégrité — `detect.mjs` propre sur les deux passages) a suivi la critique. Score : 18/20. Un passage `/impeccable polish` a corrigé les 5 constats trouvés, plus un nettoyage de code :

1. **Hiérarchie de titres** : `/priv/nous` et `/priv/famille` avaient un `<h2>` comme titre de page, aucun `<h1>`. Rétabli en `<h1>` (style visuel inchangé, échelle H2 30/40px conservée via `className`).
2. **`aria-current`** : le lien de nav actif (`nav.tsx`) porte désormais `aria-current="page"`.
3. **Toggle de thème** : `aria-label` et `aria-pressed` reflètent maintenant l'état réel (clair/sombre) au lieu d'un libellé statique — géré via `useState`/`useEffect` pour rester safe côté hydratation SSR.
4. **Touch targets** : les CTA de carte projet passent de `py-2` à `py-3` (~32px → ~40px de hauteur), plus proches du repère 44px.
5. **Grilles incohérentes** : `/projets` alignée sur le même `minmax(280px,1fr)` que l'accueil (au lieu de `300px`).
6. **Nettoyage** : le champ `codeUrl`, devenu mort depuis le retrait du bouton code, a été retiré de `site-data.ts` (6 entrées).

`npm run build` et `detect.mjs` (0 trouvaille) revérifiés après coup.

## Gouvernance

Cette session a exécuté du code applicatif dans ce dossier livrable avec l'autorisation explicite de Victor, en dérogation ponctuelle à la règle impérative du CLAUDE.md racine ("jamais de code applicatif dans un dossier livrable"). Cette dérogation vaut pour cette session de refonte visuelle ; elle ne modifie pas la règle par défaut pour les futures sessions.
