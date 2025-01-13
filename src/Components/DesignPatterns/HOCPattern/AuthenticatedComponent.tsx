import Profile from "./Profile";

const withAuth = (WrappedComponent) => {
    return (props) => {
      const isLoggedIn = true; // Simulating login status
   
      if (!isLoggedIn) {
        return <div>Please log in to view this page.</div>;
      }
   
      return <WrappedComponent {...props} />;
    };
  };

  export default withAuth;
   
  