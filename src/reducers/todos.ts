// import the return type interface created in the actions for fetchTodos
// import the enum of action types to use in the switch

import { Todo, FetchTodosAction, ActionTypes } from "../actions";

// Sepcify the type of return value for the state, and then set it to a default value
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    // use enum created for action types:
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
