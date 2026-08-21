import { BrainCircuit } from 'lucide-react'

const navLinks = [
  { label: 'Why This Course', href: '#why' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: "Who It's For", href: '#audience' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BrainCircuit className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-foreground">AI at Work</span>
            <span className="block text-xs text-muted-foreground">Tata AutoComp</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#curriculum"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Start the Course
        </a>
      </div>
    </header>
  )
}
