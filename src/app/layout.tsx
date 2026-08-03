import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Garbez",
  description: "Chef de projet outils digitaux, en reconversion vers l'automatisation et l'IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10 px-6 py-8 text-center text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-500">
          Victor Garbez — Thumeries, France
        </footer>
      </body>
    </html>
  );
}
