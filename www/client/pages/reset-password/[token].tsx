import { NextPage } from 'next'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Formik } from 'formik'
import { Button, Link, Stack, Typography } from '@mui/material'
import { withUrqlClient } from 'next-urql'
import Wrapper from '../../Component/Wrapper'
import InputField from '../../Component/InputField'
import { useChangePasswordMutation } from '../../generated/graphql'
import createUrqlClient from '../../utils/createUrqlClient'
import toMapError from '../../utils/mapErrors'

const ChangePassword: NextPage = () => {
  const router = useRouter()
  const [, changePassword] = useChangePasswordMutation()
  const [error, setError] = useState('')

  //   const =router.query
  const token = router.query.token as string

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
          newPassword: '',
        }}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          await changePassword({
            token,
            newPassword: values.newPassword,
          }).then((res) => {
            if (res.data?.changePassword.errors) {
              const errors = toMapError(res.data.changePassword.errors)
              if ('token' in errors) {
                setError(errors.token)
              } else {
                setErrors(errors)
              }
            } else if (res.data?.changePassword.user) {
              router.push('/')
            }
          })
          // you have to clean up
          setSubmitting(false)
        }}
      >
        {({ errors }) => (
          <Form>
            <Typography color="primary.main" variant="h4">
              Write you new password
            </Typography>
            <Typography mt="5%" color="secondary.main" variant="body1">
              The password will be change the momment you press `
            </Typography>
            <InputField
              name="newPassword"
              label="newPassword"
              errorMessage={errors.newPassword}
              type="password"
            />

            <Stack spacing={2}>
              <Button variant="contained" color="error" type="submit">
                Send
              </Button>
              {error ? (
                <Link margin="normal" align="center" href="/forgot-password">
                  <Typography color="error">
                    Session has expired, request a new token
                  </Typography>
                </Link>
              ) : null}
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

//  ChangePassword.getInitialProps({query}){

//   token: query.token as string
// }

export default withUrqlClient(createUrqlClient, { ssr: true })(ChangePassword)
