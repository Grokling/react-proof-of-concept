import 'core-js/modules/es6.array.find';
import { FEED_CHANGE } from 'redux-pouch';

export default function changes(state=[], action) {
  switch(action.type) {
  // TODO @sven? :)
  case FEED_CHANGE:
    const changeTemplate = action.payload.change.doc;
    // TODO name comparison is a bit like cheating here but it illustrates the point
    // This has to be worked out in more depth anyway
    const rest = state.filter(Template => Template.name !== changeTemplate.name);
    const nextTemplate = state.find(Template => Template.name === changeTemplate.name);

    if (changeTemplate._deleted) {
      return rest;
    } else {
      return typeof nextTemplate === 'undefined' ?
        [...state, changeTemplate] :
        (typeof nextTemplate.seqId === 'undefined' ?
          [...rest, changeTemplate] :
          state);
    }
  default:
    return state;
  }
}