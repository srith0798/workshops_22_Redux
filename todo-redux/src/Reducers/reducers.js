import * as actions from "../Actions/actionType";
import { v4 as uuid } from "uuid";

const valueState = [];

// function valueChanger(){

// }

export function valueReducer(state = valueState, action) {
  switch (action.type) {
    case actions.ON_CHANGE:
      return action.payload.value;
    case actions.ON_ADD:
      return [...state, { id: uuid(), todoItem: action.payload.value }];
    case actions.ON_REMOVE:
      return state.filter((each) => each.id !== action.payload.id);
    default:
      return state;
  }
}
