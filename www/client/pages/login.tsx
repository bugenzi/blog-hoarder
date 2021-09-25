import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button } from '@mui/material'
import { useMutation } from 'urql'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
import validationSchema from '../utils/validations'

const REGISTER_MUTATION = `
mutation Mutation($username: String!,$password:String!) {
  register(options:{username:$username, password :$password}) {
    user {
      username,createdAt
    }
    errors {
      field,message
    }
  }
}
`
function Login() {
  const [, register] = useMutation(REGISTER_MUTATION)
  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            register(values)
            alert(JSON.stringify(values))
            // you have to clean up
            actions.setSubmitting(false)
          }, 500)
        }}
      >
        {({ errors, isSubmitting }) => (
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

            {isSubmitting ? (
              <Button disabled type="submit">
                Submiting......
              </Button>
            ) : (
              <Button variant="outlined" color="primary" type="submit">
                Submit
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Login
