import { methods, POUCH_DB } from 'redux-pouch';
import db from '../pouch/db';

export const ADD = 'templates/ADD';
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

export const FETCH_ALL = 'templates/FETCH_ALL';
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

