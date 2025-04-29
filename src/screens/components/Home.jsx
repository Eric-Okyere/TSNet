import React from 'react'
import MainLayout from './MainLayout'
import HomePage from './HomePage'
import CarouselCont from '../CarouselCont'
import Card from './Card'

const Home = () => {
  return (
    <>
<MainLayout>
  <div  id="home" className='flex flex-col sm:flex-row md:flex-row lg:flex-row mt-32 md:mt-28'>
    <HomePage id="about" className="flex-0.4 " />
    <CarouselCont className="flex-0.6"/>
    </div>
    <Card id="services" />
</MainLayout>
    </>
  )
}

export default Home