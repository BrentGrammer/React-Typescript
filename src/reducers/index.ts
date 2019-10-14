import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

/**
 * combineReducers is a generic function like dispatch and can take in a type describing the argument passed in.
 *
 * This ensures that the reducers return the expected data for state properties in the store.
 * It prevents unintentional returning of incorrect data from a reducer
 */
// Create an interface to describe the entire state of the store
interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
