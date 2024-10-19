"use client"
import { NextPage } from 'next'
import logo_light from '../../../public/logo-light.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { use, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { userStore } from '@/lib/Store'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import axios from 'axios'
import { serverlink } from '@/lib/serverlink'
import { FaArrowRight } from "react-icons/fa6";
import { Skeleton } from '../ui/skeleton'
gsap.registerPlugin(useGSAP)
export enum varient{
    "light","dark"
}
interface Props {
    varient:varient,
    ispending?:boolean
}
type navigation={
    title:string,
    link:string
}
const Header: NextPage<Props> = (Props) => {
    const {user,addUser} = userStore()
    /* responsive navigation menu code starts */
    const responsive_nav_timeline = gsap.timeline({paused:true})
  
    /* hamburger menu icon code start */
    const hm1 = useRef<HTMLSpanElement>(null)
    const hm2 = useRef<HTMLSpanElement>(null)
    const hm3 = useRef<HTMLSpanElement>(null)
    const active = useRef<boolean>(false)
     /* hamburger menu icon code start ends */
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
    const logout = async():Promise<void>=>{
        try{
            let resposne = await axios.get(`${serverlink}/auth/logout`,{withCredentials:true})
            if(resposne.data){
                addUser(null)
            }
        }catch(err){
            alert("fail to logout")
        }
    }
    useEffect(()=>{
        const tl = gsap.timeline({paused:true})
        tl.to(hm2.current,{width:0,duration:.2,ease:"back.inOut"})
        tl.to(hm1.current,{top:"50%",rotation:45,duration:.5,ease:"elastic",transformOrigin:"center"},"open")
        tl.to(hm3.current,{top:"50%",rotation:-45,duration:.5,ease:"elastic",transformOrigin:"center"},"open")
        responsive_nav_timeline.to("#resnav",{right:0,duration:.5})
        const btn = document.getElementById("hamb")
        btn?.addEventListener(("click"),()=>{
            if(active.current){
                active.current = false
                if(!tl.isActive()){
                    tl.reverse()
                    responsive_nav_timeline.reverse()
                }
               
            }else{
                active.current = true;
                tl.play()
                responsive_nav_timeline.play()
            }
        })
        return (()=>{
            btn?.removeEventListener("click",()=>{
                if(active.current){
                    active.current = false;
                    tl.reverse()
                }else{
                    active.current = true;
                    tl.play()
                }
            })
            tl.kill()
            responsive_nav_timeline.kill()
        })
    },[])
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
    {
        Props.ispending ? (<div className='relative flex items-center gap-2 right-6'>
            <Skeleton className='w-[40px] h-[40px] rounded-full'></Skeleton>
            <div>
                <Skeleton className='w-[35px] h-2'></Skeleton>
                <Skeleton className='w-[25px] h-2 mt-1'></Skeleton>
            </div>
            </div>):(
            <div className='flex max-md:hidden min-w-[100px]  relative right-6'>
                {
                    user ? (<div className='flex gap-2  w-full h-full items-center'>
                         <img src={user.photo || "https://res.cloudinary.com/dh0ekblp9/image/upload/v1729276941/coverphotos/cffbgx965dr4mbtuigdz.png"} className='w-[40px] h-[40px] rounded-full'></img>
                        <h1 className='  '>{user.firstname}</h1>
                    </div>):( <Button variant={"default"} className={`max-md:hidden font-semibold h-[40px]  rounded-[12px] ${Props.varient === varient.dark ? "bg-white text-black":"" }`}>Get Started <FaArrowRight></FaArrowRight></Button>)
                }
            </div>
        )
    }
   
    <button id='hamb' className='hidden fix right-10 z-50 max-md:flex'>
            <div className={`hammenu`}>
                <span id='hm1' className={`${Props.varient === varient.dark ? "bg-white":"bg-black"}`} ref={hm1}></span>
                <span id='hm2' className={`${Props.varient === varient.dark ? "bg-white":"bg-black"}`}  ref={hm2}></span>
                <span id='hm3' className={`${Props.varient === varient.dark ? "bg-white":"bg-black"}`}  ref={hm3}></span>
            </div>
    </button>
    <nav id='resnav' className='hidden gap-2 max-md:flex min-h-[80vh]  w-full p-2 shadow-sm flex-col top-0 bg-white z-40 fixed right-[-200%]'>
     { user && <div className='flex gap-2 items-center'>
            <img src={user.photo || "https://res.cloudinary.com/dh0ekblp9/image/upload/v1729276941/coverphotos/cffbgx965dr4mbtuigdz.png"} className='w-[80px] h-[80px]'></img>
            <div className=''>
                <h1 className='font-semibold text-[22px]'>{user.firstname} {user.lastname}</h1>
                {
                    user.location.length > 0 ? (<h1>
                        {user.location[0].city}
                    </h1>):(<button className="border flex items-center gap-1 border-black rounded-[8px] px-2 py-1"><FaLocationCrosshairs size={18}></FaLocationCrosshairs>Add Location</button>)
                }
            </div>
        </div>}
        <div className='w-full h-1 bg-black-500'></div>
    <ul className='flex-col w-full flex gap-2 '>
            {
                navs.map((nav,index)=>(<Link key={index} className={`font-light  ${Props.varient === varient.dark ? "text-white":"text-[#070707]" }  font-semibold w-full text-start p-2    text-[18px]`} href={nav.link}>{nav.title}</Link>))
            }
        </ul>
      {user ? (<button onClick={logout} className='flex items-center gap-1 text-xl text-red-600 font-semibold mt-2'>Logout<IoLogOut color='"red'></IoLogOut></button>):(<Link href={"/login"}>login</Link>)}
    </nav>
  </header>
}

export default Header