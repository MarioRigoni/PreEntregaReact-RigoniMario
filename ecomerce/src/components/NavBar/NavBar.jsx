import CartWidget from "../CartWidget/CardWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/hardware">Hardware</Link>
        </li>
        <li>
        <Link to="/category/peripherals">Periféricos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}

