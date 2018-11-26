import {experienceBox, educationBox, awardsBox, projectBox} from "../js/Tags"

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
            intro: "Classically trained musician with two graduate degrees and 7+ years professional experience in composition, conducting, music education and technology, and arts management. Seeking a role that utilizes my interpersonal and leadership skills, and my love of all things music.",
            skills: {
                professional: [
                    "Composition", "Arranging & Engraving", "Conducting", "Audio Recording & Editing", "Programming"
                ],
                personal: [
                    "Organized", "Time Management", "Leadership", "Adaptable", "Communication", "Visual Presentation"
                ]
            },
            experience: [
                experienceBox(
                    "Music Theory & Music Technology Instructor",
                    "University of Maryland College Park",
                    "2016 - Present",
                    [
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
                    "fully funded, competative fellowship"
                ),
                awardsBox(
                    "Walsum Prize - First Place",
                    "For Dark Nebula",
                    "2018",
                    "$1000 monetary prize and performance of winning work, Dark Nebula, by the UMD Wind Orchestra"
                ),
                awardsBox(
                    "PARMA Student Composer Grand Prize Winner",
                    "For Awakening for Piano Quartet",
                    "2012",
                    "Winning work, Awakening, recorded and released on the Navona Label"
                ),
            ]
        },
        programmingContent: {
            intro: "This is the programming intro",
            skills: {
                professional: [
                    "Javascript", "Node", "React", "Ruby", "Rails", "Git", "Linux"
                ],
                personal: [
                    "Organized", "Time Management", "Leadership", "Adaptable", "Communication", "Visual Presentation"
                ]
            },
            experience: [
                projectBox(
                    "Craigslist Notifier App",
                    "http://qed-clnotifier.herokuapp.com/", // website
                    "https://github.com/QED0711/craigslist-notifier", // GH repo
                    "2018",
                    ["Signup and mailer functionality"]
                ),
                projectBox(
                    "Comprehensive Exam Study Tool",
                    "https://qed0711.github.io/scorestudy/", // website
                    "https://github.com/QED0711/scorestudy", // GH repo
                    "2017",
                    ["JS ajax frontend application"]
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