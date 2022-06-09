import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('Your name is required.'),
  email: yup.string().email().required('Your email is required.'),
  description: yup
    .string()
    .min(10, 'Describe at least 10 characters.')
    .required(),
});
