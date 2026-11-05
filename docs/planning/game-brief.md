---
description: A working game design brief that keeps assumptions and unanswered decisions visible.
---
# Game brief

**Status: working template · No concept selected**

This brief turns a broad interest in AI-assisted development into a game small enough to investigate. Suggested answers below are hypotheses, not approved requirements.

## Working concept

**Candidate:** an original single-screen 2D game with one movement mechanic, one obstacle type, a visible score, and restart.

The player should understand the immediate goal and receive clear feedback. The specific theme and rules remain open.

| Brief field | Current answer |
| --- | --- |
| Target player | To decide |
| Target device and platform | To decide; browser is a candidate |
| One-sentence pitch | To write after choosing the theme and action |
| Core player action | Candidate: move or dodge |
| Core loop | Candidate: act → avoid obstacle → receive feedback → retry |
| Success and failure | To define in observable terms |
| Session length | Proposed: short enough for repeated playtests |
| Engine | Pending E01 |
| Visual and audio direction | To define in an asset brief |
| Accessibility needs | Readable contrast, clear instructions, input options to evaluate |
| Available time and budget | To decide |

## Scope proposal

For the first playable milestone, investigate one scene, one primary action, one obstacle type, score or progress feedback, an ending, and restart.

Proposed exclusions: multiplayer, accounts, purchases, a large world, branching narrative, and live model calls. These are planning recommendations and can change if the game brief provides a reason.

## Role of AI

| Area | Proposed use | Evidence required |
| --- | --- | --- |
| Design | Clarify rules and find ambiguity | A reviewed brief with fewer unanswered requirements |
| Implementation, later | Help with bounded tasks | Working behavior, understandable changes, correction-time record |
| Assets, later | Explore a small coherent set | Visual review, editable exports, complete provenance |
| Runtime generation | Undecided | A specific player benefit and a feasible failure/cost plan |

## Draft acceptance criteria

These will become implementation criteria after the concept is chosen:

- A new player can identify the goal and available controls.
- The primary action produces visible, consistent feedback.
- The game can reach its success or failure condition and restart cleanly.
- The intended build runs on the selected target device.
- We can explain the core systems and reproduce the build.

## Questions to resolve next

What makes the action interesting after the first minute? What is the smallest change that creates a meaningful choice? Which evidence would make us abandon or simplify the concept?

Record answers in the [decision log](./decisions.md), then update this brief to reflect actual choices.
