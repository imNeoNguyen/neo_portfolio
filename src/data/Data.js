
import {faHome, faEnvelope, faUserGraduate, faFolder} from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Portfolio',
        icon : faFolder,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon : faEnvelope,
        path: '/Contact'
    },
];



export const experience = [
    {
        id: 1,
        no: '1+',
        title:'Years Experience'
    },
    {
        id: 2,
        no: '5+',
        title:'Complete Projects'
    },
    {
        id: 3,
        no: '3+',
        title:'Happy Team'
    },
];


import image1 from '../../src/assets/react.png'
import image2 from '../../src/assets/node.png'
import image3 from '../../src/assets/cshape.png'
import image4 from '../../src/assets/java.png'
import image5 from '../../src/assets/ps.png'
import image6 from '../../src/assets/figma.png'
export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
];


import {faCodeBranch, faCode,faPencil,} from '@fortawesome/free-solid-svg-icons'
export const services = [
    {
        id: 1,
        icon: faCode,
        name:'Web Development',
        des:'Expert in front-end and back-end web development. Proficient in HTML, CSS, JavaScript and many other tools',
    },
    {
        id: 2,
        icon: faCodeBranch,     
        name:'Apps Development',
        des:'Utilizing Java for Android app development. Familiarity with cross-platform frameworks like Flutter and React Native.'
    },
    {
        id: 3,
        icon: faPencil ,
        name:'UI/UX Design',
        des:'Proficiency in designing user interfaces (UI) for websites and applications.Expertise in creating engaging user experiences (UX) to enhance usability.'
    },
];




import portfolioImg1 from '../../src/assets/p01.jpg';
import portfolioImg2 from '../../src/assets/p02.jpg';
import portfolioImg3 from '../../src/assets/p03.jpg';

export const portfolio = [
    {
        id: 1,
        img: portfolioImg1,
        name: 'Home180',
        des: 'A rental platform that makes it easier for landlords and tenants to connect.',
        github: 'https://github.com/NeoNeoNguyen/Website-Home180',
    },
    {
        id: 2,
        img: portfolioImg2,
        name: 'BookingFlights',
        des: 'A smooth and efficient flight booking system to make your travel hassle-free.',
        github: 'https://github.com/NeoNeoNguyen/BookingFlights-MVC',
    },
    {
        id: 3,
        img: portfolioImg3,
        name: 'Monster Shooter 2D',
        des: 'A fun and exciting 2D shooter game where you hunt down monsters!',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
    {
        id: 4,
        img: portfolioImg1,
        name: 'Hera E-commerce',
        des: 'An online shopping platform that provides an intuitive and seamless experience.',
        github: 'https://github.com/NeoNeoNguyen/Website-Home180',
    },
    {
        id: 5,
        img: portfolioImg2,
        name: 'Repeat App',
        des: 'A productivity app designed to help users build better habits through repetition.',
        github: 'https://github.com/NeoNeoNguyen/BookingFlights-MVC',
    },
    {
        id: 6,
        img: portfolioImg3,
        name: 'Cua Viet Resort',
        des: 'A website showcasing the beautiful beachside resort with online booking options.',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
];



