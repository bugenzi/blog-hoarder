import { Button, CardHeader, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Form, Formik } from 'formik'
import { withUrqlClient } from 'next-urql'
import React from 'react'
import { useRouter } from 'next/router'
import InputField from '../Component/InputField'
import Wrapper from '../Component/Wrapper'
import { useCreateBlogsMutation } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'
import Select from '../Component/Select'
import mapBlogType from '../utils/mapBlogType'

const CreatePost: React.FC = () => {
  const [, createBlog] = useCreateBlogsMutation()
  const router = useRouter()
  const options = [
    { value: 'Development', label: 'Development' },
    { value: 'Health and life tips', label: 'Health and life tips' },
    { value: 'DIY', label: 'DIY' },
    { value: 'Mobile Development', label: 'Mobile Development' },
    { value: 'Fitness', label: 'Fitness' },
    { value: 'Food', label: 'Food' },
  ]
  return (
    <Wrapper
      csx={{
        width: '100%',
        mt: { xl: '5rem' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',

          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
          padding: '30px',
          height: '70%',
          width: { xs: '100%', sm: '100%', md: '600px' },
          mt: 'auto',
          mb: 'auto',
          margin: 'auto',
        }}
      >
        <CardHeader
          title={
            <Typography
              variant="h1"
              color="primary"
              sx={{ fontSize: '20px', fontWeight: '700' }}
            >
              Market your new blog by posting it on BlogHoarder
            </Typography>
          }
        />

        <Formik
          initialValues={{
            link: '',
            title: '',
            text: '',
            BlogType: [],
          }}
          onSubmit={async (values, { setSubmitting }) => {
            // still in development
            const mappedBlogs = mapBlogType(values.BlogType)

            await createBlog({
              options: {
                title: values.title,
                link: values.link,
                BlogType: mappedBlogs,
                text: values.text,
              },
            }).then((res) => {
              if (res.data?.postBlog.blog) {
                router.push('/')
              }
              console.log(res)
            })
            // you have to clean up
            setSubmitting(false)
          }}
        >
          {({
            errors,
            isSubmitting,
            values,
            setFieldValue,
            setFieldTouched,
            touched,
          }) => (
            <Form>
              <InputField
                name="link"
                label="link"
                type="text"
                errorMessage={errors.link}
              />
              <InputField
                name="title"
                type="title"
                label="title"
                errorMessage={errors.title}
              />
              <InputField
                isMultiline
                name="text"
                type="text"
                label="text"
                errorMessage={errors.text}
              />
              <Select
                value={values.BlogType}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.BlogType}
                touched={touched.BlogType}
                options={options}
              />
              <Stack spacing={2}>
                {isSubmitting ? (
                  <Button disabled type="submit">
                    Submiting......
                  </Button>
                ) : (
                  <Button variant="contained" color="error" type="submit">
                    Create
                  </Button>
                )}
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Wrapper>
  )
}

export default withUrqlClient(createUrqlClient, { ssr: true })(CreatePost)
