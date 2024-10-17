import { NextPage } from 'next'

interface Props {}

const Typing: NextPage<Props> = ({}) => {
  return (
<div className="typing-indicator">
    <div className="typing-circle" id='ts1'></div>
    <div className="typing-circle" id='ts2'></div>
    <div className="typing-circle" id='ts3'></div> 
</div>
  )
}

export default Typing