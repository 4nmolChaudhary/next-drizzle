import { sql, Table } from 'drizzle-orm'

import { db, DB } from '@/db'

import * as schema from '@/db/schemas'
import * as seeds from '@/db/seeds'

const resetTable = async (db: DB, table: Table) => db.execute(sql`truncate table ${table} restart identity cascade`)

const main = async () => {
  console.log('Seeding started....')
  const tables = [schema.users]
  for (const table of tables) {
    await resetTable(db, table)
  }
  await seeds.users(db)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    console.log('Seeding done!')
    process.exit(0)
  })
