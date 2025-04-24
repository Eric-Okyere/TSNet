import React from 'react'
import MainLayout from './MainLayout'
import HomePage from './HomePage'
import CarouselCont from '../CarouselCont'
import Card from './Card'

const Home = () => {
  return (
    <>
<MainLayout>
  <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row'>
    <HomePage className="flex-0.4" />
    <CarouselCont className="flex-0.6"/>
    </div>
    <Card />
</MainLayout>
    </>
  )
}

export default Home