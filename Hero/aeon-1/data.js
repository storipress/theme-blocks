import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Positive News', 'Latest', 'Trending', 'World', 'Local'],
  pages: ['Essays', 'Ideas', 'Videos', 'About'],
  logo,
  articles: [
    {
      title: 'Man Having Tea Party',
      blurb: 'This man was found having lots of fun with a monkey at montana beach. He was hillarious. God bless him.',
      headline: 'https://picsum.photos/1000/500',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
    {
      title: 'mock data',
      blurb: 'This is mock data to help see scroll menu at 100 vh. Waheguru!',
      headline: 'https://via.placeholder.com/1600x900',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
    {
      title: 'mock data',
      blurb: 'This is mock data to help see scroll menu at 100 vh. Waheguru!',
      headline: 'https://via.placeholder.com/1600x900',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
    {
      title: 'mock data',
      blurb: 'This is mock data to help see scroll menu at 100 vh. Waheguru!',
      headline: 'https://via.placeholder.com/1600x900',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
    {
      title: 'mock data',
      blurb: 'This is mock data to help see scroll menu at 100 vh. Waheguru!',
      headline: 'https://via.placeholder.com/1600x900',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
    {
      title: 'mock data',
      blurb: 'This is mock data to help see scroll menu at 100 vh. Waheguru!',
      headline: 'https://via.placeholder.com/1600x900',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
  ],
  article: {
    title: 'Man Having Tea Party',
    blurb: 'This man was found having lots of fun with a monkey at montana beach. He was hillarious. God bless him.',
    headline: 'https://picsum.photos/id/1043/1600/900',
    headlineCaption: 'This is caption',
    url: '#',
    desk: 'Foo',
    time: new Date(),
    authors: [
      { name: 'John Doe', url: '#' },
      { name: 'Mitchell Senior', url: '#' },
    ],
  },
  site: {
    name: 'SiteName',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    instagram: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com',
    youtube: 'https://www.youtube.com',
    pinterest: 'https://www.pinterest.com',
    whatsapp: 'https://www.whatsapp.com',
    reddit: 'https://www.reddit.com',
    tiktok: 'https://www.tiktok.com',
    geneva: 'https://www.geneva.com',
  },
}
