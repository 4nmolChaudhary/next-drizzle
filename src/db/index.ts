import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import * as schema from '@/db/schemas'

const pool = new Pool({ connectionString: process.env.DATABASE_URL! })

export const db = drizzle(pool, { schema })
export type DB = typeof db
console.log(db)
