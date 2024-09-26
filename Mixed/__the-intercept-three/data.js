/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Opinion', 'World News', 'Environment'],
  articles: [
    {
      title: 'Man Found Having Tea Party With Puppy Again.',
      blurb: '"I\'m going to need wide flamingos, big, wide flamingos."',
      headline: 'https://picsum.photos/850/600',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Mitchell Senior', url: '#' }],
    },
    {
      title: 'Minuscule Teapot Likely To Win Village Show',
      blurb: 'It was a time of terror. Snooty girls would thump each other in the street.',
      headline: 'https://picsum.photos/1000/600',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'John Doe', url: '#' }],
    },
    {
      title: 'Local Man Wins Courgette Growing Contest For the Third Time',
      blurb: 'Only one woman knows how to stop the terror. One special, noble woman - Doris Plumb.',
      headline: 'https://picsum.photos/600/600',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Foo Baz', url: '#' }],
    },
    {
      title: 'Viral Photo of Puppy Had Been Photoshopped',
      blurb: 'Doris is a 28-year-old navigator from Sleepford with a thirst for glasses.',
      headline: 'https://picsum.photos/1200/600',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Darius Hall', url: '#' }],
    },

    {
      title: 'Local man Set to Fly Out and Help With Earthquake Relief Effort',
      blurb:
        'She knows that to stop the snooty girls from continuing their dastardly deeds, she must betray her funny lover, Luke Bogtrotter.',
      headline: 'https://picsum.photos/950/750',
      url: 'https://example.com',
      time: new Date(),
      authors: [{ name: 'Rubi Thornton', url: '#' }],
    },
  ],
}
