import ProjectCard from "@/components/ProjectCard";
import { projects } from "./data";

export const metadata = {
  title: "Projects • Anton QA",
  description: "Портфолио с QA/Automation проекти.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} slug={p.slug} title={p.title} summary={p.summary} stack={p.stack} repo={p.repo} />
          ))}
        </div>
      </section>
    </main>
  );
}
