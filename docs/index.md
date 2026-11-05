---
layout: home
title: AI Game Lab
description: Research AI game development, REA game reconstruction, and the tools and decisions for a small original game.

hero:
  name: AI Game Lab / IS218
  text: Research before the first build.
  tagline: Explore how AI assists game development, what REA can reconstruct from existing games, and which tools and decisions matter before our first build.
  image:
    src: /research-loop.svg
    alt: Proposed development loop, from human intent to an AI draft, human review, and playtesting.
  actions:
    - theme: brand
      text: How REA reconstructs games
      link: /research/rea-game-reconstruction
    - theme: alt
      text: See the project plan
      link: /planning/roadmap
---

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="lab-home">
  <div class="lab-status">
    <strong>Research &amp; planning</strong>
    <span>Reviewed · November 5, 2026</span>
  </div>
  <div class="lab-question">
    <div>
      <div class="lab-eyebrow">Start here</div>
      <h2>Understand the tools. Plan an original game.</h2>
      <p>Start with documented examples and their limits. Compare engines, choose an AI workflow, and define a manageable game for a solo developer with clear goals before coding begins.</p>
    </div>
    <ul class="lab-topics">
      <li><a :href="withBase('/research/rea-game-reconstruction.html')"><span>01</span>REA and game reconstruction<b aria-hidden="true">↗</b></a></li>
      <li><a :href="withBase('/research/engines.html')"><span>02</span>Compare game engines<b aria-hidden="true">↗</b></a></li>
      <li><a :href="withBase('/research/ai-workflows.html')"><span>03</span>AI development workflow<b aria-hidden="true">↗</b></a></li>
      <li><a :href="withBase('/planning/game-brief.html')"><span>04</span>Define the game brief<b aria-hidden="true">↗</b></a></li>
    </ul>
  </div>
</div>
