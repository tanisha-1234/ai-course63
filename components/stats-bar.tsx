import { FlaskConical, GraduationCap, Layers } from 'lucide-react'

const stats = [
  { icon: Layers, value: '12 Modules', label: 'Structured curriculum' },
  { icon: FlaskConical, value: 'Hands-On Lab', label: 'Build a real agent' },
  { icon: GraduationCap, value: 'No Prior AI Experience', label: 'Required to begin' },
]

export function StatsBar() {
  return (
    <section className="border-b border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value} className="flex items-center gap-4 px-2 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <stat.icon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-foreground">{stat.value}</span>
              <span className="block text-sm text-muted-foreground">{stat.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
