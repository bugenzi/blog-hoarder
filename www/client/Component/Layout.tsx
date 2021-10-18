/* eslint-disable react/require-default-props */
import * as React from 'react'
import { SxProps } from '@mui/system'
import Wrapper from './Wrapper'
import NavBar from './NavBar'

interface IWrapperProps {
  csx?: SxProps
  children: React.ReactChild
}
function Layout({ children, csx }: IWrapperProps) {
  return (
    <Wrapper csx={csx}>
      <NavBar pageProps={undefined} />
      {children}
    </Wrapper>
  )
}
export default Layout
