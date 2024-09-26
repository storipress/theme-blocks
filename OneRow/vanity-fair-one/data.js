/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Featured', 'Cover Story', 'From The Magazine'],
  articles: [
    {
      title: 'Man Found Having Tea Party With Owl Again.',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/400/800',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Stripy Banana Likely To Win Village Show',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/300/200',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'John Doe', url: '#' }],
    },
    {
      title: 'Local Man Wins Cabbage Growing Contest For the Third Time',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/100/140',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Foo Baz', url: '#' }],
    },
    {
      title: 'Viral Photo of Owl Had Been Photoshopped',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/500/200',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
  ],
}
