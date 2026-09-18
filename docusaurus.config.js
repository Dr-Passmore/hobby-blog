const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: "Dr. Passmore's Tech Lab",
  tagline: 'Geeking Out on Electronics and Coding',
  url: 'https://passmoretechlab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.ico',
  organizationName: 'Dr-Passmore', // Usually your GitHub org/user name.
  projectName: 'hobby-blog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Dr-Passmore/hobby-blog/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Dr. Passmore's Tech Lab",
        logo: {
          alt: "Dr. Passmore's Tech Lab logo",
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          { to: '/about', label: 'About', position: 'left' },
          {
            href: 'https://github.com/Dr-Passmore',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/phillippassmore/',
              },
              {
                label: 'Threads',
                href: 'https://www.threads.net/@dr_passmore',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCD--yfP0n1bJ835ZNUNqltQ'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Dr-Passmore',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dr. Passmore's Tech Lab, Phillip Passmore.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
