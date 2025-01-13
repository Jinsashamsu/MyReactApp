import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { AppDispatch, RootState } from './Store';
import { increment, decrement, reset } from './Counterslice';






const RedexCounter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value); // Access state
    const dispatch = useDispatch<AppDispatch>(); // Dispatch actions
   
    return (
  <div>
  <h1>Counter: {count}</h1>
  <button onClick={() => dispatch(increment())}>Increment</button>
  <button onClick={() => dispatch(decrement())}>Decrement</button>
  <button onClick={() => dispatch(reset())}>Reset</button>
  </div>
    );
  };


  export default RedexCounter;