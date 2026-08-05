import type { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`glass-card flex flex-col gap-3 rounded-[20px] ${large ? "p-7" : "p-6"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className={`m-0 ${large ? "text-lg" : "text-base"}`}>{project.title}</h3>
        <span className="tag-neutral shrink-0 rounded-[10px] px-2.5 py-1 text-[10px]">
          {project.status}
        </span>
      </div>
      <p className="m-0 flex-1 text-[13px] leading-relaxed opacity-80">
        {project.summary}
      </p>
      <div className="mt-1 flex gap-2">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl px-3.5 py-2 text-center text-xs font-semibold text-[#f8f4f4]"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Voir la démo
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex-1 cursor-not-allowed rounded-xl border border-(--color-divider) px-3.5 py-2 text-xs opacity-45"
          >
            Voir la démo
          </button>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-xl border border-(--color-divider) px-3.5 py-2 text-center text-xs font-semibold hover:border-accent"
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
}
