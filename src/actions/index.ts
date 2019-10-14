import axios from "axios";
import { Dispatch } from "redux";

// define interface for the axios response (the shape of the data returned by the api):
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    // can pass in the response.data type/interface created (as an array since the api returns an array)
    const response = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({
      type: "FETCH_TODOS",
      payload: response.data
    });
  };
};