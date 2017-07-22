import { combineReducers } from 'redux';
import counter from './counter';
import server from './serverState';

export default combineReducers({
    counter,
    server
})