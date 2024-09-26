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
      title: 'Lorem ipsum dolor sit amet',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://via.placeholder.com/800x600',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
  ],
  article: {
    title: 'Privacy Policy',
    blurb: 'I have two things on my mind: playing netball and the paranormal.',
    headline: 'https://i.picsum.photos/id/132/800/600.jpg?hmac=nj5lrXJAA62VWaSP92s9mpQgW7_5XOZouxLo80RT-Pc',
    headlineCaption: 'This is caption',
    url: 'https://example.com',
    desk: 'Latest',
    time: new Date(),
    authors: [{ name: 'Margo Mccarthy', url: 'https://example.com' }],
  },
}
