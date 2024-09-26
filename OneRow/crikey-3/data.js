import logo from 'sp-placeholder'

/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  desks: ['FASHION'],
  logo,
  articles: {
    FASHION: [
      {
        title: 'Lorem embrace the slow drift into island time',
        blurb:
          'Arrive to Orcas Island via ferry and you’ll disembark feeling calm, curious and ready to embrace the slow drift into island time.',
        headline: 'https://picsum.photos/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title:
          'Donec massa sapien faucibus et molestie ac. Ipsum dolor sit amet consectetur adipiscing elit pellentesque',
        blurb:
          'Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Amet purus gravida quis blandit turpis cursus in. Eu facilisis sed odio morbi quis commodo odio aenean sed.',
        headline: 'https://picsum.photos/800/1600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title:
          'Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Morbi tristique senectus et netus et malesuada fames',
        blurb: 'Interdum velit laoreet id donec ultrices tincidunt arcu. Lobortis elementum nibh tellus molestie.',
        headline: 'https://picsum.photos/800/1200',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'Lorem ipsum dolor sit amet',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/800/600',
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
