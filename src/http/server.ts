import "dotenv/config"

import fastify from "fastify"

const app = fastify()

const port = Number(process.env.PORT)

app.get('/', () => {
  return 'ok'
})

app.listen({ port: port })
