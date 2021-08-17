# Used Redux Documentation and https://www.youtube.com/watch?v=CVpUuw9XSjY&ab_channel=DevEd

## Steps to incorporate Redux as a state handler:

1. Create an actions folder and reducers folder in /src

2. npm install redux (and react-redux if using React)

3. In index.js "import { createStore } from "redux"

4. Create seperate reducers in the reducers folder, with clear names explaining their purposes.

### E.x:

```
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default counterReducer;
```

5. Create an index.js in the reducers folder.

6. Import the individual reducer files and create a new const called allReducers containing them.

### E.x:

```
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
});
```

export default allReducers;

7. Create an index.js in the actions folder.

8. Declare the actions for each reducer.

### E.x:

```
export const increment = (number) => {
  return {
    type: "INCREMENT",
    payload: number,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const logged = () => {
  return {
    type: "SIGN_IN",
  };
};
```

9. In the src/index.js import the allReducers from the reducers folder.

10. In the src/index.js import the Provider from react-redux

11. Declare a store containing all the reducers

### E.x:

```
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

(The window... argument is to allow better use of the Redux DevTools Chrome Extension)

12. Wrap App in the ReactDom with `<Provider store={store}> ... </Provider>.` This allows the store to be used in any page of the App.

13. In App.js import useSelector and useDispatch from react-redux

14. Also import the names of each ation from the actions folder.

15. Below function in the app declare each reducer followed with useSelector((state) => state.REDUCER_NAME)

### E.x:

```
function App() {
    const counter = useSelector((state) => state.counter)
    const isLogged = useSelector((state) => state.isLogged)
    const dispatch = useDispatch()
}
```

DISPATCH MUST ALSO BE DECLARED

16. Then implement the state handlers in to your code.

### E.x:

If the state was to be updated via a button... :

```
<button onClick={() => dispatch(increment())}> +1 </button>
```
