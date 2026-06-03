# MYney MemoryCore — Agent Instructions

This project uses **MYney**, a portable RPG-based AI MemoryCore.
All AI agents entering this workspace should treat `.myney.core/` as the
project memory source of truth.

## First Step

Read `.myney.core/MYNEY.md`. This single file contains:

- All command protocols and their specifications
- The full JSON state block (roster, members, quests, reminders, ledger)
- Agent definitions and their behavioral roles
- Installed skills and RPG class options

## Command Router

If the user types a command starting with `/myney-`, do this:

1. Read `.myney.core/MYNEY.md`.
2. Follow the `## Command Protocol` section.
3. Read existing state before asking questions.
4. Update only the JSON state block unless the user asks to change protocol text.
5. Keep the `ledger` array append-only and honest.

### Command Map

- `/myney-setup` → `commands[]` entry in `MYNEY.md`
- `/myney-whoami` → `commands[]` entry in `MYNEY.md`
- `/myney-party` → `commands[]` entry in `MYNEY.md`
- `/myney-quest` → `commands[]` entry in `MYNEY.md`
- `/myney-pair` → `commands[]` entry in `MYNEY.md`
- `/myney-handoff` → `commands[]` entry in `MYNEY.md`
- `/myney-invite` → `commands[]` entry in `MYNEY.md`
- `/myney-agent` → `agents[]` entry in `MYNEY.md`
- `/myney-skills` → `commands[]` entry in `MYNEY.md`
- `/myney-memory` → `commands[]` entry in `MYNEY.md`
- `/myney-todo` → `commands[]` entry in `MYNEY.md`
- `/myney-autosync` → `commands[]` entry in `MYNEY.md`
- `/myney-check` → `commands[]` entry in `MYNEY.md`

## Key Rules

- **State-first:** Always read the JSON state before responding to any command.
- **Append-only ledger:** Never edit or delete past entries.
- **Memory discipline:** Log a `memoryJournal` entry for every meaningful conversation or state change.
- **Language awareness:** Respect each member's `languagePreferences`.

## Agents

MYney agents are protocols, not background processes. Read the `agents[]` array
inside `MYNEY.md` for their purpose and apply the correct behavioral protocol:

| Agent      | Title                   | When to Apply                                |
| ---------- | ----------------------- | -------------------------------------------- |
| **MYney**  | Grand Core Orchestrator | Architecture, orchestration, final decisions |
| **Lumina** | Memory Archivist        | Save, recall, diary, memory cleanup          |
| **Nara**   | Onboarding Steward      | Setup, party membership, join-mode           |
| **Kaizen** | Questmaster             | Quest planning, gates, blockers, cadence     |
| **Riven**  | Builder Agent           | Build execution, work plans, implementation  |
| **Vega**   | Integrity Guardian      | Preflight checks, schema validation, risk    |
| **Echo**   | Recall Agent            | History lookup, context search               |

## Optional CLI Mirror

The slash commands are the primary interface. A local TypeScript CLI exists
for automation and testing:

```bash
cd .myney.core
npm run myney -- command list
npm run myney -- setup
npm run myney -- party
```
