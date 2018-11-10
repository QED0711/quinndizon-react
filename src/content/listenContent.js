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
            "for chamber orchestra",
            "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "audio source",
            "Score Source",
            {backgroundPositionY: "-450px"}
        ),
        compositionBox(
            "Concertante",
            "for orchestra",
            "https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            soundcloudFrame(239482583),
            "Score Source",
            {backgroundPositionY: "-700px"}
        )
    ]
}

