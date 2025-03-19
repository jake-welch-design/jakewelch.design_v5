export default [
  {
    //LANGUAGE OF MOVEMENT
    name: 'UMOCA, Language of Movement',
    date: '04-07/2024',
    type: 'Art Exhibition',
    technologies:
      'p5.js, Python, computer vision, projection mapping, Premiere, After Effects, 3D printing, fabrication',
    description:
      '"Language of Movement" by Milad Mozari was shown as part of the "In Memory" exhibition on view between July 2024 to February 2025 at the Utah Museum of Contemporary Art in Salt Lake City. The exhibit centered on the archives of Ghaffar Pourazar, an Azerbaijani-Iranian computer animator turned Beijing Opera performer, and his fascinating life and story.',
    images: [
      {
        src: require('@/assets/images/language-of-movement/umoca_1.jpg'),
        alt: 'Language of Movement',
        caption: 'Language of Movement',
      },
      {
        src: require('@/assets/images/language-of-movement/Umoca_2.jpg'),
        alt: 'Detail of frame',
        caption: 'Detail of the frame',
      },
      {
        src: require('@/assets/images/language-of-movement/umoca_4.jpg'),
        alt: 'Exhibition attendee using the VR headset',
        caption: 'Exhibition attendee using the VR headset',
      },
      {
        src: require('@/assets/images/language-of-movement/umoca_6.jpg'),
        alt: 'Exhibition attendee interacting with the photo table',
        caption: 'Exhibition attendee interacting with the photo table',
      },
      {
        src: require('@/assets/images/language-of-movement/umoca_7.jpg'),
        alt: 'Exhibition attendees',
        caption: 'Exhibition attendees',
      },
    ],
    details:
      'Description from UMOCA\'s website:<br><br><i>"Spanning three decades and three continents of archival material, Language of Movement is artist Milad Mozari\'s ongoing conversation with Ghaffar Pourazar, an Azerbaijani-Iranian computer animator turned Beijing Opera performer. The materials presented are layers of media collected in Pourazar\’s life and transported by Mozari from Pourazar\’s old apartment in Beijing. They point to Pourazar\’s desire to learn Beijing Opera without knowing the language, where he feverously documented learning the art form. The Exit Gallery exhibition consists of archival photographs, video, and sound. It features the artist\’s interpretation of Pourazar\’s journey through animation, computer vision, and immersive environments. The exhibition is a proposal for preservation, where the multiplicity of language and place exist on a continuum."</i><br><br>As his exhibition assistant, I worked closely with Mozari to develop the exhibition by creating generative patterns and animations, a custom pose-detection script, and other additional spatial and hardware elements.<br><br>The patterns projected on the frame and used to decorate the space were designed and animated in p5.js. In its developement, we pulled inspiration from Islamic tiling while still being organic and changing in their relationship to echo Pourazar\'s experience as an Azerbaijani-Iranian in learning his role as the Monkey King without knowing the language.<br><br>The pose-detection algorithm written in Python using MediaPipe is paired with a webcam and photo loupe to magnify film strips of images from Pourazar\’s time in training. The script draws a gold and red "stick figure" over figures in various poses echoing his early animation and motion capture work. Often the algorithm takes a moment to recognize the pose before it gets it correct, much like Pourazar\'s process of learning the movements for his role. <br><br>Photo credit: Zachary Norman',
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
    name: 'Declatel, "Where the Pieces Came From" Album Release Show',
    date: '02-06/2024',
    type: 'Live concert visuals',
    technologies: 'TouchDesigner',
    description:
      '"Where the Pieces Came From" is the debut album of Kevin Hartley. This album was filmed and performed to a live audience in its entirety at the historic Salt Lake City Masonic Temple on June 1, 2024.',
    iframe: 'https://www.youtube.com/embed/xBQUv5wtHQs?si=GkNOtQ3lmfr6sUXa',
    images: [
      //   { src: require('@/assets/images/declatel-album-release/01-reprisal.gif'), alt: 'GIF of the visual for the song Reprisal', caption: 'Track 01, Reprisal' },
      //   { src: require('@/assets/images/declatel-album-release/02-our-many-ends.gif'), alt: 'GIF of the visual for the song Our Many Ends', caption: 'Track 02, Our Many Ends' },
      //   { src: require('@/assets/images/declatel-album-release/03-where-the-pieces-came-from.gif'), alt: 'GIF of the visual for the song Where the Pieces Came From', caption: 'Track 03, Where the Pieces Came From' },
      //   { src: require('@/assets/images/declatel-album-release/04-rag-in-the-glass.gif'), alt: 'GIF of the visual for the song Rag in the Glass', caption: 'Track 04, Rag in the Glass' },
      //   { src: require('@/assets/images/declatel-album-release/05-modulo.gif'), alt: 'GIF of the visual for the song Modulo', caption: 'Track 05, Modulo' },
      //   { src: require('@/assets/images/declatel-album-release/06-backlit.gif'), alt: 'GIF of the visual for the song Backlit', caption: 'Track 06 Backlit' },
      //   { src: require('@/assets/images/declatel-album-release/07-western-eyes.gif'), alt: 'GIF of the visual for the song Western Eyes', caption: 'Track 07, Western Eyes' },
      //   { src: require('@/assets/images/declatel-album-release/08-penny-bun.gif'), alt: 'GIF of the visual for the song Penny Bun', caption: 'Track 08, Penny Bun' },
      //   { src: require('@/assets/images/declatel-album-release/09-start-again.gif'), alt: 'GIF of the visual for the song Start Again', caption: 'Track 09, Start Again' }
    ],
    details:
      'For this project I designed 9 unique visuals for each song on the album to be used during the live recording and album release show performed at the historic Salt Lake City Masonic Temple. I also built a custom VJing framework which included a transition visual, MIDI inputs for show controls, and DMX outputs for syncing the visuals with lights.<br><br>Each song was carefully considered and listened to for inspiration in the development process and was made to be uniquely audio-reactive to pair with the dynamics of the music.',
    links: [
      {
        url: 'https://declatel.bandcamp.com/',
        text: "↳ Listen to Declatel's music here",
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
    date: '05-07/2024',
    type: 'Book insert design',
    technologies: 'p5.js',
    description:
      "Fabricated Landscapes is Ashton Reeder's debut book showcasing his photography and explores the technological transformations that shape megacities throughout Asia, with a focus on surveillance, density, digitization, and the relentless pace of change.",
    images: [
      {
        src: require('@/assets/images/fabricated-landscapes/fl-00.jpg'),
        alt: 'Detail of Fabricated Landscapes with the insert designed by Jake Welch',
        caption: 'Insert, detail',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/fl-03.png'),
        alt: 'Insert designed by Jake Welch',
        caption: 'Insert',
      },
      {
        src: require('@/assets/images/fabricated-landscapes/fl-06.png'),
        alt: 'Design tool for Book insert design',
        caption: 'Design tool',
      },
    ],
    details:
      'Description of the book from Ashton Reeder\'s website:<br><br><i>"In his debut book, Ashton Reeder embarks on a journey through the evolving landscapes of Asia\'s megacities. The book delves into the rapid technological transformations that shape these urban giants, with a particular focus on surveillance, density, digitization, and the relentless pace of change. Capturing fleeting moments as they dissolve into the urban fabric, offering a glimpse into the environments that are continually being redefined by societal and technological progress.<br><br>Cities pictured: Istanbul, Turkiye; Tbilisi, Georgia; Baku, Azerbaijan; Dubai, U.A.E.; Abu Dhabi, U.A.E.; Manama, Bahrain; Bangkok, Thailand; Seoul, South Korea; Tokyo, Japan; Osaka, Japan; Hong Kong, Hong Kong; Shanghai, China"</i><br><br>Working with Ashton, I used p5.js to build a flexible generative image collaging tool that could take any photograph and manipulate it in a grid pattern with noise and wave offsets to each cell. The idea was to imitate both the technological and rigid city-like patterns found throughout the book.',
    links: [
      {
        url: 'https://ashtonreeder.com/shop',
        text: "↳ Buy Ashton's book here",
      },
      { url: 'https://ashtonreeder.com/', text: "↳ See Ashton's other work" },
    ],
  },

  {
    //ADAPTABLE AURAS
    name: 'Adaptable Auras',
    date: '08-12/2023',
    type: 'Interactive installation',
    technologies: 'Processing, Arduino, robotics, computer vision',
    description:
      'Adaptable Auras is an installation designed to explore & challenge the role technology plays in the tradition of art by implementing reproduction & machine learning technologies to create an art piece that is intrinsically connected to those who view it. The pen plotter receives data collected from individuals in the space using computer vision & converts that data into a unique drawing.',
    iframe: 'https://player.vimeo.com/video/891990246?h=8ac3defae6',
    images: [
      {
        src: require('@/assets/images/adaptable-auras/aa-final-diagram.jpg'),
        alt: 'Diagram of the final installation design',
        caption: 'Diagram of the final installation design',
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-feed.jpg'),
        alt: 'Screenshot of the data feed as displayed on the exhibition\’s monitor',
        caption:
          'Screenshot of the data feed as displayed on the exhibition\’s monitor',
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-progress-drawing.jpg'),
        alt: 'Detail of the drawing process',
        caption: 'Detail of the drawing process',
      },
      {
        src: require('@/assets/images/adaptable-auras/aa-final-drawing.jpg'),
        alt: 'Final drawing created during the senior final review',
        caption: 'Final drawing created during the senior final review',
      },
    ],
    details:
      'Developed during the fall 2023 Multi-Disciplinary Design senior studio in the College of Architecture and Planning at the University of Utah, this project is an art installation designed to explore and challenge the role technology and reproduction play in the creation of art.<br><br>When an artwork is reproduced, its re-contextualization alters its meaning & something special about the original is lost. With machine learning and AI image generation, art can be created, appropriated, and re-imagined by an algorithm, completely removing the role of an artist altogether. It is more important than ever to find ways to use these technologies to connect us with artwork before they remove us from it.<br><br>The installation consists of a 1369mm x 1122mm CNC pen plotter that interfaces with attendees in the exhibit space through a camera connected to a custom program. The software works to track faces in the space & draw their movements to a canvas, resulting in a web of strokes where each vertex represents an attendee who approached and viewed the installation – an art piece that is intrinsically connected to those who view it.',
    links: [
      {
        url: 'https://www.instagram.com/p/Cz9mnxFyE8a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        text: '↳ See my post about the project on Instagram',
      },
    ],
  },

  {
    //MAACH AGENCY LAUNCH EVENT
    name: 'MAACH Agency Launch Event',
    date: '09-10/2023',
    type: 'Interactive installation',
    technologies: 'Processing, computer vision',
    description:
      'MAACH Agency is a creative agency operating in Berlin, Germany',
    iframe:
      'https://player.vimeo.com/video/897978161?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    images: [
      {
        src: require('@/assets/images/maach/ma-01.jpg'),
        alt: 'Installation in use 01',
        caption: 'Installation in use 01',
      },
      {
        src: require('@/assets/images/maach/ma-02.jpg'),
        alt: 'Installation in use 02',
        caption: 'Installation in use 02',
      },
    ],
    details:
      'A modified version of the <a href="https://www.instagram.com/reel/CthYOGqReuZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Saving Face</a> program, this real time interactive installation used a webcam to detect and copy the faces of attendees who approached the projection and pasted them into a grid.',
    links: [
      { url: 'https://www.maachagency.com/', text: '↳ MAACH Agency website' },
    ],
  },

  {
    //THE FACE OF MEDIA
    name: 'The Face of Media',
    date: '01-05/2023',
    type: 'Interactive installation',
    technologies: 'Processing, Python, computer vision',
    description:
      'The Face of Media is a speculative installation designed to explore machine learning as a UI tool to surpass language barriers.',
    iframe:
      'https://player.vimeo.com/video/898173536?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    images: [
      {
        src: require('@/assets/images/the-face-of-media/tfom.jpg'),
        alt: 'Setup of the final exhibit',
        caption: 'Setup of the final exhibit',
      },
      {
        src: require('@/assets/images/the-face-of-media/tfom-02.jpg'),
        alt: 'Attendee interacting with the exhibit with a "surprised" expression',
        caption:
          'Attendee interacting with the exhibit with a "surprised" expression',
      },
    ],
    details:
      'Developed during the spring 2023 Multi-Disciplinary Design junior studio in the College of Architecture and Planning at the University of Utah, this project is a speculative installation designed to explore machine learning as a UI tool to overcome language barriers. Attendees approaching the exhibit would have their face analyzed and a machine learning algorithm would determine whether their face was expressing one of seven emotions: neutral, happy, sad, anger, disgust, surprise, or fear. Based on the perceived emotion, the program would automatically play a random video clip exhibiting said emotion.<br><br>The exhibit consisted of a camera, a screen, an optional button for halting video playback, and instructions. It worked by running a facial emotion recognition (FER) algorithm consisting of a residual masking network framework and tensorflow in Python, and sending the perceived emotion to a program written in Processing via websocket that could then handle video playback. The Processing program would use this data to pick from "emotion" categories to play a random video related to the expression. Once a video would start playing, attendees could then have the option to press a green button to halt playback if desired.<br><br><a href="https://github.com/phamquiluan/ResidualMaskingNetwork/tree/master" target="_blank">↳ "Residual masking network" code by Luan Pham used in the project</a>',
    links: [],
  },

  {
    //DIGITAL DATA COLLECTION SPRINT
    name: 'Digital data collection sprint',
    date: '01/2023',
    type: 'Research',
    technologies: 'Blender, Premiere, Arduino',
    description:
      'A light measuring device was built & used to gather light values near bus stops in three Salt Lake City neighborhoods of varying incomes. The data was then compared, mapped, & analyzed.',
    iframe:
      'https://www.youtube.com/embed/L1gVfEMGIRs?&loop=1&playlist=L1gVfEMGIRs&mute=1',
    images: [
      {
        src: require('@/assets/images/digital-data-collection/ddc-01.jpg'),
        alt: 'Data collection device in use',
        caption: 'Data collection device in use',
      },
      {
        src: require('@/assets/images/digital-data-collection/ddc-02.jpg'),
        alt: 'Data collection device',
        caption: 'Data collection device',
      },
    ],
    details:
      'Developed over a week long period in collaboration with classmates, the goal of this project was to use micro-controllers and electronics to gather data and conduct research. Built using an Arduino Uno R3, light sensors, various electronics, acrylic and MDF, this device helped gather arbitrary light values near bus stops. Multiple values were measured and recorded at each location and then averaged to improve accuracy and consistency. After measuring each area, it was found that the middle income neighborhood was the darkest, followed by the high income neighborhood, and the low income neighborhood was the brightest.<br><br><a href="https://www.city-data.com/income/income-Salt-Lake-City-Utah.html" target="_blank">↳ Income data map for Salt Lake City</a><br><a href="https://maps.app.goo.gl/ZsCFeAFbf34WqTDt7" target="_blank">↳ Google Maps list of bus stops analyzed</a><br><a href="https://docs.google.com/spreadsheets/d/1uQGXrNANI2xhXs3IDnFtqpM1tJHx2XcrCeCfMvokXHI/edit?usp=sharing" target="_blank">↳ Spreadsheet of the data</a>',
    links: [],
  },

  {
    //DEMO FESTIVAL
    name: 'DEMO Festival',
    date: '10/2022',
    type: 'Motion design',
    technologies: 'Processing',
    description:
      'Showcased during the DEMO Festival 2022, "Pixel Waves" was displayed on public screens across the Netherlands.',
    iframe:
      'https://www.youtube.com/embed/MV8jQ_upIQU?loop=1&playlist=MV8jQ_upIQU&mute=1',
    images: [],
    details:
      'Founded by Studio Dumbar/DEPT® and Global, DEMO Festival aims to showcase the worlds best motion design by displaying the works of designers from all across the globe on more than 5000 screens across the Netherlands, including train stations, metros, shopping centers, Schiphol Airport, Eindhoven Airport and Rotterdam The Hague Airport, on billboards along major highways, and in the streets. This piece was submitted and selected to be shown as part of the event.<br><br><a href="https://demofestival.com/" target="_blank">↳ Official DEMO Festival website</a><br><a href="https://www.instagram.com/reel/CqdSsXGsrxm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">↳ "Pixel Waves" shared to DEMO\'s Instagram</a>',
    links: [],
  },

  {
    //BODY OF LEAVES, "EQUATION" MUSIC VIDEO
    name: 'Body of Leaves, "Equation" music video',
    date: '06-08/2022',
    type: 'Music video',
    technologies: 'Processing, Blender, TouchDesigner, Premiere',
    description:
      'Made for the release of Body of Leaves\' new single \"Equation\"',
    iframe:
      'https://www.youtube.com/embed/j-0qkR1rvtA?loop=1&playlist=j-0qkR1rvtA&controls=0',
    images: [],
    details:
      'Working closely with the band, video footage was filmed and converted into ASCII characters while additional animations were created in conjunction with collaboration Evan Pack (of Body of Leaves) using Blender and TouchDesigner.<br><br><a href="https://bodyofleaves.bandcamp.com/releases" target="_blank">↳ Body of Leaves on Bandcamp</a>',
    links: [],
  },
  // Add more project objects here
];
