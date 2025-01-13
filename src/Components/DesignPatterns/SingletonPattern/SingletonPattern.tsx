//06-01-2025

/* browser db - html5 database - local storage- html5 local storage - to access local data 
-db connection logic can be done as class as service layer. and it can be implemented as singletone-class manager 
single instance is retained throughout the application
multiple instances are not created
Handled using static variables and functions
Normally it is used as class layer-like service layer; but it can also be used as functinal component
singletone pattern is mainly used in following cases
    authentication-session handling service layer or classes
    log writing
    configurations which are set once and used throughout the applciation-like user configuration or administration configurations
    theme choosing
*/

class UserSession {
    /* usersession is a class to manage session 
service layer is written as class
Other components can use the object of this class
singleton pattern normally usees it around class- it is a standard. can be done as functional component also
this can be also done as CLOSURE - CHECK ITS EG: */
    private static instance: UserSession;
    private user: { id: string; name: string } | null = null;
   
    private constructor() {
      // Private constructor to prevent instantiation
    }
   
    static getInstance(): UserSession {
        /* getinstance method was used to create object - once created, when again called in other objects/components,
         it will not create new instance, same object will be used in other components
         delcared as static */
      if (!UserSession.instance) {
        UserSession.instance = new UserSession();
      }
      return UserSession.instance;
    }
   
    login(user: { id: string; name: string }): void {
      this.user = user;
      console.log(`${user.name} has logged in.`);
    }
   
    logout(): void {
      console.log(`${this.user?.name} has logged out.`);
      this.user = null;
    }
   
    getUser(): { id: string; name: string } | null {
      return this.user;
    }
   
    isLoggedIn(): boolean {
      return this.user !== null;
    }
  }
   
   
  const SingletonSession: React.FC = () => {
    const session = UserSession.getInstance();
    //const session2 = UserSession.getInstance();
   
    //console.log(session===session2);
   
    const handleLogin = () => {
      session.login({ id: "123", name: "John Doe" });
    };
   
    const handleLogout = () => {
      session.logout();
    };
   
    const handleCheckSession = () => {
      const user = session.getUser();
      if (user) {
        console.log(`Logged in user: ${user.name}`);
      } else {
        console.log("No user logged in.");
      }
    };
   
    return (
  <div>
  <h1>Singleton User Session Example</h1>
  <button onClick={handleLogin}>Login</button>
  <button onClick={handleLogout}>Logout</button>
  <button onClick={handleCheckSession}>Check Session</button>
  </div>
    );
  };

  export default SingletonSession;