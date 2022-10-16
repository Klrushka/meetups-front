import { Formik } from 'formik';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginUser } from '@api';
import { ILoginCredentials } from '@interfaces';
import { loginUser } from '@mock/backend';
import { FormWrapper, ImgWrapper, Form, FormInner, Input, Error, Label, Button } from './style';
import { loginSchema } from '@validation';
import { themeSwithcher } from '@helpers';
import { ThemePreferenceContext } from 'src/App';

export const LoginPage: React.FC<{
  setToken: (token: { token: string }) => void;
}> = ({ setToken }) => {
  const navigate = useNavigate();
  const theme = useContext(ThemePreferenceContext);

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
          validationSchema={loginSchema}
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
              <input type={'checkbox'} onClick={themeSwithcher(theme.setTheme)}/>
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
