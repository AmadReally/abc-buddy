# MYney MemoryCore — Claude Instructions

This project uses **MYney**, a portable RPG-based AI MemoryCore.

## Setup

1. Read `.myney.core/MYNEY.md` — this is the **single source of truth** for all project memory, commands, agent protocols, and state.
2. Follow the `## Command Protocol` section inside that file.
3. When a user types any `/myney-*` command, read and update the JSON state block in `MYNEY.md`.

## Quick Reference

### Core File

- `.myney.core/MYNEY.md` — All memory, roster, quests, reminders, ledger, agents, and commands live here.

### Commands

- `/myney-setup` — First-run owner bootstrap or returning member activation.
- `/myney-whoami` — Restore the active user and show current RPG state.
- `/myney-party` — Show owner, members, active pairs, blockers, and join mode.
- `/myney-quest` — Add, list, start, and complete RPG work quests.
- `/myney-pair` — Start, update, or end focused collaboration between two members.
- `/myney-handoff` — Save session end state, next action, and blockers.
- `/myney-invite` — Owner-only invite creation, listing, and revocation.
- `/myney-agent` — List or inspect MYney local subagent protocols.
- `/myney-skills` — List installed MYney skills and RPG coding class options.
- `/myney-memory` — Log or list conversation and memory-change journal entries.
- `/myney-todo` — Add, list, and complete persistent MemoryCore todos.
- `/myney-autosync` — Automate Quest → Build → Memory → GitHub Push flow.
- `/myney-check` — Validate required MemoryCore files and consistency.

### Key Rules

- **Read state before asking questions.** Always parse the JSON state block first.
- **Ledger is append-only.** Never edit or delete past ledger entries.
- **Memory discipline.** Log a `memoryJournal` entry for every meaningful conversation or state change.
- **Language protocol.** Respect the member's `languagePreferences` for conversation and coding language.

### Agents (Protocols, Not Processes)

MYney agents are behavioral protocols — read their purpose in the `agents[]` array inside `MYNEY.md` and apply the correct one based on the task context.

| Agent      | Role                    |
| ---------- | ----------------------- |
| **MYney**  | Grand Core Orchestrator |
| **Lumina** | Memory Archivist        |
| **Nara**   | Onboarding Steward      |
| **Kaizen** | Questmaster             |
| **Riven**  | Builder Agent           |
| **Vega**   | Integrity Guardian      |
| **Echo**   | Recall Agent            |
