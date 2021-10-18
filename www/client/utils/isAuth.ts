import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMeQuery } from '../generated/graphql'

const isAuth = () => {
  const [{ data, fetching }] = useMeQuery()
  const router = useRouter()
  useEffect(() => {
    console.log(fetching, data?.me)
    if (!fetching && !data?.me) {
      router.replace(`/login?next=${router.pathname}`)
    }
  }, [data, router, fetching])
}
export default isAuth
