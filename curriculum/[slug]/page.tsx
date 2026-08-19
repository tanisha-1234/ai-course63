// app/curriculum/[slug]/page.tsx
// One page per module. Next.js generates a real URL for each slug
// in lib/curriculum-data.ts automatically — no manual routing needed.

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import { modules, getModuleBySlug } from '@/lib/curriculum-data'

// Pre-builds a static page for every module at build time
export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }))
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const mod = getModuleBySlug(params.slug)
  if (!mod) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#curriculum"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to curriculum
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {mod.day}
        </span>
        {mod.tag && (
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {mod.tag}
          </span>
        )}
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5" />
          {mod.hours}
        </span>
      </div>

      <h1 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
        {mod.title}
      </h1>

      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {mod.overview}
      </p>

      <div className="mt-14 space-y-10">
        {mod.sessions.map((session) => (
          <div key={session.label} className="rounded-xl border border-border bg-card p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {session.label}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-foreground">{session.title}</h2>

            <ul className="mt-5 space-y-2.5">
              {session.topics.map((topic) => (
                <li key={topic} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {topic}
                </li>
              ))}
            </ul>

            {session.exercise && (
              <div className="mt-6 rounded-lg bg-background/60 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Hands-on exercise
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {session.exercise}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
        <Link
          href="/#curriculum"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to curriculum
        </Link>
      </div>
    </main>
  )
}
