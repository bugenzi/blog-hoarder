import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button, Link, Stack, Box, CardHeader, Typography } from '@mui/material'
import { useMutation } from 'urql'
import Image from 'next/image'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
import validationSchema from '../utils/validations'
import { REGISTER_MUTATION } from '../utils/graphqlSchema'
import ImgSrc from '../assets/img/register.gif'

function Register() {
  const [, register] = useMutation(REGISTER_MUTATION)
  return (
    <Wrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'column', lg: 'column' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
          padding: '10px',
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h1"
              sx={{ fontSize: '20px', fontWeight: '700' }}
            >
              Register account here
            </Typography>
          }
        />

        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              register(values).then((res) => {
                console.log(res.data.register.errors)
              })
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
                  <Typography>Already have an account</Typography>
                </Link>
              </Stack>
              {/* <Snackbar
                type="success"
                snackbarMessage="It worksss kindaaa"
                open
              /> */}
            </Form>
          )}
        </Formik>
      </Box>

      <Image src={ImgSrc} alt="Picture of the author" />
    </Wrapper>
  )
}

export default Register
