'use strict'

import { test } from 'node:test'
import assert from 'node:assert'
import { FastifyInstance } from 'fastify'
import { build } from '../helper'

test('default root route', async (t) => {
  const app: FastifyInstance = await build(t)

  const res = await app.inject({
    url: '/'
  })

  assert.deepStrictEqual(JSON.parse(res.payload), {"message":"Welcome to the Fastify API with Controllers!"})
})

// inject callback style:
// test('default root route (callback style)', (t) => {
//   t.plan(2)
//   build(t).then(app => {
//     app.inject({
//       url: '/'
//     }, (err, res) => {
//       assert.ifError(err)
//       if (res) {
//         assert.deepStrictEqual(JSON.parse(res.payload), { root: true })
//       } else {
//         throw new Error('Response is undefined')
//       }
//       assert.ok(true)
//     })
//   }).catch(err => {
//     assert.ifError(err)
//     assert.ok(true)
//   })
// })