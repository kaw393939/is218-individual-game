---
description: Planned experiments for engine fit, AI effort, design quality, asset consistency, and runtime AI value.
---
# Experiment backlog

**Created November 5, 2026 · All experiments are planned**

No results have been collected. Planning-only comparisons can begin now; implementation and asset generation trials are deferred until the next phase.

| ID | Question | Phase | Status |
| --- | --- | --- | --- |
| E01 | Which engine fits the smallest useful concept? | Planning | Not started |
| E02 | Does AI reduce total implementation effort? | Implementation, later | Deferred |
| E03 | Can generated assets form a coherent set? | Asset trial, later | Deferred |
| E04 | Does AI improve the design document? | Planning | Not started |
| E05 | Would runtime AI improve this game? | Feasibility analysis | Not started |

## E01 · Engine fit {#e01-engine-fit}

**Compare:** plan the same 2D mechanic in Phaser and Godot using official documentation. Do not build a prototype in this phase.

**Collect:** concepts required, likely file/scene structure, export steps, documentation gaps, uncertainties, and estimated learning effort. Use the [selection rubric](../research/engines.md#selection-rubric).

**Decision supported:** which engine deserves the first playable trial later.

## E02 · Total implementation effort {#e02-total-implementation-effort}

**Later:** compare equivalent bounded tasks with and without AI assistance, using the same requirements and time budget. Record task order and prior familiarity so learning effects are visible.

**Collect:** planning, implementation, review, and correction time; defects; build outcome; and ability to explain the result. A tiny trial is exploratory and will not establish a general productivity percentage.

**Decision supported:** which tasks benefit enough to justify the full review effort.

## E03 · Asset consistency {#e03-asset-consistency}

**Later:** produce a player, obstacle, and background from the same brief.

**Collect:** readability, style consistency, animation alignment if applicable, cleanup effort, exported size, and [provenance completeness](../research/asset-pipeline.md).

**Decision supported:** whether the workflow can support a usable asset set.

## E04 · Design review {#e04-design-review}

**Compare:** a human-written brief and a reviewed AI revision. Ask the assistant to identify ambiguities before proposing additions.

**Collect:** ambiguities resolved, unsupported assumptions introduced, unnecessary scope added, and changes accepted or rejected with reasons.

**Decision supported:** a reusable prompt and review process for design work.

## E05 · Runtime AI value {#e05-runtime-ai-value}

**Analyze:** a fixed authored interaction versus a proposed generated interaction. This is initially a paper comparison; no API integration is needed.

**Collect:** the intended player benefit, acceptable latency, recurring cost assumptions, content boundaries, failure behavior, and offline fallback. Validate prices and service terms only if this option advances.

**Decision supported:** whether runtime generation belongs in this game's scope at all.

## Trial record template

```text
Experiment ID and date:
Question and hypothesis:
Task, constraints, and acceptance criteria:
Tool/model and engine versions, if applicable:
Exact prompt and reference sources:
Time budget and actual effort by activity:
Observations, defects, and unsuccessful attempts:
Artifacts or evidence links:
Decision, uncertainty, and next step:
```

Use the same task definition and criteria for each comparison. Save failures and correction work alongside successful output.
