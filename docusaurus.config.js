// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const NavbarConfig = require('./src/components/navbar/config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enrique Prieto',
  tagline: 'Engenenheiro de Software',
  favicon: 'img/favicon.ico',
  url: 'https://prieto-bloc.tec.br',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: NavbarConfig,
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Redes Sociais',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/enrique__prieto',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/enrique-prieto',
              },
              {
                label: 'Github',
                href: 'https://github.com/enriqueprieto/prieto-blog',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Este blog foi criado utilizando Docusaurus.`,
      },
      blog: {
        sidebar: {
          hideable: true
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
