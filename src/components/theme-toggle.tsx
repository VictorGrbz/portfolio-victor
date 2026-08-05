"use client";

export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Basculer le thème"
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-(--color-divider) transition-colors hover:border-accent ${className}`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
        <path d="M22.5 12h2M19 5.5l1.4-1.4M19 18.5l1.4 1.4" />
      </svg>
    </button>
  );
}
