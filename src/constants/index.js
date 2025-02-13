export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
]

export const myProjects = [
  {
    title: ' House Renting Platform',
    desc: 'A modern and intuitive house rental platform built with React, offering:',
    subdesc:
      ' recommendations powered by user ratings, Powerful search with location, dates, and property filters, Beautiful, information-rich property cards, Advanced filtering for precise property matching, This platform transforms the house-hunting experience with its user-friendly interface and smart features.',
    href: 'https://glossy-frost-223.notion.site/Laravel-React-Portfolio-16023ad0a2b580519322c99f80f8ff7c',
    texture: '/merieme-portfolio/textures/project/house.mp4',
    logo: '/merieme-portfolio/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/merieme-portfolio/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/merieme-portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/merieme-portfolio/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Laravel',
        path: '/merieme-portfolio/assets/laravel.png',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/merieme-portfolio/assets/mysql.png',
      },
    ],
  },
  {
    title: 'Real Estate Management Platform',
    desc: 'A comprehensive property management solution featuring:',
    subdesc:
      ' Smart role-based access control, Complete property listing management, Offer creation and tracking, Employee account management, Customizable platform settings, Seamless integration with the rental platform, This solution streamlines real estate operations and boosts business efficiency.',
    href: 'https://glossy-frost-223.notion.site/Laravel-React-Portfolio-16023ad0a2b580519322c99f80f8ff7c',
    texture: '/merieme-portfolio/textures/project/admin.mp4',
    logo: '/merieme-portfolio/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/merieme-portfolio/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/merieme-portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/merieme-portfolioassets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Laravel',
        path: '/merieme-portfolio/assets/laravel.png',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/merieme-portfolio/assets/mysql.png',
      },
    ],
  },
  {
    title: '3D portfolio',
    desc: 'Built with React.js for handling the user interface, Three.js for rendering 3D elements, and styled with TailwindCSS,',
    subdesc:
      'Immersive Hero: An eye-catching 3D hacker room that responds to mouse movements, surrounded by animated mini-models. Interactive About Me: A sleek bento grid layout featuring personal info, a 3D globe pinpointing location, tech stack icons, and a one-click email copy option. Dynamic Project Showcase: Browse through projects while watching live demos inside a 3D computer model, seamlessly switching between different projects. A user-friendly email form for visitors to reach out directly from your portfolio. Fully Responsive: Optimized layout ensuring a smooth experience across all devices, from desktop to mobile.',
    href: 'https://github.com/merieme-Bou',
    texture: '/merieme-portfolio/textures/project/portfolio.mp4',
    logo: '/merieme-portfolio/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/merieme-portfolio/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/merieme-portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/merieme-portfolioassets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/merieme-portfolio/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/merieme-portfolio/assets/framer.png',
      },
    ],
  },
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
]
