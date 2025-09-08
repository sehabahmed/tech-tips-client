"use client";

import TipCard from '@/components/modules/tips/TipCard'
import { useGetAllTipsQuery } from '@/redux/features/tips/tips.api'
import React from 'react'

export default function Tips() {

  const { data: TipsData, isLoading: TipsLoadingData } = useGetAllTipsQuery(undefined);

console.log(TipsData);

  return (
    <div className='min-h-screen w-[90%] mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {
        TipsData?.data?.map((tip: any) => <TipCard key={tip._id} tip={tip} />)
      }
    </div>
  )
}
