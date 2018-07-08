import {combineReducers} from 'redux';
import masPeople from './People';
import ActivePeople from '../actions/people-active';

const Reducers = combineReducers( {
    people: masPeople,
    active: ActivePeople
});

export default Reducers;
