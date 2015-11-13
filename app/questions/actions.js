import { methods, POUCH_DB } from 'redux-pouch';
import db from '../pouch/db';

export const ADD = 'questions/ADD';
export function add({name}) {
  return {
    type: ADD,
    payload: {
      [POUCH_DB]: {
        method: methods.create,
        db
      }
    },
    meta: {
      name
    }
  }
}

export const FETCH_ALL = 'questions/FETCH_ALL';
export function fetchAll() {
  return {
    type: FETCH_ALL,
    payload: {
      [POUCH_DB]: {
        method: methods.findAll,
        db
      }
    }
  };
}


export const CLEAR = 'questions/CLEAR';
export function clear() {
  return {
    type: CLEAR,
    payload: {
      [POUCH_DB]: {
        method: methods.deleteAll,
        db
      }
    }
  };
}
