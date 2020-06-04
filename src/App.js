import React from "react";
import { createStore } from "redux"; // npm i redux

//define increment function
const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrement = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
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
      return {
        count: state.count - action.decrementBy,
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
store.dispatch(decrement({ decrementBy: 4 }));

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
