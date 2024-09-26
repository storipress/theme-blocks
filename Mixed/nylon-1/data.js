import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Entertainment'],
  logo,
  spacing: '98%',
  articles: {
    Entertainment: [
      {
        title: 'Soundcheck: The 10 Best Music Releases Of November 30, 2020',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1000/600',
        url: 'https://example.com',
        time: new Date(),
        authors: [
          { name: 'Mitchell Senior', url: 'https://example.com' },
          { name: 'Mitchell Senior 2', url: 'https://example.com' },
        ],
      },
      {
        title: 'Minor Celebrity Fred Groggens Slips on the Red Carpet',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1200/600',
        url: 'https://example.com',
        time: new Date(),
        authors: [
          { name: 'Mitchell Senior', url: 'https://example.com' },
          { name: 'Mitchell Senior 2', url: 'https://example.com' },
        ],
      },
      {
        title: 'A Lemon Tree is Found Growing in North Virginia: Who Planted It?',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1000/900',
        url: 'https://example.com',
        time: new Date(),
        authors: [
          { name: 'Mitchell Senior', url: 'https://example.com' },
          { name: 'Mitchell Senior 2', url: 'https://example.com' },
        ],
      },
      {
        title: '17 Ways to Relax After a Long Day of Planting Trees',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1200/940',
        url: 'https://example.com',
        time: new Date(),
        authors: [
          { name: 'Mitchell Senior', url: 'https://example.com' },
          { name: 'Mitchell Senior 2', url: 'https://example.com' },
        ],
      },
      {
        title: 'Batman Rises from the Dead and Becomes a Zombie: Breaking',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/200/400',
        url: 'https://example.com',
        time: new Date(),
        authors: [
          { name: 'Mitchell Senior', url: 'https://example.com' },
          { name: 'Mitchell Senior 2', url: 'https://example.com' },
        ],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/600/1500',
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
