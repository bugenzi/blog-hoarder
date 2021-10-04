/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string
      PWD: string
      DB_URL: string
      CLIENT_URL: string
      PORT: string
    }
  }
}
export {}
