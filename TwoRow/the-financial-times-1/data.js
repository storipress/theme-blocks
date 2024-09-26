/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
// Looking for some action? Peter Fonda’s Easy Rider Harley goes to auction

export default {
  desks: ['Pop Culture'],
  articles: [
    {
      title: 'Gary Chu',
      blurb: 'A Mans Lonely Journey to Space — How Jeff Bezos became an Alien',
      headline: 'https://picsum.photos/600/300',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Gary Chu',
      blurb: 'From New York to Taiwan — a Ode to Lil Pump',
      headline: 'https://picsum.photos/700/466',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Opinion',
      blurb: 'Man Buys Bananas After a Long Day of Shopping: Whats Next?',
      headline: 'https://picsum.photos/700/1000',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Fashion',
      blurb: 'The Best Things to Buy This Christmas',
      headline: 'https://picsum.photos/700/300',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
    {
      title: 'Books',
      blurb: 'Book Review: Infinite Jest found to be pretty funny',
      headline: 'https://picsum.photos/500/466',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
  ],
}
