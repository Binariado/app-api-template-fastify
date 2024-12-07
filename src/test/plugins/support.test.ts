'use strict'

import { test } from 'node:test'
import assert from 'node:assert'
import Fastify, { FastifyInstance } from 'fastify'
import Support from '../../plugins/support'

test('support works standalone', async () => {
  const fastify: FastifyInstance = Fastify()
  fastify.register(Support)

  await fastify.ready()
  assert.equal(fastify.someSupport(), 'hugs')
})

// You can also use plugin with opts in fastify v2
//
// test('support works standalone', (t) => {
//   t.plan(2)
//   const fastify: FastifyInstance = Fastify()
//   fastify.register(Support)

//   fastify.ready((err) => {
//     assert.ifError(err)
//     assert.equal(fastify.someSupport(), 'hugs')
//   })
// })
