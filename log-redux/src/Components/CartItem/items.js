import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./item";
import "./item.css";
const CartItems = () => {
  const listItems = useSelector((state) => state.cartReducer.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {listItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              name={item.name}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
