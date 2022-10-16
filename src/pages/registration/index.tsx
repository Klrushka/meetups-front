// import { registrateUser } from '@api/registrate.user.api';
import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IRegistrationCredentials } from '@interfaces';
import { registrateUser } from '@mock/backend';
import { Button, EmailCheckText, Error, Form, FormInner, FormWrapper, ImgWrapper, Input, Label } from './style';
import { registrationSchema } from '@validation';
import { themeSwithcher } from '@helpers';
import { ThemePreferenceContext } from 'src/App';

export const RegistratePage = () => {
  const [showMailSendedMessage, setShowMailSendedMessage] = useState(false);
  const navigate = useNavigate();
  const theme = useContext(ThemePreferenceContext);
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
    <FormWrapper>
      <ImgWrapper>
        <img src="m.png" alt="123" />
      </ImgWrapper>

      <Form>
        <FormInner>
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
            validationSchema={registrationSchema}
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
              <Form>
                <p>
                  <Label htmlFor={`name`}>Name</Label>
                  <br />
                  <Input
                    type={`text`}
                    name={`name`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </p>
                {touched.name && errors.name && (
                  <Error className={'error'}>{errors.name}</Error>
                )}
                <p>
                  <Label htmlFor={`surname`}>Surname</Label>
                  <br />
                  <Input
                    type={`text`}
                    name={`surname`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                  />
                </p>
                {touched.surname && errors.surname && (
                  <Error className={'error'}>{errors.surname}</Error>
                )}
                <p>
                  <Label htmlFor={`surname`}>Password</Label>
                  <br />
                  <Input
                    className={'input'}
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

                <p>
                  <Label htmlFor={`email`}>Email</Label>
                  <br />
                  <Input
                    className={'input'}
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
                  <Label htmlFor={`telephone`}>Telephone</Label>
                  <br />
                  <Input
                    type={`text`}
                    name={`telephone`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telephone}
                  />
                </p>
                {touched.telephone && errors.telephone && (
                  <Error className={'error'}>{errors.telephone}</Error>
                )}

                <Button
                  disabled={!isValid || !dirty}
                  onClick={
                    handleSubmit as unknown as React.MouseEventHandler<HTMLButtonElement>
                  }
                  type={`submit`}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <input type={'checkbox'} onClick={themeSwithcher(theme.setTheme)}/>
          {showMailSendedMessage && (
            <EmailCheckText>Please check your Email and verify it!</EmailCheckText>
          )}
        </FormInner>
      </Form>
    </FormWrapper>
  );
};
