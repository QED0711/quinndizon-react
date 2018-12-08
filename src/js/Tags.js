
import React from "react";

export function compositionBox(title, subtitle, imgSrc, audio, score, options = {}){
    return {
        imgSrc : imgSrc,
        title : title,
        subtitle : subtitle,
        audio : audio,
        score : score,
        options: options
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

export function skillBox(skill, info){
    return {
        skill: skill,
        info: info
    };
}

export function technologyBox(tech, subItems){
    return {
        tech: tech,
        subItems: subItems
    };
}

export function InterpersonalBox(skill, description){
    return {
        skill: skill,
        description: description
    };
}

export function experienceBox(title, subtitle, dates, achievements){
    return {
        title: title,
        subtitle: subtitle,
        dates: dates,
        achievements: achievements
    };
}

export function projectBox(title, website, github, dates, info){
    return {
        title: title,
        website: website,
        github: github,
        dates: dates,
        info: info
    };
}

export function interestBox(title, info){
    return {
        title: title,
        info: info
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

export function awardsBox(title, subtitle, dates, info){
    return {
        title: title,
        subtitle: subtitle,
        dates: dates,
        info: info
    }
}