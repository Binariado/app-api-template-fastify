import { FastifyInstance } from 'fastify';
import { bootstrap } from 'fastify-decorators';

export default async function (fastify: FastifyInstance): Promise<void> {
  await bootstrap(fastify, {
    directory: __dirname + '/../controllers',
    mask: /\.controller\.[jt]s$/, // Load files ending in `.controller.ts` or `.controller.js`
  });
}
