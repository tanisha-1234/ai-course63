import { Check, Code2, Sprout } from 'lucide-react'

const tracks = [
  {
    icon: Sprout,
    title: 'New to AI / Python',
    desc: 'Never written code or used AI tools? Start at the very beginning.',
    points: [
      'Begin with optional Day 0 & Day 1 foundations',
      'No prior programming or AI knowledge assumed',
      'Plain-language concepts before any hands-on work',
      'Build confidence step by step toward your first agent',
    ],
    featured: false,
  },
  {
    icon: Code2,
    title: 'Already Coding',
    desc: 'Comfortable with code? Skip the basics and go straight to agents.',
    points: [
      'Start at Day 2 — From Chatbots to Agents',
      'Deep dives into agent architectures & multi-agent systems',
      'Focus on tool use, APIs, and production patterns',
      'Ship a hands-on RAG assistant by the end',
    ],
    featured: true,
  },
]

export function AudienceSection() {
  return (
    <section id="audience" className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Who It&apos;s For</p>
        <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Two tracks, one course — whatever your starting point
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <div
              key={track.title}
              className={`rounded-xl border p-8 ${
                track.featured
                  ? 'border-primary/50 bg-primary/10'
                  : 'border-border bg-card'
              }`}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <track.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{track.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{track.desc}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
