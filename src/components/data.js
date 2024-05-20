import java from '../assets/img/logos/java.png';
import python from '../assets/img/logos/python.png';
import angular from '../assets/img/logos/angular.png';
import next from '../assets/img/logos/next.png';
import mysql from '../assets/img/logos/mysql.png';
import mongo from '../assets/img/logos/mongo.png';
import tailwind from '../assets/img/logos/tailwind.png';
import aws from '../assets/img/logos/aws.png';
import react from '../assets/img/logos/react.png';
import rxjs from '../assets/img/logos/rxjs.png';
import sass from '../assets/img/logos/sass.png';
import spring from '../assets/img/logos/spring.png';
import js from '../assets/img/logos/js.png';
import fb from '../assets/img/logos/fb.png';
import css from '../assets/img/logos/css.png';
import nodejs from '../assets/img/logos/nodejs.png';
import htm from '../assets/img/logos/html.png';
import azure from '../assets/img/logos/azure.png';
import kafka from '../assets/img/logos/kafka.png';

let timelineElements = [
  {
     id: -1,
      title: "Cisco",
      subTitle : "SDE-3",
      location: "Bengaluru, Karnataka",
      description:
        '<ul><li>Helping deliver systems, and maintaining analytics of <b>cisco products</b> (hardware and software) </li><li> Creating microservices, and message queues to deliver <b>seamless server-side experience</b> to user. </li><li>Tech stack - Spring boot, Java, Kafka, Mongo, Elasticsearch, Logstash, Angular</li><ul>',
      buttonText: "View Frontend Projects",
      date: "May 2024 - present",
      icon: "work",
      techStack :[spring, kafka, js, angular] 
  },
  {
    id: 1,
    title: "CRISIL Ltd",
    subTitle : "Software Engineer",
    location: "Mumbai, Powai",
    description:
      '<ul><li>Developing webapp acting as prior steps for <b>credit rating / credit analysis</b> of any entity (company) </li><li> Design and implementing <b>user interface</b> Merging and maintaining features with APKs to ensure seamless experience in handheld device and desktops </li><li> Creating microservices, APIs , <b>middleware(Kafka)</b> for messaging systems and writing optimized queries</li><li>Tech stack - Angular 12+, Spring boot, Java, reactJs, Kafka, MySQL</li><ul>',
    buttonText: "View Frontend Projects",
    date: "November 2022 - present",
    icon: "work",
    techStack :[angular, spring, kafka, react, mysql, js]
  },
  {
    id: 2,
    title : "Tata Consultancy Services",
    subTitle: "Systems Engineer",
    location: "Pune, Sahyadri Park",
    description:
      "<ul><li>Designed and integrated functional <b>UI widgets</b>, which combine to contribute for overall soothing experience</li><li> Production of user experiences in <b>no-code manner</b> </li><li>Created <b>vscode extensions</b> to upgrade documentation productivity for client Improved overall UI rendering process to 200% to deliver rich user experience</li><li>Tech stack - Angular 8+, Progressive Web App (PWA), Spring boot, Java, rxjs, Javascript</li><ul>",
    buttonText: "View Backend Projects",
    date: "August 2020 - November 2022",
    icon: "work",
    techStack :[ js,spring,sass, rxjs, angular, java]
  },
  {
    id: 3,
    title : "Tamiser Advisors Pvt Ltd",
    subTitle: "Software engineer - intern",
    location: "Mumbai",
    description:
      "Created UI and backend for credit score calculation, risk index, etc.",
    buttonText: "Company Website",
    date: "December 2019 - February 2020",
    techStack : [react, aws, nodejs, mongo]
  },
  {
    id: 4,
    title: "Vidyalankar Institute of Technology",
    subTitle : "B.E. - Computer Science (9.56 CGPA)",
    location: "Mumbai, Wadala",
    description:
      "<ul><li>Object Oriented Programming</li><li> Data Structures and algorithm</li><li> Computer Networks</li><li> Introduction to Programming</li><li> Maths I, II</li></ul>",
    buttonText: "Course Certificate",
    date: "August 2016 - June 2020",
    icon: "school",
  },
  {
    id: 5,
    title: "Birla College",
    subTitle : "HSC - 87.6%",
    location: "Thane, Kalyan",
    description:
      "",
    buttonText: "College Projects",
    date: "2014 - 2016",
    icon: "school",
  },
  {
    id: 6,
    title: "Sri Vani Vidyashala High School",
    subTitle : "SSC - 93.8%",
    location: "Thane, Kalyan",
    description:
      "",
    date: "2014",
    icon: "school",
  },
];

export default timelineElements;
