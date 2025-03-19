export default [
  {
    //AUSTIN AUBRY PHOTO
    name: 'austinaubry.photo',
    date: 'Spring 2024',
    type: 'Web design & development',
    technologies: 'P5.js, HTML, CSS',
    description:
      "Designed for Austin Aubry's photography portfolio website, these animations were developed to make the landing page dynamic.",
    images: [
      {
        src: require('@/assets/images/austin-aubry-photo/austinaubryphoto-demo.gif'),
        alt: 'austinaubry.photo',
        caption: 'From austinaubry.photo',
      },
    ],
    details:
      'Developed in March of 2024, I worked closely with Austin to create these animations for the landing page on his portfolio site. On load, each photo renders with a staggered pixelation effect. When hovered over, each photo raises.',
    links: [{ url: 'https://austinaubry.photo', text: '↳ See more here' }],
  },

  {
    //DIGITAL HUMANITIES UTAH
    name: 'Digital Humanities Utah',
    date: 'Fall 2023',
    type: 'Branding and promotion',
    technologies: 'Processing, Adobe Illustrator',
    description:
      'Every year, Utah\'s seven major universities gather for a two-day symposium dedicated to share research, network, and learn about emerging digital humanities tools and methods. Striving to honor the theme, this branding guide incorporated generative methods & traditional computer "dithering" aesthetics to create its assets.',
    iframe: 'https://www.youtube.com/embed/ddzfihsrbW4?si=dbiJw_oMQzdYDFKg',
    images: [
      {
        src: require('@/assets/images/dhu/dhu8-01.jpg'),
        alt: 'Logo & watermark variants',
        caption: 'Logo & watermark variants',
      },
      {
        src: require('@/assets/images/dhu/dhu8-02.jpg'),
        alt: "Dither banner of Utah's campuses",
        caption: "Dither banner of Utah's campuses",
      },
      {
        src: require('@/assets/images/dhu/dhu8-03.jpg'),
        alt: 'Dither icons of the state of Utah',
        caption: 'Dither icons of the state of Utah',
      },
      {
        src: require('@/assets/images/dhu/dhu8-04.jpg'),
        alt: 'DHU8 merch mock-ups',
        caption: 'DHU8 merch mock-ups',
      },
    ],
    details:
      "To achieve the dithering effect, monochromatic tiles were made in Illustrator to represent different brightness values. The tiles were then loaded into a custom program coded in Processing that could pixelate an image and assign each pixel a tile.<br><br>For the source image, a collage was made of satellite photographs of Utah's seven universities. The composition was processed through the program resulting in a unique banner pattern that could be used to create the remaining assets, such as the logo & watermark.",
    links: [
      {
        url: 'https://dhutah.org/about/',
        text: '↳ Digital Humanities Utah website',
      },
      {
        url: 'https://www.instagram.com/dighum_utah/',
        text: '↳ Digital Humanities Utah Instagram',
      },
    ],
  },

  {
    //THE POD MILL
    name: 'The Pod Mill',
    date: 'Spring 2023',
    type: 'Audio reactive visuals',
    technologies: 'TouchDesigner',
    description:
      'This project was to work with The Pod Mill, a podcasting studio from Salt Lake City, to explore audio reactive visualizers that could be paired with the audio recordings of their podcasting clients when uploading content to video platforms.',
    iframe:
      'https://www.youtube.com/embed/74TfYPBh1G0?&loop=1&playlist=74TfYPBh1G0&mute=1',
    images: [
      {
        src: 'https://www.youtube.com/embed/74TfYPBh1G0?&loop=1&playlist=74TfYPBh1G0&mute=1',
        alt: 'Audio reactive visual 1',
        caption: 'Audio reactive visual 1',
      },
      {
        src: 'https://www.youtube.com/embed/bflKuuYzJKw?&loop=1&playlist=bflKuuYzJKw&mute=1',
        alt: 'Audio reactive visual 2',
        caption: 'Audio reactive visual 2',
      },
      {
        src: 'https://www.youtube.com/embed/7V-pgysE-50?&loop=1&playlist=7V-pgysE-50&mute=1',
        alt: 'Audio reactive visual 3',
        caption: 'Audio reactive visual 3',
      },
    ],
    details:
      'The Pod Mill approached my team and I to help them approach the issue of engaging their audiences who watch their podcasts on video platforms. Because not every show can feasibly have a multiple-camera setup, we created a series of generative audio-reactive visuals in TouchDesigner which could be easily modified to fit any show\'s branding.<br><br><a href="https://www.thepodmill.com/" target="_blank">↳ The Pod Mill</a>',
    links: [{ url: 'https://www.thepodmill.com/', text: '↳ The Pod Mill' }],
  },

  // KYRRE STOOL CMF RE-DESIGN
  {
    name: 'IKEA Kyrre CMF re-design',
    date: 'September 2023',
    type: 'CMF re-design',
    technologies: 'Blender, Adobe Illustrator',
    description:
      'As an exercise in exploring & understanding CMF redesigns, this project reimagines the IKEA KYRRE stool as if it were designed with utility purposes to exist in a workshop or a garage.',
    images: [
      {
        src: require('@/assets/images/ikea-kyrre/ikcmf-01.jpg'),
        alt: 'Final render of the re-design',
        caption: 'Final render of the re-design',
      },
      {
        src: require('@/assets/images/ikea-kyrre/ikcmf-02.jpg'),
        alt: 'Stool with new materials',
        caption: 'Stool with new materials',
      },
      {
        src: require('@/assets/images/ikea-kyrre/ikcmf-03.jpg'),
        alt: 'Re-designed stool exploded view',
        caption: 'Re-designed stool exploded view',
      },
    ],
    details:
      "IKEA's KYRRE is a popular stool designed to be modern, affordable, stackable, & multi-functional. Made of birch plywood and veneer & coming in a variety of colors, it is a practical choice of furniture for the home. What would happen if that intended function were to shift? In this project, the stool has been re-designed for use as a utility object in workshops or garages without changing its form.<br><br>The stool has been re-designed with metal legs and a sheet-metal top to add strength and durability. With these new materials, the stool can have projects clamped to it or have glue easily scraped off its surface without sacrificing its stacking ability. For color, high visibility hues were chosen, mimicking those already commonly used with tools found on construction sites.",
    links: [],
  },

  {
    //SOHI STUDIOS / CAMP4
    name: 'SOHI Studios / Camp4',
    date: 'Spring 2023',
    type: 'Pitch deck template design',
    technologies: 'Adobe InDesign',
    description:
      'Working with SOHI Studios, this project was to create a treatment deck template for the production studio Camp4 that could be adjusted for use when presenting to new clients.',
    images: [
      {
        src: 'images/sohi-camp4/c4-title-page.jpg',
        alt: 'Treatment deck title page',
        caption: 'Treatment deck title page',
      },
      {
        src: 'images/sohi-camp4/c4-large-text.jpg',
        alt: 'Page for heavy text',
        caption: 'Page for heavy text',
      },
      {
        src: 'images/sohi-camp4/c4-example-page-1.jpg',
        alt: 'Page with photo collage elements',
        caption: 'Page with photo collage elements',
      },
      {
        src: 'images/sohi-camp4/c4-example-page-2.jpg',
        alt: 'Page with film contact sheet design',
        caption: 'Page with film contact sheet design',
      },
      {
        src: 'images/sohi-camp4/c4-example-page-3.jpg',
        alt: 'Page with simple design & variable text box layout',
        caption: 'Page with simple design & variable text box layout',
      },
    ],
    details:
      'The deck was assembled using placeholder text and images in conjunction with Camp4\'s existing typefaces and visual identity. Paired with SOHI\'s aesthetic of a physical collage aesthetic, film contact sheets, film burn, and grime, the design evokes feelings of nostalgia and adventure.<br><br><a href="https://www.instagram.com/sohi_studios/" target="_blank">↳ Check out SOHI Studios</a><br><a href="https://camp4collective.com/" target="_blank">↳ Check out Camp4 Collective</a>',
    links: [
      {
        url: 'https://www.instagram.com/sohi_studios/',
        text: '↳ Check out SOHI Studios',
      },
      {
        url: 'https://camp4collective.com/',
        text: '↳ Check out Camp4 Collective',
      },
    ],
  },

  {
    //FOLDERS
    name: 'FOLDERS',
    date: 'Fall 2022',
    type: 'Research, system design, UX/UI',
    technologies: 'Figma, Adobe Illustrator',
    description:
      'FOLDERS was developed as a prototype open-source website targeted towards designers for collecting, finding, & sharing resources.',
    iframe:
      'https://www.youtube.com/embed/UdeIyWaV7AI?&loop=1&playlist=UdeIyWaV7AI&mute=1',
    images: [
      {
        src: 'images/folders/f-01.jpg',
        alt: 'Landing page',
        caption: 'Landing page',
      },
      {
        src: 'images/folders/f-02.jpg',
        alt: 'Profile tab',
        caption: 'Profile tab',
      },
      {
        src: 'images/folders/f-03.jpg',
        alt: 'Explore tab',
        caption: 'Explore tab',
      },
      {
        src: 'images/folders/f-04.jpg',
        alt: 'Collab tab',
        caption: 'Collab tab',
      },
    ],
    details:
      'Developed during the fall 2022 Multi-Disciplinary Design junior studio in the College of Architecture and Planning at the University of Utah, FOLDERS was designed with the idea of creating an "online commons", a place where designers can openly and freely collaborate to collect, find, and share resources. As designers we have to keep track of many tools and inspirations – this tool is designed to not only make it easier, but to encourage a community-focused approach in working with other designers. The website follows a simple structure of three main tabs, all accessible from the landing page and from a drop down menu. The ‘Profile’ tab is the hub for all resources saved by the user. Through folders and sub-folders, links can easily be saved, organized, accessed, and shared with others. When saving a link, users add tags which inform the algorithm for the ‘Explore’ tab. Resources can also be shared directly within Folders to groups & other users. The ‘Explore’ tab contains the feed of all algorithmically recommended resources as well as the folders of other users similar to those of the users. Links and folders can be quickly added to the user’s own profile by clicking the blue ‘plus’ icon. The ‘Collab’ tab is where users can find and join groups which cater to their interests. By joining these new communities, users are encouraged to work with each other to strengthen each other in design. Links from the users’ profile can be quickly shared here, and resources can be added to their profile by clicking the blue ‘plus’ icon which will automatically appear next to links.<br><br><a href="https://www.figma.com/proto/OHPs9KAkRZ04BOOQeToLBF/FOLDERS?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=r6LUnSes9e6YLvCc-1" target="_blank">↳ Full interactive prototype on Figma</a>',
    links: [],
  },

  {
    //PAPAYA SYSTEM EXPLORATION
    name: 'Papaya system exploration',
    date: 'Spring 2022',
    type: 'System research, speculative',
    technologies:
      'Processing, Blender, Adobe Illustrator, lasercutting, physical prototyping',
    description:
      'Using natural systems research as a constraint, this project draws from the physical form & cultural significance & history of the papaya to create drawings, narratives, & a physical artifact.',
    iframe:
      'https://www.youtube.com/embed/J58_Gj02s_M?&loop=1&playlist=J58_Gj02s_M&mute=1',
    images: [
      {
        src: 'images/papaya/papaya-01.jpg',
        alt: 'ASCII drawing of cross sections',
        caption: 'ASCII drawing of cross sections',
      },
      {
        src: 'images/papaya/papaya-02.jpg',
        alt: '3D model of lofted cross sections',
        caption: '3D model of lofted cross sections',
      },
      {
        src: 'images/papaya/papaya-03.jpg',
        alt: '3D scan explorations',
        caption: '3D scan explorations',
      },
      {
        src: 'images/papaya/papaya-04.jpg',
        alt: 'Abstract 3D composition',
        caption: 'Abstract 3D composition',
      },
      {
        src: 'images/papaya/papaya-05.jpg',
        alt: '3D model of a papain enzyme',
        caption: '3D model of a papain enzyme',
      },
      {
        src: 'images/papaya/papaya-06.jpg',
        alt: 'Ephemeral composition',
        caption: 'Ephemeral composition',
      },
      {
        src: 'images/papaya/papaya-07.jpg',
        alt: 'Physical artifact',
        caption: 'Physical artifact',
      },
      {
        src: 'images/papaya/papaya-08.jpg',
        alt: 'Demonstration of the projection & resulting drawing made during its presentation',
        caption:
          'Demonstration of the projection & resulting drawing made during its presentation',
      },
    ],
    details:
      'Developed during the spring 2022 Multi-Disciplinary Design junior studio in the College of Architecture and Planning at the University of Utah, this project is a collection of drawings and a final physical artifact created to document and explore the natural systems found in papaya.<br><br>The drawings explore the inner and outer physical forms of the fruit as well as its ephemeral and cultural qualities.<br><br>The physical artifact is built of acrylic circles with the cross-sections of a papaya cut into their centers. The base is designed so that when the crank is turned, the cross sections turn opposite to one other. When a light is shined through, the projection of the turning sections generates a new papaya cross-section.',
    links: [],
  },

  {
    //VIRTUALIZED ABSTRACTIONS
    name: 'Virtualized Abstractions',
    date: 'Fall 2021',
    type: 'Interactive installation, speculative',
    technologies: 'Processing, physical prototyping, woodworking',
    description:
      'In a semester-long speculative design project, students were tasked with exploring and interpreting the concept of a "mask" which could be interacted with by a user to distort or enhance sight or sound -- and could then be collapsed or disassembled and placed into container.',
    iframe:
      'https://player.vimeo.com/video/898180711?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479',
    images: [
      {
        src: 'images/virtual-abstractions/va-diagram.jpg',
        alt: 'Diagram of the apparatus construction',
        caption: 'Diagram of the apparatus construction',
      },
    ],
    details:
      'Developed during the fall 2021 Multi-Disciplinary Design sophomore studio in the College of Architecture and Planning at the University of Utah, this project encouraged students to prototype, document, and research in a speculative space to meet the project\'s requirements. Utilizing code, infrared cameras, and projection, VIRTUALIZED ABSTRACTIONS is a deployable apparatus that can be set up as an installation where users approach the device to have their body distorted into pixels. The abstraction is projected onto the wall in front of them, a mask of their physical form.<br><br>By interacting with this "mask", users have their vision shifted from a physical realm to digital one -- distorting their sight and providing an interesting reflection on what it means to be.',
    links: [],
  },
  {
    //UPHERE COMPILATION VOL. 2 FOR UKRAINE
    name: 'UPHERE Compilation Vol. 2 for Ukraine',
    date: 'February 2023–March 2022',
    type: 'Motion & Visual graphics, promotion',
    technologies: 'Blender, Adobe Premiere',
    description:
      'UPHERE! Records is an independent record label & collective based in Provo, Utah. For this project, 3D graphics were designed for their Compilation Vol. 2 cassette tape to raise money for refugees of the Ukraine-Russia war. All proceeds went to Save The Children and The Ukraine Humanitarian Fund.',
    iframe:
      'https://www.youtube.com/embed/CrOKz8eLiYU?&loop=1&playlist=CrOKz8eLiYU&mute=1',
    images: [],
    details:
      'UPHERE! Records is an independent record label & collective based in Provo, Utah. For this project, 3D graphics were designed for their Compilation Vol. 2 cassette tape to raise money for refugees of the Ukraine-Russia war. All proceeds went to Save The Children and The Ukraine Humanitarian Fund.<br><br><a href="https://uphererecords.bandcamp.com/album/uphere-compilation-vol-2" target="_blank">↳ The tape on Bandcamp</a><br><a href="https://www.instagram.com/p/Ca8H0puOTNz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">↳ Promotional post on Instagram</a>',
    links: [],
  },
];
