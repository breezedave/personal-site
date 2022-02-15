export type Job = {
    title: string,
    period: string,
    paragraphs: string[],
};

export type Meta = {
    title: string,
    description: string,
};

export type CarouselItem = {
    srcUrl: string,
    link: string,
    title: string,
    description: string,
};

export type Config = {
    layout: {
        [key: string]:string,
    },
    home: {
        meta: Meta,
        items: CarouselItem[],
        intro: {
            title: string,
            paragraphs: string[],
        },
        carouselTitle: string,
    },
    cv: {
        meta: Meta,
        header: {
            personalInfo: {
                key: string, 
                val: string
            }[],
            name: string,
            title: string,
            subtitle: string,
            image: {
                src: string,
                alt: string,
                width: number,
                height: number,
            }
        },
        profile: {
            title: string,
            paragraphs: string[],
        },
        skills: {
            titles: string[],
            skills: string[],
        }[],
        experience: {
            title: string,
            companies: {
                companyName: string,
                companyDesc?: string,
                timePeriod: string,
                jobs: Job[],
            }[],
        },
        education: {
            title: string,
            provider: string,
            period: string,
            degree: string,
            paragraphs: string[],
        },
        funFacts: {
            title: string,
            paragraphs: string[],
        }
    }
};

export const config:Config = {
    layout: {
        logo: "BreezeDave",
        coding: "Coding",
        animation: "Animation",
        aboutMe: "About Me",
        cv: "CV",
    },
    home: {
        meta: {
            title: "BreezeDave",
            description: "Dave Breeze",
        },
        intro: {
            title: "Hi, I'm Dave",
            paragraphs: [
                "Sometimes side projects take my fancy",
                "This is where they end up ",
            ],
        },
        carouselTitle: "Featured Projects",
        items: [
            {
                srcUrl: "/dummy1.png",
                link: "/coding/car",
                title: "Three.js Project",
                description: "Building on the amazing website by Bruno Simon, this project creates a procedurally generated world to drive around, directly in the browser",
            },
            {
                srcUrl: "/videos/DrinksIntro.mp4",
                link: "/animation/drinksintro",
                title: "Drinks Intro",
                description: "Designed for an online quiz, this video was used to introduce the quiz's drinks round",
            },
            {
                srcUrl: "/videos/HistoryIntro.mp4",
                link: "/animation/historyintro",
                title: "HistoryIntro",
                description: "Designed for an online quiz, this video was used to introduce the quiz's history round",
            },
        ],
    },
    cv: {
        meta: {
            title: "BreezeDave CV",
            description: "Dave Breeze CV",
        },
        header: {
            personalInfo: [
                {
                    key: "Email:",
                    val: "breezedave@googlemail.com",
                },
                {
                    key: "Address:",
                    val: "37 Penrhiw Rd, Swansea SA6 6BR",
                },
                {
                    key: "Telephone No:",
                    val: "(+44) 7948244483",
                }
            ],
            image: {
                src: "/me.png",
                alt: "Headshot",
                width: 200,
                height: 275,
            },
            name: "Dave Breeze",
            subtitle: "applying for",
            title: "Senior Frontend Engineer",
        },
        profile: {
            title: "Profile",
            paragraphs: [
                "I am a self-motivated and results driven Software Engineer with 10+ years of experience and a history of leading development on innovative new projects. I specialize in data-driven front ends with a particular focus on accessibility.",
                "I have worked in many languages during my career and am always willing to work in whatever language is needed (regardless of my experience).",
                "I have worked on both waterfall and agile projects and have a strong understanding of both Scrum and Kanban methodologies.",
                "I have previously worked as the team lead for a team of six, and in that time showed my communication skills and my mentorship skills.",
            ],
        },
        skills: [
            {
                titles: [
                    "Current Languages and frameworks",
                    "(used commercially in my current role)",
                ],
                skills: [
                    "Typescript",
                    "JavaScript",
                    "ReactJS",
                    "NextJS",
                    "HTML",
                    "CSS",
                    "Node",
                    "Express.js",
                    "Koa.js",
                    "Webpack",
                    "Git",
                    "Styled-Components",
                ]
            },
            {
                titles: ["Recent languages and frameworks (used in the last 3-6 months)"],
                skills: [
                    "Python",
                    "Airflow",
                    "C#",
                    "Dotnet Core",
                ],
            },
            {
                titles: ["Recent languages and frameworks (used in the last 6-12 months)"],
                skills: [
                    "Jest",
                    "Enzyme",
                    "Storybook",
                    "React-Router",
                    "Babel",
                    "PowerShell",
                ],
            },
            {
                titles: ["Past languages (used 6+ years ago)"],
                skills: [
                    "Java",
                    "Scala",
                    "VB.net",
                    "VBA",
                ],
            },  
        ],
        experience: {
            title: "Professional Experience",
            companies: [
                {
                    companyName: "Vizolution Ltd",
                    companyDesc: "(a FinTech company with top-tier banks as customers)",
                    timePeriod: "July 2015 - Present",
                    jobs: [
                        {
                            title: "Technical Architect",
                            period: "October 2021 – Present",
                            paragraphs: [
                                "Designing and developing a replacement for Vizolution’s core products with a focus on journeys created using the new product being fully buildable from a UI (as opposed to bespoke ReactJS & C# development with the current product). Working with TypeScript, ReactJS & NextJS for the front end, and Node, C# & Python for the back end.",
                                "Designing and developing an implementation of Kafka & Airflow to create a data pipeline that allows Vizolution’s core products integrate with external customers.",
                                "Product Innovation Software Developer: December 2019 – October 2021",
                                "Designing and developing a new configuration-driven component library for Vizolution’s legacy “vScreen” product, allowing journeys to be built via JSON, rather than bespoke HTML & jQuery development. Working with TypeScript, JavaScript, Storybook, Styled-Components, Node and Webpack (including custom hooks).",
                                "Designing, building and demonstrating proof of concept products to Vizolution’s investors (HSBC, RBS etc.) to help gather extra funding for the company. Working with JavaScript, Node and Webpack.",
                                "Designing and developing new features and products for Vizolution’s suite (including screen sharing and “sign on glass” tools). Working with JavaScript, Node and Electron.",
                            ],
                        },
                        {
                            title: "Product Innovation Software Developer",
                            period: "December 2019 – October 2021",
                            paragraphs: [
                                "Designing and developing a new configuration-driven component library for Vizolution’s legacy “vScreen” product, allowing journeys to be built via JSON, rather than bespoke HTML & jQuery development. Working with TypeScript, JavaScript, Storybook, Styled-Components, Node and Webpack (including custom hooks).",
                                "Designing, building and demonstrating proof of concept products to Vizolution’s investors (HSBC, RBS etc.) to help gather extra funding for the company. Working with JavaScript, Node and Webpack.",
                                "Designing and developing new features and products for Vizolution’s suite (including screen sharing and “sign on glass” tools). Working with JavaScript, Node and Electron.",
                            ],
                        },
                        {
                            title: "Senior Developer & Functional Lead – New Product Development",
                            period: "February 2017 - December 2019",
                            paragraphs: [
                                "Developing new features for Vizolution’s core products and mentoring new and intermediate developers within the company. Working with C#, Node, JavaScript and Styled-Components.",
                            ],
                        },
                        {
                            title: "Senior Developer & Functional Lead – Content Delivery",
                            period: "October 2015 – February 2017",
                            paragraphs: [
                                "Developing bespoke products for customers using C#, JavaScript, Knockout and jQuery. Helping to implement agile to Vizolution, including taking on the responsibility of Scrum master.",
                            ],
                        },
                        {
                            title: "Frontend Developer – Content Delivery",
                            period: "July 2015 – October 2015",
                            paragraphs: [
                                "Developing bespoke products for customers using JavaScript and jQuery.",
                            ],
                        },
                    ],
                },
                {
                    companyName: "Driver & Vehicle Licensing Agency",
                    timePeriod: "June 2003 – June 2015 ",
                    jobs: [               
                        {
                            title: "Software Developer – View Driving Licence",
                            period: "January 2014 – June 2015",
                            paragraphs: [
                                "Working as part of the team developing the “View Driving Licence” service on the “Gov.uk” website. Working with Java, Scala and Mongo.",
                            ],
                        },
                        {
                            title: "Software Developer – Internal Systems",
                            period: "January 2013 – January 2014",
                            paragraphs: [
                                "Creating products for small in-house teams within DVLA, using vb.net.",
                            ],
                        },
                        {
                            title: "Data Analyst",
                            period: "March 2008 – December 2012",
                            paragraphs: [
                                "Creating a reporting system for the DVLA’s local office network, using VBA, TSQL & JetSQL.",
                                "Completing data requests against the Drivers and Drivers medical databases using Oracle SQL.",
                            ],
                        },
                        {
                            title: "Software Tester & Support",
                            period: "September 2007 – March 2008",
                            paragraphs: [
                                "Testing changes to a custom-built EPoS system whilst providing technical / user support for the same system.",
                            ],
                        },
                        {
                            title: "Other Roles",
                            period: "June 2003 – September 2007",
                            paragraphs: [
                                "Non-technical roles.",
                            ],
                        }
                    ],
                },
            ]
        },
        education: {
            title: "Education",
            provider: "Swansea University",
            period: "2018 - 2021",
            degree: "Applied Software Engineering BSc Hons: 1st class degree.",
            paragraphs: [
                "My final-year project was an audio / video / text chat web applet built using web sockets via a Koa.js signalling server and WebRTC via a STUN / TURN coturn server."
            ],
        },
        funFacts: {
            title: "Fun Facts",
            paragraphs: [
                "I have an interest in visual effects and 3D animation and enjoy creating using Blender in my free time.",
                "I used to be a TV & Film extra and worked on (among many others) Captain America, Robin Hood, Sherlock and DaVinci’s Demons.",
            ],
        }
    }
}