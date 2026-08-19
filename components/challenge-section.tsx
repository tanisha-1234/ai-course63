import { CalendarClock, Check, Mail } from 'lucide-react'

const outcomes = [
  { icon: CalendarClock, text: 'Automated, context-aware meeting reminders' },
  { icon: Mail, text: 'Drafted email notifications, ready to send' },
]

export function ChallengeSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          The Hands-On Challenge
        </p>
        <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="max-w-2xl text-balance font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Build an AI agent that runs your meeting reminders and email notifications
            </h2>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Your capstone: design an agent that watches the calendar, sends timely meeting
              reminders, and drafts follow-up email notifications — putting everything you learned
              into one working system.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              {outcomes.map((outcome) => (
                <div key={outcome.text} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <outcome.icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{outcome.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Capstone deliverable
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {[
                'Calendar watcher',
                'Reminder scheduler',
                'Email draft generator',
                'One working system',
              ].map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
