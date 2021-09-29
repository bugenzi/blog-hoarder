/* eslint-disable react/require-default-props */
import * as React from 'react'
import { Container } from '@mui/material'
import { SxProps } from '@mui/system'

interface IWrapperProps {
  csx?: SxProps
  children: React.ReactChild | React.ReactChild[]
}
function Wrapper({ children, csx }: IWrapperProps) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column-reverse',
          md: 'column-reverse',
        },
        justifyContent: 'space-between',

        bgcolor: 'background.default',
        ...csx,
      }}
    >
      {children}
    </Container>
  )
}
export default Wrapper
