import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { experience, skills, projects } from "@/lib/site-data";

const stats = [
  { value: "10 ans", label: "de gestion de projets techniques", numeric: true },
  { value: "6", label: "projets de démonstration en cours", numeric: true },
  {
    value: "4",
    label: "missions terrain, du support à la gestion de projet",
    numeric: true,
  },
  { value: "Claude Code", label: "automatisation & IA", numeric: false },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex flex-wrap items-start gap-12 overflow-hidden px-5 py-16 sm:px-12 sm:py-24">
        <div className="min-w-0 flex-1 basis-[480px]">
          <h1 className="m-0 mb-5 max-w-[16ch] text-[34px] sm:text-[56px] leading-[1.05]">
            Je conçois des systèmes d&apos;automatisation et d&apos;IA.
          </h1>
          <p className="m-0 mb-8 max-w-[46ch] text-[17px] text-(--color-foreground-muted)">
            Je m&apos;appuie sur Claude Code pour construire des outils
            d&apos;automatisation, après 10 ans de gestion de projets
            techniques, affichage dynamique et support IT en environnement
            exigeant.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projets"
              className="btn-primary rounded-[var(--radius-md)] px-6 py-3 text-[15px] font-semibold"
            >
              Voir les projets
            </Link>
            <a
              href="mailto:victor.garbez@gmail.com"
              className="btn-secondary rounded-[var(--radius-md)] px-6 py-3 text-[15px] font-semibold"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="relative min-w-0 flex-1 basis-[320px] self-stretch">
          <div className="relative z-10 grid grid-cols-2 gap-3.5">
            {stats.map((s) => (
              <div key={s.label} className="glass-card p-6">
                <div
                  className={
                    s.numeric
                      ? "font-mono text-[28px] font-medium tabular-nums"
                      : "text-[19px] font-semibold leading-tight"
                  }
                >
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-(--color-foreground-muted)">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-(--color-divider)" />

      {/* PROJETS */}
      <section className="px-5 py-16 sm:px-12 sm:py-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <h2 className="m-0 mb-2">Projets</h2>
            <p className="m-0 max-w-[52ch] text-sm text-(--color-foreground-muted)">
              Trois aperçus parmi six démonstrations développées avec Claude
              Code, pour des TPE, artisans, commerces et professionnels.
            </p>
          </div>
          <Link
            href="/projets"
            className="link-ghost text-sm font-semibold whitespace-nowrap"
          >
            Voir tous les projets →
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <div className="h-0.5 bg-(--color-divider)" />

      {/* EXPERIENCE */}
      <section className="px-5 py-16 sm:px-12 sm:py-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="m-0">Expérience</h2>
          <p className="m-0 max-w-[42ch] text-sm text-(--color-foreground-muted)">
            Dix ans en gestion de projets techniques, affichage dynamique et
            support IT — le socle terrain sur lequel s&apos;appuie
            l&apos;automatisation aujourd&apos;hui.
          </p>
        </div>

        <div className="flex flex-col">
          {experience.map((job) => (
            <div
              key={job.role + job.period}
              className="flex flex-col gap-2 border-b border-(--color-divider) py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <h3 className="m-0 text-lg">{job.role}</h3>
              <div className="font-mono text-[12px] tracking-[0.02em] text-(--color-foreground-muted)">
                {job.period} · {job.company}
                {job.location ? ` — ${job.location}` : ""}
              </div>
              {job.body && (
                <p className="m-0 max-w-[68ch] text-[13px] leading-relaxed text-(--color-foreground-muted)">
                  {job.body}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-3 text-sm font-semibold">Compétences</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tag-pill rounded-full px-3.5 py-1.5 text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="h-0.5 bg-(--color-divider)" />

      {/* CONTACT */}
      <section className="flex flex-wrap items-center justify-between gap-6 px-5 py-16 sm:px-12 sm:py-24">
        <div>
          <h2 className="m-0 mb-3">Discutons de votre projet.</h2>
          <p className="m-0 max-w-[44ch] text-sm text-(--color-foreground-muted)">
            Recrutement ou prestation d&apos;automatisation — je réponds
            personnellement, par email ou par téléphone.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:victor.garbez@gmail.com"
            className="btn-primary rounded-[var(--radius-md)] px-7 py-3.5 text-[15px] font-semibold"
          >
            victor.garbez@gmail.com
          </a>
          <a
            href="tel:+33623422925"
            className="btn-secondary rounded-[var(--radius-md)] px-7 py-3.5 text-[15px] font-semibold"
          >
            06 23 42 29 25
          </a>
        </div>
      </section>
    </div>
  );
}
