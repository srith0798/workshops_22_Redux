import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Reducer/cartReducer";

import "./item.css";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatchAction = useDispatch();
  const removeHandler = () => {
    dispatchAction(removeFromCart(id));
  };
  const addHandler = () => {
    dispatchAction(
      addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
