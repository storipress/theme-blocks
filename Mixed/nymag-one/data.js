/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Lorem Ipsum', 'Dolor Sit Amet', 'Desk 3', 'Desk 4'],
  articles: [
    {
      title: 'Red Coats Are the Latest Big Trend Says Top Fashion Designer',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/500',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'Red Horse Escapes From Florida Zoo',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/1200/500',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'New York Voted Nicest Place to Live in the World',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/1000',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/600/1000',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: "The World's Biggest Potato Measuring Over 1m",
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/750/1000',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'Butterfly Tattoos Banned in North Korea',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/560/800',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'Man Found Having Tea Party With Horse Again.',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/400/500',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
    {
      title: 'Peculiar Record Likely To Win Village Show',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: '1500/800',
      authors: [{ name: 'Mitchell Senior', url: '#' }],
      url: '#',
    },
  ],
}
