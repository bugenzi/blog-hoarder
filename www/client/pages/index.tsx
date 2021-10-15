import { Box } from '@mui/system'
import { withUrqlClient } from 'next-urql'
import React from 'react'
import NavBar from '../Component/NavBar'
import { useGetBlogQuery } from '../generated/graphql'
import createUrqlClient from '../utils/createUrqlClient'

/* eslint-disable no-undef */
const HomePage: React.FC = () => {
  const [{ data }] = useGetBlogQuery()
  console.log(data)
  return (
    <div>
      <NavBar pageProps={undefined} />
      <Box mt="10%">
        <h1>Hello, world!</h1>
        <a href="/create-post">Wubalubadub dubb</a>

        {data?.getBlogs.blogs
          ? data?.getBlogs.blogs.map((blog, index) => (
              <Box key={index}>{blog.title} </Box>
            ))
          : null}
      </Box>
    </div>
  )
}

// export default HomePage

export default withUrqlClient(createUrqlClient, { ssr: true })(HomePage)
