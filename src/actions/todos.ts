import axios from "axios";
import { Dispatch } from "redux";
// import enum with action type constants
import { ActionTypes } from "./types";

/**
 * Todo actions
 *
 * It's a good idea to split up your actions by 'category' (i.e. by resource in the store) into separate files.
 */

// define interface for the axios response (the shape of the data returned by the api):
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[]; // in this case the Todo shaped objects array returned from the api request via axios
}

export interface DeleteTodosAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // can pass in the response.data type/interface created (as an array since the api returns an array)
    const response = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
