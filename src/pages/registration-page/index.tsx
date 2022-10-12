import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { registrateUser } from '../../api/registrate.user.api';

export const RegistratePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [telephone, setTelephone] = useState('');
  const [showMailSendedMessage, setShowMailSendedMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await registrateUser({
      email,
      password,
      name,
      surname,
      telephone,
    });

    if (token.status >= 400) {
    } else {
      setShowMailSendedMessage(true);
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
          <label>
            <p>Name</p>
            <input
              type='text'
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <label>
            <p>Surname</p>
            <input
              type='text'
              onChange={(event) => {
                setSurname(event.target.value);
              }}
            />
          </label>
          <label>
            <p>Telephone</p>
            <input
              type='text'
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
            />
          </label>
          <div>
            <button type='submit'>Sign Up</button>
          </div>
          <div>
            <Link className='linkText' to={'/login'}>Already have an account?</Link>
          </div>
        </div>
        {showMailSendedMessage && <p>Please check your Email and verify it!</p>}
      </form>
    </div>
  );
};
