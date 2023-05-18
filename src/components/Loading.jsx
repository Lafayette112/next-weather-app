import Image from 'next/image'
import React from 'react'
import Load from '../assets/loading.gif'

const Loading = () => {
  return (
    <>
        <Image className='w-[200px] m-auto block' src={Load} alt='loading...' />
    </>
  )
}

export default Loading