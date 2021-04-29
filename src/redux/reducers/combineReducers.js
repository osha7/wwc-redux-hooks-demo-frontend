import { combineReducers } from 'redux';
import musicianReducer from './musicianReducer';
import songReducer from './songReducer';

export default combineReducers({
    musicianReducer,
    songReducer,
});