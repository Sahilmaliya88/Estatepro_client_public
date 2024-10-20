"use client"
import { NextPage } from 'next'
import { Button } from '../ui/button'
import CounterUp from '../CounterUp'
import Image from 'next/image'
import heroimg from '../../../public/hero.png'
import SeachInput from './Herosearch'

interface Props {}
const Hero: NextPage<Props> = ({}) => {
  
  return <main className='hero-main flex flex-wrap w-full justify-between'>
    <div className='heromaintext'>
            <h1>The best place to <br className='max-md:hidden'></br>
            find  your <span> Dream <br className='max-md:hidden'></br> House</span> </h1>
    </div>
    <div className='max-lg:mt-0 mt-[80px] w-1/2 max-xl:w-full max-lg:ml-0 '>
    <p className='heropara'>We are  real estate agency that willhelp you designing a modern and minimalist dream house, let’s discuss.</p>
    <Button className='hero-gt'>Get in Touch</Button>
    <div className='herostatics'> 
        <CounterUp upto={1200} className='counters' duration={1} description='Premium Product'></CounterUp>  
        <CounterUp upto={4500} className='counters' duration={1} description='happy customer'></CounterUp>  
        <CounterUp upto={250} className='counters' duration={1} description='Award Winnig'></CounterUp>  
    </div>  
    </div>
    <HeroImage></HeroImage>
  </main>
}

const HeroImage = ({})=>{
   return (
    <div className='w-full  relative h-[550px] max-md:h-[350px]  mt-2'>
    <Image src={heroimg} width={1200} height={1080} alt='heroimg' className='heroimg'></Image>
    <SeachInput></SeachInput>
</div>
   )
}

export default Hero