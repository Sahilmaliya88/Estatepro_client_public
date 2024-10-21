import { serverlink } from '@/lib/serverlink'
import axios from 'axios'
import { NextPage } from 'next'
import {Property} from '../../lib/types'
import PropertyCard from '../PropertyCard'
interface Props {}
async function getResidency(){
    try {
        const residencies = await axios.get(`${serverlink}/property/filter?type=RESIDENTIAL&page=0&limit=4`)
        if(residencies.data){
            
            return residencies.data.properties
        }
        return null
    } catch (error) {
        console.log(error)
    }
}
const PopularResi: NextPage<Props> = async({}) => {
    const residencies:Property[] = await getResidency()
  return <div className='min-h-[1000px]'>
    {
        residencies?.length >0 ? (<div className="flex justify-around max-md:justify-center flex-wrap h-full gap-[10px] ">
            {
                residencies.map((ele,index)=><PropertyCard property={ele} index={index} key={ele.id}></PropertyCard>)
            }
        </div>):(<h1>wait for add</h1>)
    }
  </div>
}

export default PopularResi