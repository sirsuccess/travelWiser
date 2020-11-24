import logo from "../../assets/icons/Logo.png";
import cheveron from "../../assets/icons/cheveron-down.png";
import {Link} from "react-router-dom"
import "./styles.scss";

function Navbar() {
  return (
    <div className="container">
      <header className="navbar d-flex align-items-center justify-content-between">
      <Link to="/" className="brand"> 
          <img src={logo} className="App-logo" alt="logo" />
          </Link>
        <div className="nav-items">
          <ul className="d-flex align-items-center">
            <li><Link to="/"> Search </Link></li>
            <li><Link to="/">Find destination</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Community <img src={cheveron} className="App-logo" alt="logo" /></Link></li>
            <li><Link to="/"><button className="login">Login</button></Link></li>
            <li><Link to="/"><button className="sign-up">Sign up</button></Link></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
