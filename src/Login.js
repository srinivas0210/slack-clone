import React from "react";
import "./Login.css";
import {auth , provider } from './Firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [ state ,dispatch ] =  useStateValue();

  const signIn = () =>{
    auth
    .signInWithPopup(provider)
    .then((result) =>{
      console.log(result.user.displayName);
      dispatch({
        type: actionTypes.SET_USER,
        user : result.user,
      });
    })
    .catch(error => alert(error.message));
  }

  return (
    <div className="signin">
      <div className="login">
        <img src={require("./slack-logo.png")} alt="slack-logo" />
        <h2>Sign in into B/2 workspace</h2>
        <h6>B/2-38ddc.slack.com</h6>
        <button onClick={signIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default Login;
