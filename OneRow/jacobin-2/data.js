/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Latest'],
  articles: {
    Latest: [
      {
        title: 'Gregory Finds Lemons Under his Garage — Who Planted It?',
        blurb:
          'A mystery as old as time, the mysterious lemons planter must be found. It is a matter of national security, and the perpetrator must be found post haste.',
        headline: 'https://picsum.photos/700/500',
        url: '#',
        time: new Date('December 25, 2014 02:15:00'),
        authors: [{ name: 'Sam Smith', url: '#' }],
      },
      {
        title: 'Coffee Discovered to be a Powerful Aphrodesiac, Is it Time to Ban Coffee?',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam. Phasellus bibendum urna vel massa facilisis, finibus venenatis erat imperdiet.',
        headline: 'https://picsum.photos/700/1000',
        url: '#',
        time: new Date('January 28, 2014 08:13:00'),
        authors: [
          { name: 'Arthur Johns', url: '#' },
          { name: 'Ankit Yadav', url: '#' },
        ],
      },
      {
        title: 'Local man Set to Fly Out and Help With Earthquake Relief Effort',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam',
        headline: 'https://picsum.photos/600/500',
        url: '#',
        time: new Date('April 14, 2014 12:02:00'),
        authors: [{ name: 'David Peng', url: '#' }],
      },
      {
        title: 'Viral Photo of Koala Had Been Photoshopped',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam. Phasellus bibendum urna vel massa facilisis',
        headline: 'https://picsum.photos/500/850',
        url: '#',
        time: new Date('October 13, 2014 01:13:00'),
        authors: [
          { name: 'Jane Doe', url: '#' },
          { name: 'John Doe', url: '#' },
        ],
      },
    ],
  },
}
