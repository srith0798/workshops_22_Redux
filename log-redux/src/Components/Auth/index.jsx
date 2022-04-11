import { useDispatch } from "react-redux";
import { logIn } from "../../Reducer/reducer";
import "./index.css";

function Auth() {
  const dispatchAction = useDispatch();
  function onSubmission(e) {
    e.preventDefault();
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
        />
        <label htmlFor="password">Password</label>
        <input
          autoComplete="true"
          id="password"
          type="password"
          placeholder="enter password"
        />
        <button
          className="login-btn"
          type="submit"
          onClick={() => dispatchAction(logIn())}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Auth;
