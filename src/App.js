import React from "react";
import { createStore } from "redux"; // npm i redux

//create store + adding action as an argument + taking action
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      // to check if incrementBy is defined if not return 1
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); // to get the state on the store
});

// creating a type for an action and dispatching it
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5, // sending the incrementBy value
});

// creating a type for an action to decrement the counter
store.dispatch({
  type: "DECREMENT",
  decrementBy: 3,
});

unsubscribe(); // seeing the result till here only

// creating a type for an action to reset the counter
store.dispatch({
  type: "RESET",
});

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
