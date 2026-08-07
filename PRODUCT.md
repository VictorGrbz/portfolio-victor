# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Clients potentiels pour des missions freelance / indépendantes en IA et Claude Code. Ils arrivent sur le site pour évaluer si Victor est crédible pour leur confier un projet, généralement via un lien direct (candidature, réseau) plutôt que via recherche organique.

## Product Purpose

Vitrine professionnelle qui démontre l'expertise de Victor en IA/Claude Code pour décrocher des missions freelance, dans un contexte de reconversion après 10 ans de carrière en IT. Le succès se mesure à la crédibilité perçue par un client potentiel, pas à l'esthétique pour elle-même.

## Positioning

Positionnement hybride assumé : 10 ans d'expérience IT terrain (rigueur, sens pratique, résolution de problèmes réels) combinés à une expertise Claude Code récemment acquise et démontrable. C'est cette combinaison — pas seulement la compétence IA seule — qu'un profil en reconversion pure ne peut pas revendiquer.

## Operating Context

- Site public (`/`, `/projets`) consulté par des prospects externes.
- Deux espaces privés (`/priv/nous`, `/priv/famille`) réservés respectivement à Victor + Jess, et à la famille/aux amis. L'accès est géré entièrement en dehors de l'application, via Cloudflare Zero Trust Access (aucune logique d'auth dans le code Next.js).
- Bascule thème clair/sombre, persistée côté client.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, Tailwind CSS v4 (config CSS-first, pas de `tailwind.config`). DNS proxied via Cloudflare.
- Routes fixes à préserver telles quelles : `/`, `/projets`, `/priv/nous`, `/priv/famille`. Aucune restructuration de contenu ou d'arborescence de liens.
- Pas de pages de détail par projet : chaque carte projet renvoie vers des liens externes (`demoUrl`/`codeUrl`), pas de route `/projets/[slug]`.
- Gouvernance de ce poste de travail : toute modification de code applicatif dans ce dossier livrable nécessite normalement une validation explicite au cas par cas (règle par défaut du CLAUDE.md racine) ; explicitement autorisée par l'utilisateur pour la refonte visuelle en cours.

## Brand Commitments

Nom affiché : "Victor Garbez". Mention de localisation au footer : "Thumeries, France". Pas de logo ou d'identité de marque distincte au-delà du nom.

## Evidence on Hand

- Les 6 projets mis en avant (`src/lib/site-data.ts` : site-vitrine-artisan, boutique-en-ligne, reservation-en-ligne, dashboard-saas, gestion-taches, chatbot-ia) sont **fictifs, à visée de démonstration** — pas de vrais clients. Décision confirmée : le site doit le signaler clairement au visiteur (mention explicite "projet de démonstration"/fictif), plutôt que les laisser passer pour de vrais clients.
- Aucun témoignage, étude de cas ou preuve tierce réelle n'existe actuellement — à ne pas fabriquer.
- La section expérience et les compétences (`site-data.ts`) reflètent le vrai parcours professionnel de Victor et ne sont pas fictives.

## Product Principles

1. Honnêteté d'abord : ne jamais laisser les projets de démonstration passer pour de vrais clients.
2. Le positionnement hybride (rigueur terrain + expertise IA) doit transparaître dans le ton autant que dans le texte.
3. Le site doit rester crédible comme outil de conversion pour des missions freelance, pas comme portfolio créatif ou artistique.
4. Aucune restructuration d'URL ou de contenu sans décision explicite de l'utilisateur.

## Accessibility & Inclusion

Aucune exigence spécifique au-delà des standards usuels (contrastes suffisants, focus clavier visible partout) — déjà repris comme non négociable dans DESIGN.md.
