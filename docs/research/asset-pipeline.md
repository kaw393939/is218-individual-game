---
description: Plan generated art, audio, and writing with a coherent brief and documented provenance.
---
# Assets & provenance

**Reviewed November 5, 2026 · Workflow proposed**

Start with a small art and audio brief before asking any generator for material. A single attractive image does not establish that a tool can produce a consistent game asset set.

## Define the asset brief

Record the visual style, palette, sprite dimensions, animation states, transparency requirements, file formats, and target-device limits. For audio, define purpose, duration, looping behavior, and volume expectations.

The first comparison should use a small set: player, obstacle, and background. Keep placeholder status visible until the work has been reviewed. Unity's overview specifically describes its generators as producing placeholder assets. [Unity AI overview](https://unity.com/blog/unity-ai-how-to-get-started)

## Keep an asset record

| Field | What to record |
| --- | --- |
| Identity | Asset ID, intended role, and filename |
| Origin | Tool, model/version if known, creation date, prompt, and reference sources |
| Use conditions | Applicable tool terms, reference permissions, attribution requirements, and review date |
| Editing | Human changes, source file, and final export |
| Evaluation | Readability, consistency, animation seams, size, and later in-game behavior |
| Status | Placeholder, rejected, approved, or replaced |

This is a proposed project convention. Generating a file does not, by itself, settle whether it fits the project or its intended use. We have not generated or approved production assets.

## Review the set as a whole

- Does the player stand out from the background at the intended display size?
- Do characters share a consistent palette, perspective, and level of detail?
- Do animations align between frames and states?
- Can a human edit the files and reproduce the export?
- Does every accepted item have a complete record?

Record cleanup time as part of [experiment E03](../planning/experiments.md#e03-asset-consistency).

## Research distribution requirements

Steam's Content Survey distinguishes pre-generated and live-generated AI content consumed by players. For live generation it also asks about guardrails against illegal content. [Steam Content Survey](https://partner.steamgames.com/doc/gettingstarted/contentsurvey)

itch.io asks creators to disclose generative materials and distinguishes them from traditional algorithmic game AI, such as pathfinding. [itch.io quality guidelines](https://itch.io/docs/creators/quality-guidelines#accurately-tag-your-use-of-generative-ai)

No game storefront has been selected. Recheck the chosen platform's current requirements before release and retain the source and review date with the decision.
