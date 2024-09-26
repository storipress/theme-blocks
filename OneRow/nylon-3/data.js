import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Opinion', 'Environment', 'America'],
  logo,
  articles: {
    Opinion: [
      {
        title: 'Viral Photo of Owl Had Been Photoshopped',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/280/350',
        headlineCaption: 'This is caption',
        headlineAlt: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    Environment: [
      {
        title: 'Local Man Wins Courgette Growing Contest For the Third Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/700/500',
        headlineCaption: 'This is caption',
        headlineAlt: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    America: [
      {
        title: 'Woman With Snake Tattoo Arrested for 37th Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1000/500',
        headlineCaption: 'This is caption',
        headlineAlt: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/600/1000',
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
