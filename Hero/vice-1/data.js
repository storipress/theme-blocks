import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: [
    'Positive News',
    'Latest',
    'Trending',
    'World',
    'Local',
    'Environment',
    'Mental Health',
    'Spiritual',
    'Peace',
  ],
  logo,
  articles: [
    {
      title: 'Man Found Having Tea Party With Monkey Again.',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus.',
      headline: 'https://picsum.photos/1226/688',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      deskUrl: '#',
      authors: [
        { name: 'John Doe', url: 'https://example.com' },
        { name: 'Mitchell Senior', url: 'https://example.com' },
      ],
    },
  ],
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://via.placeholder.com/800x600',
    headlineCaption: 'This is caption',
    headlineAlt: 'This is caption',
    url: 'https://example.com',
    desk: 'Foo',
    time: new Date(),
    authors: [
      { name: 'Mitchell Senior', url: 'https://example.com' },
      { name: 'Mitchell Senior 2', url: 'https://example.com' },
    ],
  },
  pages: ['About', 'Careers', 'Partner', 'Privacy Policy', 'Terms of Use'],
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
