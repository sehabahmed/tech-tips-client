"use client";

import TipDetailPage from '@/components/modules/tips/TipDetail'
import { useParams } from 'next/navigation';

const TipDetails = () => {
    const params = useParams();
const id = params.tipsId as string | undefined;
    console.log(id);

  return (
    <div>
      <TipDetailPage id={id}/>
    </div>
  )
}

export default TipDetails
