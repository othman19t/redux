import React from "react";
import { createStore } from "redux"; // npm i redux

//define increment function
const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

//create store + adding action as an argument + taking action
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      // to check if incrementBy is defined if not return 1
      return {
        count: state.count + action.incrementBy,
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
store.dispatch(increment({ incrementBy: 5 }));

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
