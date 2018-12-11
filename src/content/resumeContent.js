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
            intro: "I'm a classically trained musician with two graduate degrees and 7+ years professional experience in composition, conducting, music education and technology, and arts management. For the last 8 years, I have primarily worked as an educator and conductor. I love working with other musicians and students who share my same creative passion for music.",
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
                    "Doctorate of Musical Arts - Composition (ABD)",
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
            intro: "I'm a passionate, self taught programmer with 5+ years experience with various technologies. I started by writing small application in Max MSP, and then gradually transitioned to web development so I could more easily share my creations with a larger audience. Bottom line, I love to tinker, play, and create in whatever midium that best suits my needs. When I'm not sitting in front of a piano composing, or in front of a computer programming, I'm day dreaming about what I can build next.",
            skills: {
                professional: [
                    technologyBox(
                        "Javascript",
                        ["React + Redux", "Node + npm", "Express", "Jquery + Ajax"]
                    ),
                    technologyBox(
                        "Ruby",
                        ["Rails", "Sinatra", "Active Record"]
                    ),
                    technologyBox(
                        "HTML + CSS",
                        ["Bootstrap", "SCSS"]
                    ),
                    technologyBox(
                        "Databases",
                        ["SQL", "MongoDB"]
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
                    "Personal Website",
                    "http://quinndizon.com", // website
                    "https://github.com/QED0711/quinndizon-react", // GH repo
                    "2018",
                    [
                        "- React front end website with redux state management",
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
                        "- Rails backend and JS front end application to monitor and notify users about new Craigslist listings",
                        "- Uses the Delayed Jobs gem to regularly scrape user defined Craigslist listings and sends notifications via action mailer",
                        "- Notifies users within minutes of new listings without them having to continuously check themselves",
                        "- Deployed on Heroku"
                    ]
                ),
                projectBox(
                    "Wiki Cluster",
                    "", // website
                    "https://github.com/QED0711/wiki_cluster-cli-app", // GH repo
                    "2018",
                    [
                        "- Ruby CLI web scraper to search a wikipedia article and find related topics",
                        "- Finds all linked articles from a given wikipedia page",
                        "- From the linked articles, returns the most frequently linked topics on other wikipedia pages"
                    ]
                ),
                projectBox(
                    "Comprehensive Exam Study Tool",
                    "https://qed0711.github.io/scorestudy/", // website
                    "https://github.com/QED0711/scorestudy", // GH repo
                    "2017",
                    [
                        "- Interactive JS & ajax frontend application that directs users to random scores on IMSLP.org",
                        "- Users select a range of composers and genres, and the application produces scores that match the user's selections",
                        "- Node web scraper updates database",
                        "- Designed as a study tool for the UMD comprehensive exams. Currently used by students in two courses at UMD"
                    ]
                ),
            ],
            interests: [
                interestBox(
                    "Music Composition & Engraving",
                    ["Writing music is about creativity and practicality. Making the notation both functional and visually appealing is always an interesting problem to tackle."]
                ),
                interestBox(
                    "Conducting",
                    ["Music is a team sport. It's a privilege to work with other musicians and pull something unique and exciting out of a piece of music."]
                ),
                interestBox(
                    "Audio Recording, Editing, & Mastering",
                    ["Working with audio is about attention to the smallest detail. It may take hours to get something sounding just right, but I love every minute of it."]
                ),
                interestBox(
                    "Teaching",
                    ["I have found teaching not only to be a rewarding experience, but one of the best ways to keep learning."]
                ),
            ],
            education: [
                educationBox(
                    "Flatiron Community Bootcamp",
                    "Flatiron School",
                    "2018",
                    []
                ),
                educationBox(
                    "Doctorate of Musical Arts (ABD)",
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
            ]
        }
    }
}