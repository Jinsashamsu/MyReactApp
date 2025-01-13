// Day 11 -11-12-2024

import { useState } from "react";
import RM_Child from "./RM_Child";

const RM_Parent: React.FC = () => {
 
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John");
   
    return (
  <div>
    <p>Count is {count}</p>
    <p>Name is {name} </p>
  <button onClick={() => setCount(count + 1)}>Increment Count</button>
  {/* increment button will change the value of count and then the child component is rendered */}
  <button onClick={() => { setName((prevName) => (prevName === "John" ? "Paul" : "John"));}}>Toggle Name</button>
  {/* toggle name button will not change the value of count(but only the name) and then the child component is not rendered */}
  <RM_Child count={count} />
  </div>
    );
   
  };  


  export default RM_Parent;