import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { login, logout } from "../redux";

const clientID =
  "269392059275-sqs2ocq6bv5ec7khostvav4v07m2d9a4.apps.googleusercontent.com";

export function Login({ show, handleLogin }) {
  const onSuccess = (res) => {
    handleLogin(res.profileObj);
  };
  const onFailure = (res) => {
    console.log(res);
  };
  return show ? (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  ) : (
    <div></div>
  );
}

export function _Logout({ show, handleLogout }) {
  const onSuccess = () => {
    handleLogout();
  };

  return show ? (
    <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  ) : (
    <div></div>
  );
}

const mapStateToProps = (state) => {
  return {
    show: !state.user.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (profile) => dispatch(login(profile)),
  };
};

const mapLogoutStateToProps = (state) => {
  return {
    show: state.user.loggedIn,
  };
};

const mapLogoutDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
export const Logout = connect(
  mapLogoutStateToProps,
  mapLogoutDispatchToProps
)(_Logout);
