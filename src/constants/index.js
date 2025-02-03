import { meta, shopify, starbucks, tesla, mbartviz, epam, ngon, bl } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    c_sharp,
    dot_NET,
    photoshop,
    after_effects,
    premiere_pro,
    threedsmax,
    corona,
    vray,
    zBrush,
    unrealengine,
    charactercreator,
    marvelousdesigner,
    substance_painter,
    run,
    avocado,
    portofolio,
    wix
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: c_sharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: dot_NET,
        name: ".NET",
        type: "Backend",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Image editor",
    },
    {
        imageUrl: after_effects,
        name: "After_Effects",
        type: "Video editor",
    },
    {
        imageUrl:  premiere_pro,
        name: "Premiere_Pro",
        type: "Video editor",
    },
    {
        imageUrl:  threedsmax,
        name: "3dsmax",
        type: "3D",
    },
    {
        imageUrl:  corona,
        name: "Corona",
        type: "3D rendering plugin",
    },
    {
        imageUrl:  vray,
        name: "Vray",
        type: "3D rendering plugin",
    },
    {
        imageUrl:  zBrush,
        name: "ZBrush",
        type: "3D Modeling",
    },
    {
        imageUrl:  unrealengine,
        name: "UnrealEngine",
        type: "3D Engine",
    },
    {
        imageUrl:  charactercreator,
        name: "Character Creator",
        type: "3D",
    },
    {
        imageUrl:  marvelousdesigner,
        name: "Marvelous Designe",
        type: "3D",
    },
    {
        imageUrl:  substance_painter,
        name: "Substance Painter",
        type: "3D",
    },
    

    
];

export const experiences = [
    {
        title: "Archviz",
        company_name: "N-Gon",
        icon: ngon,
        iconBg: "#accbe1",
        date: "July 2018 - December 2018",
        points: [
            
            "3D Modeling and rendering (3D Max, Photoshop, etc.);",
            "Developed interactive JavaScript-based applications; Animations and Video Editing (After Effects and Premiere Pro, etc.).",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        ],
    },
    {
        title: "Archviz",
        company_name: "BL Associates",
        icon: bl,
        iconBg: "#fbc3bc",
        date: "August 2020 - February 2021 ",
        points: [
            "3D Modeling and rendering (3D Max, Photoshop, etc.);",
            "Developed interactive JavaScript-based applications; ",
            "Worked in a professional team to develop the best product for our clients.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "EPAM Campus",
        icon: epam,
        iconBg: "#b7e4c7",
        date: "Feb 2024 – Jun 2024",
        points: [
            ".NET Development. Data Processing and Software Architecture ",
            "Worked with: Design Patterns, Databases, Three-Layer Architecture, MVC, MVVM, etc...",
            "Technologies used: C#, .NET, Entity Framework, LINQ, SQL. ",
        ],
    },
    {
        title: "Freelancer",
        company_name: "MB ArtViz",
        icon: mbartviz,
        iconBg: "#a2d2ff",
        date: "Jan 2019 - Present",
        points: [
            "Collaborated with N-Gon, BL Associates, Hive & CO, Hebeltech, Hollander Yacht Design and with other customers",
             "Developed products using: Unreal Engine, 3Ds Max, Photoshop, After Effects, etc.. ",
            "During this time, I continued to learn and develop my Software Development knowledge working on some personal projects with the following technologies:",
            "Laravel, PHP, SQL, HTML, CSS, Bootstrap, JavaScript, React, Angular, React, MongoDB, C#, .Net.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: run,
        theme: 'btn-back-red',
        name: 'Run Group Web App',
        description: 'Developed a web application that tracks races, helping users to find running clubs.',
        link: 'https://github.com/bogdanmirc/RunGroupWebApp',
    },
    {
        iconUrl: avocado,
        theme: 'btn-back-green',
        name: 'Avocado food app',
        description: 'This is a full-stack application where you can order food online. It also includes an admin account feature, enabling administrators to add products, manage the product catalog, and view orders placed by customers, along with details such as the order status.',
        link: 'https://github.com/bogdanmirc/Avocado-food-app',
    },
    {
        iconUrl: portofolio,
        theme: 'btn-back-blue',
        name: 'Portfolio',
        description: 'Crafted with JavaScript, React, and Three.js, this interactive experience showcases my projects, skills, and professional journey in a visually engaging way. Navigate through a dynamic 3D space where each element is designed to bring my work to life.',
        link: 'https://github.com/bogdanmirc/Portfolio',
    },
    {
        iconUrl: wix,
        theme: 'btn-back-pink',
        name: 'Wix website',
        description: 'This website, built with WIX, showcases my 3D work in an engaging and interactive way. Here, you can find a collection of my projects, skills, and experiences',
        link: 'https://www.mbartviz.com/',
    },
];