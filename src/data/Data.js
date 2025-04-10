
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


import icFlutter from "../../src/assets/ic_tools/ic_flutter.svg";
import icDart from "../../src/assets/ic_tools/ic_dart.svg";
import icReact from "../../src/assets/ic_tools/ic_react.svg";
import icPython from "../../src/assets/ic_tools/ic_python.svg";
import icGraphQL from "../../src/assets/ic_tools/ic_graphql.svg";
import icPostman from "../../src/assets/ic_tools/ic_postman.png";
import icDocker from "../../src/assets/ic_tools/ic_docker.svg";
import icFirebase from "../../src/assets/ic_tools/ic_firebase.svg";
import icCSharp from "../../src/assets/ic_tools/csharp.png";
import icJava from "../../src/assets/ic_tools/java.png";
import icPhotoshop from "../../src/assets/ic_tools/ic_photoshop.svg";
import icFigma from "../../src/assets/ic_tools/ic_figma.svg";
import icNodeJS from "../../src/assets/ic_tools/node.png";
// import icTypeScript from "../../src/assets/ic_tools/ic_typescript.svg";
// import icKotlin from "../../src/assets/ic_tools/ic_kotlin.svg";
// import icSwift from "../../src/assets/ic_tools/ic_swift.svg";

export const tools_programming = [
  { id: 1, name: "Flutter", img: icFlutter },
  { id: 2, name: "Dart", img: icDart },
  { id: 3, name: "React", img: icReact },
  { id: 4, name: "Python", img: icPython },
  { id: 5, name: "Java", img: icJava },
  { id: 6, name: "C#", img: icCSharp },
  { id: 7, name: "Node.js", img: icNodeJS },
//   { id: 8, name: "TypeScript", img: icTypeScript },
//   { id: 9, name: "Kotlin", img: icKotlin },
//   { id: 10, name: "Swift", img: icSwift },
];

export const tools_other = [
  { id: 1, name: "GraphQL", img: icGraphQL },
  { id: 2, name: "Firebase", img: icFirebase },
  { id: 3, name: "Postman", img: icPostman },
  { id: 4, name: "Docker", img: icDocker },
];

export const tools_design = [
  { id: 1, name: "Photoshop", img: icPhotoshop },
  { id: 2, name: "Figma", img: icFigma },
];




import {faCodeBranch, faCode,faPencil,} from '@fortawesome/free-solid-svg-icons'
export const services = [
    {
        id: 1,
        icon: faCodeBranch,     
        name:'Apps Development',
        des:'Utilizing flutter for Android app development. Familiarity with cross-platform frameworks like Flutter and React Native.'
    },
    {
        id: 2,
        icon: faCode,
        name:'Web Development',
        des:'Expert in front-end web development. Proficient in HTML, CSS, JavaScript and many other tools',
    },
    {
        id: 3,
        icon: faPencil ,
        name:'UI/UX Design',
        des:'Proficiency in designing user interfaces (UI) for websites and applications.Expertise in creating engaging user experiences (UX) to enhance usability.'
    },
];




import home180 from '../../src/assets/img_projects/p01.jpg';
import bookingFlight from '../../src/assets/img_projects/p02.jpg';
import game2d from '../../src/assets/img_projects/p03.jpg';
import dienQuang from '../../src/assets/img_projects/banner_dien_quang.png';
import namCua from '../../src/assets/img_projects/banner_5_cua.png';
import heRa from '../../src/assets/img_projects/banner_hera.png';
import rePeat from '../../src/assets/img_projects/banner_repeat.png';
import viNacis from '../../src/assets/img_projects/banner_vinacis.png';

