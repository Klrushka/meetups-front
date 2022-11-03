// import { registrateUser } from '@api/registrate.user.api';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrateUser } from '@api';
import { ThemeSwitcher } from '@components';
import { IRegistrationCredentials } from '@interfaces';
// import { registrateUser } from '@mock/backend';
import { registrationSchema } from '@validation';
import registrationImg from '../../assets/images/m.png';
import {
  Button,
  EmailCheckText,
  Error,
  Form,
  FormInner,
  FormWrapper,
  ImgWrapper,
  Input,
  Label,
  LinkWrapper,
} from './style';

export const RegistratePage = () => {
  const navigate = useNavigate();
  const [isShowConfirmEmaiMessage, setIsShowConfirmEmailMessage] = useState(false);
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
      setIsShowConfirmEmailMessage(true);
    }
  };

  return (
    <FormWrapper>
      <ImgWrapper>
        <img src={registrationImg} alt="123" />
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
          <ThemeSwitcher />
          <LinkWrapper to={'/login'}>Sign in</LinkWrapper>
      
        </FormInner>
        {isShowConfirmEmaiMessage && <EmailCheckText> Please check your email and confirm it</EmailCheckText>}
      </Form>
    </FormWrapper>
  );
};
