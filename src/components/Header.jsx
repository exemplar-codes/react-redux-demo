import classes from "./Header.module.css";
import { connect } from "react-redux";
import { authActions } from "../store/auth-slice";
import React from "react";

class Header extends React.Component {
  logoutHandler() {
    this.props.dispatch(authActions.logout());
  }

  render() {
    return (
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        {this.props.isAuth && (
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick={this.logoutHandler.bind(this)}>Logout</button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return { isAuth: state.auth.isAuthenticated };
}

function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
