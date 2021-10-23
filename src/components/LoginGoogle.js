import axios from '../config/axios';
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId =
  '53293005935-dgrkd5fp3429rbgk897j2n68sch99nrk.apps.googleusercontent.com';

function LoginGoogle() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = async (response) => {
    // console.log('Login Success:', response.profileObj);
    const { email, familyName, givenName, googleId, imageUrl } =
      response.profileObj;
    const dataObj = {
      email: email,
      lastname: familyName,
      firstname: givenName,
      googleId,
      imageUrl,
    };

    const res = await axios.post('/users/googleauth', dataObj);
    console.log(res.data.token, res.data.message);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully');
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };
  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          className="shadow-md flex items-center justify-center h-11 max-w-xs w-full rounded-sm "
          style={{ fontSize: '16px' }}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}

export default LoginGoogle;
