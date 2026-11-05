---
description: What REA can contribute to reconstructing game behavior, with published examples and bounded local tests.
---
# REA & game reconstruction

**Reviewed November 5, 2026 · Research and planning**

REA connects an AI coding agent to tools for inspecting software. For reconstructing a game, the useful unit is a specific behavior that we can recover, explain, implement, and compare. See the [official repository](https://github.com/morluto/rea) and [6.8.0 release](https://github.com/morluto/rea/releases/tag/rea-agents-6.8.0).

## How reconstruction works

1. **Inspect the executable.** Identify its format and architecture, then locate relevant functions, callers, constants, and data using a configured analysis backend.
2. **Recover the behavior.** Explain inputs, state changes, calculations, and dependencies. Check pseudocode against instructions and observations.
3. **Reimplement.** Write understandable code for that behavior in a separate project.
4. **Compare.** Run equivalent inputs through the original and reconstruction; record matches, differences, and untested cases.

Keep three deliverables distinct: **native source reconstruction** recovers an implementation from compiled instructions; **mechanics reproduction** implements observed rules in a new game; **asset extraction** retrieves packaged media or data. A recovered function does not restore the original engine project, and unpacked assets do not explain its mechanics.

## Published example · DX-Ball

REA's [DX-Ball case study](https://rea.tools/showcase/dx-ball/) traces sound panning through instructions, a caller, and stored constants. The reconstruction project checks the resulting C function against the original x86 in 3,205 cases and reports matching compiled bytes. The published checkpoint is a partial reconstruction; work on a playable game continues. It is evidence for a checked function, not a finished whole-game clone.

## Published example · TH04

The [TH04 case study](https://rea.tools/showcase/th04/) traces bullet spacing and aiming from DOS instructions into maintained C++. Compiler checks cover the surrounding bullet-generation code. The existing reconstruction project supplies the source and checks; its broader progress should not be attributed entirely to REA.

## Tested here · REA 6.8.0

| Local target or probe | Observed result |
| --- | --- |
| Baldur's Gate 3 | Universal x86_64 + arm64; desktop, Mach-O, and plist inspection succeeded |
| Cyberpunk 2077 2.5 | arm64; desktop, Mach-O, and plist inspection succeeded |
| BG3 `GamePlatform.pak` archive probe | Unsupported format |
| Cyberpunk `basegame_2_mainmenu.archive` probe | Unsupported format |

No native decompilation was performed: Ghidra, Hopper, IDA, and Kuna were not configured. No assets were unpacked. These results establish metadata inspection and limits of the specific probes.

## Proposed · One mechanic next

Later, trace one small calculation, reimplement it with placeholder assets, and compare outputs. We remain in research now. Package extraction would be a separate investigation using specialists such as [LSLib](https://github.com/Norbyte/lslib) for BG3 or [WolvenKit](https://github.com/WolvenKit/WolvenKit) for Cyberpunk. Mac support varies by tool and component and needs verification before use.
