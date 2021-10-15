const mapBlogType = (
  values: {
    value: string
    label: string
  }[]
) => {
  const mappedBlog = values.map((data) => data.value)
  return mappedBlog
}
export default mapBlogType
