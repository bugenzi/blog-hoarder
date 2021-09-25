/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from 'react'
import { TextField } from '@mui/material'
import { useField, FormikErrors } from 'formik'

type InputFieldType = InputHTMLAttributes<HTMLInputElement> & {
  label: String
  name: String
} & FormikErrors<{
    errorMessage: string
  }>

const InputField: React.FC<InputFieldType> = ({
  label,
  errorMessage,
  ...props
}) => {
  const [field, { error }] = useField(props)
  return (
    <>
      <TextField
        margin="normal"
        {...field}
        fullWidth
        id={field.name}
        name={field.name}
        label={label}
        error={!!error}
        helperText={errorMessage}
      />
    </>
  )
}

export default InputField
