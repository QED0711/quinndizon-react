


export function audioBox(title, imgSrc, audioSrc, scoreSrc, options = {}){
    return {
        imgSrc : imgSrc,
        title : title,
        audioSrc : audioSrc,
        scoreSrc : scoreSrc
    }
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