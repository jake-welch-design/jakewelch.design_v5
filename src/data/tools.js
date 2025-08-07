export default [
  {
    name: '↳ <a href="https://jake-welch-design.github.io/BOOK_COVER_DESIGN_TOOL/" target="_blank">Grid Offset Tool</a>',
    date: '2024',
    type: 'Image manipulation',
    description:
      'Built for the design of <a href="https://www.instagram.com/ashreeder/" target="_blank">Ashton Reeder\'s</a> book <i>Fabricated Landscapes</i></a>, this tool takes an image input, divides it into a grid, and uses noise and wave algorithms to offset each of the cells. ',
    video: {
      mp4: require('@/assets/videos/demo-landscape.mp4'),
      webm: require('@/assets/videos/demo-landscape.webm'),
    },
    images: [
      {
        src: require('@/assets/images/fabricated-landscapes/mockups/fl-poster.jpg'),
        alt: 'Poster mockup',
        caption: 'Poster mockup',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/mockups/fl-bag.jpg'),
        alt: 'Bag mockup',
        caption: 'Bag mockup',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/mockups/fl-flag.jpg'),
        alt: 'Flag mockup',
        caption: 'Flag mockup',
      },
    ],
  },
  {
    name: '↳ <a href="https://jake-welch-design.github.io/Glitch_type_generator_tool/" target="_blank">Type Runners Tool</a>',
    date: '2024',
    type: 'Typography',
    description:
      'Divides text into chunks that run in random directions disitorting the letterforms',
    video: {
      mp4: require('@/assets/videos/type-runners.mp4'),
      webm: require('@/assets/videos/type-runners.webm'),
    },
    images: [
      {
        src: require('@/assets/images/glitch-type-generator/mockups/gt-poster.jpg'),
        alt: 'Poster mockup',
        caption: 'Poster mockup',
      },
      {
        src: require('@/assets/images/glitch-type-generator/mockups/gt-sign.jpg'),
        alt: 'Sign mockup',
        caption: 'Sign mockup',
      },
      {
        src: require('@/assets/images/glitch-type-generator/mockups/gt-cards.jpg'),
        alt: 'Card mockup',
        caption: 'Card mockup',
      },
    ],
  },
  {
    name: '↳ <a href="https://jake-welch-design.github.io/gradient-flower-tool/" target="_blank">Gradient Flower Generator</a>',
    date: '2024',
    type: 'Generative graphics',
    description:
      'Generates flower-like spiral motifs by rotating animated gradient slices',
    iframe: 'https://www.youtube.com/embed/_5zNl_kH4do?si=_oKwNy9evSMsQhuT',
    images: [
      {
        src: require('@/assets/images/gradient-flower-generator/flower-5.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
      {
        src: require('@/assets/images/gradient-flower-generator/flower-1.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
      {
        src: require('@/assets/images/gradient-flower-generator/flower-4.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
    ],
  },
  {
    name: '↳ <a href="https://jake-welch-design.github.io/noise-painting-generator/" target="_blank">Noise Painting Tool</a>',
    date: '2024',
    type: 'Image manipulation',
    description:
      'Takes an image input and uses noise algorithms to distort it into a "painting"',
    iframe: 'https://www.youtube.com/embed/BD5pm3nNMCo?si=4lc6UQTCBewahvLC',
    images: [
      {
        src: require('@/assets/images/noise-painting-generator/painting-1jpg.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
      {
        src: require('@/assets/images/noise-painting-generator/painting-2.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
      {
        src: require('@/assets/images/noise-painting-generator/painting-3.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
    ],
  },
  {
    name: '↳ <a href="https://jake-welch-design.github.io/tile-collage-generator/" target="_blank">Tile Collage Tool</a>',
    date: '2024',
    type: 'Image manipulation',
    description:
      'Takes an image input, divides it into a grid, and randomly rotates each square by a 90 degree increments to form new compositions',
    iframe: 'https://www.youtube.com/embed/fFLzyydtWeA?si=kBADM9mIMny46r3a',
    images: [
      {
        src: require('@/assets/images/tiles-collage-generator/collage-1.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
      {
        src: require('@/assets/images/tiles-collage-generator/collage-2.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
      {
        src: require('@/assets/images/tiles-collage-generator/collage-3.jpg'),
        alt: 'Example image',
        caption: ' ',
      },
    ],
  },
  {
    name: '↳ <a href="https://hunteryoung.studio/i-am" target="_blank">I AM Virtual Mirror</a>',
    date: '2022',
    type: 'Web art, interactive',
    description:
      'Built for <a href="https://www.instagram.com/hunneryoung/" target="_blank">Hunter Young\'s</a> <a href="https://hunteryoung.studio/i-am-mirror" target="_blank">"I AM Mirror"</a> product release, this webpage accesses the webcam to create a virtual I AM mirror in browser.',
    // iframe: 'https://www.youtube.com/embed/9Rz9G7R42c8?si=ds7PbTliIyFoAS7s',
    images: [
      {
        src: require('@/assets/images/i-am/i-am-demo.png'),
        alt: 'Virtual mirror with Jake in the reflection',
        caption: ' ',
      },
      {
        src: require('@/assets/images/i-am/i-am.jpg'),
        alt: 'Virtual mirror with leaves',
        caption: ' ',
      },
    ],
  },
];
