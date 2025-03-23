
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




import home180 from '../../src/assets/img_projects/p01.jpg';
import bookingFlight from '../../src/assets/img_projects/p02.jpg';
import game2d from '../../src/assets/img_projects/p03.jpg';
import dienQuang from '../../src/assets/img_projects/banner _dien_quang.png';
import namCua from '../../src/assets/img_projects/banner_5_cua.png';
import heRa from '../../src/assets/img_projects/banner_hera.png';
import rePeat from '../../src/assets/img_projects/banner_repeat.png';
import viNacis from '../../src/assets/img_projects/banner_vinacis.png';

export const portfolio2023 = [
    {
        id: 1,
        img: home180,
        name: 'Home180',
        des: 'A rental platform that makes it easier for landlords and tenants to connect.',
        github: 'https://github.com/NeoNeoNguyen/Website-Home180',
    },
    {
        id: 2,
        img: bookingFlight,
        name: 'BookingFlights',
        des: 'A smooth and efficient flight booking system to make your travel hassle-free.',
        github: 'https://github.com/NeoNeoNguyen/BookingFlights-MVC',
    },
    {
        id: 3,
        img: game2d,
        name: 'Monster Shooter 2D',
        des: 'A fun and exciting 2D shooter game where you hunt down monsters!',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
];

export const portfolio2024 = [
    {
        id: 1,
        img: heRa,
        name: 'Hera Holding Group',
        des: 'A rental platform that makes it easier for landlords and tenants to connect.',
        github: 'https://github.com/NeoNeoNguyen/Website-Home180',
    },
    {
        id: 2,
        img: dienQuang,
        name: 'Điện Quang Smart',
        des: 'A smooth and efficient flight booking system to make your travel hassle-free.',
        github: 'https://github.com/NeoNeoNguyen/BookingFlights-MVC',
    },
    {
        id: 3,
        img: rePeat,
        name: 'Repeat',
        des: 'A fun and exciting 2D shooter game where you hunt down monsters!',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
    {
        id: 4,
        img: namCua,
        name: 'Cua Việt',
        des: 'A fun and exciting 2D shooter game where you hunt down monsters!',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
    {
        id: 5,
        img: viNacis,
        name: 'Vinacis',
        des: 'A fun and exciting 2D shooter game where you hunt down monsters!',
        github: 'https://github.com/NeoNeoNguyen/Game2D_MonsterShooter',
    },
];



