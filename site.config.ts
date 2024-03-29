import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: process.env.NEXT_PUBLIC_ROOT_ID,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: process.env.NEXT_PUBLIC_SPACE_ID,
  // 1a2baa72-2b71-44d5-88a9-0b4255eb4077
  // basic site info (required)
  name: process.env.NEXT_PUBLIC_SITE_NAME,
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN,
  author: 'Joem Elias Sanez',

  // open graph metadata (optional)
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,

  // social usernames (optional)
  // twitter: 'israelias',
  github: 'israelias',
  linkedin: 'joem-elias-sanez',
  //mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: 'mailto:israelias.js@gmail.com', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: process.env.NEXT_PUBLIC_PAGE_ICON,
  defaultPageCover: process.env.NEXT_PUBLIC_PAGE_COVER,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  pageUrlAdditions: {
    '/resume-redux': process.env.NEXT_PUBLIC_RESUME_ID,
    '/vim-hacks': process.env.NEXT_PUBLIC_VIM_ID,
    '/node': process.env.NEXT_PUBLIC_NODE_ID,
    '/spring23': process.env.NEXT_PUBLIC_SPRING23_ID,
    '/autumn23': process.env.NEXT_PUBLIC_AUTUMN23_ID,
    '/wiki': process.env.NEXT_PUBLIC_WIKI_ID
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: process.env.NEXT_PUBLIC_ABOUT_ID
    },
    {
      title: 'Contact',
      pageId: process.env.NEXT_PUBLIC_CONTACT_ID
    },
    {
      title: 'Notes',
      pageId:'d5763fd471e345359e7b263c1e53bb23'
    }

  ]
})
