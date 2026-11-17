import { DataSource } from "typeorm";
import { Products } from "./entities/products.entity.js";
import * as dot from 'dotenv'

dot.config()

export const AppDataSource: DataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST?.toString() || 'postgres-db',
    port: parseInt(process.env.SQL_HOST || '5432'),
    username: process.env.DB_USERNAME?.toString() || '',
    password: process.env.DB_PASSWORD?.toString() as string,
    database: process.env.DATABASE?.toString() || '',
    synchronize: false,
    logging: false,
    entities: [Products
    ],
    subscribers: [],
    migrations: [process.env.MIGRATIONS || "src/models/server/migrations/*.ts"],
    migrationsTableName: process.env.MIGRATIONS_TABLE_NAME || "migrations",
    migrationsRun: false,
})