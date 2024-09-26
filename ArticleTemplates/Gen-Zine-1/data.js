import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Arts & Culture'],
  logo,
  articles: [
    {
      title: 'Lorem ipsum dolor sit amet',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline:
        'https://images.squarespace-cdn.com/content/v1/6206a61926337051489b145f/1655077459964-0OYUOCJUG2XHHXSAYI21/TCF+Hero.png',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Nikki Cohen', url: 'https://example.com' }],
    },
  ],
  article: {
    title: 'Interview with Tracy Clark-Flory, Author of Want Me: A Sex Writers Journey Into the Heart of Desire',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headlineCaption: 'This is caption',
    headline:
      'https://images.squarespace-cdn.com/content/v1/6206a61926337051489b145f/1655077459964-0OYUOCJUG2XHHXSAYI21/TCF+Hero.png',
    url: 'https://example.com',
    desk: 'Arts & Culture',
    time: new Date(),
    authors: [{ name: 'Nikki Cohen', url: 'https://example.com' }],
  },
  site: {
    name: 'Storipress Article',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
  },
}
