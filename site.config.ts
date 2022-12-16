import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: process.env.NEXT_PUBLIC_ROOT_ID,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: process.env.NEXT_PUBLIC_SPACE_ID,
  // basic site info (required)
  name: 'fwd-23',
  domain: 'israelias',
  author: 'Joem Elias Sanez',

  // open graph metadata (optional)
  description: 'Inspect Source 2023: Personal site of Joem Elias Sanez',

  // social usernames (optional)
  twitter: 'israelias',
  github: 'israelias',
  linkedin: 'joem-elias-sanez',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: process.env.NEXT_PUBLIC_PAGE_ICON,
  defaultPageCover: null,
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
    '/vim-hacks': process.env.NEXT_PUBLIC_VIM_ID
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
    }
  ]
})
