import {experienceBox, educationBox, awardsBox, projectBox, skillBox, technologyBox, interpersonalBox, interestBox} from "../js/Tags"

export default {
    route: 'resume',
    focus: "music",
    heading: {
        title: "Resume",
        subtitle: "Resumes"
    },
    content: {
        name: "QUINN DIZON",
        title: "Composer, Conductor, Programmer",
        contact: {
            email: "qdizon@gmail.com",
            linkedin: "https://www.linkedin.com/in/quinn-dizon/",
            website: "quinndizon.com",
        },
        references: "References available on request",
        musicContent: {
            intro: "I'm a classically trained musician with two graduate degrees and 7+ years professional experience in composition, conducting, music education and technology, and arts management. For the last 8 years, I have primarily worked as an educator and conductor, and have completed several composition commissions. I love working with other musicians and students who share my same creative passion for music.",
            skills: {
                professional: [
                    skillBox(
                        "Composition",
                        "15+ years"
                    ),
                    skillBox(
                        "Arranging & Engraving",
                        "12+ years"
                    ),
                    skillBox(
                        "Conducting",
                        "9+ years"
                    ),
                    skillBox(
                        "Audio Recording & Editing",
                        "5+ years"
                    ),
                    skillBox(
                        "Programming",
                        "5+ years"
                    ),
                    // "Composition", "Arranging & Engraving", "Conducting", "Audio Recording & Editing", "Programming"
                ],
                personal: [
                    "Well organized", "Excellent time management", "Leadership experience", "Work well in groups", "Quickly adaptable", "Communicative", "Strong Visual Presentation"
                ]
            },
            experience: [
                experienceBox(
                    "Music Theory & Music Technology Instructor",
                    "University of Maryland College Park",
                    "2016 - Present",
                    [
                        "- Courses: Aural Skills Music Theory I-IV, Lecture Music Theory I-II, Concepts of Music Technology, Fundamentals of Music",
                        "- Created course outlines, objectives and lesson plans for full academic years", 
                        "- Evaluated student growth, and implemented strategies to meet department goals",
                        "- Course topics included tonal harmony and melody, composition, notation software, concepts of digital audio, and digital audio workstations"
                    ]
                ),
                experienceBox(
                    "Artistic Director",
                    "UMD TEMPO New Music Ensemble (board member since 2015)",
                    "2017 - 2018",
                    [
                        "- Scheduled, programmed and produced a full season with 6 events",
                        "- Developed outreach strategies to increase audience attendance",
                        "- Wrote grant proposals and successfully increased season budget",
                        "- Facilitated communication between board members, musicians and venue staff"
                    ]
                ),
                experienceBox(
                    "Composition & Conducting Instructor",
                    "Santa Rosa Symphony Summer Academy",
                    "2015 - 2017",
                    [
                        "- Daily class lectures for young musicans, aged 9 - 12, for 3 weeks",
                        "- Topics included elements of composition, form, basic analysis, sight singing, and simple dication",
                        "- Course culminated in individual composition presentations and performances with students conducting their own works"
                    ]
                ),
                experienceBox(
                    "Conductor & Featured Composer",
                    "Thompson Streeet Opera Companay",
                    "2013 - 2015",
                    [
                        "- Principal conductor for three concerts over three seasons" ,
                        "- Conducted the World and Kentucky premieres of 5 operas", 
                        "- Duties included running music and staging rehearsals, sectionals, and corrdinating equipment loans and transportation", 
                        "- Featured composer during the 2015 Bomhard Showcase Concert for my work, Where the Foremost Flag Was Flying"
                    ]
                ),
            ],
            education: [
                educationBox(
                    "Doctorate of Musical Arts - Composition (ABD - expected completion March 2019)",
                    "University of Maryland College Park",
                    "2015 - Present",
                    ["Flagship Fellow: selected as one of ten incoming doctoral students across all diciplines"]
                ),
                educationBox(
                    "Masters in Music - Orchestral Conducting",
                    "University of Louisville",
                    "2013-2015",
                    ["Assistant conductor for the university Symphony Orchestra and University Opera programs"]
                ),
                educationBox(
                    "Masters in Music - Composition",
                    "University of Louisville",
                    "2011-2013",
                    ["Bomhard Composition Fellow - Fully paid fellowship with a focus on writing music for voice"]
                ),
                educationBox(
                    "Bachelor's of Music - Theory and Composition",
                    "College of Wooster",
                    "2007-2011",
                    []
                ),
            ],
            awards: [
                awardsBox(
                    "Flagship Fellow",
                    "University of Maryland College Park",
                    "2015 - Present",
                    "Fully funded, highly competative fellowship awarded to only 10 incoming doctoral students across all diciplines on campus."
                ),
                awardsBox(
                    "Walsum Prize - First Place",
                    "For Dark Nebula",
                    "2018",
                    "$1000 monetary prize and performance of winning work, Dark Nebula, by the UMD Wind Orchestra."
                ),
                awardsBox(
                    "PARMA Student Composer Grand Prize Winner",
                    "For Awakening for Piano Quartet",
                    "2012",
                    "Winning work, Awakening, recorded by PARMA Recordings and released on the Navona Label."
                ),
                awardsBox(
                    "Bomhard Fellow",
                    "University of Louisville",
                    "2011 - 2013",
                    "Competative fellowship, awarded to promising incoming composition MM students who show aptitude for writing for voice."
                ),
            ]
        },
        programmingContent: {
            // intro: "I'm a passionate, self taught programmer with 5+ years experience with various technologies. I started by writing small application in Max MSP, and then gradually transitioned to fullstack web development so I could more easily share my creations with a larger audience. My recent work has focused on music and educational web apps, and my creations are used in university level music courses. I love to tinker, play, and create in whatever midium that best suits my needs. When I'm not sitting in front of a piano composing, or in front of a computer programming, I'm day dreaming about what I can build next.",
            intro: `
                5+ years experience with several popular technologies, and 2 years focused work in web development. 
                Web apps that I have designed are regularly used in university level music courses.  
                In addition to my work as a programmer, I poses a host of important skills gained through my work in music education and arts management roles. 
                I love working with others who share my creative passions to build high quality, impactful software.
            `,
            skills: {
                professional: [
                    technologyBox(
                        "Javascript",
                        [ "Node + npm", "React + Redux", "Express", "Jquery + Ajax"]
                    ),
                    technologyBox(
                        "Ruby",
                        ["Rails"]
                    ),
                    technologyBox(
                        "HTML + CSS",
                        ["HTML5", "CSS4","Bootstrap"]
                    ),
                    technologyBox(
                        "Databases",
                        ["SQL - SQLite, Postgresql", "MongoDB + Mongoose", "GraphQL + Apollo"]
                    ),
                    technologyBox(
                        "Version Control",
                        ["Git + Github"]
                    ),
                    technologyBox(
                        "Deployment",
                        ["Heroku", "gh-pages"]
                    ),
                    // "Javascript", "Node", "React", "Ruby", "Rails", "Git", "Linux"
                ],
                personal: [
                    "Well organized", "Excellent time management", "Leadership experience", "Work well in groups", "Quickly adaptable", "Communicative", "Strong visual presentation"
                ]
            },
            experience: [
                projectBox(
                    "Online Course Designer & Software Developer",
                    "", // website
                    "https://github.com/QED0711/music-fundamentals-client", // GH repo
                    "2019",
                    [
                        "- Design and implementation of the online version of the Music Fundamentals course at the University of Maryland College Park",
                        "- Created custom software to allow for more efficient and effective methods of assessment",
                        "- This software streamlined the assessment process, allowing the department to increase available positions in the course by nearly 200% without expending more resources.",
                        "- The software uses a Node + GraphQL backend with a React + Apollo frontend."
                    ]
                ),
                projectBox(
                    "Personal Website",
                    "http://quinndizon.com", // website
                    "https://github.com/QED0711/quinndizon-react", // GH repo
                    "2018",
                    [
                        "- React front end website with redux state management",
                        "- Responsive design to display well on desktop and mobile platforms",
                        "- Uses React Router for front end routes",
                        "- Deployed on gh-pages"
                    ]
                ),
                projectBox(
                    "Craigslist Notifier App",
                    "http://qed-clnotifier.herokuapp.com/", // website
                    "https://github.com/QED0711/craigslist-notifier", // GH repo
                    "2018",
                    [
                        "- Rails backend application with JS frontend functionality",
                        "- Monitors and notifies users of relevant craigslist listings within minutes of them being posted",
                        "- Uses the Delayed Jobs gem to regularly scrape user defined Craigslist listings and sends notifications via action mailer",
                        "- Deployed on Heroku with postgresql database"
                    ]
                ),
                projectBox(
                    "Wiki Graph",
                    "", // website
                    "https://github.com/QED0711/wiki_graph-cli-app", // GH repo
                    "2018",
                    [
                        "- An educational CLI to help users understand and form connections among topics in wikipedia articles",
                        "- Ruby + Nokogiri web scraper searches wikipedia articles and finds the most linked to topics",
                    ]
                ),
                projectBox(
                    "Comprehensive Exam Study Tool",
                    "https://qed0711.github.io/scorestudy/", // website
                    "https://github.com/QED0711/scorestudy", // GH repo
                    "2017",
                    [
                        "- Interactive JS & ajax frontend application that directs users to random scores hosted on imslp.org",
                        "- Users can select a range of composers and genres, and the application produces scores that match the user's selections",
                        "- Node web scraper updates database",
                        "- Designed as a study tool for the University of Maryland College Park comprehensive exams in music.",
                        "- Currently used by students in the Style Analysis and Comprehensive Exam Review courses at UMD"
                    ]
                ),
            ],
            interests: [
                interestBox(
                    "Music",
                    ["7+ years working professionaly as a composer, conductor and engraver within academic and professional organizations. I have completed numerous commissions, and have won several awards for my work."]
                ),
                // interestBox(
                //     "Conducting",
                //     ["Music is a team sport. It's a privilege to work with other musicians and pull something unique and exciting out of a piece of music."]
                // ),
                interestBox(
                    "Audio Recording, Editing, & Mastering",
                    ["I have recorded, mixed, and mastered several of my own compositions as well as works of friends and colleagues. I served as the lead audio engineer for the University of Maryland New Music Ensemble for three seasons."]
                ),
                interestBox(
                    "Music Education",
                    ["Experience teaching grade school students, as well as advanced college level music courses. Recipient of an Outstanding Graduate Assistant Award from the University of Maryland College Park recognizing me as being in the top 2% of graduate assistants across all disciplines on campus."]
                ),
            ],
            education: [
                educationBox(
                    "Doctorate of Musical Arts (ABD)",
                    "University of Maryland College Park",
                    "2015 - Present",
                    ["Flagship Fellow: selected as one of ten incoming doctoral students across all diciplines"]
                ),
                educationBox(
                    "Flatiron Community Coding Bootcamp",
                    "Flatiron School",
                    "2018",
                    []
                ),
                educationBox(
                    "Masters in Music - Orchestral Conducting",
                    "University of Louisville",
                    "2013-2015",
                    ["Assistant conductor for the university Symphony Orchestra and University Opera programs"]
                ),
                educationBox(
                    "Masters in Music - Composition",
                    "University of Louisville",
                    "2011-2013",
                    ["Bomhard Composition Fellow - Fully paid fellowship with a focus on writing music for voice"]
                ),
                educationBox(
                    "Bachelor's of Music - Theory and Composition",
                    "College of Wooster",
                    "2007-2011",
                    []
                ),
            ]
        }
    }
}