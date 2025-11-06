"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Next.js App Router page (src/app/page.tsx)
 * TailwindCSS required. BG/EN, Lux style, extended sections, fixed syntax.
 */

export default function QAHomeLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"bg" | "en">("bg");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setVideoReady(true);
    v.addEventListener("canplay", onCanPlay);
    v.play().catch(() => {});
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <div className="min-h-screen w-full text-white bg-[#0b132b]">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-30">
          <AnimatedGradient />
        </div>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-60" : "opacity-0"
          }`}
          muted
          playsInline
          preload="metadata"
          loop
          src="/hero/qa-motion.mp4"
          poster="/hero/qa-motion-poster.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/70 via-[#0b132b]/70 to-[#0b132b]/90" />
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side,#f5b30133,#0000)" }} />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side,#f5b30133,#0000)" }} />
      </div>

      <Header onMenu={() => setMenuOpen(true)} lang={lang} onLang={(l) => setLang(l)} />

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 pt-24 pb-16 md:pt-32">
        <HeroSection lang={lang} />
        <Highlights lang={lang} />
        <ProjectTeasers lang={lang} />
        {/* New sections */}
        <RunningSection lang={lang} />
        <BulldogSection lang={lang} />
        <ThoughtsSection lang={lang} />
      </main>

      <Footer lang={lang} />

      <SideOverlay open={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />
    </div>
  );
}

/* --------------------------------- Header -------------------------------- */
function Header({ onMenu, lang, onLang }: { onMenu: () => void; lang: "bg" | "en"; onLang: (l: "bg" | "en") => void }) {
  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-[#0b132b]/50">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-wide">Anton Tzonev</div>
            <div className="text-xs text-white/70">QA Automation • Portfolio</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LangSwitch value={lang} onChange={onLang} />

          <a href="#projects" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">
            {lang === "bg" ? "Проекти" : "Projects"}
          </a>
          <a href="#cv" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">
            {lang === "bg" ? "CV" : "CV"}
          </a>
          <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">
            {lang === "bg" ? "Контакт" : "Contact"}
          </a>
          {/* new */}
          <a href="#running" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">
            {lang === "bg" ? "Бягане" : "Running"}
          </a>
          <a href="#bulldog" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">
            {lang === "bg" ? "Булдог" : "Bulldog"}
          </a>
          <a href="#thoughts" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:inline-block">
            {lang === "bg" ? "Блог" : "Blog"}
          </a>

          <button onClick={onMenu} className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 md:hidden">
            <span className="mr-2 h-0.5 w-4 bg-white" />
            <span className="h-0.5 w-4 bg-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function LangSwitch({ value, onChange }: { value: "bg" | "en"; onChange: (v: "bg" | "en") => void }) {
  return (
    <div className="inline-flex rounded-full bg-white/10 p-1 text-xs ring-1 ring-white/15">
      <button
        className={`rounded-full px-3 py-1 transition ${value === "bg" ? "bg-[#f5b301] text-black" : "text-white/80 hover:text-white"}`}
        onClick={() => onChange("bg")}
      >
        BG
      </button>
      <button
        className={`rounded-full px-3 py-1 transition ${value === "en" ? "bg-[#f5b301] text-black" : "text-white/80 hover:text-white"}`}
        onClick={() => onChange("en")}
      >
        EN
      </button>
    </div>
  );
}

/* ----------------------------------- Hero --------------------------------- */
function HeroSection({ lang }: { lang: "bg" | "en" }) {
  const t = translations[lang];
  return (
    <section id="home" className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          {t.heroTitleLine1}
          <span className="text-[#f5b301]"> {t.heroTitleHighlight}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-white/80">
          {t.heroSubtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-[#f5b301] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.15)] hover:brightness-95"
          >
            {t.ctaProjects}
          </a>
          <a
            href="#cv"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-white hover:bg-white/10"
          >
            {t.ctaCV}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-white hover:bg-white/10"
          >
            {t.ctaContact}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------- Highlights ------------------------------- */
function Highlights({ lang }: { lang: "bg" | "en" }) {
  const t = translations[lang];
  const items = t.highlights;
  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((h: any, i: number) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
          >
            <div className="mb-2 text-sm font-semibold text-[#f5b301]">{h.kicker}</div>
            <h3 className="text-xl font-semibold">{h.title}</h3>
            <p className="mt-2 text-sm text-white/80">{h.body}</p>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-40" style={{ background: "radial-gradient(closest-side,#f5b30155,#0000)" }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Project teasers --------------------------- */
function ProjectTeasers({ lang }: { lang: "bg" | "en" }) {
  const t = translations[lang];
  const cards = t.projects;
  return (
    <section id="projects" className="mx-auto max-w-6xl">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="text-2xl font-semibold">
          {lang === "bg" ? "Избрани проекти" : "Selected Projects"}
        </h2>
        <a href="#" className="text-sm text-white/70 hover:text-white/90">
          {lang === "bg" ? "Виж всички скоро" : "See all soon"}
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c: any, i: number) => (
          <motion.a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-[#f5b301]">{c.stack}</div>
                <h3 className="mt-1 text-xl font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/80">{c.desc}</p>
              </div>
              <ArrowUpRightIcon className="mt-1 h-5 w-5 flex-none opacity-60" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
              {c.tags.map((t: string) => (
                <span key={t} className="rounded-full border border-white/15 px-2 py-1">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* CV + Contact anchors */}
      <div id="cv" className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-2xl font-semibold">CV</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/80">
          {lang === "bg"
            ? "PDF версията е в процес — засега виж LinkedIn или изтегли кратко резюме."
            : "PDF version in progress — meanwhile see LinkedIn or download a short resume."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/Anton-CV-BG.pdf" download className="rounded-full bg-[#f5b301] px-5 py-2 text-sm font-semibold text-black">{lang === "bg" ? "Свали резюме" : "Download Resume"}</a>
          <a href="https://www.linkedin.com/" target="_blank" className="rounded-full border border-white/15 px-5 py-2 text-sm hover:bg-white/10">LinkedIn</a>
          <a href="https://github.com/BBCooL40" target="_blank" className="rounded-full border border-white/15 px-5 py-2 text-sm hover:bg-white/10">GitHub</a>
        </div>
      </div>

      <div id="contact" className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-2xl font-semibold">{lang === "bg" ? "Контакт" : "Contact"}</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/80">
          {lang === "bg"
            ? "Пиши ми за проекти, идеи и фийчъри. Ще отговоря бързо."
            : "Reach out for projects, ideas, and features. I respond fast."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a href="mailto:anton.tzonev@yahoo.com" className="rounded-full border border-white/15 px-5 py-2 hover:bg-white/10">anton.tzonev@yahoo.com</a>
          <a href="https://t.me/" target="_blank" className="rounded-full border border-white/15 px-5 py-2 hover:bg-white/10">Telegram</a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Running Section --------------------------- */
function RunningSection({ lang }: { lang: "bg" | "en" }) {
  const title = lang === 'bg' ? 'Бягане & Издръжливост' : 'Running & Endurance';
  const blurb = lang === 'bg'
    ? 'Издръжливостта в маратоните и автоматизацията се градят еднакво — с ритъм, търпение и постоянство.'
    : 'Marathon endurance and automation share the same DNA — rhythm, patience, and consistency.';
  const cards = lang === 'bg'
    ? [
        { kicker: 'Цел', title: 'Varna Marathon 2025', body: 'Дълги бягания, steady pace и умен прогрес.' },
        { kicker: 'VO₂max', title: '52 (в процес на растеж)', body: 'Данни от Garmin — следя тренд, не единични стойности.' },
        { kicker: 'Gear', title: 'Saucony Endorphin Pro 4', body: 'Темпо/състезателни; ротация с ежедневни cushioned модели.' },
      ]
    : [
        { kicker: 'Goal', title: 'Varna Marathon 2025', body: 'Long runs, steady pace, smart progression.' },
        { kicker: 'VO₂max', title: '52 (improving)', body: 'Garmin trends over single points.' },
        { kicker: 'Gear', title: 'Saucony Endorphin Pro 4', body: 'Tempo/race; rotated with daily cushioned trainers.' },
      ];
  return (
    <section id="running" className="mx-auto max-w-6xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/80">{blurb}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35, delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="text-sm font-semibold text-[#f5b301]">{c.kicker}</div>
            <div className="mt-1 text-lg font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-white/80">{c.body}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Bulldog Section --------------------------- */
function BulldogSection({ lang }: { lang: "bg" | "en" }) {
  const title = lang === 'bg' ? 'Bulldog Energy' : 'Bulldog Energy';
  const blurb = lang === 'bg'
    ? 'Запознай се с малкия английски булдог — неофициалният QA Lead вкъщи: кратък, гласовит и захапва флеки тестове.'
    : 'Meet the English bulldog — the unofficial QA Lead at home: short, loud, and bites flaky tests.';
  const card1Title = lang === 'bg' ? 'Характер' : 'Character';
  const card1Body = lang === 'bg'
    ? 'Обича дрямките по време на CI pipeline-и и мрази flaky тестове.'
    : 'Loves naps during CI pipelines and hates flaky tests.';
  const note = lang === 'bg' ? '*Снимки и галерия — скоро.' : '*Photos & gallery — coming soon.';
  const qa = lang === 'bg' ? 'QA паралел' : 'QA parallel';
  const qa2 = lang === 'bg'
    ? 'Както булдогът е нисък и стабилен, така и тестовете ми: малки, устойчиви, добре заземени.'
    : 'As the bulldog is low and steady, so are my tests: small, resilient, and grounded.';
  return (
    <section id="bulldog" className="mx-auto max-w-6xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/80">{blurb}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35}} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
          <h3 className="text-lg font-semibold">{card1Title}</h3>
          <p className="mt-2 text-sm text-white/80">{card1Body}</p>
          <div className="mt-4 text-xs text-white/60">{note}</div>
        </motion.div>
        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35, delay:0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
          <h3 className="text-lg font-semibold">{qa}</h3>
          <p className="mt-2 text-sm text-white/80">{qa2}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Thoughts Section -------------------------- */
function ThoughtsSection({ lang }: { lang: "bg" | "en" }) {
  const title = lang === 'bg' ? 'Бележки & Идеи' : 'Notes & Ideas';
  const blurb = lang === 'bg'
    ? 'Кратки мисли за качество, инструменти и тренировъчна психология.'
    : 'Short thoughts on quality, tooling, and training psychology.';
  const teasers = lang === 'bg'
    ? [
        { kicker: 'Качество', title: 'Quality is trained', body: 'Качеството не се открива — тренира се ежедневно, както и издръжливостта.' },
        { kicker: 'Инструменти', title: 'Tracing като учебник', body: 'Trace.zip е най-добрият учител: виж какво става, не какво си мислиш, че става.' }
      ]
    : [
        { kicker: 'Quality', title: 'Quality is trained', body: "Quality isn't found — it's trained daily, just like endurance." },
        { kicker: 'Tooling', title: 'Tracing as a teacher', body: 'Trace.zip is the best teacher: see what happens, not what you assume.' }
      ];
  return (
    <section id="thoughts" className="mx-auto max-w-6xl">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/80">{blurb}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {teasers.map((b, i) => (
          <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.35, delay:i*0.05}} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
            <div className="text-sm font-semibold text-[#f5b301]">{b.kicker}</div>
            <div className="mt-1 text-lg font-semibold">{b.title}</div>
            <div className="mt-2 text-sm text-white/80">{b.body}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------- Footer -------------------------------- */
function Footer({ lang }: { lang: "bg" | "en" }) {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/5/0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-white/60">
        <div>© {new Date().getFullYear()} Anton Tzonev — QA Automation</div>
        <div className="flex items-center gap-3">
          <SocialIcon title="GitHub" href="https://github.com/BBCooL40">
            <GithubIcon className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon title="LinkedIn" href="https://www.linkedin.com/">
            <LinkedinIcon className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon title="Gmail" href="mailto:anton.tzonev@yahoo.com">
            <MailIcon className="h-4 w-4" />
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-white/15 p-2 hover:bg-white/10"
    >
      {children}
    </a>
  );
}

/* ------------------------------- Side Overlay ----------------------------- */
function SideOverlay({ open, onClose, lang }: { open: boolean; onClose: () => void; lang: "bg" | "en" }) {
  const t = translations[lang];
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] border-l border-white/10 bg-[#0e1a34]/95 backdrop-blur"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-2">
              <LogoMark small />
              <div className="text-sm font-semibold">Anton QA</div>
            </div>
            <button onClick={onClose} className="rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10">{lang === "bg" ? "Затвори" : "Close"}</button>
          </div>
          <nav className="mt-2 grid gap-1 p-3">
            <NavItem href="#home" label={t.navHome} onClick={onClose} />
            <NavItem href="#projects" label={t.navProjects} onClick={onClose} />
            <NavItem href="#cv" label="CV" onClick={onClose} />
            <NavItem href="#contact" label={t.navContact} onClick={onClose} />
            <NavItem href="#running" label={lang === 'bg' ? 'Бягане' : 'Running'} onClick={onClose} />
            <NavItem href="#bulldog" label={lang === 'bg' ? 'Булдог' : 'Bulldog'} onClick={onClose} />
            <NavItem href="#thoughts" label={lang === 'bg' ? 'Блог' : 'Blog'} onClick={onClose} />
          </nav>
          <div className="mt-auto p-4 text-xs text-white/60">
            <div className="mb-2">Lux‑style palette: dark navy + gold</div>
            <div>BG|EN • smooth motion • production‑ready styling</div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function NavItem({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10"
    >
      {label}
    </a>
  );
}

/* --------------------------------- Atoms ---------------------------------- */
function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <div className={`grid place-items-center rounded-xl bg-[#f5b301] text-black shadow ${small ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm"}`}>
      <span className="font-bold">QA</span>
    </div>
  );
}

function ArrowUpRightIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5.2 3.4 9.6 8.1 11.2.6.1.8-.3.8-.6v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.6 1.5 2.4 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 .1.9-.3 1.9-.4 2.8-.4s1.9.1 2.8.4c2.1-.4 3-.1 3-.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.7 1.1 2.9 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.7-1.6 8.1-6 8.1-11.2A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5Zm.02 5.5H2v12h3V9ZM8 9h3v2h.1a3.3 3.3 0 0 1 3-1.7c3.2 0 3.8 2.1 3.8 4.9V21h-3v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H8V9Z" />
    </svg>
  );
}

function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M3 7h18v10H3z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

/* --------------------------- Animated Gradient bg ------------------------- */
function AnimatedGradient() {
  return (
    <div className="h-full w-full animate-gradient-slow bg-[radial-gradient(50%_50%_at_20%_20%,#1C2541_0%,#0b132b_55%),radial-gradient(40%_40%_at_80%_20%,#0E1A34_0%,#0b132b_60%),radial-gradient(60%_60%_at_50%_100%,#0B132B_0%,#000_60%)]" />
  );
}

/* --------------------------------- Copy ----------------------------------- */
const translations = {
  bg: {
    heroTitleLine1: "Портфолио за",
    heroTitleHighlight: "QA Automation",
    heroSubtitle:
      "Тестови стратегии, e2e сценарии с Playwright/Selenium, API и CI/CD практики. Фокус върху стабилни тестове, бърз feedback и отчетност.",
    ctaProjects: "Виж проектите",
    ctaCV: "Свали CV",
    ctaContact: "Пиши ми",
    navHome: "Начало",
    navProjects: "Проекти",
    navContact: "Контакт",
    highlights: [
      {
        kicker: "E2E & API",
        title: "Надеждни автом. тестове",
        body: "Playwright, Selenium и RestSharp. Стегната структура, смислени асършъни, стабилни локатори.",
      },
      {
        kicker: "CI/CD",
        title: "Бърз обратна връзка",
        body: "GitHub Actions/Runner, паралелизация, trace артефакти и отчет с htmlextra.",
      },
      {
        kicker: "DX",
        title: "Чиста архитектура",
        body: "Page Object + тестови данни, JSON фикстури, репорти и поддръжка без болка.",
      },
    ],
    projects: [
      {
        title: "MiniShop Playwright .NET",
        desc: "Е2Е поток: login → shop → cart → checkout. Tracing zip за всеки тест.",
        stack: ".NET • Playwright",
        href: "https://github.com/BBCooL40/",
        tags: ["Playwright", "NUnit", "Tracing"],
      },
      {
        title: "Foody API Tests",
        desc: "CRUD и auth сценарии с RestSharp + htmlextra репорти.",
        stack: ".NET • RestSharp",
        href: "https://github.com/BBCooL40/",
        tags: ["API", "Reports", "Data"],
      },
    ],
  },
  en: {
    heroTitleLine1: "Portfolio for",
    heroTitleHighlight: "QA Automation",
    heroSubtitle:
      "Test strategy, e2e scenarios with Playwright/Selenium, API and CI/CD craft. Focus on resilient tests, fast feedback, and clear reporting.",
    ctaProjects: "See projects",
    ctaCV: "Download CV",
    ctaContact: "Contact me",
    navHome: "Home",
    navProjects: "Projects",
    navContact: "Contact",
    highlights: [
      {
        kicker: "E2E & API",
        title: "Reliable automated tests",
        body: "Playwright, Selenium & RestSharp. Tight structure, meaningful assertions, robust locators.",
      },
      {
        kicker: "CI/CD",
        title: "Fast feedback loops",
        body: "GitHub Actions/Runner, parallelization, trace artifacts and htmlextra report.",
      },
      {
        kicker: "DX",
        title: "Clean architecture",
        body: "Page Object + test data, JSON fixtures, reports, and painless maintenance.",
      },
    ],
    projects: [
      {
        title: "MiniShop Playwright .NET",
        desc: "E2E flow: login → shop → cart → checkout. Trace .zip per test.",
        stack: ".NET • Playwright",
        href: "https://github.com/BBCooL40/",
        tags: ["Playwright", "NUnit", "Tracing"],
      },
      {
        title: "Foody API Tests",
        desc: "CRUD + auth scenarios using RestSharp with htmlextra reports.",
        stack: ".NET • RestSharp",
        href: "https://github.com/BBCooL40/",
        tags: ["API", "Reports", "Data"],
      },
    ],
  },
} as const;
