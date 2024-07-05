import React from 'react';
import { RiReactjsLine } from '@react-icons/all-files/ri/RiReactjsLine';
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql';
import { SiMongodb } from '@react-icons/all-files/si/SiMongodb';
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs';
import { SiPython } from '@react-icons/all-files/si/SiPython';
import { SiTensorflow } from '@react-icons/all-files/si/SiTensorflow';
import { SiFlask } from '@react-icons/all-files/si/SiFlask';
import { motion } from 'framer-motion';

function Tech() {
  const animator = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  });

  const infiniteMotion = {
    y: [0, -10, 0], // Keyframes for up-and-down motion
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'loop'
    }
  };

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='text-4xl my-20 text-center'>
        Technologies
      </motion.h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
          variants={animator(2.1)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={animator(1.8)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <SiPostgresql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={animator(1.5)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={animator(1.2)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <SiNodeDotJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={animator(0.9)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <SiPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={animator(0.3)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <SiTensorflow className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={animator(0)}
          initial='hidden'
          whileInView='visible'
          animate={infiniteMotion}
          className='border-4 border-neutral-800 p-4 rounded-2xl'>
          <SiFlask className="text-7xl text-black" />
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;
