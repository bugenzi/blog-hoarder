import { MiddlewareFn } from 'type-graphql'
import { MyContext } from '../../types'

const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error('Unauthorized acceses ')
  }
  return next()
}

export default isAuth
