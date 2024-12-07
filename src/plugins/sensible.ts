import fp from 'fastify-plugin'
import sensiblefrom from '@fastify/sensible';

/**
 * Este plugin agrega utilidades para manejar errores HTTP.
 *
 * @see https://github.com/fastify/fastify-sensible
 */
const httpErrorPlugin = fp(async (fastify) => {
  fastify.register(sensiblefrom, {
    sharedSchemaId: "HttpError",
  });
});

export default httpErrorPlugin;
