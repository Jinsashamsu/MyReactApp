
import { useReducer } from "react";
// Step 1: Define the reducer function

enum ActionType {
    INCREMENT = 1, // Explicitly set the value to 1
    DECREMENT = 2,     // Automatically set to 2 (incremented from the previous)
    RESET = 0,         // Automatically set to 3
  }

const reducer = (state, action) => {
debugger;
  switch (action.type) {

    case ActionType.INCREMENT:

    //   return { count: state.count + 1 }; // Update the count
    return { ...state, count: state.count + 1, message: action.payload?.text || "" };

    case ActionType.DECREMENT:

      //return { count: state.count - 1 }; // Update the count
      return { ...state, count: state.count - 1, message: action.payload?.text || "" };

    case ActionType.RESET:

      //return { count: 0 }; // Reset the count
      return { ...state, count: 0, message: action.payload?.text || "" };

    default:

      return state; // Return the current state if action is unknown

  }

};
 
function CounterUsingReducer() {

  // Step 2: Use the useReducer hook

  const [state, dispatch] = useReducer(reducer, { count: 0 }); // Initial state: { count: 0 }
 
  return (

    <div>

      <h1>Count: {state.count}</h1>      
      <p>Message: {state.message}</p>

      <button onClick={() => dispatch({ type: ActionType.INCREMENT, payload: { id: 1, text: "Learn dispatch payload1" } })}>Increment</button>

      <button onClick={() => dispatch({ type: ActionType.DECREMENT, payload: { id: 2, text: "Learn dispatch payload2" } })}>Decrement</button>

      <button onClick={() => dispatch({ type: ActionType.RESET, payload: { id: 2, text: "Learn dispatch payload3" }  })}>Reset</button>

    </div>

  );

}


export default CounterUsingReducer;