import { FetchTodosAction, DeleteTodoAction } from "./todos";

/**
 * enum of all the redux action types.
 *
 * Note: TypeScript automatically assigns an incrementing 0 based index to any value passed in without an assignment operator
 *   Ex:
 *  enum ActionTypes {
 *    fetchTodos = 0,
 *    fetchMoreStuff = 1
 *    ...etc.
 *  }
 *
 * This works because redux only needs some unique value that is the type and it doesn't necessarily have to be a string
 */
export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

/**
 * Define the type union of all action types here to use as the annotated parameter type for action in the reducer.
 *
 * You would keep chaining on additional action interfaces to this union type
 */
export type Action = FetchTodosAction | DeleteTodoAction;
