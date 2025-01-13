import { useState } from "react";

const AuthChecker = ({ render }: { render: (isLoggedIn: boolean) => React.ReactNode }) => {
    // Simulate authentication status
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const toggleAuth = () => {
      setIsLoggedIn(!isLoggedIn);
    };
  
    return (
      <div>
        <button onClick={toggleAuth}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        {render(isLoggedIn)}
      </div>
    );
  };


  export default AuthChecker;