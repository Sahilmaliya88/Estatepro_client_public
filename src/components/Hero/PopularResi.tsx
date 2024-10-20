import { serverlink } from '@/lib/serverlink'
import axios from 'axios'
import { NextPage } from 'next'
import {Property} from '../../lib/types'
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
  return <div>
    {
        residencies?.length >0 ? (<div>
            {
                residencies.map((ele)=><h1 key={ele.id}>{ele.title}</h1>)
            }
        </div>):(<h1>wait for add</h1>)
    }
  </div>
}

export default PopularResi