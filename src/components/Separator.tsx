import { NextPage } from 'next'

interface Props {}

const Separator: NextPage<Props> = ({}) => {
  return <div className='padding-d'>
    <div className='separator'></div>
  </div>
}

export default Separator