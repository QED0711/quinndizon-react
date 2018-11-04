import {combineReducers} from 'redux';
import contentReducer from './contentReducer'

const rootReducer = combineReducers(
    {contentReducer}
)

export default rootReducer;

// causing issues where the state is nto given on getState(), but the reducer instead.