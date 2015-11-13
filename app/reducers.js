import { combineReducers } from 'redux';
import { name as dbName } from './db/db';
import changes from './pouch/reducer';
import templates from './templates/reducer';
import questions from './questions/reducer';
import { pouchify } from 'redux-pouch';

const combinedReducers = combineReducers({
  changes,
  templates,
  questions
});

//Pouchify does some magic that I don't yet understand. Something to do with trapping the FEED_CHANGE actions. I think.
export default pouchify(combinedReducers, dbName); 