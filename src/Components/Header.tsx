import UserContext from "./UserContext";
import { useContext } from "react";
interface HeaderProps {
    title: string;
  }
  
  

  const Header: React.FC<HeaderProps> = ({ title }) => {
    //const user = useContext(UserContext); // Access user data
    return <div><header><h1>{title}</h1></header> </div>;
  };



  export default Header;