import React from 'react'
import Header from '../Componat/Header/Header'
import Footer from '../Componat/Footer/Footer'

const NoPage = () => {
  return (
    <>
    <Header />
    <section className='h-screen w-full flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl font-bold '>404</h1>
        <p className='text-2xl'>Page Not Found</p>
    </section>
    <Footer />
    </>
  )
}

export default NoPage