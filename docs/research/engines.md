---
description: Compare Phaser, Godot, Unity, and Unreal for a small AI-assisted game project.
---
# Engine comparison

**Reviewed November 5, 2026 · Decision pending**

Choose the delivery target first: a browser game, a desktop game, or a larger 3D experience. AI assistance should fit that choice.

## The shortlist

| Candidate | Source-backed capability | Planning fit | Question to resolve |
| --- | --- | --- | --- |
| **Phaser** | JavaScript/TypeScript HTML5 framework with WebGL and Canvas rendering | A small 2D browser game with a web development workflow | Will code-first scenes suit the concept? |
| **Godot** | A visual editor and an official complete first-2D-game learning path; MIT-licensed engine | A small 2D game with an integrated editor | Which export target and scripting language fit? |
| **Unity** | Its May 2026 overview describes project-aware AI assistance in Unity 6.0+, labeled open beta | Investigating editor-integrated assistance | Are availability, account requirements, and costs acceptable? |
| **Unreal Engine** | Blueprints provide node-based gameplay scripting in the editor | A 3D concept that warrants a larger engine investigation | Can we inspect visual graphs and generated code efficiently? |

Capability sources: [Phaser docs](https://www.phaser.io/oss/docs), [Godot first 2D game](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html), [Godot license](https://godotengine.org/license/), [Unity AI overview](https://unity.com/blog/unity-ai-how-to-get-started), [Unreal Blueprints](https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine).

## Proposed first comparison

Compare **Phaser and Godot** using the same small 2D concept. Keep Unity as an option for investigating integrated AI workflows. Revisit Unreal if the game brief establishes a 3D requirement. This is a planning judgment, not a tested ranking.

Godot's beginner tutorial recommends starting in 2D and assumes some programming experience. We should budget time to learn the engine rather than treating AI assistance as a substitute for that foundation. [Godot tutorial](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html)

## Selection rubric

Score each category from 1–5 only after collecting evidence. Leave it unscored if it has not been investigated. Record the engine version and target device alongside any result.

| Criterion | Evidence we need |
| --- | --- |
| Player access | Export steps and a realistic delivery path for the intended device |
| Learning effort | Concepts needed for movement, collision, scoring, and restart |
| Reviewability | How well we can understand diffs, scene changes, and assistant suggestions |
| Asset workflow | Import settings, animation support, and iteration effort |
| Verification | Ability to run repeatable checks and observe player-visible behavior |
| Full project cost | Current licensing, services, hosting, and optional AI usage |

No scores have been assigned. Pricing and export compatibility will be checked after we choose a target platform.

## Keep policies in context

Godot's AI contribution rules concern contributions to the Godot project and its official communities. They are not a blanket prohibition on making independent games with AI assistance. [Godot contribution rules](https://contributing.godotengine.org/en/latest/development/contribution_rules.html)

**Next:** use this rubric for [experiment E01](../planning/experiments.md#e01-engine-fit), then record the choice in the [decision log](../planning/decisions.md).
