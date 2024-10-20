import { NextPage } from 'next'
import ProperyCardSkeleton from '../ProperyCard-Skeleton'

interface Props {}

const PopularSkeleton: NextPage<Props> = ({}) => {
    const arr:number[] = [1,2,3]
  return <div className="flex flex-wrap justify-between gap-2">
    {
        arr.map((ele)=>(<ProperyCardSkeleton key={ele}></ProperyCardSkeleton>))
    }
  </div>
}

export default PopularSkeleton