import { Button, CardHeader, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Form, Formik } from 'formik'
import { withUrqlClient } from 'next-urql'
import React from 'react'
import { useRouter } from 'next/router'
import InputField from '../Component/InputField'
import { useCreateBlogsMutation } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'
import Select from '../Component/Select'
import mapBlogType from '../utils/mapBlogType'
import toMapError from '../utils/mapErrors'

import Layout from '../Component/Layout'
import isAuth from '../utils/isAuth'

const CreatePost: React.FC = () => {
  isAuth()
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
    <Layout
      csx={{
        width: '100%',
        mt: { xl: '10rem', xs: '4rem' },
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
            blogType: [],
            imageUrl: '',
          }}
          onSubmit={async (values, { setSubmitting, setErrors }) => {
            // still in development
            const mappedBlogs = mapBlogType(values.blogType)

            await createBlog({
              input: {
                title: values.title,
                link: values.link,
                blogType: mappedBlogs,
                text: values.text,
                imageUrl: values.imageUrl,
              },
            }).then((res) => {
              if (res.data?.postBlog.errors) {
                setErrors(toMapError(res.data?.postBlog.errors))
              }
              if (res.data?.postBlog.blog?.id) {
                router.push('/')
              }
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
                label="Link"
                type="text"
                errorMessage={errors.link}
              />
              <InputField
                name="title"
                type="title"
                label="Title"
                errorMessage={errors.title}
              />
              <InputField
                isMultiline
                name="text"
                type="text"
                label="Write short introduction about the blog "
                errorMessage={errors.text}
              />
              <Select
                value={values.blogType}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.blogType}
                touched={touched.blogType}
                options={options}
              />
              <Typography mt={10} color="primary">
                This part is optional but is perferd
              </Typography>
              <InputField
                csx={{ zIndex: 0 }}
                name="imageUrl"
                type="imageUrl"
                label="Url of a image you would like to see "
                errorMessage={errors.text}
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
    </Layout>
  )
}

export default withUrqlClient(createUrqlClient)(CreatePost)
