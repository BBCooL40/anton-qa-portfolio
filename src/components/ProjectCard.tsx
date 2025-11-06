import Link from "next/link";

type Props = { slug: string; title: string; summary: string; stack: string[]; repo?: string; learned?: string; };

export default function ProjectCard({ slug, title, summary, stack, repo, learned }: Props) {
  return (
    <article className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 hover:bg-slate-900/70 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300">{summary}</p>
      {learned && (<p className="mt-3 text-sm text-slate-400"><span className="text-slate-300 font-medium">Какво научих:</span> {learned}</p>)}
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">{stack.map((t) => (<span key={t} className="rounded bg-slate-800 px-2 py-1">{t}</span>))}</div>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={`/projects/${slug}`} className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800">Детайли</Link>
        {repo ? (<a href={repo} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-black hover:bg-emerald-400">Repository</a>) : (<span className="cursor-not-allowed rounded-xl bg-slate-700/60 px-4 py-2 text-slate-300">Repository (N/A)</span>)}
      </div>
    </article>
  );
}
