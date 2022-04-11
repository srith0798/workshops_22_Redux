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
    dispatchAction(replaceData(cartData));
  } catch (err) {
    dispatchAction(
      toggleNotice({
        type: "error",
        message: "Error man...!",
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
    await response.json();
    // data success
    dispatchAction(
      toggleNotice({
        type: "success",
        message: "sent Successfully...!",
        open: true,
      })
    );
  };
  try {
    await sendRequest();
  } catch (err) {
    dispatchAction(
      toggleNotice({
        type: "error",
        message: "Error man...!",
        open: true,
      })
    );
  }
};
