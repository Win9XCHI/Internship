import {combineReducers} from 'redux';
import {masPeople} from './People';

const Reducers = combineReducers( {
    people: masPeople
});

export default Reducers;
