"use client"
import { NextPage } from 'next'
import { useRef } from 'react'
import CountUp from 'react-countup'
interface Props {
    duration:number,
    upto:number,
    className:string,
    description:string
}

const CounterUp: NextPage<Props> = ({duration,upto,description,className}) => {

  return (
    <CountUp
  start={0}
  end={upto}
  duration={duration}
  delay={0}
  suffix='<span id="suffix">+</span>'
>
  {({ countUpRef, start }) => (
    <div className={className}>
      <span className='counter' ref={countUpRef} />
      <p className='mt-1'>{description}</p>
    </div>
  )}
</CountUp>
  )
}

export default CounterUp