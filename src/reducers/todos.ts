// import the return type interface created in the actions for fetchTodos
// import the enum of action types to use in the switch

import { Todo, Action, ActionTypes } from "../actions";

/**
 *  Specify the type of return value for the state, and then set it to a default value.
 *  The action annotation is using the Action union type created for all action interfaces
 */
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    // use enum created for action types:
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
