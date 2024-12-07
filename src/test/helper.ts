'use strict'

// This file contains code that we reuse
// between our tests.

import { build as buildApplication } from 'fastify-cli/helper'
import path from 'node:path'
import { FastifyInstance } from 'fastify'
import { TestContext } from 'node:test'

const AppPath = path.join(__dirname, '..', 'app.ts')

// Fill in this config with all the configurations
// needed for testing the application
function config (): Record<string, unknown> {
  return {}
}

// automatically build and tear down our instance
async function build (t: TestContext): Promise<FastifyInstance> {
  // you can set all the options supported by the fastify CLI command
  const argv = [AppPath]

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  const app = await buildApplication(argv, config())

  // close the app after we are done
  t.after(() => app.close())

  return app
}

export {
  config,
  build
}
