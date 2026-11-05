---
layout: home
title: AI Game Lab
description: A research and planning notebook for making a small game with AI. Sources, engine comparisons, and experiments to plan before development begins.

hero:
  name: AI Game Lab / IS218
  text: Research before the first build.
  tagline: A working notebook for making games with AI. Explore the tools, question the tradeoffs, and shape a small game we can actually finish.
  image:
    src: /research-loop.svg
    alt: Proposed development loop, from human intent to an AI draft, human review, and playtesting.
  actions:
    - theme: brand
      text: Explore the research
      link: /research/overview
    - theme: alt
      text: See the project plan
      link: /planning/roadmap

features:
  - title: 01 — Research
    details: Compare engines, study AI workflows, and collect primary sources. Separate documented capabilities from claims we still need to test.
    link: /research/overview
    linkText: Read the findings
  - title: 02 — Plan
    details: Define the game loop, scope the first playable version, and design experiments with clear success criteria.
    link: /planning/game-brief
    linkText: Shape the game brief
  - title: 03 — Build later
    details: Implementation begins after the research and planning decisions. No game prototype or completed experiments are claimed here.
    link: /planning/experiments
    linkText: Review planned experiments
---

<script setup>
import { withBase } from 'vitepress'
</script>

<div class="lab-home">
  <div class="lab-status">
    <strong>Research &amp; planning</strong>
    <span>Snapshot · November 5, 2026</span>
    <span>Game development has not started</span>
  </div>
  <div class="lab-question">
    <div>
      <div class="lab-eyebrow">The research question</div>
      <h2>Where can AI help us make a better small game?</h2>
      <p>Start with a playable idea and human judgment. Use this notebook to decide where AI could save effort, where its output needs checking, and what evidence will guide the first build.</p>
    </div>
    <ul class="lab-topics">
      <li><a :href="withBase('/research/engines.html')"><span>01</span>Choose an engine to investigate<b aria-hidden="true">↗</b></a></li>
      <li><a :href="withBase('/research/ai-workflows.html')"><span>02</span>Map AI into the workflow<b aria-hidden="true">↗</b></a></li>
      <li><a :href="withBase('/research/asset-pipeline.html')"><span>03</span>Plan art, audio, and provenance<b aria-hidden="true">↗</b></a></li>
      <li><a :href="withBase('/research/sources.html')"><span>04</span>Follow the source material<b aria-hidden="true">↗</b></a></li>
    </ul>
  </div>
</div>
