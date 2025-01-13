import { useState } from "react";
import HOCSharedButton from "../../HOC/HOCSharedButton";

// Render Props Component
//react node is set of array elements
const ClickTracker: React.FC<{
    render: (clicks: number, handleClick: () => void) => React.ReactNode;
  }> = ({ render }) => {
    const [clicks, setClicks] = useState(0);
   
    const handleClick = () => {
      setClicks(clicks + 1); // Increment click count
      console.log(`Button clicked ${clicks + 1} times`);
    };
   
    return <>{render(clicks, handleClick)}</>;
  };
   
  const RenderClickTracker: React.FC = () => {
    return (
  <div>
  <h1>Render Props Example</h1>
        {/* Use ClickTracker with render props */}
  <ClickTracker
          render={(clicks, handleClick) => (
  <>
  <p>Button clicked {clicks} times</p>
  <HOCSharedButton label="Click Me!" onClick={handleClick} />
  </>
          )}
        />
  </div>
    );
  };


  export default RenderClickTracker;