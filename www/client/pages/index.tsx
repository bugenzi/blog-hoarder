import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Link,
  CardHeader,
} from '@mui/material'
import { Box } from '@mui/system'
import { withUrqlClient } from 'next-urql'
import React, { useState } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import Layout from '../Component/Layout'
import { useGetBlogsQuery } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'
import CustomChips from '../Component/CustomChips'

const HomePage: React.FC = () => {
  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as null | string,
  })
  const [{ data }] = useGetBlogsQuery({
    variables,
  })

  return (
    <Layout>
      <Box mt="10%">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            m: '10% 0 ',
          }}
        >
          <Typography variant="h3" component="h3">
            Blooarder
          </Typography>
          <Link
            sx={{ textDecoration: 'none' }}
            bgcolor="primary.main"
            href="/create-post"
          >
            <Button color="error"> Write a post</Button>
          </Link>
        </Box>
        <Stack
          spacing={2}
          sx={{
            alignItems: 'center',
          }}
        >
          {data?.getBlogs.blogs
            ? data?.getBlogs.blogs.map((blog) => (
                <Card sx={{ maxWidth: 745, width: '100%' }} key={blog.id}>
                  {blog.imageUrl ? (
                    <CardMedia
                      component="img"
                      height="140"
                      image={blog.imageUrl ? blog.imageUrl : blog.link}
                      alt="green iguana"
                    />
                  ) : null}
                  <CardHeader color="primary" title={blog.title} />
                  <CardContent>
                    <Typography variant="body1" color="secondary.main">
                      {blog.text}
                    </Typography>
                    <Link
                      mt="30%"
                      href={blog.link}
                      variant="body2"
                      color="text.secondary"
                    >
                      {blog.link}
                    </Link>
                  </CardContent>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <CustomChips
                      csx={{
                        padding: '30px',
                        display: 'flex',
                        width: '47%',
                        justifyContent: 'space-between',
                      }}
                      data={blog.blogType}
                    />
                    <Box p="30px">
                      <Box color="error">{blog.points}</Box>
                      <ThumbUpOutlinedIcon fontSize="large" color="error" />
                    </Box>
                  </Box>
                </Card>
              ))
            : null}
          {data ? (
            <Button
              sx={{ m: '30px' }}
              variant="outlined"
              onClick={() =>
                setVariables({
                  limit: variables.limit,
                  cursor:
                    data.getBlogs.blogs[data.getBlogs.blogs.length - 1]
                      .createdAt,
                })
              }
            >
              Next page{' '}
            </Button>
          ) : null}
        </Stack>
      </Box>
    </Layout>
  )
}

// export default HomePage

export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage)
