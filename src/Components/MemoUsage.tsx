import { useState } from 'react';
import { useMemo } from 'react';

function MemoUsage() {

    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    function expensiveCalculation(num:number)
    {
        for(let i=0; i<100000000; i++) {}
        return num*2;
    }
   
    // Use useMemo to memoize the result of expensiveCalculation
    const result = useMemo(() => expensiveCalculation(count), [count]);
   
    return (
  <div>
  <h1>Expensive Calculation</h1>
  <p>Result: {result}</p>
  <button onClick={() => setCount(count + 1)}>Increment Count</button>
  <button onClick={() => setOtherState(!otherState)}>
          Toggle Other State
  </button>
  </div>
    );
  }


  export default MemoUsage;