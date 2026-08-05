import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
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
      className={`${archivo.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body className="flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-(--color-divider) px-6 py-8 text-center text-xs opacity-60">
          Victor Garbez — Thumeries, France
        </footer>
      </body>
    </html>
  );
}
