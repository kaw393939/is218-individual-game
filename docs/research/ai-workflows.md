---
description: A human-led workflow for planning and later implementing game mechanics with AI assistants.
---
# AI workflows

**Reviewed November 5, 2026 · Proposed process**

AI can help investigate a design and draft a plan. The project still needs clear requirements, engine knowledge, and human judgment about the game.

## Planning tools to investigate

Codex documentation recommends supplying the goal, context, constraints, and verification criteria. Its planning workflow can investigate an approach before editing. [OpenAI: Prompting](https://learn.chatgpt.com/docs/prompting)

GitHub Copilot's plan mode researches tasks with read-only tools and produces a plan for review. Availability depends on the editor. [GitHub: Plan mode](https://docs.github.com/en/copilot/how-tos/copilot-in-your-ide/use-copilot-agents/use-plan-mode)

Unity's May 5, 2026 overview describes Ask, Plan, and Agent modes, an official MCP server, and placeholder generators. The suite is described as open beta; its availability and behavior may change. [Unity AI overview](https://unity.com/blog/unity-ai-how-to-get-started)

These are vendor-described capabilities. We have not compared their performance on this project, and no subscription or model choice has been made.

## The proposed working loop

1. **Define intent.** Write the player action, expected behavior, constraints, and acceptance criteria.
2. **Investigate.** Ask the assistant to identify missing information and cite engine documentation.
3. **Review the plan.** Check assumptions, scope, file formats, and verification steps.
4. **Implement later.** When the project enters coding, request one bounded change at a time.
5. **Verify.** Inspect the change, run the appropriate checks, and play the result.
6. **Record.** Save observations, correction effort, and the decision to keep, revise, or reject it.

OpenAI's published long-running Codex example describes an iterative planning and verification process. That experiment is evidence of a workflow, not a guarantee of this project's outcomes. [OpenAI: Long horizon tasks, February 23, 2026](https://developers.openai.com/blog/run-long-horizon-tasks-with-codex)

## A planning prompt to reuse

```text
We are researching a small solo game. Do not implement anything yet.

Candidate concept: [one sentence]
Target player and platform: [known facts or undecided]
Core action and feedback: [description]
Constraints: [time, skills, tools, asset budget]

Identify ambiguities and assumptions. Compare two feasible approaches.
Use official engine documentation for technical claims.
Propose the smallest playable milestone and observable acceptance criteria.
List what we must decide before coding and what can wait.
```

## Human review and playtesting

GitHub documents that generated code may be incorrect or insecure and automated reviews may miss defects or report false positives. Later game work needs engine compatibility checks, exported-build checks, and direct playtesting. [GitHub: Copilot Agents application card](https://docs.github.com/en/copilot/responsible-use/agents)

For example, “make movement feel good” needs more definition. We should agree on input devices, acceleration, speed, collision behavior, and a reproducible scene, then evaluate whether the controls feel responsive.

When coding begins, concise repository instructions can preserve actual setup commands and conventions. Codex supports this through `AGENTS.md`. [OpenAI: Custom instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

**Next:** compare planning quality in [E04](../planning/experiments.md#e04-design-review). Implementation experiments stay deferred.
