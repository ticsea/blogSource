import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '639'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9d9'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '4f9'),
            routes: [
              {
                path: '/docs/Github/git',
                component: ComponentCreator('/docs/Github/git', '132'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Github/git-AI-EDIT',
                component: ComponentCreator('/docs/Github/git-AI-EDIT', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Github/gitignore',
                component: ComponentCreator('/docs/Github/gitignore', '74b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Github/LICENSE',
                component: ComponentCreator('/docs/Github/LICENSE', 'a6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MinecraftModding/',
                component: ComponentCreator('/docs/MinecraftModding/', '853'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MinecraftModding/Intellij/PracticalTips',
                component: ComponentCreator('/docs/MinecraftModding/Intellij/PracticalTips', '755'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MinecraftModding/Java/Generics',
                component: ComponentCreator('/docs/MinecraftModding/Java/Generics', 'e24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MinecraftModding/Java/JavaMemoryModel',
                component: ComponentCreator('/docs/MinecraftModding/Java/JavaMemoryModel', 'e40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MinecraftModding/Java/static',
                component: ComponentCreator('/docs/MinecraftModding/Java/static', 'cca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MinecraftModding/Java/Supplier',
                component: ComponentCreator('/docs/MinecraftModding/Java/Supplier', '263'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other/keywordexplaining',
                component: ComponentCreator('/docs/Other/keywordexplaining', '660'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other/Neovim',
                component: ComponentCreator('/docs/Other/Neovim', 'a0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other/rpgmakerFileStructure',
                component: ComponentCreator('/docs/Other/rpgmakerFileStructure', '43e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Other/VSC_hotkey',
                component: ComponentCreator('/docs/Other/VSC_hotkey', 'a75'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
