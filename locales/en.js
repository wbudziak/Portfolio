const en = {
  commons: {
    navigation: [
      {
        name: "Start",
        description: "Homepage.",
        path: "/",
      },
      {
        name: "About me",
        description: "Find out some information about me.",
        path: "/about",
      },
      {
        name: "Projects",
        description: "List of my hobby projects.",
        path: "/projects",
      },
      {
        name: "Contact",
        description:
          "Get in touch! You will find a couple of forms of contact here.",
        path: "/contact",
      },
      {
        name: "CV",
        description: "Download my CV!",
        downloadPath: "/download/cv-pl.pdf",
      },
    ],
    contactForm: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send a message",
      fieldRequired: "Field required.",
      enterValidEmail: "Enter a valid email address.",
      fillInTheTextField: "Fill in the text field.",
      errorMessage:
        "There was a problem submitting the form, I encourage you to contact me in another way",
      thankYouMessage:
        "Thank you for sending the form! I will respond to it as soon as possible!",
    },
  },
  main: {
    seo: {
      title: "Wojciech Budziak | Frontend Developer",
      description:
        "I'm very pleased to welcome you here! The page you are on is my portfolio. You will learn here some information about me and my projects.",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programming, websites, making websites, html, css , JavaScript, js, frontend developer, web developer , websites wschowa, websites wrocław, next.js, typesccript, sass ,wordpress, websites from scratch, junior frontend developer",
    },
    description: {
      heading: "Hi,</br>I'm <strong> Wojtek</strong>",
      description:
        "<p>I'm very pleased to welcome you here! The page you are on is my portfolio. You will learn here some information about me and my projects.</p>",
      btns: [
        {
          text: "Get to know mne",
          href: "/about",
        },
        {
          text: "Contact",
          href: "/contact",
        },
      ],
    },
  },
  about: {
    seo: {
      title: "Wojciech Budziak | About me",
      description:
        "My name is Wojciech Budziak, I am a 22-year-old Frontend Developer living and working in Wschowa. I have been doing web development for over two years, and have been working commercially for 1.5 years. In the nearest plans, I would like to move to Wroclaw and find a new job that would allow me to develop further.",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programming, websites, making websites, html, css , JavaScript, js, frontend developer, web developer , websites wschowa, websites wrocław, next.js, typesccript, sass ,wordpress, websites from scratch, junior frontend developer",
    },
    description: {
      heading: "About <strong>me</strong>",
      description:
        "<p>My name is Wojciech Budziak, I am a 22-year-old Frontend Developer living and working in Wschowa. I have been doing web development for over two years, and have been working commercially for 1.5 years. In the nearest plans, I would like to move to Wroclaw and find a new job that would allow me to develop further.</p>",
      btns: [
        {
          text: "See my projects",
          href: "/projects",
        },
      ],
    },
    mainTechnologies: {
      heading: "Main technologies",
      list: [
        {
          img: "/icons/html.svg",
          name: "HTML5",
        },
        {
          img: "/icons/css.svg",
          name: "CSS3",
        },
        {
          img: "/icons/js.svg",
          name: "JavaScript",
        },
        {
          img: "/icons/react.svg",
          name: "React",
        },
        {
          img: "/icons/wp.svg",
          name: "Wordpress",
        },
      ],
    },
    otherTechnologies: {
      heading: "Other technologies",

      list: [
        "SASS/SCSS",
        "Bootstrap",
        "TypeScript basics",
        "PHP basics",
        "ACF PRO - Wordpress",
        "Firebase",
        "Redux Toolkit",
        "React Router",
        "Styled Components",
        "Framer motion",
        "Next.js",
        "GraphQL + Apollo",
        "Git",
        "RWD",
        "Figma",
        "Zeplin",
      ],
    },
    experience: {
      heading: "Timeline",
      list: [
        {
          name: "Frontend Developer - <strong>Tojekmek</strong>",
          years: "September 2021 - Currently",
          city: "Wschowa",
          list: [
            "<span>After completing my internship, I was offered permanent employment. My activities included:</span><ul><li><span className='point'></span>creation of website templates from scratch for the WordPress platform, based on the ACF plugin</li><li><li><span className='point'></span>coding of views created by a graphic designer</li><li><span className='point'></span>writing scripts in JavaScript and PHP</li><li><span className='point'></span>creation of landing pages and sites with a large number of subpages with a blog</li><li><span className='point'></span>Cooperation with an external company creating a proprietary platform for B2B trade with its own CMS, for which I adapted and implemented online stores according to the client's requirements</li></ul>",
          ],
        },
        {
          name: "Internship - <strong>Tojekmek</strong>",
          years: "March 2021 - September 2021",
          city: "Wschowa",
          list: [
            "After almost a year, I got a six-month internship at Tojekmek, where I was able to further develop myself and gain commercial experience working with clients.",
          ],
        },
        {
          name: "First steps as a Frontend Developer",
          years: "2020",
          city: "",
          list: [
            "I took my first serious steps in programming and web development in 2020, shortly before graduating from the IT technical school, when I had to choose the path of my development. I opted for Frontend, which, as it turned out later, was a good choice, because it gives me joy and satisfaction.",
          ],
        },
      ],
    },
  },
  projects: {
    seo: {
      title: "Wojciech Budziak | Projects",
      description: "A couple of my hobby projects done in my free time",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programming, websites, making websites, html, css , JavaScript, js, frontend developer, web developer , websites wschowa, websites wrocław, next.js, typesccript, sass ,wordpress, websites from scratch, junior frontend developer",
    },
    description: {
      heading: "My <strong>projects</strong>",
      description: "<p>A couple of my hobby projects done in my free time</p>",
      btns: [
        {
          text: "Get in touch with me",
          href: "/contact",
        },
      ],
    },
    projects: [
      {
        link: "https://github.com/wbudziak/Portfolio",
        img: "/images/react-portfolio.png",
        name: "Portfolio website",
        description: "made with React and Next.js",
        technology: ["React", "Next.js"],
      },
      {
        link: "https://github.com/wbudziak/jsMemoryGame",
        img: "/images/jsmemory.png",
        name: "Memory game",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/react-calculator/tree/master",
        img: "/images/calculator.png",
        name: "Calkulator",
        description: "My first project made in React",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/ReactExchangeApp",
        img: "/images/exchange.png",
        name: "Exchange App",
        description: "Using an external API",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/TypeSpeedTest",
        img: "/images/typing.png",
        name: "Typing speed test",
        description: "Currently unfinished",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/ReactTypingSpeedTest",
        img: "/images/drum-machine.png",
        name: "Automat perkusyjny",
        description: "Currently unfinished",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/RGBColorGame",
        img: "/images/rgb.png",
        name: "RGB color game",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/StopWatch",
        img: "/images/stopwatch.png",
        name: "Stopwatch",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/pswdGenerator",
        img: "/images/passwordgenerator.png",
        name: "Password generator",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/ToDoList",
        img: "/images/todolist.png",
        name: "To Do List",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/JSclock",
        img: "/images/clock.png",
        name: "Clock",
        description: "My first project in JavaScript",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/clickSpeedTest",
        img: "/images/clickspeedtest.png",
        name: "Click speed test",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
    ],
    listing: {
      btn: "All",
    },
  },
  contact: {
    seo: {
      title: "Wojciech Budziak | Contact",
      description:
        "Let's get to know each other! Here you will find various forms of contact.",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programming, websites, making websites, html, css , JavaScript, js, frontend developer, web developer , websites wschowa, websites wrocław, next.js, typesccript, sass ,wordpress, websites from scratch, junior frontend developer",
    },
    description: {
      heading: "<strong>Contact</strong> me",
      description:
        "<ul><li><img src='/icons/envelope.svg'/><a href='mailto:w.a.budziak@gmail.com'>w.a.budziak@gmail.com</a></li><li><img src='/icons/linkedin.svg'/><a target='_blank' href='https://www.linkedin.com/in/wojciech-budziak-6854301bb/'>wojciech budziak</a></li><li><img src='/icons/github.svg'/><a target='_blank' href='https://github.com/wbudziak/'>w.budziak</a></li><ul><p>I also encourage you to contact me through the form. Your contact information is secure and will not be shared with third parties.</p>",

      btns: [
        {
          text: "Download my CV",
          downloadPath: "/download/cv-pl.pdf",
        },
      ],
    },
  },
};

export default en;
