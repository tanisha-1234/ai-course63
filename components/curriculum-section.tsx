import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { modules } from '@/lib/curriculum'

export function CurriculumSection() {
  return (
    <section id="curriculum" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Curriculum</p>
        <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
          From fundamentals to a shipped agent
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Day 0 and Day 1 are optional foundations for anyone new to Python or AI. Everyone else can
          jump straight to Day 2. Select any module to see its day-wise breakdown.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Link
              key={mod.slug}
              href={`/modules/${mod.slug}`}
              className={`group flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/40 ${
                mod.featured ? 'border-primary/60' : 'border-border'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {mod.day}
                </span>
                {mod.tag && (
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {mod.tag}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
                {mod.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mod.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                <span className="text-sm text-muted-foreground">{mod.hours}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
                  View details
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
