import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { experience, skills, projects } from "@/lib/site-data";

const stats = [
  { value: "10 ans", label: "de gestion de projets techniques" },
  { value: "6", label: "projets de démonstration en cours" },
  { value: "4", label: "missions terrain, du support à la gestion de projet" },
  { value: "Claude Code", label: "automatisation & IA" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative flex flex-wrap items-start gap-12 overflow-hidden px-5 py-16 sm:px-12 sm:py-24">
        <div className="min-w-0 flex-1 basis-[480px]">
          <div className="mb-4 text-[11px] tracking-[0.12em] uppercase text-accent">
            Automatisation &amp; IA — appuyées sur 10 ans de terrain IT
          </div>
          <h1 className="m-0 mb-5 max-w-[14ch] text-[34px] sm:text-[56px] leading-[1.05]">
            Je conçois des systèmes d&apos;automatisation et d&apos;IA.
          </h1>
          <p className="m-0 mb-8 max-w-[46ch] text-[17px] opacity-85">
            Je m&apos;appuie sur Claude Code pour construire des outils
            d&apos;automatisation, après 10 ans de gestion de projets
            techniques, affichage dynamique et support IT en environnement
            exigeant.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projets"
              className="rounded-lg px-6 py-3 text-[15px] font-semibold text-[#f8f4f4]"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Voir les projets
            </Link>
            <a
              href="mailto:victor.garbez@gmail.com"
              className="rounded-lg border border-(--color-divider) px-6 py-3 text-[15px] font-semibold"
            >
              Me contacter
            </a>
          </div>
        </div>

        <div className="relative min-w-0 flex-1 basis-[320px] self-stretch">
          <div
            className="pointer-events-none absolute -top-10 -right-8 z-0 h-56 w-56 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-12 -left-5 z-0 h-44 w-44 rounded-full opacity-20 blur-3xl"
            style={{ backgroundColor: "var(--color-accent-2)" }}
          />
          <div className="relative z-10 grid grid-cols-2 gap-3.5">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-[20px] p-6">
                <div className="font-display text-[32px] font-extrabold">
                  {s.value}
                </div>
                <div className="mt-1 text-xs opacity-70">{s.label}</div>
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
            <p className="m-0 max-w-[52ch] text-sm opacity-75">
              Six démonstrations génériques en cours de développement, pour
              des TPE, artisans, commerces et professionnels — démo live et
              code à chaque étape.
            </p>
          </div>
          <Link href="/projets" className="text-sm font-semibold whitespace-nowrap">
            Voir tous les projets →
          </Link>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <div className="h-0.5 bg-(--color-divider)" />

      {/* EXPERIENCE */}
      <section className="px-5 py-16 sm:px-12 sm:py-24">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="m-0">Expérience</h2>
          <p className="m-0 max-w-[42ch] text-sm opacity-75">
            Dix ans en gestion de projets techniques, affichage dynamique et
            support IT — le socle terrain sur lequel s&apos;appuie
            l&apos;automatisation aujourd&apos;hui.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
          {experience.map((job) => (
            <div
              key={job.role + job.period}
              className="glass-card flex flex-col gap-2.5 rounded-[20px] p-6"
            >
              <div className="text-[11px] tracking-[0.06em] uppercase text-accent">
                {job.period}
              </div>
              <h3 className="m-0 text-lg">{job.role}</h3>
              <div className="text-[13px] opacity-75">
                {job.company}
                {job.location ? ` — ${job.location}` : ""}
              </div>
              {job.body && (
                <p className="m-0 text-[13px] leading-relaxed opacity-75">
                  {job.body}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="mb-3 text-[11px] tracking-[0.1em] uppercase opacity-60">
            Compétences
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="tag-outline rounded-full px-3.5 py-1.5 text-xs"
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
          <p className="m-0 max-w-[44ch] text-sm opacity-75">
            Recrutement ou prestation d&apos;automatisation — je réponds
            directement par email.
          </p>
        </div>
        <a
          href="mailto:victor.garbez@gmail.com"
          className="rounded-lg px-7 py-3.5 text-[15px] font-semibold text-[#f8f4f4]"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          victor.garbez@gmail.com
        </a>
      </section>
    </div>
  );
}
