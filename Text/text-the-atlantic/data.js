/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Local', 'Lorem', 'Tsunami'],
  spacing: '95%',
  articles: {
    Local: [
      {
        title: 'Local Man Wins Turnip Growing Contest For the Third Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Man Found Having Tea Party With Koala Again.',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Tiny Sausage Likely To Win Village Show',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    Lorem: [
      {
        title: 'Local Man Wins Turnip Growing Contest For the Third Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Woman With Discreet Tattoo Arrested for 37th Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Viral Photo of Koala Had Been Photoshopped',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    Tsunami: [
      {
        title: 'Local man Set to Fly Out and Help With Tsunami Relief Effort',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Man Buys Jumpers For Low Income Local Family',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'New Variety of Turnip Set to Revolutionise Our Eating Habits',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://via.placeholder.com/800x600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://via.placeholder.com/800x600',
    headlineCaption: 'This is caption',
    url: 'https://example.com',
    desk: 'Foo',
    time: new Date(),
    authors: [
      { name: 'Mitchell Senior', url: 'https://example.com' },
      { name: 'Mitchell Senior 2', url: 'https://example.com' },
    ],
  },
}
