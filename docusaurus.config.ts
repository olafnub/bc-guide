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

  plugins: [
    [
      'vercel-analytics',
      {
        debug: true,
        mode: 'auto',
      },
    ],
  ],
  
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
            'https://github.com/olafnub/bc-guide/tree/main/paths',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/olafnub/bc-guide/tree/main/paths',
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
        // {to: '/create-a-post', label: 'Blog', position: 'right'},
        {to: '/paths', label: 'All Paths', position: 'right'},
        {to: '/blog', label: 'Blog', position: 'right'},
        {to: '/contribute', label: 'Contribute', position: 'right'},

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/paths/foundation/how-this-course-will-work',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'CollegeDAO Telegram',
              href: 'https://t.me/collegedao',
            },
            {
              label: 'CollegeDAO X',
              href: 'https://x.com/collegedao_hub',
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
              href: 'https://github.com/olafnub/bc-guide',
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