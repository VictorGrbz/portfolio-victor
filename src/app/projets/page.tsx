import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets — Victor Garbez",
};

const projets = [
  { nom: "Projet 1", description: "Nom et contenu à venir." },
  { nom: "Projet 2", description: "Nom et contenu à venir." },
];

export default function ProjetsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">Projets</h1>
      <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Cette section rassemblera mes futurs projets vitrines. Pour
        l&apos;instant, elle est en construction.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projets.map((projet) => (
          <div
            key={projet.nom}
            className="rounded-lg border border-dashed border-black/15 p-6 dark:border-white/15"
          >
            <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
              En construction
            </span>
            <h2 className="mt-3 font-medium">{projet.nom}</h2>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              {projet.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
