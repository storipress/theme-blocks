/* eslint-disable prettier/prettier */
/* You can update the data in this file
 * If you use `{ desks: ['Desk-1', 'Desk-2'], articles: [{ title: 'Article-1' }, { title: 'Article-2' }] }`
 * You will get `Desk-1 => [Article-1, Article-2]` and `Desk-2 => ['Article-1', 'Article-2']`
 * If the desks or articles is not enough, it will rewind to the start of the array automatically
 * And if you want difference article for difference desk, you can use:
 * `{ desks: ['Desk-1', 'Desk-2'], articles: { 'Desk-1': [...], 'Desk-2': [...] } }`
 */
export default {
  spacing: {
    lg: '80%',
  },
  desks: ['The Best time', 'For Laughs', 'The Book', 'When They See Us', 'Sports'],
  articles: {
    'The Best time': [
      {
        title: 'Local man Set to Fly Out and Help With Tornado Relief Effort.',
        blurb: 'Fusce lacinia dictum nulla eu pulvinar. Etiam ut efficitur tellus, sed tristique lectus',
        headline: 'https://picsum.photos/250/500',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
    ],
    'For Laughs': [
      {
        title: 'New Variety of Turnip Set to Revolutionise Our Eating Habits.',
        blurb:
          "I get on with life as a farmer, I'm a muscular kinda person. I like tasting wine on Sundays, I like playing chess in the week. I like to contemplate football. But when I start to daydream, My mind turns straight to rugby.",
        headline: 'https://picsum.photos/500/500',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
      {
        title: 'Pink Pinafores Are the Latest Big Trend Says Top Fashion Designer.',
        blurb:
          "I'm not too fond of smelly rubbish, I really hate ants, But I just think back to rugby, And I'm happy once again.",
        headline: 'https://picsum.photos/700/550',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
      {
        title: 'Man Jailed For Threatening Wife With Enchanted Hawk',
        blurb:
          "I get on with life as a farmer, I'm a muscular kinda person. I like tasting wine on Sundays, I like playing chess in the week. I like to contemplate football. But when I start to daydream, My mind turns straight to rugby.",
        headline: 'https://picsum.photos/700/450',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
    ],
    'The Book': [
      {
        title: 'London Voted Nicest Place to Live in the World.',
        blurb: 'Facial Tattoos Banned in North Korea again after a very long time since 1970',
        headline: 'https://picsum.photos/700/570',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
    ],

    'When They See Us': [
      {
        title: 'Pink Fox Escapes From Florida Zoo Banned in North Korea again after a very long time',
        blurb: 'Woman With Facial Tattoo Arrested for 37th Time',
        headline: 'https://picsum.photos/700/350',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
    ],
    Sports: [
      {
        title: 'Man Buys Pinafores For Low Income Local Family.',
        blurb: 'Viral Photo of Fox Had Been Photoshopped to Live in the World',
        headline: 'https://picsum.photos/900/750',
        url: 'https://example.com',
        time: new Date(),
        authors: [{ name: 'Mitchell Senior', url: '#' }],
      },
    ],
  },
}
