"use client";

import TipCard from '@/components/modules/tips/TipCard'
import { useGetAllTipsQuery } from '@/redux/features/tips/tips.api'
import { TTip } from '@/types';
import React from 'react'

export default function Tips() {

  const { data: TipsData, isLoading: TipsLoadingData } = useGetAllTipsQuery(undefined);

  if(TipsLoadingData){
    <div className='flex min-h-screen text-3xl text-center font-semibold'>Loading...</div>
  }

  return (
    <div className='min-h-screen w-[90%] mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
      {
        TipsData?.data?.map((tip: TTip) => <TipCard key={tip._id} tip={tip} />)
      }
    </div>
  )
}
