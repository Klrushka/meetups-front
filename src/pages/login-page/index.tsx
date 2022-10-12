import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Formik } from 'formik';
import * as yup from 'yup';
import { loginUser } from '../../api/login.user.api';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC<{ setToken: Function }> = ({ setToken }) => {
  const navigate = useNavigate();
  const validationsSchema = yup.object().shape({
    password: yup.string().required('Required!'),
    email: yup.string().email('Enter a valid email').required('Required!'),
  });

  return (
    <div className='formWrapper'>
      <div className='imgMeetup'>
        <img src='m.png' alt='123' />
      </div>
      <div className='Form'>
        <Formik
          initialValues={{
            password: '',
            email: '',
          }}
          validateOnBlur
          onSubmit={async (values) => {
            console.log(values);
            const { email, password } = values;
            const token = await loginUser({
              email,
              password,
            });

            if (token.status >= 400) {
              alert();
            } else {
              setToken(await token.json());
              navigate('/meetups');
            }
          }}
          validationSchema={validationsSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
            <div className='formInner'>
              <p>
                <label htmlFor={`email`}>Email</label>
                <br />
                <input
                  className={'input'}
                  type={`email`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </p>
              {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
              <p>
                <label htmlFor={`secondName`}>Пароль</label>
                <br />
                <input
                  className={'input'}
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </p>
              {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
              <button
                disabled={!isValid || !dirty}
                type={`submit`}
                onClick={handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>}
              >
                Log in
              </button>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
