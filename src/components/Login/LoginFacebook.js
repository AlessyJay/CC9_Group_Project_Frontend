import axios from "../../config/axios";
import React, { useContext, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { FaFacebookF } from "react-icons/fa";
import { setToken } from "../../services/localStorage";
import { UserContext } from "../../context/userContext";
import jwtDecode from "jwt-decode";

function LoginFacebook({ setShowLogin }) {
  const { setUser } = useContext(UserContext);
  const clientId = "864275854266130";

  const responseFacebook = async response => {
    console.log("Login", response);
    const { email, id, first_name, last_name, picture } = response;

    const dataObj = {
      email: email,
      facebookId: id,
      firstname: first_name,
      lastname: last_name,
      imageUrl: picture.data.url,
    };

    const res = await axios.post("/users/facebookauth", dataObj);
    console.log(res.data.token);
    setToken(res.data.token);
    setUser(jwtDecode(res.data.token));
    setShowLogin(false);
  };
  const onLoginSuccess = res => {
    console.log(res);
  };
  const onLogoutSuccess = res => {};

  const fa = (
    <div className="p-2.5 mr-2.5">
      <FaFacebookF style={{ fontSize: "18px" }} />
    </div>
  );

  return (
    <div>
      <FacebookLogin
        appId={clientId}
        fields="first_name,last_name,email,picture"
        callback={responseFacebook}
        onClick={() => onLoginSuccess()}
        icon={fa}
        textButton="Sign in with Facbook"
        cssClass="flex items-center justify-center h-11 w-52 text-white max-w-md w-full rounded-sm bg-blue-500 hover:bg-blue-600 text-sm p-2"
      />
    </div>
  );
}

export default LoginFacebook;
