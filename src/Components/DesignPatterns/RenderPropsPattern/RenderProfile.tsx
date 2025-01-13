import AuthChecker from "./AuthenticatedRender";

const Profile = () => {
    return <div>This is the user's profile page.</div>;
  };

  const RedirectToLogin = () => {
    return <div>Please log in to view this page..</div>;
  };

//   const RenderAuthenticatedProfile = () => {
//     return (
//       <div>        
//         <AuthChecker
//           render={(isLoggedIn) =>
//             isLoggedIn ? (
//               <Profile />
//             ) : (
//               <div>Please log in to view your profile.</div>
//             )
//           }
//         />
//       </div>
//     );
//   };


// Render Props Component
const AuthGuard: React.FC<{
    render: (isLoggedIn: boolean) => React.ReactNode;
  }> = ({ render }) => {
    const isLoggedIn = true; // Simulating login status
   
    return <>{render(isLoggedIn)}</>;
  };
   
   
  const RenderAuthenticatedProfile: React.FC = () => {
    return (
  <div>
  <AuthGuard
          render={(isLoggedIn) =>
            isLoggedIn ? <Profile /> : <RedirectToLogin />
          }
        />
  </div>
    );
  };


  const RenderBorder: React.FC<{
    render: () => React.ReactNode;
  }> = ({ render }) => {
    return (
    <div style={{ border: "2px solid black", padding: "10px", margin:"10px" }}>
    {render()}
  </div>
    );
  };


  const RenderProfileWithBorder = () => {
    return (
      <div>        
        <RenderBorder render={() => <Profile />} />
      </div>
    );
  };
  
  export default RenderAuthenticatedProfile;
  export {RenderProfileWithBorder};