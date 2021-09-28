import { FieldError } from '../generated/graphql'

const toMapError = (erorrs: FieldError[]) => {
  const mappedErros: Record<string, string> = {}
  erorrs.forEach(({ field, message }) => {
    mappedErros[field] = message
  })
  return mappedErros
}
export default toMapError
