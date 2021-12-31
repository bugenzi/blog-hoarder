/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import Chip from '@mui/material/Chip'
import { Box, SxProps, Theme } from '@mui/system'
import React, { ReactElement } from 'react'

interface Props {
  data: string[]
  csx?: SxProps<Theme>
}

export default function CustomChips({ data, csx }: Props): ReactElement {
  return (
    <Box
      sx={{
        ...csx,
      }}
    >
      {data.map((val, index) => (
        <Chip
          sx={{ bgcolor: 'error.main', color: 'background.default' }}
          key={index}
          label={val}
          variant="outlined"
        />
      ))}
    </Box>
  )
}
