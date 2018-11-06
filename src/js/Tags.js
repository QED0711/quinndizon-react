


export function audioBox(title, imgSrc, audioSrc, options = {}){
    return {
        imgSrc : imgSrc,
        title : title,
        audioSrc : audioSrc
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