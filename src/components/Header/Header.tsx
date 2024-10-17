"use client"
import { NextPage } from 'next'
import logo_light from '../../../public/logo-light.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)
export enum varient{
    "light","dark"
}
interface Props {
    varient:varient
}
type navigation={
    title:string,
    link:string
}
const Header: NextPage<Props> = (Props) => {
    const [active,setactive] = useState<boolean>(false)
    let tl = gsap.timeline({paused:true})
    useGSAP(()=>{
        tl.to('#hm2',{width:0,duration:.2,ease:"back.inOut"})
        tl.to("#hm1",{top:"50%",rotation:45,duration:.5,ease:"elastic",transformOrigin:"center"},"open")
        tl.to('#hm3',{top:"50%",rotation:-45,duration:.5,ease:"elastic",transformOrigin:"center"},"open")
    },[])
    const navs:navigation[]=[
        {
            title:"Home",
            link:"/"
        },{
            title:"About",
            link:"/about"
        },
        {
            title:"Properties",
            link:"/properties"
        },{
            title:"agents",
            link:"/agents"
        },{
            title:"Blog",
            link:'/blog'
        }   
    ]
    const openmenuicon  =()=>{
       setactive(true)
       tl.play()
    }
    const closemenuicon  =()=>{
        if(tl.isActive()){
            tl.pause()
        }
        setactive(false)
        tl.reverse()
     }
    const modifyMenu =()=>{
        if(active){
            closemenuicon()
            console.log("closed")
        }else{
            openmenuicon()
        }
    }
  return <header className= {`py-4 flex items-center ${Props.varient === varient.dark ? "text-white":"" } justify-between`}>
    <div className='flex items-center gap-[40px]'>
    <div className='flex items-center gap-2 px-4'>
        <Image src={logo_light} alt='logo' width={50} height={50} className='w-[35px] h-[45px]'></Image>
        <h1 className='text-[28px] font-bold'>EStatePro</h1>
    </div>
    <nav>
        <ul className='flex gap-[32px] items-center max-md:hidden'>
            {
                navs.map((nav,index)=>(<Link key={index} className={`font-light  ${Props.varient === varient.dark ? "text-white":"text-[#070707]" }   text-[18px]`} href={nav.link}>{nav.title}</Link>))
            }
        </ul>
    </nav>
    </div>
    <Button variant={"default"} className={`max-md:hidden relative right-6 ${Props.varient === varient.dark ? "bg-white text-black":"" }`}>Login</Button>
    <button onClick={modifyMenu} className='hidden max-md:flex'>
            <div className={`hammenu`}>
                <span id='hm1'></span>
                <span id='hm2'></span>
                <span id='hm3'></span>
            </div>
    </button>
  </header>
}

export default Header