import Fastify from 'fastify'
import app from './app'
import dotenv from 'dotenv'
dotenv.config()

const fastify = Fastify({
    logger: process.env.NODE_ENV === 'development'
})

const start = async () => {
    try {
        await fastify.register(app)
        const port = process.env.APP_PORT || 3000
        const host = process.env.APP_URL || '0.0.0.0'
        await fastify.listen({ port: Number(port), host })
        console.table({
                'Server listening at': `http://${host}:${port}`,
                'Swagger UI': `http://${host}:${port}/documentation`
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()