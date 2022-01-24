import { Button } from '@mui/material';
import React from 'react';
import { auth, provider} from './Firebase';
import './Login.css';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));

    };
  return <div className='login'>
      <div className='login__logo'>
      <img src='https://avatars.mds.yandex.net/i?id=1014036c00910745d4890d06f74f9708-5500026-images-thumbs&n=13' alt='' />
  </div>
  <Button onClick={signIn}>Sign in</Button>
  </div>;
}

export default Login;
