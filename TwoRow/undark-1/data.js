import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['News & Features', 'Columns', 'Opinion'],
  logo,
  spacing: '98%',
  articles: {
    'News & Features': [
      {
        title: 'Warped Teapot Likely To Win Village Show',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/700/466',
        url: 'https://example.com',
        time: new Date('October 13, 2014 01:13:00'),
        authors: [
          { name: 'John Doe', url: '#' },
          { name: 'John Doe', url: '#' },
          { name: 'John Doe', url: '#' },
        ],
      },
      {
        title: 'Local Man Wins Turnip Growing Contest For the Third Time',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/700/700',
        url: 'https://example.com',
        time: new Date('November 14, 2014 01:13:00'),
        authors: [{ name: 'Bruce Tulloch', url: '#' }],
      },
      {
        title: 'Man Jailed For Threatening Wife With Warped Teapot',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1000/466',
        url: 'https://example.com',
        time: new Date('January 28, 2014 01:13:00'),
        authors: [{ name: 'Ankit Yadav', url: '#' }],
      },
    ],
    Columns: [
      {
        title: 'New Variety of Turnip Set to Revolutionise Our Eating Habits',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/700/800',
        url: 'https://example.com',
        time: new Date('April 14, 2014 01:13:00'),
        authors: [
          { name: 'John Doe', url: '#' },
          { name: 'John Doe', url: '#' },
        ],
      },
      {
        title: 'Local man Set to Fly Out and Help With Hurricane Relief Effort',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/700/1400',
        url: 'https://example.com',
        time: new Date('February 14, 2014 01:13:00'),
        authors: [{ name: 'Aditya', url: '#' }],
      },
      {
        title: 'Pink Pinafores Are the Latest Big Trend Says Top Fashion Designer',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/700/400',
        url: 'https://example.com',
        time: new Date('December 25, 2014 01:13:00'),
        authors: [{ name: 'Hritik Jain', url: '#' }],
      },
    ],
    Opinion: [
      {
        title: 'New Variety of Turnip Set to Revolutionise',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/500/1250',
        url: 'https://example.com',
        time: new Date('April 14, 2014 01:13:00'),
        authors: [{ name: 'Harshvardhan', url: '#' }],
      },
      {
        title: 'Local man Set to Fly Out and Help With Hurricane Relief Effort',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/500/920',
        url: 'https://example.com',
        time: new Date('February 14, 2014 01:13:00'),
        authors: [{ name: 'Aditya', url: '#' }],
      },
      {
        title: 'Pink Pinafores Are the Latest Big Trend Says Top Fashion Designer',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/500/850',
        url: 'https://example.com',
        time: new Date('December 25, 2014 01:13:00'),
        authors: [{ name: 'Hritik Jain', url: '#' }],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/500/590',
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
