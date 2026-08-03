import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/priv/nous", label: "Espace privé" },
];

export function Nav() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Victor Garbez
        </Link>
        <ul className="flex gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
