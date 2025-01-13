//bordering without using hoc or render pattern
//but with state and inner functions
//but better to use either pattern instead of no pattern for standard practice
import { useState } from "react";

function useHover(): {
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  } {
    const [isHovered, setIsHovered] = useState<boolean>(false);
   
    const onMouseEnter = (): void => setIsHovered(true);
    const onMouseLeave = (): void => setIsHovered(false);
   
    return { isHovered, onMouseEnter, onMouseLeave };
  }
   
  
  const BorderedWithInnerFunction: React.FC = () => {
    const { isHovered, onMouseEnter, onMouseLeave } = useHover();
   
    return (
  <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
  <button>{isHovered ? "Hovered!" : "Hover over me!"}</button>
  </div>
    );
  };


  export default BorderedWithInnerFunction;