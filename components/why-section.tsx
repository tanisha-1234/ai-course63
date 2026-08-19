import { Building2, PencilRuler, Rocket } from 'lucide-react'

const features = [
  {
    icon: PencilRuler,
    title: 'Learn by Doing',
    body: 'Every module pairs concepts with hands-on exercises so you build working AI, not just theory.',
  },
  {
    icon: Building2,
    title: 'Real Tata AutoComp Use Cases',
    body: 'Examples and labs are grounded in everyday work across our teams, plants, and functions.',
  },
  {
    icon: Rocket,
    title: 'From Zero to Agent Builder',
    body: 'Start with the fundamentals and finish by designing and shipping your own AI agent.',
  },
]

export function WhySection() {
  return (
    <section id="why" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Why This Course
        </p>
        <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Practical AI skills that transfer to your everyday work
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
