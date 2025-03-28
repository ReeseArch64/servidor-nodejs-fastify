import fastify from "fastify";

const app = fastify()

app.get('/', () => {
  return 'ok'
})

app.listen({ port: 3000 })
