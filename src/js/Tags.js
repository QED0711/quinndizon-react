
import React from "react";

export function compositionBox(title, imgSrc, audio, score, options = {}){
    return {
        imgSrc : imgSrc,
        title : title,
        audio : audio,
        score : score
    }
}

export function soundcloudFrame(trackId){
    return(
        <iframe width="100%" height="auto" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&amp;color=%23fad8bf&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;show_teaser=true&amp;visual=false&amp;show_artwork=false`}></iframe>
    )
}

export function scoreFrame(src){
    return(
        <iframe src={src} className="score-frame"></iframe>
    )
}

export function eventBox(title, subtitle, dateTime, location, description, image){
    return {
        title: title,
        subtitle: subtitle,
        dateTime: dateTime,
        location: location,
        description: description, 
        image: image
    }
}

export function experienceBox(title, subtitle, dates, achievements){
    return {
        title: title,
        subtitle: subtitle,
        dates: dates,
        achievements: achievements
    };
}

export function educationBox(degree, school, dates, awards){
    return {
        degree: degree,
        school: school,
        dates: dates,
        awards: awards
    }
}