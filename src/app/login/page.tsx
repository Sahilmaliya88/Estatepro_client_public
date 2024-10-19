import { serverlink } from '@/lib/serverlink'
import { NextPage } from 'next'

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <div>
    <a href={`${serverlink}/Oauth/google/callback`}>login to google</a>
  </div>
}

export default Page