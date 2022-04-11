import { useDispatch } from "react-redux";
import { addToCart } from "../../Reducer/cartReducer";
import "./product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatchAction = useDispatch();
  function addItems() {
    dispatchAction(
      addToCart({
        name,
        id,
        price,
      })
    );
  }
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addItems}>Add to cart</button>
    </div>
  );
};

export default Product;
