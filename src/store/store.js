import { createStore } from 'redux';
import contentReducer from '../reducers/contentReducer'


export default createStore(contentReducer);