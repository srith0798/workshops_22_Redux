import { useSelector } from "react-redux";
import CartItems from "../CartItem/items";
import Header from "../Header";
import Products from "../Product/products";
import "./index.css";

function Layout() {
  const { showCart, itemsList } = useSelector((state) => state.cartReducer);
  let total = 0;
  itemsList.forEach((element) => {
    total += element.totalPrice;
  });
  return (
    <>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Layout;
