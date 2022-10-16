import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
// import { loginUser } from '@api';
import { ILoginCredentials } from '@interfaces';
import { loginUser } from '@mock/backend';
import { FormWrapper, ImgWrapper, Form, FormInner, Input, Error, Label, Button } from './style';

export const LoginPage: React.FC<{
  setToken: (token: { token: string }) => void;
}> = ({ setToken }) => {
  const navigate = useNavigate();
  const validationsSchema = yup.object().shape({
    password: yup.string().required('Required!'),
    email: yup.string().email('Enter a valid email').required('Required!'),
  });

  const submitFormHandler = async (values: ILoginCredentials) => {
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
  };

  return (
    <FormWrapper className="formWrapper">
      <ImgWrapper className="imgMeetup">
        <img src="m.png" alt="123" />
      </ImgWrapper>
      <Form>
        <Formik
          initialValues={{
            password: '',
            email: '',
          }}
          validateOnBlur
          onSubmit={submitFormHandler}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <FormInner>
              <p>
                <Label htmlFor={`email`}>Email</Label>
                <br />
                <Input
                  type={`email`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </p>
              {touched.email && errors.email && (
                <Error className={'error'}>{errors.email}</Error>
              )}
              <p>
                <Label htmlFor={`secondName`}>Пароль</Label>
                <br />
                <Input
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </p>
              {touched.password && errors.password && (
                <Error className={'error'}>{errors.password}</Error>
              )}
              <Button
                disabled={!isValid || !dirty}
                type={`submit`}
                onClick={
                  handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
                }
              >
                Log in
              </Button>
            </FormInner>
          )}
        </Formik>
      </Form>
    </FormWrapper>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
