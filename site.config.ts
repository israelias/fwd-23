import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'af420236cda942f8bc524c9b78789f7e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'f0ff58a7-8b03-41b2-804f-738f211d1fe6',
  //"1a2baa72-2b71-44d5-88a9-0b4255eb4077",

  // basic site info (required)
  name: 'Source 23',
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
  defaultPageIcon: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa8ea052-7e54-48ba-8465-728b2c3cf0ff/joem_elias_sanez_thumbnail.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221210T164500Z&X-Amz-Expires=86400&X-Amz-Signature=bdfdb6dce2b49f485424d8c998ed1d7b54c7167aca065524b3f436adfe3b24c0&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22joem_elias_sanez_thumbnail.png%22&x-id=GetObject",
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

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
    '/resume-redux': '8d71ade5bc1d40f58f5bdfd58cef35a3',
    '/vim-hacks': '303edafc2b074aa9b1ba2a6052807410'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'd441caf3bf7a47cc87eccb0da2853eff'
    },
    {
      title: 'Contact',
      pageId: 'f086c930ca9a49b8b2a4814ab4da607e'
    }
  ]
})
