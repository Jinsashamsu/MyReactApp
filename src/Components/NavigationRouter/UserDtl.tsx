import { Link, Route, Routes, useLocation, useParams } from "react-router-dom"
import Home from "./Home";

interface UserParams
{
    id:number,
    userName : string
}

const UserDtl: React.FC = () => {
    const {id, userName} = useParams<UserParams>();
    return <div>Hello {userName}/{id}</div>
};

const UserDtlState: React.FC = () => {
    debugger;
    const location = useLocation();
    const { id, userName } = location.state || {}; // Destructure with safety for null/undefined state
    return <div>
        Hello {userName}/{id}  
        <nav>
  <Link to="/">Home</Link></nav>
  <Routes>
  <Route path="/Home" element={<Home />} />
  </Routes>
    </div>
};
export default UserDtl;
export {UserDtlState};