import React, {createRef, useRef } from "react";

const withMouseEvents = (WrappedComponent) => {
  return (props) => {

    // const elementRef = useRef(null); 
    const MouseEnterEvent = () => {
        debugger;
      console.log("Mouse entered");
      /* if (elementRef.current) {
        //elementRef.current.textContent += " Mouse Entered!";
        const currentText = elementRef.current.textContent.replace(
            " Mouse Left!",
            ""
          );
          elementRef.current.textContent = currentText + " Mouse Entered!";
      } */
      
    };

    const MouseLeaveEvent = () => {
        debugger;
      console.log("Mouse left");
      /* if (elementRef.current) {
        //elementRef.current.textContent += " Mouse Left!";
        const currentText = elementRef.current.textContent.replace(
            " Mouse Entered!",
            ""
          );
          elementRef.current.textContent = currentText + " Mouse Left!";
      } */
      
    };
debugger;
    
    
debugger;
    
    
        debugger;
      return (
        <WrappedComponent
          {...props}
          onMouseEnter={MouseEnterEvent}
          onMouseLeave={MouseLeaveEvent}
        />
      );

    // return (
    //     <div
    //       ref={elementRef}
    //       onMouseEnter={MouseEnterEvent}
    //       onMouseLeave={MouseLeaveEvent}
    //     >
    //       <WrappedComponent {...props} />
    //     </div>
    //   );
    

    
    // return <WrappedComponent {...props} />;
  };
};

export default withMouseEvents;