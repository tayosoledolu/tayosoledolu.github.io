import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '#', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '2.PNG',
    title: 'Listerbox',
    info:
      'An African online marketplace that connects freelance labour with local demand, allowing users outsource everyday tasks.',
    info2: '',
    url: 'https://www.listerbox.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1.PNG',
    title: 'Intaviewer',
    info:
      'A video technology platform for Hiring Managers. Helping hiring managers recruit the best talent in the least possible time',
    info2: '',
    url: 'https://intaviewer.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3.PNG',
    title: 'Automart API',
    info:
      'An online marketplace where users can buy and sell cars of diverse makes. This is the backend API.',
    info2: '',
    url: 'https://auto-mart-api.herokuapp.com/api-docs/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'gharoropureheart@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/gharoro__',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gharoropureheart',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Gharoro',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
