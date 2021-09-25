import * as yup from 'yup'

const validationSchema = yup.object({
  username: yup.string().required('Username is required').min(3).max(10),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})
export default validationSchema
