---
description: A concise workflow for using AI to plan and later implement game mechanics.
---
# AI workflows

**Reviewed November 5, 2026 · Proposed workflow**

## Tools to investigate

| Tool | Documented use |
| --- | --- |
| [Codex](https://learn.chatgpt.com/docs/prompting) | Plan tasks using context, constraints, and verification criteria |
| [Copilot plan mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode) | Investigate requirements before implementation; editor support varies |
| [Unity AI](https://unity.com/blog/unity-ai-how-to-get-started) | Editor-integrated Ask, Plan, and Agent modes; described as open beta |
| [REA](./rea-game-reconstruction.md) | Inspect existing games and gather evidence for reconstructing selected behavior |

No assistant or paid service has been selected.

## Working loop

1. **Define:** one player-visible behavior and its constraints.
2. **Investigate:** resolve ambiguities using official documentation.
3. **Plan:** review the approach and acceptance criteria.
4. **Implement later:** make one bounded change.
5. **Verify:** inspect the result, run checks, and playtest.
6. **Record:** save evidence, correction time, and the decision.

## Reusable planning prompt

```text
Research this game idea; do not implement it yet.
Concept: [one sentence]
Player/platform: [known or undecided]
Constraints: [time, skills, assets, budget]
Identify missing requirements and compare two feasible approaches.
Cite official technical sources. Propose one small playable milestone
with observable acceptance criteria and decisions needed before coding.
```

Generated code and automated reviews can contain errors. Later verification must cover engine compatibility, exported builds, and player-visible behavior. [GitHub's documented limitations](https://docs.github.com/en/copilot/responsible-use/agents)

Next: evaluate design review in [E04](../planning/experiments.md#e04-design-review).
