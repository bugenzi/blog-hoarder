/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppBar, Box, Typography, Button, Avatar } from '@mui/material'
import Link from 'next/link'
import CircularProgress from '@mui/material/CircularProgress'
import { withUrqlClient } from 'next-urql'
import { NavLinks, NavSection } from '../assets/style/Navbar'
import { useMeQuery, useLogoutMutation } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'

// import {} from "@mui/material/styles"
const NavBar: React.FC = ({}) => {
  const [{ data, fetching }] = useMeQuery()
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
export default withUrqlClient(createUrqlClient, { ssr: false })(NavBar)
