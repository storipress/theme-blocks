/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Highlights'],
  articles: [
    {
      title: 'Red Goldfish Escapes From Florida Zoo',
      blurb:
        'After leaving the grubby planet Frabenesh, a group of fairies fly toward a distant speck. The speck gradually resolves into a ginger, space station.',
      headline: 'https://picsum.photos/700/500',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Red Hats Are the Latest Big Trend Says Top Fashion Designer',
      blurb:
        'They head for Exeter on the planet Kubasulu. When they finally arrive, a fight breaks out. Pitt uses his contented candlestick to defend Annie.',
      headline: 'https://picsum.photos/1000/500',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Yolanda Mcdougall', url: '#' }],
    },
  ],
}
