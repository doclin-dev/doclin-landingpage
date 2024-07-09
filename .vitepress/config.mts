import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Doclin",
  description: "Real-time code commenting and discussion.",
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Privacy', link: '/privacy' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Privacy', link: '/privacy' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/doclin-dev/doclin' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/doclin' }
    ]
  }
})
