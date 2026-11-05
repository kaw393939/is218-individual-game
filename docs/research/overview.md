---
description: The scope, evidence standard, and open questions for researching AI-assisted game development in November 2026.
---
# Research overview

<span class="status-pill">Phase 01 · Research</span>

**Research snapshot: November 5, 2026.** This notebook investigates how a solo developer can use AI to plan, build, and evaluate a small game. Today we are establishing the research and plan; game coding comes later.

## The central question

Where does AI help us make a game that we understand, can maintain, and enjoy playing—and what review effort does that help require?

The goal is a repeatable, evidence-based process. An impressive first draft is only one observation. We also need to account for corrections, exports, asset consistency, and the player's experience.

## Three research tracks

| Track | Questions to investigate | Planned output |
| --- | --- | --- |
| Development assistance | Can an assistant clarify design, explain engine APIs, and help with bounded implementation tasks? | A reviewed workflow and task template |
| Generated assets | Can art, audio, or text meet a coherent brief with documented origins? | An asset brief and provenance record |
| AI during gameplay | Would generating content at runtime improve the actual game? | A value, latency, cost, and failure analysis |

Traditional game AI, such as enemy state machines or pathfinding, is a separate design topic. We will use precise terms when discussing it.

## Initial findings

- **Engine selection follows the game.** Start with the target platform and core loop, then compare the [engine shortlist](./engines.md).
- **Planning workflows are available.** Official assistant documentation supports investigating requirements before implementation. See [AI workflows](./ai-workflows.md).
- **Generated content needs its own records.** Capture origins, editing, and intended use in the [asset pipeline](./asset-pipeline.md).
- **Productivity is an open question.** We have designed [experiments](../planning/experiments.md), but have not run them.

## How to read the evidence

**Verified capability** means a linked primary source describes a feature or requirement. It does not mean we have tested it in this project. **Planning judgment** means a proposed choice based on our likely scope. **Open question** means the decision or result is still pending.

November 5 is the date these sources were reviewed. Some pages are continuously updated and have no publication date. This is an initial snapshot, not a complete survey of every release in November 2026. Prices, beta access, product features, and distribution requirements need another check before adoption.

## Start here

1. Read the [engine comparison](./engines.md) and [AI workflow](./ai-workflows.md).
2. Fill in the [game brief](../planning/game-brief.md).
3. Work through the [research roadmap](../planning/roadmap.md).
4. Record choices in the [decision log](../planning/decisions.md), keeping source links and uncertainty visible.

The [source library](./sources.md) collects the official references behind this snapshot.
