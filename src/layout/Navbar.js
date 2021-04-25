import { Link } from "react-router-dom";
import { BiMessageDetail } from "react-icons/bi";
const Navbar = () => {
   return (
      <div className="navbar">
         <Link to="/">
            <h2>RentACar</h2>
         </Link>
         <div>
            <Link to="/messages">
               <BiMessageDetail />
            </Link>
            <Link to="/auth/login">
               <button className="submit-button white">Prijavite se</button>
            </Link>
         </div>
      </div>
   );
};

export default Navbar;
