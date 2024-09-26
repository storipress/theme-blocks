/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Latest', 'Trending'],
  spacing: '100%',
  articles: {
    Latest: [
      {
        title: 'Ribbed People Likely To Win Village Show',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/800/1000',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },

      {
        title: 'Man Found Having Tea Party With Owl Again',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1500/600',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Local Man Wins Carrot Growing Contest For',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/800/1200',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Woman With Butterfly Tattoo Arrested',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/800/600',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'New Variety of Parsnip Set to Revolutionise Our Eating Habits',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/800/700',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],

    Trending: [
      {
        title: 'Viral Photo of Owl Had Been Photoshopped',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/500/600',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Yellow Koala Escapes From Florida Zoo',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1200/600',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Australia Voted Nicest Place to Live in the World',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1000/750',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: "The World's Biggest Aubergine Measuring Over 1m",
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/550/650',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Tornado Causes Devastation',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1100/500',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'article-2',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/750/600',
    url: 'https://example.com',
    time: new Date(),
    desk: 'Foo',
    authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
  },
}
