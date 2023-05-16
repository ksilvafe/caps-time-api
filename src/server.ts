import fastify from 'fastify'

const server = fastify()

server.listen({ port: 3333 }).then(() => {
  console.log('Server listening on port 3000')
})
