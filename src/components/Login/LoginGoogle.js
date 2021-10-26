import axios from "../../config/axios";
import React, { useContext, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { setToken } from "../../services/localStorage";
import { UserContext } from "../../context/userContext";
import jwtDecode from "jwt-decode";

const clientId = "53293005935-dgrkd5fp3429rbgk897j2n68sch99nrk.apps.googleusercontent.com";

function LoginGoogle({ setShowLogin }) {
  const { setUser } = useContext(UserContext);

  const onLoginSuccess = async response => {
    // console.log('Login Success:', response.profileObj);
    const { email, familyName, givenName, googleId, imageUrl } = response.profileObj;
    const dataObj = {
      email: email,
      lastname: familyName,
      firstname: givenName,
      googleId,
      imageUrl,
    };

    const res = await axios.post("/users/googleauth", dataObj);
    // console.log(res.data.token, res.data.message);
    setToken(res.data.token);
    setUser(jwtDecode(res.data.token));
    setShowLogin(false);
  };

  const onLoginFailure = res => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onLoginSuccess}
        onFailure={onLoginFailure}
        cookiePolicy={"single_host_origin"}
        className="shadow-md flex items-center justify-center h-11 max-w-xs w-full rounded-sm "
        style={{ fontSize: "16px" }}
      />
    </div>
  );
}

export default LoginGoogle;
