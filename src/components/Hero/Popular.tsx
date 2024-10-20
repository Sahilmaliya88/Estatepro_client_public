import { NextPage } from 'next'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { Suspense } from 'react';
import PopularResi from './PopularResi';
import ProperyCardSkeleton from '../ProperyCard-Skeleton';
import PopularSkeleton from './PopularSkeleton';

interface Props {}
const Popular: NextPage<Props> = ({}) => {
  return <div className="padding-d">
        <div className='flex items-center justify-between'>
            <h1 className="popularhead">Popular Resident</h1>
            <Link href={''} className="flex  w-[150px] max-md:text-[14px] items-center gap-1">Explore All <FaArrowRightLong id='rightarrow' color="black"></FaArrowRightLong></Link>
        </div>
        <Suspense fallback={<PopularSkeleton></PopularSkeleton>}>
            <PopularResi></PopularResi>
        </Suspense>
  </div>
}

export default Popular