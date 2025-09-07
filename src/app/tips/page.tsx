import TipCard from '@/components/modules/tips/TipCard'
import React from 'react'

export default function Tips() {
  return (
    <div className='min-h-screen w-[90%] mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      <TipCard />
      <TipCard />
      <TipCard />
      <TipCard />
      <TipCard />
    </div>
  )
}
