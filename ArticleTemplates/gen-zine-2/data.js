import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Latest'],
  logo,
  articles: [
    {
      title: 'Are Vegan Influencers Hurting the Movement?',
      blurb:
        'The disgraced actor will finally face legal action after sexual assault allegations made against him in 2017.',
      headline: 'https://picsum.photos/3000/2000',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
  ],
  article: {
    title: 'Are Vegan Influencers Hurting the Movement?',
    blurb:
      'The disgraced actor will finally face legal action after sexual assault allegations made against him in 2017.',
    headline: 'https://picsum.photos/3000/2000',
    headlineCaption: 'This is caption',
    url: 'https://example.com',
    desk: 'Foo',
    time: new Date(),
    authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
  },
  site: {
    name: 'Storipress Article',
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
  },
}
