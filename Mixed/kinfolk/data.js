import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['TRAVEL', 'FASHION'],
  logo,
  articles: {
    TRAVEL: [
      {
        title: 'Man Travels to India — Finds Yoga',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1800/900',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    FASHION: [
      {
        title: 'Lorem ipsum dolor sit amet',
        blurb:
          'Arrive to Orcas Island via ferry and you’ll disembark feeling calm, curious and ready to embrace the slow drift into island time.',
        headline: 'https://picsum.photos/350/825',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        blurb:
          'Arrive to Orcas Island via ferry and you’ll disembark feeling calm, curious and ready to embrace the slow drift into island time.',
        headline: 'https://picsum.photos/350/425',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        blurb:
          'Arrive to Orcas Island via ferry and you’ll disembark feeling calm, curious and ready to embrace the slow drift into island time.',
        headline: 'https://picsum.photos/350/467',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        blurb:
          'Arrive to Orcas Island via ferry and you’ll disembark feeling calm, curious and ready to embrace the slow drift into island time.',
        headline: 'https://picsum.photos/450/450',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://via.placeholder.com/800x600',
    headlineCaption: 'This is caption',
    url: 'https://example.com',
    desk: 'Foo',
    time: new Date(),
    authors: [
      { name: 'Mitchell Senior', url: 'https://example.com' },
      { name: 'Mitchell Senior 2', url: 'https://example.com' },
    ],
  },
}
