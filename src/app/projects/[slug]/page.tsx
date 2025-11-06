import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p ? `${p.title} • Anton QA` : "Project • Anton QA", description: p?.summary ?? "Project details" };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-3 text-3xl font-bold">{p.title}</h1>
        <p className="mb-6 text-slate-300">{p.summary}</p>
        <div className="mb-6 flex flex-wrap gap-2 text-xs text-slate-400">
          {p.stack.map((t) => (<span key={t} className="rounded bg-slate-800 px-2 py-1">{t}</span>))}
        </div>
        <div className="flex gap-3">
          <Link href="/projects" className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800">← Назад към Projects</Link>
          {p.repo && (<a href={p.repo} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400">Repository</a>)}
        </div>
      </section>
    </main>
  );
}
