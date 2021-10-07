import * as yup from 'yup'

export const loginValdiation = yup.object({
  username: yup.string().required('Username is required').min(3).max(10),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export const registerValidation = yup.object({
  email: yup.string().required().email(),
  username: yup.string().required('Username is required').min(3).max(10),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})
