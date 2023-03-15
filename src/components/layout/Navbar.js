import { Link } from "react-router-dom";

import Container from "../pages/Container";

// import styles from "./Navbar.modules.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
  return (
    <nav>
      <Container>
        <img src={logo} alt="Costs" />
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/newproject">NewProject</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
