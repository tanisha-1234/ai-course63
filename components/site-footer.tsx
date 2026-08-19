import { BrainCircuit, Mail } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BrainCircuit className="h-5 w-5" />
            </span>
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Tata AutoComp</span> — Internal AI
              Training
            </span>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Questions? Contact the L&amp;D team
          </a>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          For Tata AutoComp employees only. Internal use.
        </p>
      </div>
    </footer>
  )
}
