import { NextPage } from 'next'
import { Skeleton } from './ui/skeleton'

interface Props {}

const ProperyCardSkeleton: NextPage<Props> = ({}) => {
  return <div className='pb-2 w-[440px] max-md:w-full'>
    <Skeleton className="w-full h-[280px]"></Skeleton>
    <Skeleton className="w-[250px] h-[20px] mt-2"></Skeleton>
    <Skeleton className="w-[200px] h-[20px] mt-2"></Skeleton>
    <div className='flex justify-between w-full mt-2'>
      <Skeleton className="w-[100px] h-[30px] shrink"></Skeleton>
      <Skeleton className='w-[100px] h-[30px] shrink'></Skeleton>
      <Skeleton className='w-[100px] h-[30px] shrink'></Skeleton>
    </div>
  </div>
}

export default ProperyCardSkeleton