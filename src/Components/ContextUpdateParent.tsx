import React, { useState } from "react";
import Blog from "./Blog";

import UserContext from "./UserContext";
import ContextUpdateChild from "./ContextUpdateChild";
 
function ContextUpdate() {
  // State for user data
  const [user, setUser] = useState({
    username: "JohnDoe",
    loggedIn: true,
    id: "24234324",
  });
 
  // Function to update user data
  const updateUser = (newValues) => {
    setUser((prev) => ({ ...prev, ...newValues }));
  };
 
  return (
<UserContext.Provider value={{ ...user, updateUser }}>
<ContextUpdateChild></ContextUpdateChild>
</UserContext.Provider>
  );
}


export default ContextUpdate;