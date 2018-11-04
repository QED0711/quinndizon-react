const contentReducer = (state = {}, action) => {
    switch(action.type){
        case 'HOME':
            return("This is the home content");
        default:
            return state;
    }
}

export default contentReducer;