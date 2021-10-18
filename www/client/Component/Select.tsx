/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Stack } from '@mui/material'
import React, { ReactElement } from 'react'
import Select from 'react-select'

type blurType = (
  field: string,
  isTouched?: boolean | undefined,
  shouldValidate?: boolean | undefined
) => void

interface Props {
  onChange: Function
  onBlur: blurType
  value: never[]
  error: any
  touched: never[] | undefined
  options: []
}

export default function CustomSelect({
  onChange,
  onBlur,
  value,
  error,
  touched,
  options,
}: Props): ReactElement {
  const handleChange = (val: any) => {
    onChange('blogType', val)
  }

  const handleBlur = () => {
    onBlur('blogType', true)
  }
  return (
    <Stack mb={5} spacing={2}>
      <label htmlFor="color">Topics (select at least 3) </label>
      <Select
        menuPosition="fixed"
        id="color"
        options={options}
        isMulti
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />

      {!!error && touched && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{error}</div>
      )}
    </Stack>
  )
}
