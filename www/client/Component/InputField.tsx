/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { TextField, Theme } from '@mui/material'
import { useField, FormikErrors } from 'formik'
import { SxProps } from '@mui/system/styleFunctionSx'

type InputFieldType =
  | InputHTMLAttributes<HTMLInputElement> &
      (TextareaHTMLAttributes<HTMLTextAreaElement> & {
        label: String
        name: String
        csx?: SxProps<Theme>
        isMultiline?: boolean
      } & FormikErrors<{
          errorMessage: string
        }>)

const InputField: React.FC<InputFieldType> = ({
  label,
  errorMessage,
  type,
  isMultiline,
  csx,
  ...props
}) => {
  const [field, { error }] = useField(props)

  return (
    <>
      <TextField
        sx={{
          ...csx,
        }}
        margin="normal"
        {...field}
        fullWidth
        id={field.name}
        name={field.name}
        label={label}
        type={type}
        error={!!error}
        helperText={errorMessage}
        multiline={!!isMultiline}
        minRows={4}
      />
    </>
  )
}

export default InputField
