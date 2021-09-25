import * as React from 'react'
import { Container } from '@mui/material'

export interface IWrapperProps {
  size: 'String'
  children: React.ReactChild
}

export function Wrapper({ children }: IWrapperProps) {
  return (
    <Container color="red" maxWidth="sm">
      {children}
    </Container>
  )
}
