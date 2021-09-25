import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import * as yup from 'yup'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'

// interface registerProps {}
const validationSchema = yup.object({
  username: yup.string().required('Username is required').min(3).max(10),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

function register() {
  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values)
        }}
      >
        {({ errors }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              errorMessage={errors.username}
            />
            <InputField
              name="password"
              label="Password"
              errorMessage={errors.password}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default register
