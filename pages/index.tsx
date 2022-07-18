import type { NextPage } from 'next'
// import Sample from '../components/sample'
import { useState } from 'react'
// import axios from 'axios'
// import Image from 'next/image'
// import Link from 'next/link'
// import ToolsColor from '../components/toolsColor'

const Home: NextPage = () => {
  // const [number, setNumber] = useState(0)
  // const [resData, setResData] = useState('hi')
  //
  // const onIncraese = () => {
  //   setNumber((pv) => pv + 1)
  // }
  // const onDecrease = () => {
  //   setNumber((pv) => pv - 1)
  // }
  //
  // const onResChange = (value: any) => {
  //   setResData(value)
  // }
  return (
    <>
      <div>main page</div>
    </>
  )
}

// Home.getInitialProps = async () => {
//   const res = await axios.post(
//     'https://dev-m.mrblue.com/protocol/appapi/mb/comic/recommand',
//     {
//       adultLevel: 0,
//       channel: 'IW',
//       uid: '',
//     },
//   )
//   console.log(res)
//   const data = res.data
//   console.log(data)
//
//   return {
//     data: data,
//   }
// }

export default Home
