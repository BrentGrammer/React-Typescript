import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

/**
 * In the interface for AppProps, add the properties that will be wired up via mapStateToProps and mapDispatchToProps
 */
interface AppProps {
  todos: Todo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}

// _App is used to avoid a name collision when connecting the component with the name App - you want to avoid using default exports
// with TypeScript
class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  // Returning an array of jsx elements - use JSX.Element type
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

/**
 * Use the StoreState interface created to annotate the state argument passed in here.
 * Also add the return annotation for mapStateToProps to match the props and types returned
 */
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
