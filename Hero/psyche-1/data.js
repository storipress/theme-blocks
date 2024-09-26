import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Positive', 'Latest', 'Trending'],
  pages: ['Ideas', 'Guides', 'Films', 'Popular', 'About', 'Contact'],
  logo,
  articles: [
    {
      title: 'Local man Set to Fly Out',
      blurb: 'Nisi ex enim commodo non velit.',
      headline: 'https://picsum.photos/800/600',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [
        { name: 'John Doe', url: '#' },
        { name: 'Mitchell Senior', url: '#' },
      ],
    },
    {
      title: 'Man Found Having Tea Party With Hamster Again',
      blurb: 'Esse eu Lorem aliqua pariatur occaecat officia cupidatat proident consequat aliquip dolore.',
      headline: 'https://picsum.photos/800/650',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [{ name: 'Aniqa Aguilar', url: '#' }],
    },
    {
      title: 'Squidgy Hat Likely To Win Village Show',
      blurb: 'Labore dolore ex consectetur deserunt mollit sint fugiat laborum dolor.',
      headline: 'https://picsum.photos/800/700',
      headlineCaption: 'This is caption',
      url: '#',
      time: new Date(),
      authors: [{ name: 'Tomos Milne', url: '#' }],
    },
    {
      title: 'mock data',
      blurb: 'This is mock data to help see scroll menu at 100 vh. Waheguru!',
      headline: 'https://picsum.photos/800/600',
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
      headline: 'https://picsum.photos/800/600',
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
      headline: 'https://picsum.photos/800/600',
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
      headline: 'https://picsum.photos/800/600',
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
      headline: 'https://picsum.photos/800/600',
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
    headline: 'https://picsum.photos/800/600',
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
    socials: {
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
  },
}
