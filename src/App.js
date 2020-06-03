import React from "react";
import { createStore } from "redux"; // npm i redux

//create store + adding action as an argument + taking action
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
});

// creating a type for an action and dispatching it
store.dispatch({
  type: "INCREMENT",
});

console.log(store.getState()); // to get the state on the store

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
