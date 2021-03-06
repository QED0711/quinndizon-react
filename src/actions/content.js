export function getHomeContent(){
    return{type: "GET_HOME_CONTENT"}
}

export function getListenContent(){
    return {type: 'GET_LISTEN_CONTENT'}
}

    export function setCurrentComposition(composition){
        return{
            type: "SET_CURRENT_COMPOSITION", 
            payload: {
                currentComposition: {
                    title: composition.title,
                    score: composition.scoreSrc,
                    audio: composition.audioSrc 
                }
            }           
        }
    }

export function getEventsContent(){
    return {type: 'GET_EVENTS_CONTENT'}
}

export function getResumeContent(){
    return {type: 'GET_RESUME_CONTENT'}
}

    export function setResumeFocusMusic(){
        return {type: 'SET_RESUME_FOCUS_MUSIC'} 
    }
    
    export function setResumeFocusProgramming(){
        return {type: 'SET_RESUME_FOCUS_PROGRAMMING'} 
    }

export function getContactContent(){
    return {type: 'GET_CONTACT_CONTENT'}
}