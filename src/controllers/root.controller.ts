import { Controller, GET } from 'fastify-decorators';

@Controller('/root')
export default class RootController {
  @GET('/')
  async getRoot() {
    return { message: 'Welcome to the Fastify API with Controllers!' };
  }
}
