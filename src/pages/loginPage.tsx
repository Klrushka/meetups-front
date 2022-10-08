import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ILoginCredentials } from '../interfaces/loginCredentials';
import '../styles/form.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@leecheuk/react-google-login';

const loginUser = async (credentials: ILoginCredentials) => {
  const token = await window.fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  return token;
};

const googleLoginUser = async (res: any) => {
  console.log(res);
}

export const LoginPage: React.FC<{ setToken: Function }> = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });

    if (token.status >= 400) {
    } else {
      setToken(await token.json());
      navigate('/meetups');
    }
  };

  return (
    <div className='formWrapper'>
      <div className='imgMeetup'>
        <img src='m.png' alt='123' />
      </div>
      <form onSubmit={handleSubmit} className='Form'>
        <div className='formInner'>
          <span>MEETUPS</span>
          <label>
            <p>Email</p>
            <input
              type='text'
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type='password'
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <div>
            <button type='submit'>Log in</button>
          </div>
          {/* <GoogleLogin
            clientId='89453076842-an4ip0ssqmkq6mbqffq15ttkn38ukgnc.apps.googleusercontent.com'
            buttonText='Login with google'
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
            )}
            onSuccess={googleLoginUser}
            onFailure={googleLoginUser}
          /> */}
          <div>
            <Link className='linkText' to={'/registration'}>Don't have an account yet?</Link>
          </div>
          
        </div>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
