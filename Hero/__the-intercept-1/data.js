/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
import logo from 'sp-placeholder'

export default {
  logo,
  site: {
    name: 'SiteName',
    facebook: '#',
    twitter: '#',
  },
  pages: ['ABOUT', 'POLICIES AND REPORTS', 'BECOME A SOURCE', 'JOIN NEWSLETTER'],
  desks: ['Politics', 'Justice', 'National Security', 'World', 'Technology', 'Environment'],
  articles: {
    Politics: [
      {
        title: 'Man Found Having Tea Party With Owl Again',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/2000/500',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Robert Mackey', url: 'https://example.com' }],
      },
      {
        title: 'Local Man Wins Carrot Growing Contest For',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1600/1200/?random=3',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Woman With Butterfly Tattoo Arrested for 37th ',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1600/1200/?random=4',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
      {
        title: 'Viral Photo of Owl Had Been Photoshopped',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/1600/1200/?random=5',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
      },
    ],
    Justice: [
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View, removed in production block',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
      {
        title: 'Mock Data',
        blurb: 'This mock data helps see scroll menu in Desktop View',
        headline: 'https://picsum.photos/id/1/800/600',
        headlineCaption: 'This is caption',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Persephone Whittaker', url: 'https://example.com' }],
      },
    ],
  },
  article: {
    title: 'Man Found Having Tea Party With Owl Again',
    blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
    headline: 'https://picsum.photos/1600/1200/?random=6',
    url: 'https://example.com',
    desk: 'Foo',
    time: new Date(),
    authors: [{ name: 'Mitchell Senior', url: 'https://example.com' }],
  },
}
