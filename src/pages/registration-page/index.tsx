import React, { useState } from 'react';
import './index.css';
import { registrateUser } from '../../api/registrate.user.api';
import { Formik } from 'formik';
import * as yup from 'yup';
import { IRegistrationCredentials } from '../../interfaces/registration.credentials.interface';
import { useNavigate } from 'react-router-dom';

export const RegistratePage = () => {
  const [showMailSendedMessage, setShowMailSendedMessage] = useState(false);
  const navigate = useNavigate();

  const validationsSchema = yup.object().shape({
    name: yup.string().required('Required!'),
    surname: yup.string().required('Required!'),
    password: yup.string().required('Required!'),
    email: yup.string().email('Enter a valid email').required('Required!'),
    telephone: yup.string().required('Required!'),
  });

  const submitFormHandler = async (values: IRegistrationCredentials) => {
    const { email, password, surname, name, telephone } = values;
    const token = await registrateUser({
      email,
      password,
      name,
      surname,
      telephone,
    });

    if (token.status >= 400) {
      window.alert(token.status);
    } else {
      setShowMailSendedMessage(true);
      navigate('/login');
    }
  };

  return (
    <div className='formWrapper'>
      <div className='imgMeetup'>
        <img src='m.png' alt='123' />
      </div>

      <div className='Form'>
        <div className='formInner'>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              password: '',
              email: '',
              telephone: '',
            }}
            validateOnBlur
            onSubmit={submitFormHandler}
            validationSchema={validationsSchema}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <div className={`from`}>
                <p>
                  <label htmlFor={`name`}>Name</label>
                  <br />
                  <input
                    className={'input'}
                    type={`text`}
                    name={`name`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </p>
                {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
                <p>
                  <label htmlFor={`surname`}>Surname</label>
                  <br />
                  <input
                    className={'input'}
                    type={`text`}
                    name={`surname`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  />
                </p>
                {touched.surname && errors.surname && <p className={'error'}>{errors.surname}</p>}
                <p>
                  <label htmlFor={`surname`}>Password</label>
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
                  <label htmlFor={`telephone`}>Telephone</label>
                  <br />
                  <input
                    className={'input'}
                    type={`text`}
                    name={`telephone`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telephone}
                  />
                </p>
                {touched.telephone && errors.telephone && <p className={'error'}>{errors.telephone}</p>}

                <button
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>}
                  type={`submit`}
                >
                  Sign Up
                </button>
              </div>
            )}
          </Formik>
          {showMailSendedMessage && <p>Please check your Email and verify it!</p>}
        </div>
      </div>
    </div>
  );
};
