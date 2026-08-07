---
target: "portfolio-victor (site complet : accueil, projets, espaces prives)"
total_score: 21
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-07T20-54-59Z
slug: victor-site-complet-accueil-projets-espaces-prives
---
Method: dual-agent (A: design-review · B: detector-evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Theme toggle has no visible/announced indication of current vs. new state (`theme-toggle.tsx`) |
| 2 | Match System / Real World | 3 | "Six démonstrations génériques" (page.tsx) risks reading as "unpolished" rather than "broadly applicable" |
| 3 | User Control and Freedom | 3 | 5/6 disabled demo buttons are dead ends with no alternate action |
| 4 | Consistency and Standards | 3 | `.chip-pending` and `.chip-demo` are styled identically — two different badges look like one |
| 5 | Error Prevention | 2 | Both CTAs are bare `mailto:` links with no fallback for no configured mail client |
| 6 | Recognition Rather Than Recall | 4 | Nav is 3 links + toggle; nothing to memorize anywhere |
| 7 | Flexibility and Efficiency | n/a | Persuade-mode surface, no power-user paths expected |
| 8 | Aesthetic and Minimalist Design | 3 | Hero stat grid mixes 3 real numbers with 1 categorical phrase ("Claude Code") in a mono/tabular-nums treatment built for figures |
| 9 | Error Recovery | n/a | No forms, no validation, no user-generated error states exist on this site |
| 10 | Help and Documentation | n/a | Persuade-mode surface, self-explanatory by design |
| **Total** | | **21/28** | **Good (75%)** |

## Design Specificity Verdict

**LLM assessment**: Partially authored, with one significant self-undermining gap. The visual system shows genuine restraint tied to a specific thesis — the accent color is grep-confirmed to appear in only two CSS rules (`.btn-primary`, nav active link), the glass effect exists in exactly one place (hero stats), and the experience section was deliberately restructured into a journal-style list to avoid a generic kicker pattern. That's real authored discipline, not template defaults. But the content it carries argues against the site's own headline: of the 6 featured projects, only one ("Assistant IA pour support client") touches AI/Claude Code at all — the other five are generic small-business CRUD demos (vitrine, boutique, réservation, dashboard SaaS, gestion de tâches). A site whose entire premise is "10 ans IT terrain + expertise Claude Code/IA" spends 5/6 of its proof-of-work section on projects that don't demonstrate the AI half of that claim.

**Deterministic scan**: `detect.mjs --json` against `src/app` and `src/components` returned exit code 0 and an empty findings array — zero mechanical rule violations. This was verified three ways (directory scan, explicit file-list scan, `--no-config` to rule out a suppressing config) and corroborated by targeted grep: zero raw hex colors outside `globals.css` (the one hit is prose inside a documentation comment, not live style), zero inline `style={{`, zero leftover references to the retired `.tag-neutral`/`.tag-outline` classes, zero `opacity-*` utility classes used for text. This directly corroborates Assessment A's strength claim about accent discipline — it isn't just asserted in DESIGN.md, the code backs it up. No false positives to report since the detector found nothing.

**Visual overlays**: Not available. No browser automation or screenshot tool exists in this session, so no live-page overlay could be injected. Both assessments are code-based, not rendered-page verification — flagged explicitly by both agents.

## Overall Impression

The token/component discipline is real and unusually well-enforced for a single build session — the "one glass moment, two accent uses" claims in DESIGN.md hold up under both LLM reading and mechanical grep. But the redesign polished the frame around content that quietly works against the site's central claim, and left two copy/UX gaps at the two highest-stakes moments (the projects section, meant to prove the AI positioning, and the contact CTA, the actual conversion moment) under-supported. The biggest opportunity isn't more visual work — it's making the proof (projects) and the ask (contact) match the ambition of the redesign around them.

## What's Working

1. **Accent discipline is real, not just documented.** `--accent` is consumed by exactly `.btn-primary` and the nav active-link state — verified independently by code reading and by grep/detector evidence. The "budget of 2-3" from DESIGN.md holds up in the shipped code.
2. **Experience section as journal, not cards.** Role (H3) → mono meta line (period · société — lieu) → body, separated by hairline dividers, replacing a kicker-above-heading pattern the craft-floor bans outright. A genuinely bespoke solution, not a generic timeline component.
3. **Single glass moment enforced structurally**, not just claimed. `.glass-card` appears exactly once in the reviewed code (hero stats) — the signature restraint is verifiably true, confirmed by both agents independently.

## Priority Issues

**[P1] Copy promises a feature the UI no longer has.**
Why it matters: the home and `/projets` intro copy both promise "démo live et code à chaque étape" / "dépôt de code public," but `ProjectCard` renders no code/GitHub link at all (removed in a prior commit; `codeUrl` sits unused in `site-data.ts`). PRODUCT.md's own first principle is "honnêteté d'abord" — this is a factual overstatement on the exact section meant to build credibility.
Fix: strip the "code" language from both copy blocks, or reinstate a `codeUrl` link in `ProjectCard`.
Suggested command: `/impeccable clarify`

**[P1] The contact moment has no reassurance.**
Why it matters: per PRODUCT.md this is the single highest-stakes conversion point for a freelance-positioning site, and it's headline + one sentence + a bare mailto button — no response-time expectation, no alternate channel, no risk-lowering microcopy for a hesitant prospect.
Fix: add a short reassurance line ("Réponse sous 48h" or similar, if true) and/or a secondary contact channel as a `.btn-secondary`.
Suggested command: `/impeccable clarify`

**[P2] Homepage fully duplicates `/projets`.**
Why it matters: home renders all 6 `ProjectCard`s, identical in substance to the dedicated listing page (only the `large` prop differs) — "Voir tous les projets →" promises more and delivers the same content, adding scroll weight to the primary conversion page for no informational gain.
Fix: show a curated subset (e.g. 3) on home, reserve the full 6 for `/projets`.
Suggested command: `/impeccable distill`

**[P2] Disabled demo buttons are unexplained dead ends.**
Why it matters: 5 of 6 cards render a disabled "Voir la démo" button, identical label to the one working button, differentiated only by opacity. A fast-scanning recruiter hits five non-functional buttons before the one that works, with no explanation.
Fix: change the label for the pending state (e.g. "Démo à venir") instead of a faded copy of the working affordance.
Suggested command: `/impeccable clarify`

**[P3] Hero stat grid breaks its own instrument-panel logic.**
Why it matters: the grid is styled in mono `tabular-nums` — a treatment DESIGN.md reserves for actual figures — but mixes 3 real numbers with 1 categorical phrase ("Claude Code"). This is the site's one declared signature moment, and it contains an internal inconsistency exactly where precision was supposed to be demonstrated.
Fix: replace with an actual number, or move "Claude Code" into supporting copy instead of the stat grid.
Suggested command: `/impeccable typeset`

## Persona Red Flags

**Jordan (confused first-timer)**
- Sees "Claude Code" sitting in a stat tile between "10 ans" and "6" — a half-beat pause parsing why a product name is formatted like a metric.
- Clicks "Voir tous les projets →" expecting new content, lands on `/projets` and sees the exact same 6 cards just slightly larger.
- Two identically-styled outline chips ("À VENIR" / "DÉMONSTRATION") on 5/6 cards read as one redundant badge on a quick skim.

**Riley (stress-tester)**
- Clicks each of the 5 disabled "Voir la démo" buttons — nothing happens, no tooltip, no message; easy to conclude the site is broken rather than "not yet live."
- Tries the mailto CTA with no configured mail client — nothing opens, no fallback copy-to-clipboard affordance exists anywhere.

**Recruteur/client pressé (PRODUCT.md's primary audience — arrives via direct link to assess credibility fast)**
- Scrolls to "Projets" and reads "Six démonstrations génériques..." — word choice that can land as "unpolished."
- Of the 6 project titles skimmed in seconds, only one visibly connects to the AI/Claude Code claim in the H1 — the other five undercut the positioning at the exact moment meant to prove it.

## Minor Observations

- `codeUrl` field remains in `site-data.ts` (currently `null` everywhere) but is fully unused in `ProjectCard` — harmless dead data, worth pruning or reinstating for consistency.
- `/priv/famille` has no link anywhere in `Nav` (only `/priv/nous` is linked as "Espace privé") — presumably intentional per PRODUCT.md (shared via direct URL), but the nav label is ambiguous about which private space it targets.
- H1 copy ("Je conçois des systèmes d'automatisation et d'IA") is generic on its own and depends entirely on the following paragraph to carry the IT-terrain positioning — correct call to avoid the banned kicker pattern, but a slightly fragile hand-off.
- Fourth experience entry (AG2R) has an empty `body`, producing an asymmetric journal row (3 of 4 entries have a paragraph, one doesn't) — acceptable rather than fabricating content, but visually uneven.

## Questions to Consider

1. If 5 of 6 flagship projects have nothing to do with AI or Claude Code, is the projects section proving the site's central claim — or quietly proving the opposite?
2. What does a time-pressed recruiter gain by scrolling through the full project grid twice (home, then `/projets`) that a single well-chosen page wouldn't give them in half the time?
3. The redesign's whole premise is "honnêteté d'abord" (démonstration chips, no fabricated testimonials) — does leaving "code à chaque étape" in the copy after removing the code button quietly violate the same principle the redesign was built to protect?
