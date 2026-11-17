import fastify from "fastify";
import postgres from '@fastify/postgres'
import cors from '@fastify/cors'
import { AppDataSource } from "./models/dataSource.js";
import dotenv from 'dotenv'

dotenv.config()

export const config = fastify({
    logger: false //Referencia al sistema de registro, mensajes de . Colocar en false
})
const port = process.env.PORT || '5000'
const database = process.env['DATABASE_URL'] || ''

//Postgresss register
config.register(postgres, {
    connectionString: database
})

//Cors y rutas
config.register(cors, {})

//Connect DATABASE
async function databaseConnect() {
    try {
        await AppDataSource.initialize()
    } catch (error) {
        console.error(error)
    }
}

//Escucha del servidor
config.listen({ port: Number(port), host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(0)
    }
    databaseConnect()
    console.info(`API Connected.`)
})