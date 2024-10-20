import { NextPage } from 'next'
import facebook from '../../../public/facebook.png'
import googleimg from '../../../public/google.png'
import pinterest from '../../../public/pinterest.png'
import youtube from '../../../public/youtube.png'
import webflow from '../../../public/webflow.png'
import Image, { StaticImageData } from 'next/image'
interface Props {}
type parters = {
    image:StaticImageData,
    title:string
}
const Trustedby: NextPage<Props> = ({}) => {
   const partners:parters[] = [
    {
        image:facebook,
        title:"facebook"
    },
    {
        image:googleimg,
        title:"google"
    },
    {
        image:pinterest,
        title:"pinterest"
    },
    {
        image:youtube,
        title:"youtube"
    },
    {
        image:webflow,
        title:"webflow"
    }
]
  return <div className='padding-d mt-[50px] pb-2'>
    <h1 className='text-center text-[32px] font-[500]'>
        Trusted By
    </h1>
    <div className="flex items-center gap-2 justify-between flex-wrap max-md:flex-col max-md:items-center max-md:gap-[20px] mt-[10px] pb-2">
        {
            partners.map((ele)=><Image src={ele.image} className="trustedimgs" alt={ele.title} width={200} height={200}></Image>)
        }
    </div>
    </div>
}

export default Trustedby