import {eventBox} from '../js/Tags';

export default {
    route: "events",
    heading: {
        title: "Events",
        subtitle: "See what Quinn has coming up"
    },
    content: [
        eventBox(
            "My Event Title",
            "My event Subtitle",
            new Date("December 7, 2018 at 8:00pm"),
            "Dekelbaum Concert Hall",
            "image source"
        )
    ]
}