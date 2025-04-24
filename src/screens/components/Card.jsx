import React from 'react'
import { motion } from 'framer-motion'
import Picc from "../../assets/Wa1.jpeg";
import Picc1 from "../../assets/Wa2.jpeg";
import Board from './Board';

const Card = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-6 py-10" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* MISSION CARD */}
      <motion.div
        className="bg-white shadow-xl rounded-xl p-6 w-full lg:w-5/12"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h1
          className="text-center font-bold text-3xl underline text-gray-800 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          MISSION
        </motion.h1>

        <motion.p
          className="text-[#5b5a5a] dark:text-gray-300 text-lg leading-relaxed first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To provide young people with the tools and knowledge they need to achieve their full potentials by
creating a lasting impact on these individuals and communities.

        </motion.p>
      </motion.div>

      {/* VISION CARD */}
      <motion.div
        className="bg-white shadow-xl rounded-xl p-6 w-full lg:w-5/12"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h1
          className="text-center font-bold text-3xl underline text-gray-800 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          VISION
        </motion.h1>

        <motion.p
          className="text-[#5b5a5a] dark:text-gray-300 text-lg leading-relaxed first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
         To empower people by building successful lives in the development of essential skills through
innovative and engaging programs that inspire and motivate young people.

        </motion.p>
      </motion.div>
      <motion.div
        className="bg-white shadow-xl rounded-xl p-6 w-full lg:w-5/12"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.h1
          className="text-center font-bold text-3xl underline text-gray-800 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
         OUR SERVICES
        </motion.h1>

        <motion.p
          className="text-[#5b5a5a] dark:text-gray-300 text-lg leading-relaxed first-line:tracking-widest first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
       Harnessing skills in mainly students.
Event Coverage (Photography, Videography etc)
Production and customization of (Shirts, Plaque, Sash, Certificates)
Advertising and Marketing.
Graphic Designing
MS Office Suite education.


        </motion.p>
      </motion.div>
    </div>


    <div>
        <img src={Picc1}  className='w-full h-40' alt='picc' />
    </div>
<Board />
    <div>
        <img src={Picc}  className='w-full h-40 -mt-3 -z-10' alt='picc' />
    </div>
   
    </div>
  )
}

export default Card
