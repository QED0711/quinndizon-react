import React from 'react'
import {compositionBox, soundcloudFrame, scoreFrame} from '../js/Tags'

export default {
    route: "listen",
    heading: {
        title: "Listen",
        subtitle: "List of Works"
    },
    currentComposition: undefined,
    content: [
        compositionBox(
            "Cumulonimbus",
            "for orchestra",
            "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            soundcloudFrame(223397327),
            scoreFrame("https://drive.google.com/file/d/1LHcdy2Rcc7xCdg-RpGcpdBAuIwE_k-xA/preview"),
            {backgroundPositionY: "-150px",}
            ),
        compositionBox(
            "Awakening",
            "for piano quartet",
            "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            soundcloudFrame(223519244),
            scoreFrame("https://drive.google.com/file/d/0B8TgLmq2pHPvSGF4QU1fWXVRcGs/preview")
        ),
        compositionBox(
            "12 Haiku",
            "an orchestral song cycle",
            "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "audio source",
            "Score Source",
            {backgroundPositionY: "-200px"}
        ),
        compositionBox(
            "Concertante",
            "for orchestra",
            "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            soundcloudFrame(239482583),
            "Score Source",
            {backgroundPositionY: "-700px"}
        ),
        compositionBox(
            "String Qurartet No. 1",
            "with live electronics",
            "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&h=350",
            soundcloudFrame(303732634),
            scoreFrame("https://drive.google.com/file/d/0B8TgLmq2pHPvVEtMRVRuQ1BWN1U/preview"),
            {backgroundPositionY: "-40px"}
        ),
        compositionBox(
            "Grace",
            "for orchestra & chorus",
            "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&h=350",
            soundcloudFrame(223523435),
            scoreFrame("https://drive.google.com/file/d/0B8TgLmq2pHPvV2swRU15QzVvWlk/preview"),
            {backgroundPositionY: "-150px"}
        ),
        compositionBox(
            "Prelude",
            "for solo cello",
            "https://images.pexels.com/photos/261184/pexels-photo-261184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            soundcloudFrame(223397328),
            scoreFrame("https://drive.google.com/file/d/0B8TgLmq2pHPvWmRBa3NGM1BEMXc/preview"),
            {backgroundPositionY: "-150px"}
        ),
    ]
}




