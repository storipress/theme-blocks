/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  spacing: { xs: 'calc(100% - 4px)', md: 'calc(100% - 90px)', lg: 'calc(100% - 130px)' },
  desks: ['Latest'],
  articles: [
    {
      title: 'Local Man Wins Sprout Growing Contest For the Third Time',
      blurb: 'Lorem ipsum dolor sit amet',
      headline: 'https://picsum.photos/865/485?random=1',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Woman With Garish Tattoo Arrested for 37th Time',
      blurb: 'Lorem ipsum dolor sit amet',
      headline: 'https://picsum.photos/210/115?random=2',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Viral Photo of Mouse Had Been Photoshopped',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/210/115?random=3',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Local man Set to Fly Out and Help With Earthquake Relief Effort',
      blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
      headline: 'https://picsum.photos/210/115?random=4',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
  ],
}
