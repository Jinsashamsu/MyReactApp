import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import UserDtl, { UserDtlState } from "./UserDtl";


const NavigationMain: React.FC = () => {

  const location = useLocation();

  // Check if the current path starts with "/user"
  const showNav = !location.pathname.startsWith("/user");

    return (
  <div>
    {showNav && (
  <nav>
  <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/user/1/Jinsa">User 1</Link> | <Link to="/user/2/Binnya">User 2</Link> | <Link to="/user-details/" state={{id:3,userName:"Sruthi"}}>User 3</Link>
  </nav> )}
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/user/:id/:userName" element={<UserDtl />} />
  <Route path="/user-details" element={<UserDtlState />} />
  </Routes>
  </div>
    );
  };


  export default NavigationMain;