import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const animator = (delay) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: delay }
    }
  });

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={animator(0)}
        className='text-center text-4xl my-10'>
        Contact Me
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animator(0.2)}
          className='my-4'>
          <span className='text-purple-800 text-xl'>Address: </span>
          Garhi Harsaru, Gurugram, Haryana, India
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animator(0.4)}
          className='my-4'>
          <span className='text-purple-800 text-xl'>Phone no. </span>
          +91 9717932927
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={animator(0.6)}
          className='my-4'>
          <span className='text-purple-800 text-xl'>Email: </span>
          devsingh2017dp@gmail.com
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;
