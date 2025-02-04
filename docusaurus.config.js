const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const NavbarConfig = require('./src/components/navbar/config');

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
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/home.scss')
          ],
        }
      }
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: NavbarConfig,
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Este site foi criado utilizando Docusaurus.`,
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
