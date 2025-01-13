//Day 10 - 10-12-2024

import HOCSharedButton from "./HOCSharedButton";
import React from "react";

const withClickTracker = (WrappedComponent1) => {
    return (props) => {
      const [clicks, setClicks] = React.useState(0);
   
      const handleClick = () => {
        setClicks(clicks + 1); // Increment click count
        console.log(`Button clicked ${clicks + 1} times`);
      };
   
      // Pass the click handler and other props to the wrapped component and the already existing props as spread operator
      //return it as a new component
      return <WrappedComponent1 onClick={handleClick} {...props} />;
    };
  };
   //withClickTracker - higher order component function
   //Passed the component to the HO function
   //HOF => can pass component as props to it.
   //Can modify the component and add extra features and return it as a new component
   //This pattern allows you to add reusable logic (like logging, authentication checks, etc.) to multiple components without duplicating code.
   //Time logging of the component rendering can be done using HOC
   //Add multiple reusable features to same single component
  const TrackedButton = withClickTracker(HOCSharedButton);
  //modify original button to TrackedButton new component which is rendered.
   
  const HOCMain = () => {
    return (
  <div>
  <h1>Higher-Order Component Example</h1>
  <TrackedButton label="Click Me!" />
  </div>
    );
  };


  export default HOCMain;