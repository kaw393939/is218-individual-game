---
description: Official sources reviewed for the November 5, 2026 AI game development research snapshot.
---
# Source library

**Last reviewed: November 5, 2026.** These are primary sources. A review date records when we checked the page; it does not imply a publication date or that the described feature has been tested here.

## Engines and editor tools

| Source | What it supports | Date note |
| --- | --- | --- |
| [Phaser documentation](https://www.phaser.io/oss/docs) | Browser framework, language and rendering options | Living documentation |
| [Godot: Your first 2D game](https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html) | Beginner 2D learning path and prerequisites | Stable docs; version may change |
| [Godot license](https://godotengine.org/license/) | Engine MIT licensing | Current official page |
| [Unity AI: How to get started](https://unity.com/blog/unity-ai-how-to-get-started) | Editor AI modes, integration and beta status | Published May 5, 2026 |
| [Unreal: Blueprints Visual Scripting](https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine) | Node-based gameplay scripting | Living documentation |
| [Godot contribution rules](https://contributing.godotengine.org/en/latest/development/contribution_rules.html) | Upstream contribution policy and its scope | Current contribution docs |

## AI development workflows

| Source | What it supports | Date note |
| --- | --- | --- |
| [OpenAI: Prompting](https://learn.chatgpt.com/docs/prompting) | Task context, constraints and planning | Living documentation |
| [OpenAI: Run long horizon tasks with Codex](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex) | An iterative planning and verification example | Published February 23, 2026 |
| [OpenAI: AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md) | Repository-level agent instructions | Living documentation |
| [GitHub: Copilot plan mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode) | Planning before implementation | Living documentation; editor support varies |
| [GitHub: Copilot Agents application card](https://docs.github.com/en/copilot/responsible-use/agents) | Known limitations and review responsibilities | Living documentation |

## REA and game reconstruction

| Source | What it supports | Date note |
| --- | --- | --- |
| [REA 6.8.0 release](https://github.com/morluto/rea/releases/tag/rea-agents-6.8.0) | Release used for our static Mac inspections | Published October 25, 2026 |
| [REA project](https://github.com/morluto/rea) | Analysis workflows, native providers, and reconstruction limits | Living documentation |
| [DX-Ball case study](https://rea.tools/showcase/dx-ball/) | A sound-pan function reconstructed and compared with original code | Project checkpoint October 7, 2026 |
| [Touhou 4 case study](https://rea.tools/showcase/th04/) | Bullet-angle inspection and its relationship to a maintained reconstruction | Recorded inspection October 7, 2026 |
| [LSLib](https://github.com/Norbyte/lslib) | Larian package extraction and resource conversion | Specialist tool; platform support varies |
| [WolvenKit](https://github.com/WolvenKit/WolvenKit) | REDengine archive/resource workflows | Specialist tool; platform support varies |

**Tested here:** REA 6.8.0 inspected the BG3 and Cyberpunk Mac executables and bundle metadata. Selected `.pak` and `.archive` probes returned unsupported-format errors. The [REA guide](./rea-game-reconstruction.md) summarizes these observations; raw reports stay local.

## Assets and distribution

| Source | What it supports | Date note |
| --- | --- | --- |
| [Steam Content Survey](https://partner.steamgames.com/doc/gettingstarted/contentsurvey) | Pre-generated/live-generated content disclosures | Recheck before a release |
| [itch.io quality guidelines](https://itch.io/docs/creators/quality-guidelines#accurately-tag-your-use-of-generative-ai) | Generative AI tagging and terminology | Recheck before a release |

## Documentation and hosting

| Source | What it supports |
| --- | --- |
| [VitePress deployment](https://vitepress.dev/guide/deploy) | Build commands and repository base-path configuration |
| [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) | Build artifact, workflow permissions, and deployment environment |
| [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) | Static hosting and publishing setup |

## Evidence still to collect

No hands-on engine trial, assistant comparison, productivity measurement, asset test, or playtest has been completed. The [experiment backlog](../planning/experiments.md) defines the evidence we intend to gather.

Before selecting a paid service or shipping a game, verify the relevant version, price, access conditions, terms, and storefront requirements again. We have deliberately left those choices open.
