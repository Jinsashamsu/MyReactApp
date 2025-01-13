import { useState } from "react";
import { useCallback } from "react";

function CheckCallBack()
{
 const [count, setCount] = useState(0);

 const incrmeentCounter = useCallback( () => 
{
    console.log('Function called');
    setCount((prevCount) => prevCount  +1);
}, []
 );

return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={incrmeentCounter}>Increment</button>
    </div>
);

}


export default CheckCallBack;