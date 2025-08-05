export default [
  {
    //LANGUAGE OF MOVEMENT
    name: 'Language of Movement',
    date: '2024',
    type: 'Art Exhibition',
    description:
      '"Language of Movement" by Milad Mozari was shown as part of the "In Memory" exhibition on view between July 2024 to February 2025 at the Utah Museum of Contemporary Art in Salt Lake City. The exhibit centered on the archives of Ghaffar Pourazar, an Azerbaijani-Iranian computer animator turned Beijing Opera performer, and his fascinating life and story.',
    images: [
      {
        src: require('@/assets/images/language-of-movement/lm-9.jpg'),
        alt: 'Language of Movement',
        caption: 'Language of Movement',
      },
      {
        src: require('@/assets/images/language-of-movement/lm-12.jpg'),
        alt: 'Alternate angle of frame',
        caption: 'Alternate angle of frame',
      },
      {
        src: require('@/assets/images/language-of-movement/lm-13.jpg'),
        alt: 'Detail of frame',
        caption: 'Detail of frame',
      },
      {
        src: require('@/assets/images/language-of-movement/lm-7.jpg'),
        alt: 'TV display',
        caption: 'TV display',
      },
      {
        src: require('@/assets/images/language-of-movement/lm-3.jpg'),
        alt: 'Interactive light table display',
        caption: 'Interactive light table display',
      },
      {
        src: require('@/assets/images/language-of-movement/lm-4.jpg'),
        alt: 'Interactive light table display detail',
        caption: 'Interactive light table display detail',
      },
      {
        src: require('@/assets/images/language-of-movement/lm-5.jpg'),
        alt: 'Interactive light table display detail',
        caption: 'Interactive light table display detail',
      },
    ],
    details:
      "Description from UMOCA's website:<br><br><i>\"Spanning three decades and three continents of archival material, Language of Movement is artist Milad Mozari's ongoing conversation with Ghaffar Pourazar, an Azerbaijani-Iranian computer animator turned Beijing Opera performer. The materials presented are layers of media collected in Pourazar's life and transported by Mozari from Pourazar's old apartment in Beijing. They point to Pourazar's desire to learn Beijing Opera without knowing the language, where he feverously documented learning the art form. The Exit Gallery exhibition consists of archival photographs, video, and sound. It features the artist's interpretation of Pourazar's journey through animation, computer vision, and immersive environments. The exhibition is a proposal for preservation, where the multiplicity of language and place exist on a continuum.\"</i><br><br>As his exhibition assistant, I worked closely with Mozari to develop the exhibition by creating generative patterns and animations, a custom pose-detection script, and other additional spatial and hardware elements.<br><br>The patterns projected on the frame and used to decorate the space were designed and animated in p5.js. In its developement, we pulled inspiration from Islamic tiling while still being organic and changing in their relationship to echo Pourazar's experience as an Azerbaijani-Iranian in learning his role as the Monkey King without knowing the language.<br><br>The pose-detection algorithm written in Python using MediaPipe is paired with a webcam and photo loupe to magnify film strips of images from Pourazar's time in training. The script draws a gold and red \"stick figure\" over figures in various poses echoing his early animation and motion capture work. Often the algorithm takes a moment to recognize the pose before it gets it correct, much like Pourazar's process of learning the movements for his role. <br><br>Photo credit: Zachary Norman",
    links: [
      {
        url: 'https://utahmoca.org/exhibition/milad-mozari-language-of-movement/',
        text: "↳ Exhibition information on UMOCA's website",
      },
      {
        url: 'https://miladmozari.com/',
        text: "↳ See Milad Mozari's other work",
      },
    ],
  },

  {
    //DECLATEL
    name: 'Declatel, Where the Pieces Came From',
    date: '2024',
    type: 'Concert visuals',
    description:
      "Where the Pieces Came From is Kevin Hartley's debut album for his solo project Declatel. It was performed for its official album release show at the historic Salt Lake City Masonic Temple on June 1, 2024, and was debuted to a live global audience via live stream on VIERLIVE on Jul 25, 2024.",
    video: {
      mp4: require('@/assets/videos/declatel-where-the-pieces-came-from.mp4'),
      webm: require('@/assets/videos/declatel-where-the-pieces-came-from.webm'),
    },
    images: [
      {
        src: require('@/assets/images/declatel-album-release/declatel-backlit.jpg'),
        alt: 'Still of the performance of Backlit',
        caption: 'Track 06, Backlit',
      },
      {
        src: require('@/assets/images/declatel-album-release/declatel-western-eyes.jpg'),
        alt: 'Still of the performance of Western Eyes',
        caption: 'Track 07, Western Eyes',
      },
      {
        src: require('@/assets/images/declatel-album-release/declatel-rag-in-the-glass.jpg'),
        alt: 'Still of the performance of Rag in the Glass',
        caption: 'Track 04, Rag in the Glass',
      },
      {
        src: require('@/assets/images/declatel-album-release/declatel-where-the-pieces-came-from.jpg'),
        alt: 'Still of the performance of Where the Pieces Came From',
        caption: 'Track 03, Where the Pieces Came From',
      },
    ],
    details:
      "Designed with close consideration to the energy, lyrics, and themes of each track, nine audio reactive visuals were created for Kevin Hartley's debut album <i>Where The Pieces Came From</i> for his solo project <i>Declatel</i>. A custom performance framework was designed and developed to interface the visuals with live audio inputs, parameter adjustments, and DMX lighting outputs to connect the visuals with the surrounding space. <br><br>The album was performed during its official album release show at the historic Salt Lake City Masonic Temple on June 1, 2024, and a recording of the performance was debuted to a live global audience via live stream through VIERLIVE on Jul 25, 2024.",
    links: [
      {
        url: 'https://www.youtube.com/watch?v=xBQUv5wtHQs',
        text: '↳ Watch the full performance on YouTube',
      },
      {
        url: 'https://declatel.bandcamp.com/',
        text: "↳ Listen to Declatel's music on Bandcamp",
      },
      {
        url: 'https://www.instagram.com/declatel/',
        text: '↳ Follow Declatel on Instagram',
      },
    ],
  },
  {
    //FABRICATED LANDSCAPES
    name: 'Fabricated Landscapes',
    date: '2024',
    type: 'Book design',
    description:
      "Fabricated Landscapes is Ashton Reeder's debut book showcasing his photography and explores the technological transformations that shape megacities throughout Asia, with a focus on surveillance, density, digitization, and the relentless pace of change.",
    images: [
      {
        src: require('@/assets/images/fabricated-landscapes/2.jpeg'),
        alt: 'Design tool for Book insert design',
        caption: 'Design tool',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/1.jpeg'),
        alt: 'Insert designed by Jake Welch',
        caption: 'Insert',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/fl-00.jpg'),
        alt: 'Detail of Fabricated Landscapes with the insert designed by Jake Welch',
        caption: 'Insert, detail',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/fl-06.png'),
        alt: 'Design tool for Book insert design',
        caption: 'Design tool',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/fl-03.png'),
        alt: 'Insert designed by Jake Welch',
        caption: 'Insert',
      },
    ],
    details:
      'In collaboration with photographer, technologist, and researcher Ashton Reeder, a custom tool was designed and developed to take his photographs and reimagine them in a grid collage with each cell offset using noise and wave algorithms. The effect was designed to reflect the patterns common in city infrastructure and the rigid systems of surveillance and data that loom in the background.<br><br>Description of the book from Ashton Reeder\'s website:<br><br><i>"In his debut book, Ashton Reeder embarks on a journey through the evolving landscapes of Asia\'s megacities. The book delves into the rapid technological transformations that shape these urban giants, with a particular focus on surveillance, density, digitization, and the relentless pace of change. Capturing fleeting moments as they dissolve into the urban fabric, offering a glimpse into the environments that are continually being redefined by societal and technological progress.<br><br>Cities pictured: Istanbul, Turkiye; Tbilisi, Georgia; Baku, Azerbaijan; Dubai, U.A.E.; Abu Dhabi, U.A.E.; Manama, Bahrain; Bangkok, Thailand; Seoul, South Korea; Tokyo, Japan; Osaka, Japan; Hong Kong, Hong Kong; Shanghai, China"</i>',
    links: [
      // {
      //   url: 'https://ashtonreeder.com/shop',
      //   text: "↳ Buy Ashton's book here",
      // },
      { url: 'https://ashtonreeder.com/', text: "↳ See Ashton's other work" },
    ],
  },

  {
    //ADAPTABLE AURAS
    name: 'Adaptable Auras',
    date: '2023',
    type: 'Interactive installation',
    description:
      'Adaptable Auras is an installation that explores the role of technology in the creation of art. It leverages common fabrication and computer vision technologies to create a drawing that is intrinsically connected to the people who view it. ',
    images: [
      {
        src: require('@/assets/images/adaptable-auras/aa-main.jpg'),
        alt: 'Adaptable Auras installation',
        caption: 'Adaptable Auras',
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-feed.jpg'),
        alt: "Screenshot of the data feed as displayed on the exhibition's monitor",
        caption:
          "Screenshot of the data feed as displayed on the exhibition's monitor",
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-progress-drawing-2.jpg'),
        alt: 'Detail of the drawing process',
        caption: 'Detail of the drawing process',
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-plaque.jpeg'),
        alt: 'Detail of the exhibition plaque',
        caption: 'Detail of the exhibition plaque',
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-final-drawing.jpg'),
        alt: 'Final drawing created during the senior final review',
        caption: 'Final drawing created during the senior final review',
      },
    ],
    details:
      'Designed and developed for the Fall 2023 Multi-Disciplinary Design senior studio at the University of Utah, Adaptable Auras is an installation designed to explore the role technology has in the creation and reproduction of art.<br><br>The art theorist Walter Benjamin wrote that when an artwork is reproduced, the artists original intent becomes altered and fragmented. Now with AI, art can be created, appropriated, and reimagined through an algorithm, completely removing the artist from the equation altogether. Today it is more important than ever to find ways to use these technologies to connect us with artwork rather than remove us from it.<br><br>This installation consists of a 1369mm x 1122mm CNC pen plotter that interfaces with attendees by tracking their faces with a camera and drawing a web of their movements to a canvas. No exhibition will be identical and every drawing produced will be unique to the people who viewed it that day.',
    links: [
      {
        url: 'https://www.instagram.com/p/Cz9mnxFyE8a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        text: '↳ See my post about the project on Instagram',
      },
    ],
  },
  // Add more project objects here
];
