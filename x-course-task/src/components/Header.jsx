import "../assets/Header.css";
import cartImg from "../assets/images/cart.svg";
import avatarImg from "../assets/images/avatar.png";

import React from "react";
import { Link } from 'react-router-dom';

import { useCart } from "../hooks/useCart";

function Header({ userName, setUserName, userIsLoggedIn, setUserIsLoggedIn }) {
  const {cart} = useCart();
  const length = cart.length;

  return (
    <>
      <header className="flex header">
        <h1>X-course task / Illia Matushchak</h1>

        {userIsLoggedIn && (
          <nav className="flex">
            <Link to="/cart" className="cart-link">
              <img src={cartImg} width="50px" alt="Cart" />
              {length ? <div>{length}</div> : ''}
            </Link>
            <Link to="/" onClick={() => {setUserName(''); setUserIsLoggedIn(false)}}>Sign-out</Link>
            <div className="user flex">
              <Link to={'/'}>
                <img
                  className="user-avatar"
                  src={avatarImg}
                  width="50px"
                  alt="Avatar"
                />
              </Link>
              <Link to={'/'} className="user-name">
                {userName}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
