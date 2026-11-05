# AI Game Lab · IS218

**[Visit the research and planning site →](https://kaw393939.github.io/is218-individual-game/)**

A VitePress notebook for making games with AI: engine comparisons, REA game reconstruction, and a practical project plan. Research snapshot: **November 5, 2026**.

**Current phase: research and planning.** Static BG3/Cyberpunk inspections are recorded; game implementation and engine selection come later.

## Read the notebook

- [Research overview](https://kaw393939.github.io/is218-individual-game/research/overview.html)
- [REA and game reconstruction](https://kaw393939.github.io/is218-individual-game/research/rea-game-reconstruction.html)
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
