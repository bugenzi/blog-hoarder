import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button, Link, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
import validationSchema from '../utils/validations'
import { useLoginMutation } from '../generated/graphql'
import toMapError from '../utils/mapErrors'

function Login() {
  const router = useRouter()
  const [, login] = useLoginMutation()
  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          setTimeout(() => {
            login(values).then((res) => {
              if (res.data?.login.errors) {
                setErrors(toMapError(res.data.login.errors))
              } else if (res.data?.login.user) {
                router.push('/')
              }
            })
            // you have to clean up
            setSubmitting(false)
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

            <Stack spacing={2}>
              {isSubmitting ? (
                <Button disabled type="submit">
                  Submiting......
                </Button>
              ) : (
                <Button variant="outlined" color="primary" type="submit">
                  Register
                </Button>
              )}
              <Link margin="normal" align="center" href="/login">
                <Typography>Dont have account, please register</Typography>
              </Link>
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default Login
