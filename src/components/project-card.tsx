import type { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const isLive = project.status === "En ligne";

  return (
    <div className={`panel-card flex flex-col gap-3 ${large ? "p-7" : "p-6"}`}>
      <h3 className={`m-0 ${large ? "text-lg" : "text-base"}`}>{project.title}</h3>

      <div className="flex flex-wrap gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase">
        <span
          className={`rounded-[var(--radius-sm)] px-2 py-1 ${isLive ? "chip-live" : "chip-pending"}`}
        >
          {project.status}
        </span>
        <span className="chip-demo rounded-[var(--radius-sm)] px-2 py-1">
          Démonstration
        </span>
      </div>

      <p className="m-0 flex-1 text-[13px] leading-relaxed text-(--color-foreground-muted)">
        {project.summary}
      </p>

      <div className="mt-1 flex gap-2">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 rounded-[var(--radius-md)] px-3.5 py-3 text-center text-xs font-semibold"
          >
            Voir la démo
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="btn-primary flex-1 rounded-[var(--radius-md)] px-3.5 py-3 text-xs font-semibold"
          >
            Démo à venir
          </button>
        )}
      </div>
    </div>
  );
}
