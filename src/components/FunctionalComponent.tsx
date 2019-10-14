import React from "react";

interface AppProps {
  color?: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>;
};

export default App;
