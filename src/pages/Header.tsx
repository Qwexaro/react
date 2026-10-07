import type React from "react";
import { Link } from "react-router-dom";

let Header = (): React.JSX.Element =>
  <header className="header">
    <h1>SOCIAL NETWORK</h1>
    <p>for communicate</p>

    <nav className="navigation">
      <Link to={"/"}>
        Main
      </Link>

      <Link to={"/profile"}>
        My page
      </Link>

      <Link to={"/settings"}>
        Settings page
      </Link>

      <Link to={"/about"}>
        About this project
      </Link>

    </nav>
  </header>

export default Header;
