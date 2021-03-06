import * as React from 'react'
import { Formik, Form } from 'formik'
import {
  Avatar,
  Box,
  Button,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { useRouter } from 'next/router'
import PersonIcon from '@mui/icons-material/Person'
import PasswordIcon from '@mui/icons-material/Password'
import { withUrqlClient } from 'next-urql'
import Wrapper from '../Component/Wrapper'
import InputField from '../Component/InputField'
import { registerValidation } from '../utils/validations'
import { useRegisterMutation } from '../generated/graphql'
import toMapError from '../utils/mapErrors'
import createUrqlClient from '../utils/createUrqlClient'

function Register() {
  const router = useRouter()
  const [, register] = useRegisterMutation()
  return (
    <Wrapper
      csx={{ width: { xs: '100%', sm: '100%', md: '600px' }, mt: '5rem' }}
    >
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        validationSchema={registerValidation}
        onSubmit={async (values, { setErrors, setSubmitting }) => {
          await register({ registerOptions: values }).then((res) => {
            if (res.data?.register.errors) {
              setErrors(toMapError(res.data.register.errors))
            } else if (res.data?.register.user) {
              setSubmitting(false)
              router.push('/')
            }
          })
        }}
      >
        {({ errors, isValid }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'column', lg: 'column' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                bgcolor: 'background.paper',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                height: '50%',
                mt: 'auto',
                mb: 'auto',
                padding: '30px',
              }}
            >
              <Typography
                variant="h5"
                color="primary"
                textAlign="left"
                fontWeight="800"
              >
                Registration page
              </Typography>
              <Typography color="primary">
                To register you need to have :
              </Typography>
              <List sx={{ width: '100%' }}>
                <ListItem sx={{ minWidth: '100%' }}>
                  <ListItemAvatar>
                    <Avatar
                      sx={
                        isValid
                          ? { bgcolor: 'success.main' }
                          : { bgcolor: 'error.main' }
                      }
                    >
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      errors.username ? (
                        <Typography>{errors.username}</Typography>
                      ) : (
                        <Typography>A uniqe username</Typography>
                      )
                    }
                  />
                </ListItem>
                <ListItem sx={{ minWidth: '100%' }}>
                  <ListItemAvatar>
                    <Avatar
                      sx={
                        isValid
                          ? { bgcolor: 'success.main' }
                          : { bgcolor: 'error.main' }
                      }
                    >
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      errors.email ? (
                        <Typography>{errors.email}</Typography>
                      ) : (
                        <Typography>A uniqe email</Typography>
                      )
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={
                        isValid
                          ? { bgcolor: 'green' }
                          : { bgcolor: 'error.main' }
                      }
                    >
                      <PasswordIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      errors.password ? (
                        <Typography>{errors.password}</Typography>
                      ) : (
                        <Typography>A strong passowrd</Typography>
                      )
                    }
                  />
                </ListItem>
              </List>
            </Box>
            <InputField
              name="email"
              label="Email"
              // errorMessage={errors.username}
            />
            <InputField
              name="username"
              label="Username"
              // errorMessage={errors.username}
            />

            <InputField
              name="password"
              label="Password"
              type="password"
              // errorMessage={errors.password}
            />

            <Stack spacing={2}>
              {!isValid ? (
                <Button
                  disabled
                  variant="contained"
                  color="error"
                  type="submit"
                >
                  Register
                </Button>
              ) : (
                <Button variant="contained" color="error" type="submit">
                  Register
                </Button>
              )}
              <Link margin="normal" align="center" href="/login">
                <Typography>Have an account ?</Typography>
              </Link>
            </Stack>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(Register)
