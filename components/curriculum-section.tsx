import { ChevronDown } from 'lucide-react'

const modules = [
  {
    day: 'Day 0',
    tag: 'Optional',
    title: 'Python Foundations',
    desc: 'Python basics refresher',
    hours: '3h',
  },
  {
    day: 'Day 1',
    tag: 'Optional',
    title: 'AI & GenAI Foundations',
    desc: 'What AI / LLMs are and how they work',
    hours: '2.5h',
  },
  {
    day: 'Day 2',
    title: 'From Chatbots to Agents',
    desc: 'Chatbots vs. agents that take action',
    hours: '2.5h',
  },
  {
    day: 'Day 3',
    title: 'Memory, Context & RAG',
    desc: 'Memory and answering from real documents',
    hours: '3h',
  },
  {
    day: 'Day 4',
    title: 'Tool Use, APIs & Agent Actions',
    desc: 'Connecting agents to real systems',
    hours: '2.5h',
  },
  {
    day: 'Day 5',
    title: 'Multi-Agent Systems (Co-pilot)',
    desc: 'How copilots work',
    hours: '3h',
  },
  {
    day: 'Day 6',
    title: 'Safety, Ethics & Responsible Agentic AI',
    desc: 'Safety, fairness, and regulation',
    hours: '2h',
  },
  {
    day: 'Day 7',
    title: 'AI Governance',
    desc: 'Keeping AI systems governed post-launch',
    hours: '2h',
  },
  {
    day: 'Capstone',
    title: 'Example Video',
    desc: 'Hands-on experience',
    hours: '1h',
    featured: true,
  },
]

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
            <div
              key={mod.day}
              className={`flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/40 ${
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
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                >
                  View days
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
