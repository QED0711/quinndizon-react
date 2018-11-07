import {experienceBox} from "../js/Tags"

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
            address: "3102 Babashaw Court Fairfax, VA 22031",
            phone: "(707) 318-4536",
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
            Experience: [
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
            ]
        },
        programmingContent: {
            intro: "This is the programming intro"
        }
    }
}