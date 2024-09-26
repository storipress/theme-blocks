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
      title: 'The Man Who Learnt How To Fly',
      blurb: 'Meet Carl Greg-Delaney',
      headline: 'https://picsum.photos/2000/3000',
      headlineCaption: 'Photo: Ali Layc',
      url: 'https://example.com',
      time: new Date(),
      authors: [
        { name: 'Kajol Povey', url: 'https://example.com' },
        { name: 'Lyra Cardenas', url: 'https://example.com' },
      ],
    },
  ],
  article: {
    title: 'The Man Who Learnt How To Fly',
    blurb: 'Meet Carl Greg-Delaney',
    headline: 'https://picsum.photos/2000/3000',
    headlineCaption: 'Photo: Ali Layc',
    desk: 'Latest',
    url: 'https://example.com',
    time: new Date(),
    authors: [
      { name: 'Kajol Povey', url: 'https://example.com' },
      { name: 'Lyra Cardenas', url: 'https://example.com' },
    ],
  },
}
