import * as actions from "./actionType";

export function valueUpdater(value) {
  return {
    type: actions.ON_CHANGE,
    payload: {
      value,
    },
  };
}

export function onAddItem(value) {
  return {
    type: actions.ON_ADD,
    payload: {
      value,
    },
  };
}

export function onRemoveItem(id) {
  return {
    type: actions.ON_REMOVE,
    payload: {
      id,
    },
  };
}
