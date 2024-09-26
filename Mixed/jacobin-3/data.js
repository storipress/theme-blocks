import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['Featured', 'Latest'],
  logo,
  spacing: '98%',
  articles: {
    Featured: [
      {
        title: 'Man Found Having Tea Party With Puppy Died Yesterday',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in',
        headline: 'https://picsum.photos/id/1025/1280/853',
        url: 'https://example.com',
        headlineAlt: 'test',
        time: new Date('October 13, 2014 11:13:00'),
        authors: [{ name: 'Alex Pan', url: '#' }],
      },
    ],
    Latest: [
      {
        title: 'Local Man Wins Sprout Growing Contest For the Third Time',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. ',
        headline: 'https://picsum.photos/id/2/420/315',
        headlineAlt: 'test',
        url: '#',
        time: new Date('December 25, 2014 02:15:00'),
        authors: [{ name: 'John Doe', url: '#' }],
      },
      {
        title: 'Australia Voted Nicest Place to Live in the World',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam. Phasellus bibendum urna vel massa facilisis, finibus venenatis erat imperdiet. Praesent fringilla sit amet nulla et facilisis.',
        headline: 'https://picsum.photos/id/912/700/500',
        headlineAlt: 'test',
        url: '#',
        time: new Date('January 28, 2014 08:13:00'),
        authors: [
          { name: 'David Peng', url: '#' },
          { name: 'Kevin Chang', url: '#' },
          { name: 'Alex Pan', url: '#' },
        ],
      },
      {
        title: 'Local man Set to Fly Out and Help With Earthquake Relief Effort',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam',
        headline: 'https://picsum.photos/id/432/700/500',
        headlineAlt: 'test',
        url: '#',
        time: new Date('April 14, 2014 12:02:00'),
        authors: [{ name: 'Steve Brown', url: '#' }],
      },
      {
        title: 'Viral Photo of Koala Had Been Photoshopped',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque sollicitudin dictum. Nunc ut mauris nisl. Aliquam et lectus ante. Etiam elit mi, auctor vitae nibh in, mollis pharetra est. Nunc eu tortor quam. Phasellus bibendum urna vel massa facilisis',
        headline: 'https://picsum.photos/id/131/700/500',
        headlineAlt: 'test',
        url: '#',
        time: new Date('October 13, 2014 01:13:00'),
        authors: [
          { name: 'John Doe', url: '#' },
          { name: 'Jane Doe', url: '#' },
        ],
      },
    ],
  },
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
