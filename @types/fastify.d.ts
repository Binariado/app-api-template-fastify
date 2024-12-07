import 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    someSupport(): string;
  }
}
