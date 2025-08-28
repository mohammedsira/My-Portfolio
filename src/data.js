import img from './assets/images/profile_1.png'
import heroImg from './assets/images/hero.jpeg'

import html from './assets/icons/html-1 (1).svg'
import css from './assets/icons/css-3 (1).svg'
import js from './assets/icons/javascript-1 (1).svg'
import bootstrap from './assets/icons/bootstrap-5-1.svg'
import reactjs from './assets/icons/react-2 (1).svg'
import nodejs from './assets/icons/nodejs-1.svg'
import expressjs from './assets/icons/icons8-express-js-100.svg'
import mongodb from './assets/icons/mongodb-icon-1-1.svg'
import mysql from './assets/icons/mysql-3.svg'
import github from './assets/icons/github-icon-1 (1).svg'

import task from './assets/projects/Task-management.jpg'
import egadgets from './assets/projects/E-gadgets.jfif'
import tours from './assets/projects/tour-management.jfif'
import real from './assets/projects/real-estate.jpg'
import time from './assets/projects/Time-tracking.jpg'

const data = {
    "id": 1,
    "first_name": "Mohammed",
    "last_name": "Sirajudeen",
    "full_name": "Mohammed Sirajudeen",
    "age": 29,
    "contacts": {
        "email": "mohammedsira18@gmail.com",
        "phone": "7502626719 | 7904103201",
        "address": {
            "Door_No": "13/1",
            "Street": "singaravelan street",
            "District": "Karaikal",
            "State": "Puducherry",
            "Country": "India",
            "Pincode": "609602"
        },
        "socials": [
            {
                "name": "LinkedIn",
                "icon_images": "https://img.icons8.com/color/48/000000/linkedin.png",
                "link": "https://www.linkedin.com/in/mohammed-sirajudeen-999a70229",
                "icon_class": "fab fa-linkedin"
            },
            {
                "name": "Github",
                "icon_images": "https://img.icons8.com/color/48/000000/github.png",
                "link": "https://github.com/mohammedsira",
                "icon_class": "fab fa-github"
            },
            {
                "name": "GMail",
                "icon_images": "https://img.icons8.com/color/48/000000/gmail.png",
                "link": "mailto:mohammedsira18@gmail.com",
                "icon_class": "fas fa-envelope"
            },


        ]
    },
    "heroImg": heroImg,
    "image": img,
    "about": "I am a Full stack Developer",
    "role": [
        "MERN Full Stack Developer",
        "Web Developer"
    ],
    "education": {
        "course": {
            "institute": "Guvi Geek Networks IITM Research Park",
            "Course_name": "MERN Full Stack Development",
            "Duration": "4 Months"
        },
        "college": {
            "Institute": "Karaikal Polytechnic College",
            "year": 2011 - 2014,
            "degree": "D.C.E",
            "department": "Civil Engineering",
            "city": "Karaikal",
            "state": "Puducherry",
            "CGPA": 8.23,
            "percentage": 75,
            "Classification": "First Class"
        },

        "SSLC": {
            "school": "M.E.S Govt Aided High School",
            "year": "2010",
            "std": "10",
            "percentage": 88,
            "city": "Karaikal",
            "state": "Puducherry",
        }
    },
    "projects": [
        {
            "name": "Auction Hub",
            "front_end": "https://github.com/mohammedsira/client.git",
            "back_end": "https://github.com/mohammedsira/server.git",
            "image": task,
            "live_link": "http://auction-hub.vercel.app",
            "tech_used": "ReactJs,Nodejs,MongoDB"
        },
        {
            "name": "Shopping Cart",
            "front_end": "https://github.com/mohammedsira/shopping-cart.git",
            "back_end": "https://github.com/mohammedsira/shopping-cart.git",
            "image": egadgets,
            "live_link": "https://shoppingcartsira18.netlify.app/",
            "tech_used": "ReactJs,Nodejs,Express.js"
        },
        {
            "name": "Dice Game",
            "front_end": "https://github.com/mohammedsira/dice-game.git",
            "back_end": "https://github.com/mohammedsira/dice-game.git",
            "image": tours,
            "live_link": "https://dicegamesira18.netlify.app/",
            "tech_used": "JavaScript,HTML,CSS"
        },
        {
            "name": "AXIOS",
            "front_end": "https://github.com/mohammedsira/Axios-Task.git",
            "back_end": "https://github.com/mohammedsira/Axios-Task.git",
            "image": real,
            "live_link": "https://axiostasksira18.netlify.app/",
            "tech_used": "ReactJs,Nodejs,Express.js,Axios"
        },
        {
            "name": "REACT ROUTER DOM",
            "front_end": "https://github.com/mohammedsira/React-Router-Task.git",
            "back_end": "https://github.com/mohammedsira/React-Router-Task.git",
            "image": time,
            "live_link": "https://reactroutersira.netlify.app/",
            "tech_used": "ReactJs,Nodejs,Express.js,Router-Dom"
        }
    ],
    "skills": [
        {
            "name": "HTML",
            "icon_images": html,
            "description": "HTML is the standard markup language for creating web pages and web applications. It defines the structure of web pages, including the layout, the presentation of information, and the interactivity of content and functionality."
        },
        {
            "name": "CSS",
            "icon_images": css,
            "description": "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. It is often used to style the appearance of a web page."
        },
        {
            "name": "JavaScript",
            "icon_images": js,
            "description": "JavaScript is a high-level, interpreted programming language. It is primarily used for adding interactivity to websites."
        },
        {
            "name": "Bootstrap",
            "icon_images": bootstrap,
            "description": "Bootstrap is a popular open-source front-end framework for building responsive, mobile-first websites. It provides a set of pre-built UI components and a responsive grid system for designing and developing websites."
        },
        {
            "name": "React.js",
            "icon_images": reactjs,
            "description": "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render them when the underlying data changes."
        },
        {
            "name": "Node.js",
            "icon_images": nodejs,
            "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, which makes it ideal for building scalable and high-performance web applications."
        },
        {
            "name": "Express.js",
            "icon_images": expressjs,
            "description": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
        },
        {
            "name": "MongoDB",
            "icon_images": mongodb,
            "description": "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. It is widely used for building scalable and high-performance web applications."
        },
        {
            "name": "MySQL",
            "icon_images": mysql,
            "description": "MySQL is a widely used open-source relational database management system (RDBMS) that was developed by Oracle Corporation. It is known for its speed, scalability, and ease of use."
        },
        {
            "name": "GitHub",
            "icon_images": github,
            "description": "GitHub is a web-based hosting service for version control of code using Git. It is widely used for collaboration and version control of code."
        }
    ],

    "resume": "https://drive.google.com/file/d/1Yh3AvqNEvBmwhXSvjKHg-orr5N_fA0Af/view?usp=drive_link",
    "language": ["English", "Tamil"]

}


export default data;