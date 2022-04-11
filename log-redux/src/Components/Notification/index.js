import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotice } from "../../Reducer/uiReducer";

function Notification({ type, message }) {
  const { open } = useSelector((state) => state.uiReducer.notice);
  const dispatchAction = useDispatch();
  function closeNotice() {
    dispatchAction(
      toggleNotice({
        open: false,
      })
    );
  }
  return (
    <div>
      {open && (
        <Alert onClose={closeNotice} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default Notification;
