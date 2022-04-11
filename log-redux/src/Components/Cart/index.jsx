import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../Reducer/cartReducer";
import "./index.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cartReducer.totalQuantity);
  const dispatchAction = useDispatch();
  return (
    <div className="cartIcon">
      <h3 onClick={() => dispatchAction(setShowCart())}>
        Cart: {quantity} Items
      </h3>
    </div>
  );
};

export default Cart;
