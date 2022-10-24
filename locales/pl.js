const pl = {
  commons: {
    navigation: [
      {
        name: "Start",
        description: "Strona Główna.",
        path: "/",
      },
      {
        name: "O mnie",
        description: "Dowiedz się trochę informacji o mnie.",
        path: "/about",
      },
      {
        name: "Projekty",
        description: "Zbiór moich hobbystycznych projektów.",
        path: "/projects",
      },
      {
        name: "Kontakt",
        description: "Odezwij się! Znajdziesz tutaj parę form kontaktu.",
        path: "/contact",
      },
      {
        name: "CV",
        description: "Pobierz moje CV!",
        downloadPath: "/download/cv-pl.pdf",
      },
    ],
    contactForm: {
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      submit: "Wyślij wiadomość",
      fieldRequired: "Pole wymagane.",
      enterValidEmail: "Podaj poprawny adres email.",
      fillInTheTextField: "Wypełnij pole tekstowe.",
      errorMessage:
        "Wystąpił problem z wysłaniem formularza, zachęcam Cię do kontaktu ze mną w inny sposób.",
      thankYouMessage:
        "Dziękuje za wysłanie formularza! Odpowiem na niego, kiedy tylko będzie to możliwe!",
    },
  },
  main: {
    seo: {
      title: "Wojciech Budziak | Frontend Developer",
      description:
        "Bardzo miło mi Cię tutaj gościć! Strona na której się znajdujesz, jest moim portfolio. Dowiesz się tutaj trochę informacji o mnie i moich projektach.",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programowanie, strony internetowe, tworzenie stron internetowych, html, css , JavaScript, js, frontend developer, web developer , strony internetowe wschowa, strony internetowe wrocław, next.js, typescript, sass ,wordpress, strony internetowe od podstaw, junior frontend developer",
    },
    description: {
      heading: "Cześć,</br>jestem <strong> Wojtek</strong>",
      description:
        "<p>Bardzo miło mi Cię tutaj gościć! Strona na której się znajdujesz, jest moim portfolio. Dowiesz się tutaj trochę informacji o mnie i moich projektach.</p>",
      btns: [
        {
          text: "Poznaj mnie",
          href: "/about",
        },
        {
          text: "Kontakt",
          href: "/contact",
        },
      ],
    },
  },
  about: {
    seo: {
      title: "Wojciech Budziak | O mnie",
      description:
        "Nazywam się Wojciech Budziak, jestem 22 letnim Frontend Developerem mieszkającym i pracującym we Wschowie. Od ponad dwóch lat zajmuje się tworzeniem stron internetowych, a od 1.5 roku pracuje komercyjnie. W najbliższych planach, chciałbym przeprowadzić się do Wrocławia i znaleźć nową pracę, która pozwoliłaby mi się dalej rozwijać.",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programowanie, strony internetowe, tworzenie stron internetowych, html, css , JavaScript, js, frontend developer, web developer , strony internetowe wschowa, strony internetowe wrocław, next.js, typesccript, sass ,wordpress, strony internetowe od podstaw, junior frontend developer",
    },
    description: {
      heading: "O <strong>mnie</strong>",
      description:
        "<p>Nazywam się Wojciech Budziak, jestem 22 letnim Frontend Developerem mieszkającym i pracującym we Wschowie. Od ponad dwóch lat zajmuje się tworzeniem stron internetowych, a od 1.5 roku pracuje komercyjnie. W najbliższych planach, chciałbym przeprowadzić się do Wrocławia i znaleźć nową pracę, która pozwoliłaby mi się dalej rozwijać.",
      btns: [
        {
          text: "Zobacz moje projekty",
          href: "/projects",
        },
      ],
    },
    mainTechnologies: {
      heading: "Główne technologie",

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
      heading: "Inne technologie",

      list: [
        "preprocesor SASS/SCSS",
        "Bootstrap",
        "podstawy TypeScript",
        "podstawy PHP",
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
      heading: "Oś czasu",
      list: [
        {
          name: "Frontend developer - <strong>Tojekmek</strong>",
          years: "Wrzesień 2021 - Aktualnie",
          city: "Wschowa",
          list: [
            "<span>Po zakończeniu stażu, dostałem propozycję stałego zatrudnienia. Do moich zajęć należało:</span><ul><li><span className='point'></span>tworzenie szablonów stron internetowych od podstaw na platformę WordPress, w oparciu o wtyczkę ACF</li><li><span className='point'></span>kodowanie widoków stworzonych przez grafika</li><li><span className='point'></span>pisanie skryptów w JavaScript i PHP</li><li><span className='point'></span>tworzenie stron typu landing page oraz witryn z dużą ilością podstron z blogiem</li><li><span className='point'></span>Współpraca z zewnętrzną firmą tworzącą autorską platformę do handlu B2B z własnym CMS'em, dla której przystosowywałem i wdrażałem sklepy internetowe pod wymagania klienta</li></ul>",
          ],
        },
        {
          name: "Staż - <strong>Tojekmek</strong>",
          years: "Marzec 2021 - wrzesień 2021",
          city: "Wschowa",
          list: [
            "Po prawie roku, od momentu rozpoczęcia swojej nauki dostałem się na półroczny staż w firmie Tojekmek, gdzie mogłem się dalej rozwijać i zdobyć komercyjne doświadczenie w pracy z klientami.",
          ],
        },
        {
          name: "Pierwsze kroki jako Frontend developer",
          years: "2020",
          city: "",
          list: [
            "Swoje pierwsze poważne kroki w programowaniu i tworzeniu stron internetowych postawiłem w 2020 roku, na krótko przed zakończeniem technikum informatycznego, kiedy to musiałem wybrać ścięzkę swojego rozwoju. Postawiłem na Frontend, który jak się później okazało był dobrym wyborem, bo sprawia mi radość i satysfakcję.",
          ],
        },
      ],
    },
  },
  projects: {
    seo: {
      title: "Wojciech Budziak | Projekty",
      description:
        "Parę moich hobbystycznych projektów zrobionych w wolnym czasie",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programowanie, strony internetowe, tworzenie stron internetowych, html, css , JavaScript, js, frontend developer, web developer , strony internetowe wschowa, strony internetowe wrocław, next.js, typesccript, sass ,wordpress, strony internetowe od podstaw, junior frontend developer",
    },
    description: {
      heading: "Moje <strong>projekty</strong>",
      description:
        "<p>Parę moich hobbystycznych projektów zrobionych w wolnym czasie</p>",
      btns: [
        {
          text: "Skontaktuj się ze mną",
          href: "/contact",
        },
      ],
    },
    projects: [
      {
        link: "https://github.com/wbudziak/Portfolio",
        img: "/images/react-portfolio.png",
        name: "Strona Portfolio",
        description: "zrobiona w React i Next.js",
        technology: ["React", "Next.js"],
      },
      {
        link: "https://github.com/wbudziak/jsMemoryGame",
        img: "/images/jsmemory.png",
        name: "Gra pamięciowa",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/react-calculator/tree/master",
        img: "/images/calculator.png",
        name: "Kalkulator",
        description: "Mój pierwszy projekt zrobiony w React",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/ReactExchangeApp",
        img: "/images/exchange.png",
        name: "Przelicznik kursów walut",
        description: "Z wykorzystaniem zewnętrznego API",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/TypeSpeedTest",
        img: "/images/typing.png",
        name: "Test szybkości pisania na klawiaturze",
        description: "Aktualnie niedokończony",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/ReactTypingSpeedTest",
        img: "/images/drum-machine.png",
        name: "Automat perkusyjny",
        description: "Aktualnie niedokończony",
        technology: ["React"],
      },
      {
        link: "https://github.com/wbudziak/RGBColorGame",
        img: "/images/rgb.png",
        name: "Gra w kolory RGB",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/StopWatch",
        img: "/images/stopwatch.png",
        name: "Stoper",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/pswdGenerator",
        img: "/images/passwordgenerator.png",
        name: "Generator haseł",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/ToDoList",
        img: "/images/todolist.png",
        name: "Lista do zrobienia",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/JSclock",
        img: "/images/clock.png",
        name: "Zegarek",
        description: "Mój pierwszy projekt w JavaScript",
        technology: ["HTML", "CSS", "JavaScript"],
      },
      {
        link: "https://github.com/wbudziak/clickSpeedTest",
        img: "/images/clickspeedtest.png",
        name: "Test szybkości klikania",
        description: "",
        technology: ["HTML", "CSS", "JavaScript"],
      },
    ],
    listing: {
      btn: "Wszystkie",
    },
  },
  contact: {
    seo: {
      title: "Wojciech Budziak | Kontakt",
      description: "Poznajmy się! Znajdziesz tutaj różne formy kontaktu.",
      keywords:
        "wojciech budziak, wojciech, budziak, react, programowanie, strony internetowe, tworzenie stron internetowych, html, css , JavaScript, js, frontend developer, web developer , strony internetowe wschowa, strony internetowe wrocław, next.js, typesccript, sass ,wordpress, strony internetowe od podstaw, junior frontend developer",
    },
    description: {
      heading: "<strong>Kontakt</strong> ze mną",
      description:
        "<ul><li><img src='/icons/envelope.svg'/><a href='mailto:w.a.budziak@gmail.com'>w.a.budziak@gmail.com</a></li><li><img src='/icons/linkedin.svg'/><a target='_blank' href='https://www.linkedin.com/in/wojciech-budziak-6854301bb/'>wojciech budziak</a></li><li><img src='/icons/github.svg'/><a target='_blank' href='https://github.com/wbudziak/'>w.budziak</a></li><ul><p>Zachęcam Cię równiez do kontaktu poprzez formularz. Twoje dane kontaktowe są bezpieczne i nie będą przekazywane osobom trzecim.</p>",

      btns: [
        {
          text: "Pobierz moje CV",
          downloadPath: "/download/cv-pl.pdf",
        },
      ],
    },
  },
};

export default pl;
