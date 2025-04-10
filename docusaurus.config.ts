import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const config: Config = {
  title: 'Brain Eater',
  tagline: '(with semi-quick assignments)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://braineater.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  customFields: {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    emailJsPubKey: process.env.EMAILJS_PUB_KEY,
  },

  // GitHub pages deployment config.
  organizationName: 'braineater', // Update to your GitHub org/user name if applicable
  projectName: 'braineater', // Update to your repo name if applicable

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: false,
          breadcrumbs: true,
          path: 'paths',
          routeBasePath: 'paths',
          editUrl:
            'https://github.com/braineater/braineater/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/braineater/braineater/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/braineater-social-card.png',
    navbar: {
      title: 'BrainEater',
      logo: {
        alt: 'BrainEater Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/create-a-post', label: 'Create Post', position: 'right'},
        {to: '/paths', label: 'All Paths', position: 'right'},
        {to: '/blog', label: 'Blog', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
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
              href: 'https://github.com/braineater/braineater',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BrainEater, Built with Docusaurus & Dotown Design Room.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;