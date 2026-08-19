'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const modules = [
  {
    day: 'Day 0',
    tag: 'Optional',
    title: 'Python Foundations',
    desc: 'Python basics refresher',
    hours: '3h',
    sessions: [
      {
        label: 'Session 1',
        title: 'Setup and syntax basics',
        topics: [
          'Installing Python and setting up a notebook environment',
          'Variables, data types, and operators',
          'Writing and running your first script',
        ],
        exercise:
          'Write a short script that takes a list of employee names and prints a greeting for each.',
      },
      {
        label: 'Session 2',
        title: 'Building blocks for AI code',
        topics: [
          'Control flow: if/else, loops',
          'Functions and reusable code',
          'Lists, dictionaries, and reading/writing files',
        ],
        exercise:
          "Read a sample CSV of meeting data into Python and print each meeting's title and time.",
      },
    ],
  },
  {
    day: 'Day 1',
    tag: 'Optional',
    title: 'AI & GenAI Foundations',
    desc: 'What AI / LLMs are and how they work',
    hours: '2.5h',
    sessions: [
      {
        label: 'Session 1',
        title: 'How large language models work',
        topics: [
          'What a token is, and how text becomes a prediction',
          'Context windows and why they run out',
          'AI vs. machine learning vs. generative AI',
        ],
        exercise: 'Compare three different prompts on the same task and note how outputs change.',
      },
      {
        label: 'Session 2',
        title: 'Prompting fundamentals',
        topics: [
          'Instructions, examples, and formatting in a prompt',
          'Common failure modes: vague prompts, missing context',
          'Where GenAI already shows up in daily work (Copilot, chat assistants)',
        ],
        exercise: 'Rewrite a vague prompt into a clear one and compare the two outputs.',
      },
    ],
  },
  {
    day: 'Day 2',
    title: 'From Chatbots to Agents',
    desc: 'Chatbots vs. agents that take action',
    hours: '2.5h',
    sessions: [
      {
        label: 'Session 1',
        title: 'What makes something an agent',
        topics: [
          'Chatbots that answer vs. agents that act',
          'Planning and multi-step reasoning',
          'Example: an agent that books a meeting vs. a chatbot that describes how to',
        ],
        exercise:
          'Sketch the steps an agent would take to reschedule a meeting when a conflict comes up.',
      },
      {
        label: 'Session 2',
        title: 'Anatomy of an agent',
        topics: [
          'The agent loop: observe, decide, act',
          'When an agent should ask for confirmation vs. act on its own',
          'Guardrails: what an agent should never do without approval',
        ],
        exercise:
          'List 3 tasks in your role that are safe for an agent to automate, and 3 that always need a human check.',
      },
    ],
  },
  {
    day: 'Day 3',
    title: 'Memory, Context & RAG',
    desc: 'Memory and answering from real documents',
    hours: '3h',
    sessions: [
      {
        label: 'Session 1',
        title: 'Why context windows run out',
        topics: [
          'Short-term vs. long-term memory in an agent',
          'What happens when a conversation exceeds the context window',
          "Why an agent 'forgets' earlier instructions in long sessions",
        ],
        exercise:
          'Take a long sample transcript and mark where earlier context would likely get dropped.',
      },
      {
        label: 'Session 2',
        title: 'Retrieval-Augmented Generation (RAG)',
        topics: [
          'Chunking documents for retrieval',
          'Embeddings and vector search, explained simply',
          'Answering questions from real documents — including Microsoft 365 and Outlook content',
        ],
        exercise:
          'Given sample policy documents, write 3 questions and identify which document each answer comes from.',
      },
    ],
  },
  {
    day: 'Day 4',
    title: 'Tool Use, APIs & Agent Actions',
    desc: 'Connecting agents to real systems',
    hours: '2.5h',
    sessions: [
      {
        label: 'Session 1',
        title: 'Giving an agent tools',
        topics: [
          'What an API is, in plain terms',
          'Function calling: how a model decides which tool to use',
          "Defining a tool's inputs and outputs so the agent uses it correctly",
        ],
        exercise:
          "Define a simple 'send email' tool: what inputs would the agent need before using it?",
      },
      {
        label: 'Session 2',
        title: 'From tool call to real action',
        topics: [
          'Connecting to internal systems (calendar, email, ticketing)',
          'Handling errors when a tool call fails',
          'Logging what an agent did, so actions are traceable',
        ],
        exercise:
          'Walk through what should happen if an agent tries to send a meeting reminder but the calendar API is down.',
      },
    ],
  },
  {
    day: 'Day 5',
    title: 'Multi-Agent Systems (Co-pilot)',
    desc: 'How copilots work',
    hours: '3h',
    sessions: [
      {
        label: 'Session 1',
        title: 'Coordinating multiple agents',
        topics: [
          'Why one task might need several specialized agents',
          'Handing off work between agents',
          "Avoiding agents stepping on each other's actions",
        ],
        exercise:
          "Break a task like 'prepare for a client meeting' into 3 sub-tasks for separate agents.",
      },
      {
        label: 'Session 2',
        title: 'How Microsoft Copilot works under the hood',
        topics: [
          "Copilot's role as an orchestrator across Microsoft 365 apps",
          'How Copilot decides which app/data source to pull from',
          "Where Copilot's outputs still need a human review step",
        ],
        exercise:
          'Try a real Copilot prompt in Outlook or Word and note which data sources it pulled from.',
      },
    ],
  },
  {
    day: 'Day 6',
    title: 'Safety, Ethics & Responsible Agentic AI',
    desc: 'Safety, fairness, and regulation',
    hours: '2h',
    sessions: [
      {
        label: 'Session 1',
        title: 'Where agentic AI goes wrong',
        topics: [
          'Hallucination: when a model states something false confidently',
          'Bias in training data and how it shows up in outputs',
          'Failure modes specific to agents that take real-world actions',
        ],
        exercise:
          "Find an example where an AI agent's confident wrong answer could cause a real problem at work.",
      },
      {
        label: 'Session 2',
        title: 'Guardrails and responsible use',
        topics: [
          'Human-in-the-loop checkpoints for high-stakes actions',
          'Basics of relevant AI regulation and internal policy',
          'How to report an AI system behaving unexpectedly',
        ],
        exercise: "Draft a one-line 'stop and check with a human' rule for an agent that sends external emails.",
      },
    ],
  },
  {
    day: 'Day 7',
    title: 'AI Governance',
    desc: 'Keeping AI systems governed post-launch',
    hours: '2h',
    sessions: [
      {
        label: 'Session 1',
        title: 'Monitoring AI in production',
        topics: [
          'What to track once an agent is live: accuracy, failures, edge cases',
          'Audit trails: why every agent action should be logged',
          'Setting up review checkpoints after launch',
        ],
        exercise:
          "List 3 things an audit log should capture for an agent that handles meeting reminders.",
      },
      {
        label: 'Session 2',
        title: 'Ongoing ownership',
        topics: [
          'Who owns an AI system after it ships',
          'Handling model or policy updates without breaking workflows',
          'Deciding when to retire or retrain an agent',
        ],
        exercise: "Sketch a simple approval flow for updating an agent already used by your team.",
      },
    ],
  },
  {
    day: 'Capstone',
    title: 'Example Video',
    desc: 'Hands-on experience',
    hours: '1h',
    featured: true,
    sessions: [
      {
        label: 'Capstone walkthrough',
        title: 'Watch AI solve a real problem',
        topics: [
          'A calendar-watching agent that detects upcoming meetings',
          'Automated, context-aware meeting reminders',
          'Drafted follow-up email notifications, ready to send',
        ],
        exercise:
          "After watching, identify which module's concepts (RAG, tool use, multi-agent, governance) show up at each step.",
      },
    ],
  },
]

export function CurriculumSection() {
  const [openDay, setOpenDay] = useState<string | null>(null)

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
          {modules.map((mod) => {
            const isOpen = openDay === mod.day
            return (
              <div
                key={mod.day}
                className={`flex flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/40 ${
                  mod.featured ? 'border-primary/60' : 'border-border'
                } ${isOpen ? 'sm:col-span-2 lg:col-span-3' : ''}`}
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
                    onClick={() => setOpenDay(isOpen ? null : mod.day)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    {isOpen ? 'Hide days' : 'View days'}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-6 grid gap-6 border-t border-border/60 pt-6 sm:grid-cols-2">
                    {mod.sessions.map((session) => (
                      <div key={session.label}>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {session.label} · {session.title}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {session.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        {session.exercise && (
                          <p className="mt-3 rounded-lg bg-background/60 px-3 py-2 text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Hands-on: </span>
                            {session.exercise}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
