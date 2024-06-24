import "../assets/Cart.css";
import cartImg from "../assets/images/cart.svg";

import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";


function Cart() {
  const { cart, setCart } = useCart();
  const isEmpty = !cart.length;

  return (
    <div className="cart">
      <button
        className="btn-purchase"
        onClick={() => {
          setCart([]);
        }}
        disabled={isEmpty}
      >
        Purchase
      </button>

      {isEmpty ? (
        <div className="empty-cart-container">
          <img src={cartImg} alt="Empty cart" />
          <p>Cart is empty!</p>
        </div>
      ) : (
        <>
          {cart.map(({ id, count, price, title }) => {
            return (
              <div key={id} className="flex order-section">
                <Link to={`/specific-book/${id}`}>{title}</Link>
                <span>
                  Count: {count} / ${(price * count).toFixed(2)}
                </span>
              </div>
            );
          })}
          <p>
            Total price, $
            {cart
              .reduce((acc, { count, price }) => acc + count * price, 0)
              .toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
}

export default Cart;
