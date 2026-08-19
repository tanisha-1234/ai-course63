// lib/curriculum-data.ts
// Single source of truth for every module's content.
// The card grid AND the detail pages both import from here —
// edit content once, it updates everywhere.

export type Session = {
  label: string
  title: string
  topics: string[]
  exercise?: string
}

export type Module = {
  slug: string // used in the URL: /curriculum/[slug]
  day: string
  tag?: string
  title: string
  desc: string
  hours: string
  featured?: boolean
  overview: string // a longer paragraph for the detail page
  sessions: Session[]
}

export const modules: Module[] = [
  {
    slug: 'python-foundations',
    day: 'Day 0',
    tag: 'Optional',
    title: 'Python Foundations',
    desc: 'Python basics refresher',
    hours: '3h',
    overview:
      'A light, no-pressure refresher for anyone who hasn\u2019t touched Python recently — or ever. You\u2019ll leave able to read and write the basic code that shows up in every later module.',
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
    slug: 'ai-genai-foundations',
    day: 'Day 1',
    tag: 'Optional',
    title: 'AI & GenAI Foundations',
    desc: 'What AI / LLMs are and how they work',
    hours: '2.5h',
    overview:
      'Demystifies what\u2019s actually happening inside a large language model, without the math. By the end you\u2019ll know why prompts matter and how to write better ones.',
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
    slug: 'chatbots-to-agents',
    day: 'Day 2',
    title: 'From Chatbots to Agents',
    desc: 'Chatbots vs. agents that take action',
    hours: '2.5h',
    overview:
      'The turning point of the course: where AI stops just answering questions and starts doing things on your behalf. This is the mental model everything after Day 2 builds on.',
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
    slug: 'memory-context-rag',
    day: 'Day 3',
    title: 'Memory, Context & RAG',
    desc: 'Memory and answering from real documents',
    hours: '3h',
    overview:
      'Covers how an agent remembers (and forgets), and how it can answer questions using your actual documents — including Outlook and Microsoft 365 content — instead of guessing.',
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
    slug: 'tool-use-apis',
    day: 'Day 4',
    title: 'Tool Use, APIs & Agent Actions',
    desc: 'Connecting agents to real systems',
    hours: '2.5h',
    overview:
      'Where an agent stops being theoretical and starts touching real systems — calendars, inboxes, ticketing tools. Covers how to do that safely.',
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
    slug: 'multi-agent-copilot',
    day: 'Day 5',
    title: 'Multi-Agent Systems (Co-pilot)',
    desc: 'How copilots work',
    hours: '3h',
    overview:
      'Zooms out from a single agent to systems of agents working together — and shows how Microsoft Copilot itself is built on exactly this idea.',
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
    slug: 'safety-ethics',
    day: 'Day 6',
    title: 'Safety, Ethics & Responsible Agentic AI',
    desc: 'Safety, fairness, and regulation',
    hours: '2h',
    overview:
      'Before shipping anything that acts on its own, it\u2019s worth knowing exactly how it can fail. This module covers the failure modes and the guardrails that catch them.',
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
    slug: 'ai-governance',
    day: 'Day 7',
    title: 'AI Governance',
    desc: 'Keeping AI systems governed post-launch',
    hours: '2h',
    overview:
      'Shipping an agent isn\u2019t the finish line. This module covers what happens after launch — monitoring, ownership, and knowing when something needs to change.',
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
          'List 3 things an audit log should capture for an agent that handles meeting reminders.',
      },
      {
        label: 'Session 2',
        title: 'Ongoing ownership',
        topics: [
          'Who owns an AI system after it ships',
          'Handling model or policy updates without breaking workflows',
          'Deciding when to retire or retrain an agent',
        ],
        exercise: 'Sketch a simple approval flow for updating an agent already used by your team.',
      },
    ],
  },
  {
    slug: 'example-video',
    day: 'Capstone',
    title: 'Example Video',
    desc: 'Hands-on experience',
    hours: '1h',
    featured: true,
    overview:
      'Everything from the course, in one working demo: watch an agent go from "a meeting is coming up" to a drafted, ready-to-send email — end to end.',
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

export function getModuleBySlug(slug: string) {
  return modules.find((m) => m.slug === slug)
}
