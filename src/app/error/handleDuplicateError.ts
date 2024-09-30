/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources } from "../interface/error.interface"

const handleDuplicateError = (err: any) => {
  const pattern = /dup key: { id: "(.*?)" }/
  const statusCode = 409
  const message = 'Duplicate error'
  const errorSources: TErrorSources = [
    {
      path: err.errmsg.match(pattern)[1],
      message: err?.errmsg,
    },
  ]
  return {
    statusCode,
    message,
    errorSources,
  }
}

export default handleDuplicateError
