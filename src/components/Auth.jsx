import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = () => dispatch(authActions.login());

  const authCount = useSelector((state) => state.auth.count);

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={loginHandler}>Login</button>
          <button
            onClick={() => dispatch(authActions.increment())}
            style={{ margin: "1rem" }}
          >
            Increment Auth count
          </button>
          {authCount}
        </form>
      </section>
    </main>
  );
};

export default Auth;
