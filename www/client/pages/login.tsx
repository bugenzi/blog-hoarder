import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button, Link, Stack, Box, CardHeader, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { withUrqlClient } from 'next-urql'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
import validationSchema from '../utils/validations'
import ImgSrc from '../assets/img/register.gif'
import { useLoginMutation } from '../generated/graphql'
import toMapError from '../utils/mapErrors'
import createUrqlClient from '../utils/createUrqlClient'

function Login() {
  const [, login] = useLoginMutation()
  const router = useRouter()
  return (
    <Wrapper
      csx={{
        bgcolor: 'error.main',
        mt: { xl: '5rem' },
        height: { xs: '100vh', md: '600px' },
        flexDirection: {
          xs: 'column-reverse',
          md: 'row',
          lg: 'row',
          xl: 'row',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
          padding: '30px',
          height: '70%',
          width: '500px',
          mt: 'auto',
          mb: 'auto',
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
            username: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setErrors, setSubmitting }) => {
            login(values).then((res) => {
              console.log(res)
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
                name="username"
                label="Username"
                errorMessage={errors.username}
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
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>

      <Image src={ImgSrc} alt="Picture of the author" />
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Login)
