import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Components/Auth";
import Layout from "./Components/Layout";
import Notification from "./Components/Notification";
import { fetchData, sendCartData } from "./Reducer/actionCreator";
import "./App.css";

function App() {
  let isRefresh = useRef(true);
  let { current } = isRefresh;

  const dispatchAction = useDispatch();
  const notice = useSelector((state) => state.uiReducer.notice);
  const logState = useSelector((state) => state.authReducer.isLog);
  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatchAction(fetchData());
  }, [dispatchAction]);

  useEffect(() => {
    if (current) {
      isRefresh.current = false;
      return;
    }
    if (cart.changed) {
      dispatchAction(sendCartData(cart));
    }
  }, [cart, dispatchAction]);

  return (
    <div className="App">
      {notice && <Notification type={notice.type} message={notice.message} />}
      {!logState && <Auth />}
      {logState && <Layout />}
    </div>
  );
}

// import { toggleNotice } from "./Reducer/uiReducer";
//Use Effect()
// function App() {
//   let isRefresh = useRef(true);
//   let { current } = isRefresh;

//   const dispatchAction = useDispatch();
//   const notice = useSelector((state) => state.uiReducer.notice);
//   const logState = useSelector((state) => state.authReducer.isLog);
//   const cart = useSelector((state) => state.cartReducer);
//   useEffect(() => {
//     if (current) {
//       isRefresh.current = false;

//       return;
//     }
//     const sendRequest = async () => {
//       // send Request
//       dispatchAction(
//         toggleNotice({
//           type: "warning",
//           message: "sending request wait a moment...!",
//           open: true,
//         })
//       );
//       const response = await fetch(
//         "https://log-redux-default-rtdb.firebaseio.com/cartItems.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       const resData = await response.json();
//       // data success
//       dispatchAction(
//         toggleNotice({
//           type: "success",
//           message: "sent Successfully...!",
//           open: true,
//         })
//       );
//     };
//     sendRequest().catch((err) => {
//       dispatchAction(
//         toggleNotice({
//           type: "error",
//           message: "Error man...!",
//           open: true,
//         })
//       );
//     });
//   }, [cart, dispatchAction]);
//   return (
//     <div className="App">
//       {notice && <Notification type={notice.type} message={notice.message} />}
//       {!logState && <Auth />}
//       {logState && <Layout />}
//     </div>
//   );
// }

export default App;
