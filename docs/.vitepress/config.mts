import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'AI Game Lab',
  description: 'An IS218 research notebook for making games with AI. Evidence, decisions, and a plan before the first build. November 2026.',
  base: '/is218-individual-game/',
  cleanUrls: false,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/is218-individual-game/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#102c36' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Game Lab',
    nav: [
      { text: 'Research', link: '/research/overview', activeMatch: '/research/' },
      { text: 'Planning', link: '/planning/roadmap', activeMatch: '/planning/' },
      { text: 'Sources', link: '/research/sources' }
    ],
    sidebar: [
      {
        text: 'Research · November 2026',
        items: [
          { text: 'Start here', link: '/research/overview' },
          { text: 'Engine comparison', link: '/research/engines' },
          { text: 'AI workflows', link: '/research/ai-workflows' },
          { text: 'REA & game reconstruction', link: '/research/rea-game-reconstruction' },
          { text: 'Assets & provenance', link: '/research/asset-pipeline' },
          { text: 'Source library', link: '/research/sources' }
        ]
      },
      {
        text: 'Plan the game',
        items: [
          { text: 'Research roadmap', link: '/planning/roadmap' },
          { text: 'Game brief', link: '/planning/game-brief' },
          { text: 'Experiment backlog', link: '/planning/experiments' },
          { text: 'Decision log', link: '/planning/decisions' }
        ]
      },
      {
        text: 'This notebook',
        items: [{ text: 'Maintain the site', link: '/guide/site-maintenance' }]
      }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/is218-individual-game' }],
    editLink: {
      pattern: 'https://github.com/kaw393939/is218-individual-game/edit/main/docs/:path',
      text: 'Improve this page'
    },
    outline: [2, 3],
    lastUpdated: { text: 'Page updated' },
    footer: {
      message: 'IS218 · Research & planning · Evidence before implementation',
      copyright: 'Research snapshot: November 5, 2026'
    }
  }
})
