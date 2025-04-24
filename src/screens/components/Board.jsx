import React from 'react';
import { motion } from 'framer-motion';
import Boardpic from "../../assets/Board.jpeg";
import Boardpic1 from "../../assets/Board1.jpeg";
import Boardpic2 from "../../assets/Board2.jpeg";
import Afya from "../../assets/Afya.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
  whileHover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 },
  },
};

const people = [
  {
    image: Afya,
    name: "Emmanuella Dentsui Afi",
    title: "TSNet - CEO",
  },
  {
    image: Boardpic,
    name: "Bonnie Green",
    title: "Visual Designer",
  },
  {
    image: Boardpic1,
    name: "John Doe",
    title: "Lead Developer",
  },
  {
    image: Boardpic2,
    name: "Jane Smith",
    title: "Product Manager",
  },
];

const Board = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-8 px-6 -mt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
      {people.map((person, i) => (
        <motion.div
          key={i}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 z-50"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={i}
          whileHover="whileHover"
        >
          <div className="flex justify-end px-4 pt-4">
            <button className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img src={person.image} className='w-24 h-24 rounded-full' alt={person.name} />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{person.name}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{person.title}</span>
            <div className="flex mt-4 md:mt-6">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</a>
              <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">WhatsApp</a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Board;
