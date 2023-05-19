import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
const server = fastify()

server.register(memoriesRoutes)

server.register(cors, {
  origin: true,
})

server.listen({ port: 3333 }).then(() => {
  console.log('Server listening on port 3000')
})
