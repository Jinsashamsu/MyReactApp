import React, { useState, useCallback } from "react";
import Child from './Child.tsx'
 
function Parent() {
    debugger;
  const [count, setCount] = useState(0);
 debugger;
    const increment = useCallback((event) => {
        debugger;
        const source = event.currentTarget; // Get the element that triggered the event
    console.log("Clicked from:", source.tagName, "with text:", source.textContent);
    if(source.id=="btnParent")
    {
    setCount((prev) => prev + 1);
    }
    else if(source.id=="btnChild")
    {
        setCount((prev) => prev - 1);
    }
  }, []); // `increment` is now memorized

  const incrementWithArgs = useCallback((incrementValue: number) => {
    debugger;
  /*   const source = event.currentTarget; // Get the element that triggered the event
console.log("Clicked from:", source.tagName, "with text:", source.textContent); */
setCount((prev) => prev + incrementValue);
}, []); // `increment` is now memorized
 
  return (
<div>
<h1>Parent Count: {count}</h1>
<button id="btnParent" onClick={incrementWithArgs(5)}>Increment</button>

</div>
  );
}



export default Parent;