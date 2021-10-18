/* eslint-disable react/jsx-props-no-spreading */
import { AppBar, Avatar, Box, Button, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { withUrqlClient } from 'next-urql'
import Link from 'next/link'
import React from 'react'
import { NavLinks, NavSection } from '../assets/style/Navbar'
import { useLogoutMutation, useMeQuery } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'
import isServer from '../utils/isServer'

// import {} from "@mui/material/styles"
const NavBar: React.FC = () => {
  const [{ data, fetching }] = useMeQuery({ pause: isServer() })
  const [, logout] = useLogoutMutation()

  let body
  if (fetching) {
    body = <CircularProgress />
  } else if (!data?.me) {
    body = (
      <>
        <Link href="login">
          <Typography
            sx={{
              ...NavLinks,
            }}
          >
            Login
          </Typography>
        </Link>
        <Link href="register">
          <Typography
            sx={{
              ...NavLinks,
            }}
          >
            Register
          </Typography>
        </Link>{' '}
      </>
    )
  } else {
    body = (
      <>
        <Button onClick={() => logout()} variant="outlined" color="error">
          Logout
        </Button>
        <Typography>{data.me.username} </Typography>{' '}
        <Avatar>{data.me.username[0].toUpperCase()}</Avatar>
      </>
    )
  }
  return (
    <AppBar sx={{ p: '15px' }}>
      <Box sx={{ ...NavSection }}>{body}</Box>
    </AppBar>
  )
}
export default withUrqlClient(createUrqlClient, { ssr: true })(NavBar)
