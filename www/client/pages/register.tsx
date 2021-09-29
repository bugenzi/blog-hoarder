import * as React from 'react'
import { Formik, Form } from 'formik'
import { Button, Link, Stack, Box, CardHeader, Typography } from '@mui/material'
// import { useMutation } from 'urql'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
import validationSchema from '../utils/validations'
// import { REGISTER_MUTATION } from '../utils/graphqlSchema'
import ImgSrc from '../assets/img/register.gif'
import { useRegistrationMutation } from '../generated/graphql'
import toMapError from '../utils/mapErrors'

function Register() {
  const [, register] = useRegistrationMutation()
  const router = useRouter()
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
          onSubmit={async (values, { setErrors, setSubmitting }) => {
            setTimeout(() => {
              register(values).then((res) => {
                if (res.data?.register.errors) {
                  setErrors(toMapError(res.data.register.errors))
                } else if (res.data?.register.user) {
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
                  <Typography>Already have an account</Typography>
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

export default Register
