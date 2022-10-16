import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  password: yup.string().required('Required!'),
  email: yup.string().email('Enter a valid email').required('Required!'),
});
