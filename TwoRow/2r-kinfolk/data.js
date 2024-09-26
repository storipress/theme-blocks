import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Popular'],
  logo,
  articles: [
    {
      title: 'Nasa is installing internet on the moon',
      blurb:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl elit, laoreet vitae posuere id, fringilla sed elit. Vestibulum pharetra.',
      headline: 'https://picsum.photos/700/466',
      headlineCaption: 'This is caption',
      headlineAlt: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Popular',
      deskUrl: 'https://example.com',
      authors: [
        { name: 'Jack', url: 'https://example.com' },
        { name: 'Man', url: 'https://example.com' },
      ],
    },
    {
      title: 'New Variety',
      blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      headline: 'https://picsum.photos/700/1000',
      headlineCaption: 'This is caption',
      headlineAlt: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Popular',
      deskUrl: 'https://example.com',
      authors: [
        { name: 'Variety', url: 'https://example.com' },
        { name: 'New', url: 'https://example.com' },
      ],
    },
    {
      title: 'Woman With Butterfly',
      blurb:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl elit, laoreet vitae posuere id, fringilla sed elit. Vestibulum pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      headline: 'https://picsum.photos/700/350',
      headlineCaption: 'This is caption',
      headlineAlt: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Popular',
      deskUrl: 'https://example.com',
      authors: [
        { name: 'ARTS & CULTURE', url: 'https://example.com' },
        { name: 'FASHION', url: 'https://example.com' },
      ],
    },
    {
      title: 'Viral Photo of Maggot Had Been',
      blurb: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl elit, laoreet vitae posuere id.',
      headline: 'https://picsum.photos/700/500',
      headlineCaption: 'This is caption',
      headlineAlt: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      authors: [
        { name: 'Photo', url: 'https://example.com' },
        { name: 'Maggot', url: 'https://example.com' },
      ],
    },
    {
      title: 'New Variety of Cauliflower Discovered in West Sydney',
      blurb:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl elit, laoreet vitae posuere id, fringilla sed.',
      headline: 'https://picsum.photos/500/466',
      headlineCaption: 'This is caption',
      headlineAlt: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Popular',
      deskUrl: 'https://example.com',
      authors: [
        { name: 'Snake', url: 'https://example.com' },
        { name: 'Tattoo', url: 'https://example.com' },
      ],
    },
    {
      title: 'Small Earthquake',
      blurb: 'Lorem ipsum dolor sit amet.',
      headline: 'https://picsum.photos/600/466',
      headlineCaption: 'This is caption',
      headlineAlt: 'This is caption',
      url: 'https://example.com',
      time: new Date(),
      desk: 'Popular',
      deskUrl: 'https://example.com',
      authors: [
        { name: 'Green', url: 'https://example.com' },
        { name: 'Lorem', url: 'https://example.com' },
      ],
    },
  ],
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/1200/466',
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
