// export default defineEventHandler(async event => {
// 	const runtimeConfig = useRuntimeConfig()
// })

import data from '~/mock-data/home/index.json'

export default defineEventHandler(async () => {
  // const config = useRuntimeConfig()

  try {
    const response = await new Promise(function (resolve, _reject) {
      setTimeout(() => {
        resolve(data)
        // reject(new Error('Сервер не отвечает'))
      }, 100)
    })
    return response
  } catch (error) {
    return error
  }
})
