import 'core-js/modules/es6.array.find';
import { ADD, CLEAR, FETCH_ALL } from './actions';
import { FEED_CHANGE } from 'redux-pouch';
const NEXT = 'next';
const START = 'start';

// TODO normalisation
export default function Templates(state=[], action) {
  switch(action.type) {
  case ADD:
    switch(action.sequence.type) {
    case START:
      return [...state, {
        ...action.meta,
        seqId: action.sequence.id,
        isSyncing: true
      }];
    case NEXT:
      // TODO sorting
      const rest = state.filter(template => template.seqId !== action.sequence.id);
      let nextTemplate = {
        ...state.find(template => template.seqId === action.sequence.id),
        isSyncing: false
      };

      if (action.error) {
        nextTemplate.error = action.payload;
      } else {
        nextTemplate = {
          ...nextTemplate,
          ...action.payload
        };
      }

      return [...rest, nextTemplate];
    }

  case CLEAR:
    return action.sequence.type === NEXT && !action.error ? [] : state;

  case FETCH_ALL:
  // console.log(action)
    // switch(action.sequence.type) {
    // case START:
      // return state;
    // case NEXT:
      return action.payload;
    // }


  default:
    return state;
  }
}