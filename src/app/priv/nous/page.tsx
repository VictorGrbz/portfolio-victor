import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace privé — Victor & Jess",
  robots: { index: false, follow: false },
};

export default function PrivNousPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight">
        Espace privé — Victor &amp; Jess
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Accès réservé à Victor et Jess. Contenu à venir.
      </p>
    </div>
  );
}
