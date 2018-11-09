import {experienceBox, educationBox} from "../js/Tags"

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
                    "Graduate Music Theory & Music Technology Instructor",
                    "University of Maryland College Park",
                    "2016 - Present",
                    ["blah one", "blah two"]
                ),
                experienceBox(
                    "Artistic Director",
                    "UMD TEMPO New Music Ensemble (board member since 2015)",
                    "2017 - 2018",
                    ["blah one", "blah two"]
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
                    "university of Louisville",
                    "2013-2015",
                    ["Assistant conductor for the university Symphony Orchestra and University Opera programs"]
                ),
                educationBox(
                    "Masters in Music - Composition",
                    "university of Louisville",
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
                experienceBox(
                    "Craigslist Notifier App",
                    "Rails Backend with JavaScript Frontend",
                    "2018",
                    ["Signup and mailer functionality"]
                ),
                experienceBox(
                    "Comprehensive Exam Study Software",
                    "University of Maryland College Park",
                    "2017",
                    ["Currently used in two courses at UDM"]
                ),
            ],
            education: [
                educationBox(
                    "Doctorate of Musical Arts (ABD)",
                    "University of Maryland College Park",
                    "2015 - Present",
                    ["Flagship Fellow: selected as one of ten incoming doctoral students across all diciplines"]
                )
            ]
        }
    }
}