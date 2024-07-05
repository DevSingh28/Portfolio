import React from 'react'
import { motion } from "framer-motion";

function Hero() {
    const animator = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0, 
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    });
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full'>
                <div className='flex flex-col items-center'>
                    <motion.h1
                    variants={animator(0)}
                    initial='hidden'
                    animate='visible'
                     className='pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl'>Dev Singh</motion.h1>
                    <motion.span
                    variants={animator(0.5)}
                    initial='hidden'
                    animate='visible'
                     className='bg-gradient-to-r from-purple-800 via-purple-400 to-cyan-600 bg-clip-text tracking-tighter text-4xl text-transparent'>Full Stack Developer and AI Specialist</motion.span>
                    <motion.p
                    variants={animator(1)}
                    initial='hidden'
                    animate='visible'
                     className='my-2 py-6 max-w-lg font-light tracking-tighter'>
                        Expert in AI-driven solutions and MERN stack development
                    </motion.p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
