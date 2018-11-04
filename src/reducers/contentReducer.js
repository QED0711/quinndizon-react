import HomeContent from '../content/homeContent'


const contentReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_HOME_CONTENT':
            return {content: HomeContent};
        case 'GET_LISTEN_CONTENT':
            console.log("Listen Content got called")
            return {content: "This is the Listen Content"}
        case 'GET_EVENTS_CONTENT':
            return {content: "This is the Events Content"}
        default:
            return state;
    }
}

export default contentReducer;