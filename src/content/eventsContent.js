// import React from 'react';
import {eventBox} from '../js/Tags';

export default {
    route: "events",
    heading: {
        title: "Events",
        subtitle: "See what Quinn has coming up"
    },
    content: [
        eventBox(
            "Invoke Quartet Reading",
            "Reading of String Quartet No. 2",
            "November 16, 2018 at 8:00pm",
            "Gildenhorn Recital Hall",
            "Come hear readings and perfromacnes of new string quartets by UMD student composers. The program will include selections form Quinn's dissertation project, 13 Episodes fro String Quartet",
            "https://farm2.staticflickr.com/1737/40928182370_dfb37a9ae5.jpg"
        ),
        eventBox(
            "Dark Nebula Premier",
            "Performacne by UMD UMWO",
            "December 7, 2018 at 8:00pm",
            "Dekelbaum Concert Hall",
            "sample description",
            undefined
        ),

        eventBox(
            "Telegraph Quartet Reading",
            "Reading and Performance by the Telegraph quartet",
            "Sometime in march I think",
            "Gildenhorn recital hall",
            "sample description",
            undefined
        ),
        
    ]
}