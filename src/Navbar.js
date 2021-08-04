import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="header">
            <div className="logo">
                <h2>Contribute India</h2>
            </div>
            <div className="nav">
                <Link className="nav_link" to='/'>Home</Link>
                <Link className="nav_link" to='/contribute'>Contribute</Link>
            </div>
        </div>
    );
}
 
export default Navbar;