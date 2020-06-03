import React from "react";
import { createStore } from "redux"; // npm i redux

//create store 
const store = createStore((state = { count: 0 }) => {
  return state;
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
