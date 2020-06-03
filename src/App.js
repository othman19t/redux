import React from "react";
import { createStore } from "redux"; // npm i redux

//create store + adding action as an argument + taking action
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

// creating a type for an action and dispatching it
store.dispatch({
  type: "INCREMENT",
});

// creating a type for an action to decrement the counter
store.dispatch({
  type: "DECREMENT",
});

// creating a type for an action to reset the counter
store.dispatch({
  type: "RESET",
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
