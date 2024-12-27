import { DB } from '@/db'
import { users } from '@/db/schemas'

const seedUsers = () => {
  const data = [{ name: 'John Doe', age: 25, email: 'john@email.com' }]
  return data
}

export const seed = async (db: DB) => await db.insert(users).values(seedUsers())
