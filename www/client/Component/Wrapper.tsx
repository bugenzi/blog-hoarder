import * as React from 'react'
import { Container } from '@mui/material'

interface IWrapperProps {
  // size: 'String'
  children: React.ReactChild | React.ReactChild[]
}
function Wrapper({ children }: IWrapperProps) {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex' }}>
      {children}
    </Container>
  )
}
export default Wrapper
