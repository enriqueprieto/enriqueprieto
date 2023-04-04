// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const NavbarConfig = require('./src/config/navbar');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prieto Blog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://prieto-bloc.tec.br',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'prieto-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          showReadingTime: true
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
