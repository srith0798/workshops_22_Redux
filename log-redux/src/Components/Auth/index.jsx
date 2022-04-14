import { useDispatch } from "react-redux";
import { logIn } from "../../Reducer/reducer";
import { useState } from "react";
import "./index.css";

function Auth() {
  const dispatchAction = useDispatch();
  const [userName, changeUsername] = useState("");
  const [password, changePassword] = useState("");
  function onSubmission(e) {
    e.preventDefault();
    !password && !userName
      ? alert("Sorry can't let you in...! Please Enter all fields")
      : dispatchAction(logIn());
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={onSubmission}>
        <label htmlFor="user">User Name</label>
        <input
          autoComplete="true"
          id="user"
          type="text"
          placeholder="enter user name"
          onChange={(e) => changeUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          autoComplete="true"
          id="password"
          type="password"
          placeholder="enter password"
          onChange={(e) => changePassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

export default Auth;
