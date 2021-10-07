import { Button, Stack, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { withUrqlClient } from 'next-urql'
import React from 'react'
import InputField from '../Component/InputField'
import Wrapper from '../Component/Wrapper'
import { useForgotPasswordMutation } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'

const ForgotPassowrd: React.FC = () => {
  const [, forgotPassword] = useForgotPasswordMutation()
  return (
    <Wrapper
      csx={{
        maxWidth: '700px',
        flexDirection: 'column',
        mt: '10%',
      }}
    >
      <Formik
        initialValues={{
          email: '',
        }}
        // validationSchema={validationSchema}
        onSubmit={async (value, { setSubmitting }) => {
          // you have to clean up
          await forgotPassword(value)
          setSubmitting(false)
        }}
      >
        {({ errors }) => (
          <Form>
            <Typography color="primary.main" variant="h4">
              Forgot Password
            </Typography>
            <Typography mt="5%" color="secondary.main" variant="body1">
              The password will be sent to your email if its register
            </Typography>
            <InputField
              name="email"
              label="Email"
              type="email"
              errorMessage={errors.email}
            />

            <Stack spacing={2}>
              <Button variant="contained" color="error" type="submit">
                Login
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(ForgotPassowrd)
