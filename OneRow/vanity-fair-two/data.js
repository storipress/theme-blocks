import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['The Culture', 'From The Magazine', 'Fashion', 'Toxic'],
  logo,
  spacing: '98%',
  articles: [
    {
      title: 'Man Found Having Tea Party With Dog Again.',
      blurb: 'After leaving the quiet planet Frabenesh, a group of giants fly toward a distant speck.',
      headline: 'https://picsum.photos/700/500',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Ribbed Teapot Likely To Win Village Show',
      blurb:
        'Civil war strikes the galaxy, which is ruled by Mike Hemingway, a quiet goblin capable of sloth and even kidnap.',
      headline: 'https://picsum.photos/500/500',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'John Doe', url: '#' }],
    },
    {
      title: 'Local Man Wins Cabbage Growing Contest For the Third Time',
      blurb: "England and Pixie Steve decide it's time to leave Kubasulu and steal a tandem to shoot their way out.",
      headline: 'https://picsum.photos/1000/200',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Foo Baz', url: '#' }],
    },
  ],
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/500/1000',
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
