import * as yup from 'yup';

export const registrationSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  surname: yup.string().required('Required!'),
  password: yup.string().required('Required!'),
  email: yup.string().email('Enter a valid email').required('Required!'),
  telephone: yup.string().required('Required!'),
});
