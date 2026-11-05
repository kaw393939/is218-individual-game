# AI Game Lab · IS218

**[Visit the research and planning site →](https://kaw393939.github.io/is218-individual-game/)**

A VitePress notebook for researching how to make games with AI, with an initial research snapshot dated **November 5, 2026**. It contains source-backed findings, engine comparisons, a game brief, an experiment backlog, and a decision log.

**Current phase: research and planning.** Game implementation comes later; this repository currently contains the documentation site only. Proposed experiments have not been run, and an engine has not been selected.

## Read the notebook

- [Research overview](https://kaw393939.github.io/is218-individual-game/research/overview.html)
- [Engine comparison](https://kaw393939.github.io/is218-individual-game/research/engines.html)
- [Research roadmap](https://kaw393939.github.io/is218-individual-game/planning/roadmap.html)
- [Source library](https://kaw393939.github.io/is218-individual-game/research/sources.html)

## Work locally

Use Node.js 24 (see `.nvmrc`) and npm.

```sh
npm ci
npm run docs:dev
```

Build and preview the production site:

```sh
npm run docs:build
npm run docs:preview
```

The terminal prints the local URL, including the `/is218-individual-game/` base path. Edit Markdown in `docs/`; navigation and deployment settings live in `docs/.vitepress/config.mts`.

## Publishing

[GitHub Actions](https://github.com/kaw393939/is218-individual-game/actions/workflows/deploy.yml) builds and deploys the site to GitHub Pages on every push to `main`. Pull requests build for validation without publishing. Pages uses **GitHub Actions** as its publishing source.

Read [Maintain the site](https://kaw393939.github.io/is218-individual-game/guide/site-maintenance.html) for publishing details and research conventions.
