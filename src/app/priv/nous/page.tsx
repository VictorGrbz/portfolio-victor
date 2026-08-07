import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace privé — Victor & Jess",
  robots: { index: false, follow: false },
};

export default function PrivNousPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-12 sm:py-24">
      <h1 className="m-0 text-[30px] sm:text-[40px]">Espace privé — Victor &amp; Jess</h1>
      <p className="mt-3 max-w-2xl text-sm text-(--color-foreground-muted)">
        Accès réservé à Victor et Jess. Contenu à venir.
      </p>
    </div>
  );
}