export const portfolio2023 = [
    {
        id: 1,
        img: home180,
        name: 'Home180',
        des: 'Home180 is a rental application that allows users to search for and list rental properties easily and efficiently.',
        teamSize: '3',
        posion: 'Full-stack Developer',
        tools: 'C#, ASP.NET, SQL Server',
        features: 'User authentication and registration, property search for renters, property listing for landlords, appointment scheduling for house viewings, in-app chat between tenants and landlords, account management, listing management for landlords, booking history management for tenants.',
        github: 'https://github.com/NeoNeoNguyen/Website-Home180',
    },
    {
        id: 2,
        img: bookingFlight,
        name: 'BookingFlights',
        des: 'A flight booking platform that helps users search for and book flights quickly and easily.',
        teamSize: '4',
        posion: 'Full-stack Developer',
        tools: 'C#, ASP.NET, SQL Server',
        features: 'Flight search, online booking and payment, user account management, booking history tracking, admin dashboard for flight and user management.',
        github: 'https://github.com/NeoNeoNguyen/BookingFlights-MVC',
    },
    {
        id: 3,
        img: game2d,
        name: 'Monster Shooter 2D',
        des: "A thrilling 2D shooter game where players embark on an adventurous journey to hunt down monsters!",
        teamSize: 'Personal',
        posion: 'Full-stack Developer',
        tools: 'Java',
        features: 'Engaging gameplay, vibrant graphics, immersive sound effects, and a user-friendly interface, delivering a seamless and captivating experience.',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
];

export const portfolio2024 = [
    {
        id: 1,
        img: heRa,
        name: 'Hera Holding Group',
        des: 'A car buying, selling, and rental application widely used in Australia, offering flexible leasing terms.',
        teamSize: '9',
        posion: 'Mobile Developer',
        tools: 'Flutter, Dart, Firebase, RESTful API',
        features: 'Developed key features including a dynamic home screen, car trading module, personalized user profiles, loyalty and rewards program, communication channels, and comprehensive account management (password recovery, account deletion).',
        appStore: 'https://apps.apple.com/vn/app/hera-holdings-group/id6738185775',
        website: 'https://heragroup.com.au/'
    },
    {
        id: 2,
        img: dienQuang,
        name: 'Điện Quang Smart',
        des: 'A mobile IoT application for controlling smart electrical devices from Điện Quang.',
        teamSize: 'Third-party',
        posion: 'Mobile Developer',
        tools: 'Flutter, Dart, Socket, RESTful API',
        features: 'Supports device setup via BLE Mesh for smart lighting, automatic firmware upgrades, and cloud server updates for the gateway.',
        appStore: 'https://apps.apple.com/vn/app/dqsmart-pro/id1554210275',
        playStore: 'https://play.google.com/store/apps/details?id=com.dienquangsmartv2.app',
    },
    {   
        id: 3,
        img: rePeat,
        name: 'Repeat',
        des: 'An English-learning app that helps users memorize vocabulary with flashcards and spaced repetition.',
        teamSize: '7',
        posion: 'Mobile Developer',
        tools: 'Flutter, Dart, Firebase, RESTful API',
        features: 'Developed the home screen, user profile page, subscription package screen, history screen displaying referred users for KOLs, commission tracking for KOLs, and push notification system.',
        appStore: 'https://apps.apple.com/vn/app/repeat-english/id6670188894',
        playStore: 'https://play.google.com/store/apps/details?id=com.card.vn.flash_card',
    },
    {
        id: 4,
        img: namCua,
        name: 'Cua Việt',
        des: 'A farm management application for aquaculture in Vietnam, allowing users to monitor and manage their farming operations.',
        teamSize: '7',
        posion: 'Mobile Developer',
        tools: 'Flutter, Dart, RESTful API',
        features: 'Developed key features including farm sanitation checklists, aquaculture area management, inventory tracking, equipment management, task delegation for employees, production statistics dashboard, and personal account management.',
        demo: '',
    },
    {
        id: 5,
        img: viNacis,
        name: 'Vinacis',
        des: 'A cloud service management and subscription platform, enabling users to track and manage their cloud services efficiently.',
        teamSize: '6',
        posion: 'Mobile Developer',
        tools: 'Flutter, Dart, RESTful API',
        features: 'User authentication, real-time chat, and payment gateway integration.',
        demo: '',
    },
];




