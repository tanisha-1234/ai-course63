import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Lightbulb, Sparkles, CheckCircle2, FlaskConical, Terminal, PartyPopper } from 'lucide-react'
import { getModule, modules } from '@/lib/curriculum'

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }))
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const mod = getModule(slug)
  if (!mod) return notFound()

  const currentIndex = modules.findIndex((m) => m.slug === slug)
  const nextModule = currentIndex >= 0 ? modules[currentIndex + 1] : undefined

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Top nav */}
      <div className="sticky top-0 z-10 -mx-6 flex items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">AI at Work</p>
            <p className="text-xs text-muted-foreground">Tata AutoComp</p>
          </div>
        </div>
        <Link
          href="/#curriculum"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          All modules
        </Link>
      </div>

      {/* Header — just the module name now */}
      <h1 className="mt-12 text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
        {mod.title}
      </h1>

      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {mod.overview}
      </p>

      {/* Key takeaway callout */}
      <div className="mt-8 flex gap-4 rounded-xl border border-primary/30 bg-primary/5 p-5">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Key takeaway</p>
          <p className="mt-1.5 text-sm leading-relaxed text-foreground">{mod.keyTakeaway}</p>
        </div>
      </div>

      {/* Real-world example */}
      <div className="mt-4 flex gap-4 rounded-xl border border-border bg-card p-5">
        <FlaskConical className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">In practice</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{mod.example}</p>
        </div>
      </div>

      {/* Sessions */}
      <div className="mt-16 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <h2 className="font-serif text-2xl font-bold text-foreground">Session breakdown</h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-8 space-y-6">
        {mod.sessions.map((session, i) => (
          <div key={session.label} className="rounded-2xl border border-border bg-card p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {session.label}
                </p>
                <h3 className="text-lg font-semibold leading-snug text-foreground">{session.title}</h3>
              </div>
            </div>

            <ul className="mt-5 space-y-3 border-l-2 border-border pl-5">
              {session.topics.map((topic) => (
                <li key={topic} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            {session.code && (
              <div className="mt-6 overflow-hidden rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-2 border-b border-border bg-[#1a1d29] px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  </div>
                  <span className="ml-2 flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                    <Terminal className="h-3 w-3" />
                    example
                  </span>
                </div>

                <pre className="overflow-x-auto bg-[#12141c] px-5 py-4 font-mono text-[13px] leading-[1.7] text-slate-200">
                  <code>{session.code}</code>
                </pre>

                {session.output && (
                  <>
                    <div className="border-t border-border bg-[#0e2419] px-4 py-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                        Output
                      </span>
                    </div>
                    <pre className="overflow-x-auto bg-[#0a1a12] px-5 py-4 font-mono text-[13px] leading-[1.7] text-emerald-300/90">
                      <code>{session.output}</code>
                    </pre>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Exercise */}
      <div className="mt-8 rounded-2xl border-2 border-primary/25 bg-primary/[0.03] p-6 md:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <FlaskConical className="h-4 w-4" />
          </span>
          <p className="font-serif text-lg font-bold text-foreground">Hands-on exercise</p>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{mod.exercise}</p>
      </div>

      {/* Up next */}
      <div className="mt-10">
        {nextModule ? (
          <Link
            href={`/modules/${nextModule.slug}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Up next</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{nextModule.title}</p>
            </div>
            <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
          </Link>
        ) : (
          <div className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <PartyPopper className="h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-lg font-semibold text-foreground">You've completed the course!</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Head back to the curriculum to revisit any module.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <Link
          href="/#curriculum"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          All modules
        </Link>
      </div>
    </main>
  )
}