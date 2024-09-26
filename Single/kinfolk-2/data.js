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
  articles: [
    {
      title: 'The Truro Story',
      blurb:
        'During a Christening in Truro in 1989, the same baby is born and lives to tell the tale. That baby becomes 32-year-old Sarah Giantbulb, a smart and modest police officer.',
      headline: 'https://picsum.photos/600/730?random=1',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      headlineAlt: 'This is caption',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
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
}
