/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Positive', 'Global News', 'Spiritual', 'Attitude', 'Health'],
  articles: [
    {
      title: 'Green Kitten Escapes From Florida Zoo',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=1',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Global News',
      authors: [
        { name: 'Steven Graves', url: 'https://example.com/000' },
        { name: 'Robert Foley', url: 'https://example.com/111' },
      ],
    },
    {
      title: 'Australia Voted Nicest Place to Live in the World',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=2',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Positive',
      authors: [
        { name: 'Steven Graves', url: 'https://example.com/000' },
        { name: 'Robert Foley', url: 'https://example.com/111' },
      ],
    },
    {
      title: "The World's Biggest Courgette Measuring Over 1m",
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=3',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Spiritual',
      authors: [
        { name: 'Steven Graves', url: 'https://example.com/000' },
        { name: 'Robert Foley', url: 'https://example.com/111' },
      ],
    },
    {
      title: 'Facial Tattoos Banned in North Korea',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=4',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Attitude',
      authors: [
        { name: 'Steven Graves', url: 'https://example.com/000' },
        { name: 'Robert Foley', url: 'https://example.com/111' },
      ],
    },
    {
      title: 'Hurricane Causes Devastation',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=5',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Health',
      authors: [
        { name: 'Michael Douglas', url: 'https://example.com' },
        { name: 'Richard French', url: 'https://example.com' },
        { name: 'William Kaufman', url: 'https://example.com' },
      ],
    },
    {
      title: 'Skirts Linked to Global Health Scare',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=6',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Positive',
      authors: [{ name: 'William Kaufman', url: 'https://example.com' }],
    },
    {
      title: 'Man Jailed For Threatening Wife With Warped Newspaper',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/800/600?random=7',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Positive',
      authors: [
        { name: 'Charles Barnett', url: 'https://example.com' },
        { name: 'William Kaufman', url: 'https://example.com' },
      ],
    },
  ],
  article: {
    title: 'Green Kitten Escapes From Florida Zoo',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/800/600?random=8',
    headlineCaption: 'This is caption',
    url: 'https://example.com',
    desk: 'Positive',
    time: new Date(),
    authors: [
      { name: 'Mitchell Senior', url: 'https://example.com' },
      { name: 'Mitchell Senior 2', url: 'https://example.com' },
    ],
  },
}
