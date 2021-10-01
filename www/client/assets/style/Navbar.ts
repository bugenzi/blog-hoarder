import { SxProps } from '@mui/system'

const NavLinks: SxProps = {
  fontSize: { xs: '18px', sm: '20px', md: '22px' },
  fontWeight: '800',
}
const NavSection: SxProps = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  maxWidth: '300px',
  width: '100%',
  textDecoration: 'none',
  color: 'error.main',
  cursor: 'pointer',
  alignSelf: 'flex-end',
  alignItems: 'center',
}

export { NavLinks, NavSection }
