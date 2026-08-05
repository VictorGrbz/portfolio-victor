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
    <header
      className="flex flex-wrap items-center gap-4 px-5 py-4 sm:px-8"
      style={{ backgroundColor: "#EC3013" }}
    >
      <Link
        href="/"
        className="mr-auto font-display text-lg font-extrabold text-[#f8f4f4]"
      >
        Victor Garbez
      </Link>

      <div className="flex flex-wrap items-center gap-6">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm"
              style={{ color: active ? "#201e1d" : "#f8f4f4" }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link href="/priv/nous" className="text-sm text-[#f8f4f4] opacity-75 hover:opacity-100">
          Espace privé
        </Link>
        <ThemeToggle className="border-[#f8f4f4] text-[#f8f4f4]" />
      </div>
    </header>
  );
}
