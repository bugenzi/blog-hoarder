import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Link,
} from '@mui/material'
import { Box } from '@mui/system'
import { withUrqlClient } from 'next-urql'
import React from 'react'
import Layout from '../Component/Layout'
import { useGetBlogQuery } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'

const HomePage: React.FC = () => {
  const [{ data }] = useGetBlogQuery({ variables: { limit: 20 } })

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
            Blog-hoarder
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
                  <CardMedia
                    component="img"
                    height="140"
                    image={blog.imageUrl ? blog.imageUrl : blog.link}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.text}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              ))
            : null}
        </Stack>
      </Box>
    </Layout>
  )
}

// export default HomePage

export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage)
