import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace famille & amis — Victor Garbez",
  robots: { index: false, follow: false },
};

export default function PrivFamillePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-12 sm:py-24">
      <h1 className="m-0 text-[30px] sm:text-[40px]">Espace famille &amp; amis</h1>
      <p className="mt-3 max-w-2xl text-sm text-(--color-foreground-muted)">
        Accès réservé à l&apos;entourage proche. Contenu à venir.
      </p>
    </div>
  );
}
