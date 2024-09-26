import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Latest', 'News'],
  logo,
  spacing: '95%',
  articles: {
    Latest: [
      {
        title: 'Local Man Wins Turnip Growing Contest For the Third Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/500/300',
        headlineCaption: 'Feature',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [
          { name: 'Mitchell Senior', url: 'https://example.com' },
          { name: 'Mark Likely', url: 'https://example.com' },
          { name: 'Mark Likely', url: 'https://example.com' },
        ],
      },
      {
        title: 'Man Found Having Tea Party With Koala Again.',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/600/300',
        headlineCaption: 'Feature',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Tiny Sausage Likely To Win Village Show',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1018/1000',
        headlineCaption: 'Feature',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    News: [
      {
        title: 'Local Man Wins Turnip Growing Contest For the Third Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/600/400',
        headlineCaption: 'Feature',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Woman With Discreet Tattoo Arrested for 37th Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/500/300',
        headlineCaption: 'Screenland',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Viral Photo of Koala Had Been Photoshopped',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/600/700',
        headlineCaption: 'Eat',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Man Found Having Tea Party With Hamster Again.',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/600/340',
        headlineCaption: 'Feature',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Damp Ruler Likely To Win Village Show',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/650/300',
        headlineCaption: 'Feature',
        headlineAlt: 'Feature',
        url: 'https://example.com',
        desk: 'Feature',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/641/300',
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
