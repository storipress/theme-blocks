import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Latest'],
  logo,
  spacing: '98%',
  articles: [
    {
      title: 'Local man Set to Fly Out and Help With Tidal Wave Relief Effort',
      headline: 'https://picsum.photos/600/1000',
      blurb: 'Local man Set to Fly Out and Help With Tidal Wave Relief Effort',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      time: new Date(),
      url: '#',
    },
    {
      title: 'Man Buys Coats For Low Income Local Family',
      headline: 'https://picsum.photos/800/1000',
      blurb: 'Local man Set to Fly Out and Help With Tidal Wave Relief Effort',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'Horse Catches Train Across Country',
      headline: 'https://picsum.photos/1000/1200',
      blurb: 'Local man Set to Fly Out and Help With Tidal Wave Relief Effort',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'New Variety of Potato Set to Revolutionise Our Eating Habits',
      headline: 'https://picsum.photos/500/1000',
      blurb: 'Local man Set to Fly Out and Help With Tidal Wave Relief Effort',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      time: new Date(),
      url: '#',
    },
  ],
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/1200/900',
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
}
