import React from 'react'
import CarouselCont from '../CarouselCont'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <motion.div id="about"
      className="items-center justify-center md:p-4 w-10/12 ml-10 md:mt-10"
      style={{ fontFamily: 'Inter, sans-serif' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="flex justify-center font-bold text-3xl underline text-gray-800 mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        ABOUT US
      </motion.h1>

      <motion.p
        className="mb-3 text-[#5b5a5a] dark:text-gray-300 text-xl leading-relaxed first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <span className="text-black font-semibold">The Skilled Network (TSN)</span> is an agency of skilled individuals with the aim of harnessing the skills of
        individuals and provide topnotch services and products. Our goal is to be able to nurture the individual
        skills of people by helping them to find purpose and make meaning of it. In a world where
        management and human resources are given prime focus, every individual must be able to possess a
        specific skill set and be able to utilize it.
      </motion.p>
    </motion.div>
  )
}

export default HomePage
