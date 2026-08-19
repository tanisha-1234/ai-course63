import { ArrowRight, BadgeCheck, FlaskConical, Sparkles } from 'lucide-react'

const pills = ['12 modules', 'Hands-on labs', 'No AI experience needed']

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      {/* Grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 8%, transparent) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, color-mix(in oklch, var(--primary) 22%, transparent), transparent 70%)',
        }}
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Tata AutoComp · AI Training
        </span>

        <h1 className="mt-8 text-balance font-serif text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
          AI at Work: Making Everyday Work Smarter
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A hands-on course on AI agents and Copilot — for engineers and non-engineers alike.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {pills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground"
            >
              <BadgeCheck className="h-4 w-4 text-primary" />
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start the Course
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            View Curriculum
          </a>
        </div>

        <p className="mt-10 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <FlaskConical className="h-3.5 w-3.5 text-primary" />
          agent.tataautocomp.internal
        </p>
      </div>
    </section>
  )
}
