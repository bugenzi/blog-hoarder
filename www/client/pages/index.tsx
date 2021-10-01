import { Box } from '@mui/system'
import React from 'react'
import NavBar from '../Component/NavBar'

/* eslint-disable no-undef */
const HomePage: React.FC = () => (
  <div>
    <NavBar />
    <Box mt="10%">
      <h1>Hello, world!</h1>
      <a href="/register">Wubalubadub dubb</a>
    </Box>
  </div>
)

export default HomePage
