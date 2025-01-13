import React, { useState } from "react";
import withAuth from "./AuthenticatedComponent";
import withBorder from "./BorderedComponent";
import withMouseEvents from "./AttachMouseEvents";

 
// const Profile = () => {
//   return <div>This is the user's profile page.</div>;
// };

const Profile = (props) => {
    //By using {...props}, we ensured that all props, including event handlers added by the HOCs, 
    // were properly applied to the <div> element. Without this, the event handlers wouldn't be attached to the div,
    //  so the mouse events wouldn't trigger.
    return <div {...props}>This is the user's profile page.</div>;
    /* When the Profile component is wrapped by the HOC (withMouseEvents), the onMouseEnter and onMouseLeave
     props are added to the component. However, for them to take effect, they need to be passed to the underlying
      DOM element (in this case, the <div> element). The {...props} syntax is used to spread the properties 
      received by the component and pass them directly to the div element, ensuring that event listeners like 
      onMouseEnter and onMouseLeave are applied correctly.
        Without this, the div would not have received event handlers, wouldn't fire. */
  };

const ProtectedProfile = withAuth(Profile);
const BorderedProfile = withBorder(ProtectedProfile);
const ProfileWithMouseEvent = withMouseEvents(Profile);
const ProfileWithBorderToggle = () => {
    const [isBordered, setIsBordered] = useState(false);
  
    
    const WrappedProfile = isBordered ? withBorder(Profile) : Profile;
  
    const toggleBorder = () => {
      setIsBordered(!isBordered);
    };
  
    return (
      <div> 
        <WrappedProfile />
        <button onClick={toggleBorder}>Toggle Border</button>
      </div>
    );
  };


export default ProtectedProfile;
export {BorderedProfile, ProfileWithBorderToggle, ProfileWithMouseEvent};


