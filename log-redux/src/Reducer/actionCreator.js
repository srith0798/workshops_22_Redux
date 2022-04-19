import { replaceData } from "./cartReducer";
import { toggleNotice } from "./uiReducer";

export const fetchData = () => async (dispatchAction) => {
  const fetchServer = async () => {
    const response = await fetch(
      "https://log-redux-default-rtdb.firebaseio.com/cartItems.json"
    );
    const data = await response.json();
    return data;
  };
  try {
    const cartData = await fetchServer();
    const { error } = cartData;
    if (error) throw Error(error);

    dispatchAction(replaceData(cartData));
  } catch (err) {
    console.log(err.message);
    dispatchAction(
      toggleNotice({
        type: "error",
        message: "Failure!... couldn't fetch",
        open: true,
      })
    );
  }
};

export const sendCartData = (cart) => async (dispatchAction) => {
  // send Request
  dispatchAction(
    toggleNotice({
      type: "warning",
      message: "sending request wait a moment...!",
      open: true,
    })
  );
  const sendRequest = async () => {
    // send Request
    const response = await fetch(
      "https://log-redux-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
    const data = await response.json();
    return data;
  };
  try {
    const response = await sendRequest();
    const { error } = response;
    if (error) throw Error(error);
    // data success
    dispatchAction(
      toggleNotice({
        type: "success",
        message: "sent Successfully...!",
        open: true,
      })
    );
  } catch (err) {
    console.log(err.message);
    dispatchAction(
      toggleNotice({
        type: "error",
        message: "Failure!... couldn't add",
        open: true,
      })
    );
  }
};
