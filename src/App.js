import React from "react";
//Must import useSelector and useDispatch
import { useSelector, useDispatch } from "react-redux";
//Must also import each action from the ./actions/index.js
import { increment, decrement, logged } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(logged())}>Log In/Out</button>
      {isLogged ? (
        <h3>
          Top secret information that I shouldn't be able to see unless logged
          in
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
