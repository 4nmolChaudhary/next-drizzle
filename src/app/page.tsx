import React from 'react'
import { getUsers } from '@/queries/users'

export default async function Home() {
  const users = await getUsers()
  console.log(users)
  return (
    <main className='relative min-h-screen bg-base overflow-x-hidden'>
      <div className='flex flex-col justify-center py-20 px-5'>
        <div className='h-full lg:w-[786px] w-full text-black/75'>🏗️ Under construction....</div>
        <pre className='text-xs'>{JSON.stringify(users)}</pre>
      </div>
    </main>
  )
}

