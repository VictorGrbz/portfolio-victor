const experiences = [
  {
    poste: "Chargé de Projet Outils Digitaux / Responsable d'application",
    entreprise: "Randstad Digital (ex-AUSY) — en mission chez Auchan",
    lieu: "Villeneuve-d'Ascq",
    periode: "Sept. 2021 — Avr. 2026",
    description:
      "Affichage dynamique (Zebrix) : niveau 3 / référent applicatif, gestion de la communication écrans, relation client-fournisseur, gestion de projets, accompagnement des ouvertures de magasins, formation. Visioconférence (Google Meet) : niveau 3 / référent applicatif, gestion de projets, pilotage de prestataires événementiels.",
  },
  {
    poste: "Technical Project Manager (Référent Technique)",
    entreprise: "MANGANELLI Digital Signage",
    lieu: "Marcq-en-Barœul",
    periode: "Nov. 2016 — Sept. 2021",
    description:
      "Gestion technique d'un portefeuille clients : avant-vente (définition des besoins logiciels, mise en place de la structure), après-vente (suivi du parc matériel, comités de pilotage, support niveau 2). Anciennement technicien support niveau 1/2.",
  },
  {
    poste: "Technicien support IT et Digital Signage",
    entreprise: "Bforpro / Groupe Boulanger HTM",
    lieu: "",
    periode: "Janv. 2015 — Nov. 2016",
    description:
      "Support niveau 1/2, formation sur les solutions vendues (PC, serveurs, tablettes, affichage dynamique), interventions sur site, suivi du parc matériel.",
  },
  {
    poste: "Assistant Administrateur Réseau et Virtualisation",
    entreprise: "AG2R LA MONDIALE",
    lieu: "",
    periode: "Nov. 2012 — Juil. 2013",
    description: "",
  },
];

const competences = [
  "Gestion de projets techniques",
  "Affichage dynamique",
  "Support IT (N1 à N3)",
  "Relation client-fournisseur",
  "Pilotage de prestataires",
  "Formation et accompagnement",
  "Claude Code & automatisation",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <section>
        <h1 className="text-3xl font-semibold tracking-tight">
          Victor Garbez
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Chef de projet outils digitaux, en reconversion vers
          l&apos;automatisation et l&apos;IA
        </p>
        <p className="mt-6 max-w-2xl text-neutral-700 dark:text-neutral-300">
          Après 10 ans dans l&apos;IT (gestion de projets techniques,
          affichage dynamique, support), je me forme actuellement en
          profondeur à Claude Code. J&apos;aide à cadrer, automatiser et
          livrer des projets, avec une approche terrain acquise sur le poste
          plutôt qu&apos;en école.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Expérience
        </h2>
        <ol className="mt-6 space-y-8">
          {experiences.map((exp) => (
            <li
              key={exp.poste + exp.periode}
              className="border-l border-black/10 pl-6 dark:border-white/10"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">{exp.poste}</h3>
                <span className="text-sm text-neutral-500">{exp.periode}</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {exp.entreprise}
                {exp.lieu ? ` · ${exp.lieu}` : ""}
              </p>
              {exp.description && (
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  {exp.description}
                </p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Compétences
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {competences.map((c) => (
            <li
              key={c}
              className="rounded-full border border-black/10 px-3 py-1 text-sm text-neutral-700 dark:border-white/10 dark:text-neutral-300"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Formation
        </h2>
        <ul className="mt-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
          <li>BAC PRO Système Électronique et Numérique — 2012</li>
          <li>
            BTS Technicien Supérieur Administrateur Réseau — tenté en 2013
            (arrêt en cours d&apos;année)
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
          Contact
        </h2>
        <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
          <a
            href="mailto:victor.garbez@gmail.com"
            className="underline underline-offset-4"
          >
            victor.garbez@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
