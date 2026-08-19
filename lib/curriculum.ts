export type Session = {
  label: string
  title: string
  topics: string[]
}

export type Module = {
  slug: string
  day: string
  tag?: string
  title: string
  desc: string
  hours: string
  featured?: boolean
  overview: string
  sessions: Session[]
  exercise: string
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
      'An optional warm-up for anyone new to programming or returning to Python after a break. We cover just enough Python to be productive in the rest of the course — no prior coding experience assumed. By the end you can read, write, and run small scripts that manipulate data and call functions.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Setup & Syntax',
        topics: [
          'Installing Python and a code editor',
          'Variables, numbers, strings and booleans',
          'Running scripts and using the REPL',
        ],
      },
      {
        label: 'Session 2',
        title: 'Data Structures',
        topics: ['Lists, dictionaries and sets', 'Loops and comprehensions', 'Conditionals and control flow'],
      },
      {
        label: 'Session 3',
        title: 'Functions & Modules',
        topics: ['Defining and calling functions', 'Importing modules and packages', 'Reading and writing files'],
      },
    ],
    exercise:
      'Write a short script that reads a CSV of product records, filters rows by a condition, and prints a formatted summary to the console.',
  },
  {
    slug: 'ai-genai-foundations',
    day: 'Day 1',
    tag: 'Optional',
    title: 'AI & GenAI Foundations',
    desc: 'What AI / LLMs are and how they work',
    hours: '2.5h',
    overview:
      'A plain-language foundation on how modern AI and large language models actually work. We demystify tokens, prompts, and model behaviour so you can reason about what these systems can and cannot do before you start building with them.',
    sessions: [
      {
        label: 'Session 1',
        title: 'How LLMs Work',
        topics: ['Tokens, embeddings and prediction', 'Training vs. inference', 'Why models hallucinate'],
      },
      {
        label: 'Session 2',
        title: 'Prompting Basics',
        topics: ['Anatomy of a good prompt', 'System vs. user messages', 'Temperature and output control'],
      },
    ],
    exercise:
      'Craft three versions of a prompt for the same task, compare the outputs, and document which prompt structure produced the most reliable result and why.',
  },
  {
    slug: 'chatbots-to-agents',
    day: 'Day 2',
    title: 'From Chatbots to Agents',
    desc: 'Chatbots vs. agents that take action',
    hours: '2.5h',
    overview:
      'The leap from a chatbot that answers questions to an agent that takes action. We break down the agent loop — perceive, decide, act — and see what changes when a model can call tools instead of only producing text.',
    sessions: [
      {
        label: 'Session 1',
        title: 'The Agent Loop',
        topics: ['Reactive chatbots vs. goal-driven agents', 'Perceive–decide–act cycle', 'When an agent should stop'],
      },
      {
        label: 'Session 2',
        title: 'Your First Agent',
        topics: ['Giving a model a goal', 'Basic decision-making', 'Observing an agent step by step'],
      },
    ],
    exercise:
      'Convert a simple Q&A chatbot into an agent that decides between two actions based on the user request, and trace each step it takes.',
  },
  {
    slug: 'memory-context-rag',
    day: 'Day 3',
    title: 'Memory, Context & RAG',
    desc: 'Memory and answering from real documents',
    hours: '3h',
    overview:
      'How agents remember and how they answer from your own documents. We cover context windows, short- and long-term memory, and Retrieval-Augmented Generation (RAG) so your agent can ground its answers in real, trusted sources.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Memory & Context',
        topics: ['Context windows and their limits', 'Short-term vs. long-term memory', 'Summarising conversation history'],
      },
      {
        label: 'Session 2',
        title: 'Retrieval-Augmented Generation',
        topics: ['Chunking and embeddings', 'Vector search basics', 'Citing sources in answers'],
      },
      {
        label: 'Session 3',
        title: 'Building a RAG Pipeline',
        topics: ['Ingesting documents', 'Wiring retrieval into the prompt', 'Evaluating answer quality'],
      },
    ],
    exercise:
      'Build a small RAG assistant over a folder of internal documents that answers a question and cites which document each fact came from.',
  },
  {
    slug: 'tool-use-apis-actions',
    day: 'Day 4',
    title: 'Tool Use, APIs & Agent Actions',
    desc: 'Connecting agents to real systems',
    hours: '2.5h',
    overview:
      'Connecting agents to the real world through tools and APIs. We define tools, hand them to a model, and let the agent decide when to call them — turning a talkative model into something that can fetch data and get work done.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Defining Tools',
        topics: ['Tool schemas and descriptions', 'Function calling fundamentals', 'Handling tool inputs and outputs'],
      },
      {
        label: 'Session 2',
        title: 'Calling Real APIs',
        topics: ['Authentication and secrets', 'Error handling and retries', 'Chaining multiple tool calls'],
      },
    ],
    exercise:
      'Give an agent two tools — a lookup API and a calculator — and have it answer a question that requires calling both in sequence.',
  },
  {
    slug: 'multi-agent-systems',
    day: 'Day 5',
    title: 'Multi-Agent Systems (Co-pilot)',
    desc: 'How copilots work',
    hours: '3h',
    overview:
      'How copilots and multi-agent systems coordinate to solve bigger problems. We look at specialised agents working together, how they hand off tasks, and the orchestration patterns that keep them focused and reliable.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Coordination Patterns',
        topics: ['Orchestrator and worker agents', 'Task delegation and hand-offs', 'Shared state between agents'],
      },
      {
        label: 'Session 2',
        title: 'Building a Copilot',
        topics: ['Specialising agents by role', 'Combining outputs', 'Avoiding loops and deadlocks'],
      },
      {
        label: 'Session 3',
        title: 'Reliability at Scale',
        topics: ['Monitoring multi-agent runs', 'Cost and latency trade-offs', 'Graceful failure'],
      },
    ],
    exercise:
      'Design a two-agent copilot where a planner agent breaks a request into steps and a worker agent executes each step, then report on how they collaborated.',
  },
  {
    slug: 'safety-ethics-responsible-ai',
    day: 'Day 6',
    title: 'Safety, Ethics & Responsible Agentic AI',
    desc: 'Safety, fairness, and regulation',
    hours: '2h',
    overview:
      'Building AI that is safe, fair, and responsible. We examine common failure modes, bias, and the guardrails that keep agentic systems trustworthy — plus the regulatory landscape shaping how AI can be deployed.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Risks & Guardrails',
        topics: ['Bias and fairness', 'Prompt injection and misuse', 'Input and output guardrails'],
      },
      {
        label: 'Session 2',
        title: 'Responsible Deployment',
        topics: ['Human-in-the-loop controls', 'Transparency and disclosure', 'The evolving regulatory landscape'],
      },
    ],
    exercise:
      'Audit an existing agent for safety risks, then add at least two guardrails and document how each one reduces a specific risk.',
  },
  {
    slug: 'ai-governance',
    day: 'Day 7',
    title: 'AI Governance',
    desc: 'Keeping AI systems governed post-launch',
    hours: '2h',
    overview:
      'Keeping AI systems governed and accountable after they ship. We cover monitoring, evaluation, audit trails, and the organisational processes that keep deployed agents aligned with policy over time.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Monitoring & Evaluation',
        topics: ['Logging and audit trails', 'Ongoing evaluation metrics', 'Detecting drift and regressions'],
      },
      {
        label: 'Session 2',
        title: 'Governance in Practice',
        topics: ['Ownership and accountability', 'Change management for models', 'Policies and review cadences'],
      },
    ],
    exercise:
      'Draft a lightweight governance checklist for an agent going into production, covering monitoring, evaluation, and who is accountable for each item.',
  },
  {
    slug: 'capstone',
    day: 'Capstone',
    title: 'Example Video',
    desc: 'Hands-on experience',
    hours: '1h',
    featured: true,
    overview:
      'The capstone brings everything together. You ship a working agent end to end and walk through a worked example that combines memory, tools, and safe deployment — the same shape as the project you will build yourself.',
    sessions: [
      {
        label: 'Session 1',
        title: 'Worked Example',
        topics: ['Planning the agent', 'Combining memory and tools', 'Adding guardrails before shipping'],
      },
      {
        label: 'Session 2',
        title: 'Ship & Present',
        topics: ['Packaging your agent', 'Recording a demo', 'Presenting your build'],
      },
    ],
    exercise:
      'Build and demo your own agent that uses at least one tool and grounds its answers in a document source, then record a short walkthrough of how it works.',
  },
]

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug)
}
