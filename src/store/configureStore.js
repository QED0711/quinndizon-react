import {createStore} from 'redux';
// import rootReducer from '../reducers/index.js'
import contentReducer from '../reducers/contentReducer'

export default function configureStore() {
    return createStore(contentReducer);
}