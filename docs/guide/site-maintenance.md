---
description: How to edit, build, publish, and maintain the VitePress research notebook.
---
# Maintain the site

The site is built with VitePress and deployed through GitHub Actions to **[GitHub Pages](https://kaw393939.github.io/is218-individual-game/)**.

## Local workflow

Use Node.js 24 (recorded in `.nvmrc`) and npm. From the repository root:

```sh
npm ci
npm run docs:dev
```

Open the URL printed by VitePress. This project uses the `/is218-individual-game/` base path locally and in production.

Before publishing, build and inspect the production output:

```sh
npm run docs:build
npm run docs:preview
```

The build also detects unresolved internal Markdown links. Keep this check enabled.

The project pins stable VitePress 1.6.4 and overrides its inherited Vite dependency to patched Vite 6.4.5. The Vue plugin supports Vite 6. Retain the lockfile and verify the production build, local preview, and `npm audit` when updating this tooling.

## Where things live

| Location | Purpose |
| --- | --- |
| `docs/research/` | Findings and primary sources |
| `docs/planning/` | Brief, roadmap, experiments, and decisions |
| `docs/.vitepress/config.mts` | Title, navigation, search, and repository base path |
| `docs/.vitepress/theme/` | Visual theme |
| `docs/public/` | Static assets |
| `.github/workflows/deploy.yml` | Pull-request build checks and production deployment |

## Publish an update

Push a reviewed change to `main`. The workflow runs `npm ci`, builds the docs, uploads `docs/.vitepress/dist`, and deploys the artifact to the `github-pages` environment. Pull requests build without deployment. The workflow can also be run manually from the repository's Actions tab.

The repository's **Settings → Pages → Build and deployment → Source** must remain **GitHub Actions**. The VitePress `base` must remain `/is218-individual-game/` while the project is hosted at its current repository URL. Pages links use the generated `.html` URLs.

References: [VitePress deployment guide](https://vitepress.dev/guide/deploy), [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Add or revise research

1. Use an official source for technical capabilities and platform requirements.
2. Record the review date; include a publication date only when the source provides one.
3. Separate documented facts, project recommendations, and untested hypotheses.
4. Link the supporting page near the claim and add it to the [source library](../research/sources.md).
5. Update the [decision log](../planning/decisions.md) when a project choice changes.
6. Build the site before pushing.

Changing the page content does not mean its sources have been reverified. Update the research review date only after checking the evidence again. The initial snapshot is November 5, 2026.

## Hosting scope

This deployment serves the static documentation. If a future game needs server-side code or live AI requests, its architecture and hosting need a separate decision. GitHub Pages serves static files. [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
