import HomeContent from '../content/homeContent'
import ListenContent from '../content/listenContent';

const contentReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_HOME_CONTENT':
            return {content: HomeContent};
        case 'GET_LISTEN_CONTENT':
            return {content: ListenContent};
        case 'GET_EVENTS_CONTENT':
            return {content: "This is the Events Content"}
        default:
            return state;
    }
}

export default contentReducer;