import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import Login from "./Login";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const toggleActive = (e) => {
    setActive(!isActive);
    setIsDisplay(!isDisplay);

    e.preventDefault();
  };

  return (
    <header>
      <Link to={"/"}>
        <h1>theFakeStore</h1>
      </Link>
      <div className="logos">
        <a href="#">
          <Search />
        </a>
        <a href="#">
          <Heart />
        </a>
        <a href="#">
          <Cart />
        </a>

        <button
          onClick={(e) => {
            setButtonPopup(true);
          }}
        >
          Login
        </button>
      </div>
      <div className={isDisplay ? "is-display menu" : "menu"}>
        <a href="#">Search</a>
        <a href="#">Like</a>
        <a href="#">Cart</a>
      </div>
      <a
        href="#"
        className={isActive ? "is-active menu-button" : "menu-button"}
        id="menuButton"
        onClick={(e) => toggleActive(e)}
      >
        <span className="burger-icon"></span>
      </a>
      <Login trigger={buttonPopup} setTrigger={setButtonPopup}></Login>
    </header>
  );
};

export default Header;
