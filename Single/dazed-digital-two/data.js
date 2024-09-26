/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Products'],
  articles: [
    {
      title: 'Local man Set to Fly Out and Help With Tidal Wave Relief Effort',
      blurb:
        'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus. Eos ab ea quis tempore quos, itaque recusandae similique consequatur blanditiis, facilis temporibus nam a illo minus aliquam, aut sed explicabo sit',
      headline: 'https://picsum.photos/2000/1000',
      url: '#',
    },
  ],
}
