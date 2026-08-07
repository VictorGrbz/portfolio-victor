import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Victor Garbez",
  description:
    "Automatisation & IA — appuyées sur 10 ans de terrain IT (gestion de projets techniques, affichage dynamique, support).",
};

const noFlashThemeScript = `
try {
  var stored = localStorage.getItem('theme');
  var theme = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (theme === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        {/*
          THESIS: un calibrage précis prime sur l'éclat — instrument de mesure technique, pas vitrine SaaS ; un seul moment glass/mono/cuivre au lieu du glass partout.
          OWN-WORLD: papier chaud (#F2F0EB) / encre (#201D1A), cuivre patiné (#A8461C) en signal rare, Archivo + IBM Plex Mono pour les données, filets fins plutôt que cartes flottantes.
          STORY: un client potentiel comprend en un coup d'œil que Victor combine rigueur terrain (10 ans IT) et maîtrise Claude Code, distingue les projets de démonstration des vrais, et repart avec un contact direct.
          FIRST VIEWPORT: titre + intro à gauche, cluster de 4 stats mono en verre calibré à droite sur fond papier plat, aucun dégradé.
          FORM: direction fixée lors de la phase /impeccable teach (DESIGN.md), validée explicitement par l'utilisateur — pas de tirage concept-seed, brief épinglé prioritaire sur le tirage.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.
        */}
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-(--color-divider) px-6 py-8 text-center text-xs text-(--color-foreground-muted)">
          Victor Garbez — Thumeries, France
        </footer>
      </body>
    </html>
  );
}
