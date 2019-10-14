import axios from "axios";
import { Dispatch } from "redux";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({
      type: "FETCH_TODOS",
      payload: response.data
    });
  };
};
