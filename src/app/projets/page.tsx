import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projets — Victor Garbez",
};

export default function ProjetsPage() {
  return (
    <div>
      <section className="px-5 pt-16 pb-6 sm:px-12 sm:pt-24 sm:pb-10">
        <Link href="/" className="link-ghost mb-6 inline-block text-[13px]">
          ← Accueil
        </Link>
        <h1 className="m-0 mb-4 max-w-[16ch] text-[30px] sm:text-[44px]">
          Projets
        </h1>
        <p className="m-0 max-w-[56ch] text-[15px] text-(--color-foreground-muted)">
          Six démonstrations développées avec Claude Code, pensées pour un
          large public — TPE, artisans, commerces, professionnels.
          L&apos;état d&apos;avancement est indiqué sur chaque carte.
        </p>
      </section>

      <div className="h-0.5 bg-(--color-divider)" />

      <section className="px-5 py-16 sm:px-12 sm:py-24">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} large />
          ))}
        </div>
      </section>
    </div>
  );
}
