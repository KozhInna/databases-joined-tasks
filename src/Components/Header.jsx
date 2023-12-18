import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/palindrome">Palindrome app</NavLink>
          </li>
          <li>
            <NavLink to="/bubble">Bubble Sort app</NavLink>
          </li>
          <li>
            <NavLink to="/stackdata">Stack Data app</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
