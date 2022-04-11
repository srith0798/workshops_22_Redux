import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../Reducer/reducer";
import Cart from "../Cart";
import "./index.css";
const Header = () => {
  const dispatchAction = useDispatch();
  function onLogOut() {
    dispatchAction(logOut());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={onLogOut} className="btn-logout">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
