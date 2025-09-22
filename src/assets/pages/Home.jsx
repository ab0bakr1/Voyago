import React from 'react'
import Header from '../Componat/Header/Header'
import Hero from '../Componat/Hero/Hero'
import Popular from '../Componat/Popular/Popular'
import Why from '../Componat/Why/Why'
import Featured from '../Componat/Featured/Featured'
import Trending from '../Componat/Trending/Trending'
import Reviews from '../Componat/Reviews/Reviews'
import Articles from '../Componat/Articles/Articles'
import Mobile from '../Componat/Mobile/Mobile'
import Footer from '../Componat/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Popular />
      <Why />
      <Featured />
      <Trending />
      <Reviews />
      <Articles />
      <Mobile />
      <Footer />
    </>
  )
}

export default Home