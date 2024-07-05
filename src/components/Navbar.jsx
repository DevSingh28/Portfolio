import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { motion } from 'framer-motion';

const animator = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: [0, 30, -30, 15, -15, 0],
    opacity: 1,
    rotate: [0, 10, -10, 5, -5, 0],
    scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
    transition: { duration: 2, delay: delay }
  }
});

function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h3 className='text-2xl'>DS</h3>
      </div>
      <div className='m-8 flex items-center justify-center text-2xl gap-4'>
        <motion.a
          href='https://www.linkedin.com/in/dev-singh-2b3541275/'
          target='_blank'
          initial="hidden"
          animate="visible"
          variants={animator(0)}
          whileHover={{scale: 1.5}}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href='https://github.com/DevSingh28'
          target='_blank'
          initial="hidden"
          animate="visible"
          variants={animator(0.2)}
          whileHover={{scale: 1.5}}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href='https://www.instagram.com/dev.singh2002/'
          target='_blank'
          initial="hidden"
          animate="visible"
          variants={animator(0.4)}
          whileHover={{scale: 1.5}}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
