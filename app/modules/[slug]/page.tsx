import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, BrainCircuit, Clock, CircleCheck, FlaskConical } from 'lucide-react'
import { modules, getModule } from '@/lib/curriculum'

export function generateStaticParams() {
  return modules.map((mod) => ({ slug: mod.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const mod = getModule(slug)
  if (!mod) return { title: 'Module not found | AI at Work' }
  return {
    title: `${mod.day}: ${mod.title} | AI at Work`,
    description: mod.overview,
  }
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const mod = getModule(slug)
  if (!mod) notFound()

  const index = modules.findIndex((m) => m.slug === slug)
  const next = modules[index + 1]

  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BrainCircuit className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">AI at Work</span>
              <span className="block text-xs text-muted-foreground">Tata AutoComp</span>
            </span>
          </Link>
          <Link
            href="/#curriculum"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All modules
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            {mod.day}
          </span>
          {mod.tag && (
            <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              {mod.tag}
            </span>
          )}
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {mod.hours} estimated
          </span>
        </div>

        <h1 className="mt-4 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
          {mod.title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {mod.overview}
        </p>

        <section className="mt-14">
          <h2 className="font-serif text-2xl font-bold text-foreground">Session breakdown</h2>
          <div className="mt-6 space-y-4">
            {mod.sessions.map((session) => (
              <div
                key={session.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {session.label}
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {session.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {session.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
            <div className="flex items-center gap-2.5">
              <FlaskConical className="h-5 w-5 text-primary" />
              <h2 className="font-serif text-xl font-bold text-foreground">Hands-on exercise</h2>
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{mod.exercise}</p>
          </div>
        </section>

        <nav className="mt-14 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#curriculum"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to curriculum
          </Link>
          {next && (
            <Link
              href={`/modules/${next.slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Next: {next.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </article>
    </main>
  )
}
