import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Top Stories'],
  logo,
  spacing: '95%',
  articles: [
    {
      title: 'Man Found Having Tea Party With Puppy Again.',
      blurb:
        'After leaving the hairy planet Uranus, a group of trolls fly toward a distant speck. The speck gradually resolves into a contented, space bungalow.',
      headline: 'https://i.picsum.photos/id/836/800/600.jpg?hmac=7P7S0WsIBoGo4nBoW9__eQbthqCBxVfXw-F_U_CCbLY',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Peculiar Gun Likely To Win Village Show',
      blurb:
        'Civil war strikes the galaxy, which is ruled by Simon Malkovich, a grubby troll capable of robbery and even mutilation.',
      headline: 'https://i.picsum.photos/id/565/800/600.jpg?hmac=4-UVdjGNyOVA3V8zIfPfEFLRvESfrW3ViCNvauMIUqs',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Local Man Wins Carrot Growing Contest For the Third Time',
      blurb:
        'Terrified, a cursed moose known as Molly Slaughterhouse flees the Empire, with her protector, Virginia Jones.',
      headline: 'https://i.picsum.photos/id/45/800/600.jpg?hmac=kn9zvWaTZqaO56D8evai6ntTRXQlmGDgvHM-pyfNosc',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Viral Photo of Puppy Had Been Photoshopped',
      blurb:
        'They head for Truro on the planet Ocampa. When they finally arrive, a fight breaks out. Jones uses her cosy blade to defend Molly.',
      headline: 'https://i.picsum.photos/id/176/800/600.jpg?hmac=dGLT-aXDtvYjsZo8E4Vp7osGVQ_z0Gw0BomVl52uU5o',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Local man Set to Fly Out and Help With Hurricane Relief Effort',
      blurb: "Jones and Moose Molly decide it's time to leave Ocampa and steal a tandem to shoot their way out.",
      headline: 'https://i.picsum.photos/id/909/800/600.jpg?hmac=SLDLx3caBYdIJn5H2T1Nam80p67h0GmxStWh4i2rpkU',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Man Buys Jackets For Low Income Local Family',
      blurb:
        'They encounter a tribe of robots. Jones is attacked and the moose is captured by the robots and taken back to Truro.',
      headline: 'https://i.picsum.photos/id/287/800/600.jpg?hmac=oIybRbiUHvByShJtkeeTOZox4OybU0H8P0lmmu4ZwIc',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Puppy Catches Train Across Country',
      blurb:
        'Jones must fight to save Moose Molly but when she accidentally unearths a slimy blade, the entire future of the cosy, hairy galaxy is at stake.',
      headline: 'https://i.picsum.photos/id/921/800/600.jpg?hmac=8H4T19P11X92nnxrSlBooMyoZ2KT05hN_4FCCU4XiRc',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
  ],
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://via.placeholder.com/800x600',
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
