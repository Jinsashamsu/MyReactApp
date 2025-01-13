
import { createContext } from "react";
 
const UserContext = createContext({ username: "", loggedIn: false, id:"" });
export default UserContext;