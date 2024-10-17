import { NextPage } from 'next'

interface Props {}

const Loader: NextPage<Props> = ({}) => {
  return( <div className="frame">
        <div className="center">
            <div className="dot-1"></div>
            <div className="dot-2"></div>
            <div className="dot-3"></div>
        </div>
  </div>)
}

export default Loader