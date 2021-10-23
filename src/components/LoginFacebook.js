import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { FaFacebookF } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import axios from '../config/axios';
function LoginFacebook() {
  const clientId = '864275854266130';
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    picture: '',
  });
  const responseFacebook = async (response) => {
    console.log('Login', response);
    const { email, first_name, last_name, id, picture } = response;
    const dataObj = {
      email: email,
      firstname: first_name,
      lastname: last_name,
      facebookId: id,
      imageUrl: picture.data.url,
    };

    const res = await axios.post('/users/facebookauth', dataObj);
    console.log(res.data);

    setIsLogged(true);
    setUser((cur) => ({
      ...cur,
      name: response.name,
      email: response.email,
      picture: response.picture?.data?.url,
    }));
  };
  const onLoginSuccess = (res) => {
    console.log(res);
  };
  const onLogoutSuccess = (res) => {
    setIsLogged(false);
  };

  const fa = (
    <div className="p-2.5 mr-2.5">
      <FaFacebookF style={{ fontSize: '18px' }} />
    </div>
  );

  return (
    <div>
      {!isLogged ? (
        <FacebookLogin
          appId={clientId}
          // autoLoad={true}
          fields="first_name,last_name,email,picture,name"
          callback={responseFacebook}
          onClick={onLoginSuccess}
          icon={fa}
          textButton="Sign in with Facbook"
          cssClass="flex items-center justify-center h-11 w-52 text-white max-w-md w-full rounded-sm bg-blue-500 hover:bg-blue-600 text-sm p-2"
        />
      ) : (
        <>
          <div
            style={{
              margin: '10px 0',
              display: 'flex',
              backgroundColor: 'lightgray',
              padding: '10px 40px',
              borderRadius: '10px',
            }}
          >
            <p>{user.name}</p>
            {/* <p>{user.email}</p> */}
            <img
              src={user?.picture}
              alt="user-img"
              style={{
                borderRadius: '50%',
                border: '1px solid gray',
                marginLeft: '5px',
              }}
            />
          </div>
          <div style={{ cursor: 'pointer' }} onClick={onLogoutSuccess}>
            Sign Out
          </div>
        </>
      )}
    </div>
  );
}

export default LoginFacebook;
