import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button, Link, Stack, Box, CardHeader, Typography } from '@mui/material'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
// import ImgSrc from '../assets/img/register.gif'
import { useLoginMutation } from '../generated/graphql'
import toMapError from '../utils/mapErrors'
import createUrqlClient from '../utils/createUrqlClient'
// import {xs} from "@mui/material"
function Login() {
  const [, login] = useLoginMutation()
  const router = useRouter()
  return (
    <Wrapper
      csx={{
        width: '100%',
        mt: { xl: '5rem' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',

          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
          padding: '30px',
          height: '70%',
          width: { xs: '100%', sm: '100%', md: '600px' },
          mt: 'auto',
          mb: 'auto',
          margin: 'auto',
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h1"
              color="primary"
              sx={{ fontSize: '20px', fontWeight: '700' }}
            >
              Login your account account
            </Typography>
          }
        />

        <Formik
          initialValues={{
            usernameOrEmail: '',
            password: '',
          }}
          onSubmit={async (values, { setErrors, setSubmitting }) => {
            await login({
              usernameOrEmail: values.usernameOrEmail,
              password: values.password,
            }).then((res) => {
              if (res.data?.login.errors) {
                setErrors(toMapError(res.data.login.errors))
              } else if (res.data?.login.user) {
                router.push('/')
              }
            })
            // you have to clean up
            setSubmitting(false)
          }}
        >
          {({ errors, isSubmitting }) => (
            <Form>
              <InputField
                name="usernameOrEmail"
                label="usernameOrEmail"
                errorMessage={errors.usernameOrEmail}
              />
              <InputField
                name="password"
                type="password"
                label="Password"
                errorMessage={errors.password}
              />

              <Stack spacing={2}>
                {isSubmitting ? (
                  <Button disabled type="submit">
                    Submiting......
                  </Button>
                ) : (
                  <Button variant="contained" color="error" type="submit">
                    Login
                  </Button>
                )}
                <Link margin="normal" align="center" href="/register">
                  <Typography>Dont hava an account</Typography>
                </Link>
                <Link margin="normal" align="center" href="/forgot-password">
                  <Typography>Forgot my password</Typography>
                </Link>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Login)
