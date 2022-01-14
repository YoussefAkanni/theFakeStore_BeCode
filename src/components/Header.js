import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "../assets/cart.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Search } from "../assets/search.svg";
import Login from "./Login";

const Header = (props) => {
  const [isActive, setActive] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [login, setLogin] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [username, setUsername] = useState("");
  const { cartItems, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const toggleActive = (e) => {
    setActive(!isActive);
    setIsDisplay(!isDisplay);

    e.preventDefault();
  };

  const handleCart = (e) => {
    e.preventDefault();

    setDisplayCart(!displayCart);
  };

  return (
    <header>
      <Link to={"/"}>
        <h1>theFakeStore</h1>
      </Link>
      <div className="logos">
        <a href="/">
          <Search />
        </a>
        <a href="/">
          <Heart />
        </a>
        <button className="btn-cart" onClick={handleCart}>
          <Cart />
        </button>

        {displayCart ? (
          <div className="cart">
            <div className="arrow"></div>
            <div className="containers">
              {cartItems.length === 0 && (
                <div> The shopping cart is empty . </div>
              )}
              {cartItems.map((item) => (
                <div key={item.id} className="row">
                  <img
                    className="itemImg"
                    src={item.image}
                    alt="product-image"
                  />
                  <div> {item.qty} </div>
                  <div className="itemInfo">
                    <div>{item.title} </div>
                    <div> $ {item.price} </div>
                  </div>
                  <button className="remove" onClick={() => onRemove(item)}>
                    -
                  </button>
                </div>
              ))}
            </div>
            <div className="order">
              {cartItems.length >= 1 && (
                <>
                  {cartItems.length !== 0 && (
                    <>
                      <hr></hr>
                      <p className="price">total $ {itemsPrice.toFixed(2)}</p>
                    </>
                  )}
                  <button className="placeOrder">Place Order</button>
                </>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {login ? (
          <div>hello {username} </div>
        ) : (
          <button
            onClick={(e) => {
              setButtonPopup(true);
            }}
            className="btn-login"
          >
            Login
          </button>
        )}
      </div>
      <div className={isDisplay ? "is-display menu" : "menu"}>
        <a href="/">Search</a>
        <a href="/">Like</a>
        <a href="/">Cart</a>
      </div>
      <a
        href="/"
        className={isActive ? "is-active menu-button" : "menu-button"}
        id="menuButton"
        onClick={(e) => toggleActive(e)}
      >
        <span className="burger-icon"></span>
      </a>
      <Login
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        login={login}
        setLogin={setLogin}
        username={username}
        setUsername={setUsername}
      ></Login>
    </header>
  );
};

export default Header;
