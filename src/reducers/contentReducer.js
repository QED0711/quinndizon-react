import HomeContent from '../content/homeContent'
import ListenContent from '../content/listenContent';
import EventsContent from '../content/eventsContent';
import ContactContent from '../content/contactContent';
import ResumeContent from '../content/resumeContent';


const contentReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_HOME_CONTENT':
            return HomeContent;
        case 'GET_LISTEN_CONTENT':
            return ListenContent;
        case 'SET_CURRENT_COMPOSITION':
            const newState = Object.assign({}, state, action.payload) 
            console.log(newState)
            return newState
        case 'GET_EVENTS_CONTENT':
            return EventsContent
        case 'GET_RESUME_CONTENT':
            return ResumeContent
        case 'SET_RESUME_FOCUS_MUSIC':
            return Object.assign({}, state, {focus: "music"})
        case 'SET_RESUME_FOCUS_PROGRAMMING':
            return Object.assign({}, state, {focus: "programming"})
        case 'GET_CONTACT_CONTENT':
            return ContactContent
        default:
            return state;
    }
}

export default contentReducer;