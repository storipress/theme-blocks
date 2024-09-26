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
      title: 'Another Day Another Dollar: My Life as a Crustacean',
      blurb:
        'Spongebob was meant to be my friend. But instead, he becaome my biggest nemesis — and my most passionate lover.',
      headline: 'https://picsum.photos/3000/2000',
      headlineCaption: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
    },
  ],
  article: {
    title: 'Another Day Another Dollar: My Life as a Crustacean',
    blurb:
      'Spongebob was meant to be my friend. But instead, he becaome my biggest nemesis — and my most passionate lover.',
    headline: 'https://picsum.photos/3000/2000',
    headlineCaption: 'This is caption',
    url: 'https://example.com',
    desk: 'Sea News',
    time: new Date(),
    authors: [
      { name: 'Mitchell Senior', url: 'https://example.com' },
      { name: 'Jon Snow', url: 'https://example.com' },
    ],
  },
  site: {
    name: 'socials',
    facebook: 'https://example.com/',
    twitter: 'https://example.com/',
  },
}
