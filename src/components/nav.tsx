"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="flex flex-wrap items-center gap-4 border-b border-(--color-divider) bg-background px-5 py-4 sm:px-8">
      <Link href="/" className="mr-auto font-display text-lg font-semibold">
        Victor Garbez
      </Link>

      <div className="flex flex-wrap items-center gap-6">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`text-sm ${
                active
                  ? "font-semibold text-accent underline decoration-2 underline-offset-[6px]"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          href="/priv/nous"
          className="text-sm text-(--color-foreground-muted) hover:text-foreground"
        >
          Espace privé
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
