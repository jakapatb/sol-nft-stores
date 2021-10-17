import React from 'react'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('../components/Home'), {
  ssr: false
})

const HomePage = () => {
  return <h1>Hello world222</h1>
}

export default HomePage
