import React from 'react';
import { motion } from "framer-motion";

function About() {
    return (
        <div className='border-b pb-4 border-neutral-900'>
            <h2 className='my-20 text-4xl text-center'>
                About
                <span className='text-neutral-600'> Me</span>
            </h2>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <motion.img
                        whileInView={{x:0, opacity:1}}
                        animate={{opacity:1, x:-100}}
                        transition={{duration:0.5}}
                         className='rounded-2xl' src='https://img1.wsimg.com/isteam/ip/e67302b0-44a1-4986-8052-07dc0102848e/About-Me-Transparent-PNG.png/:/rs=w:1240,h:620,cg:true,m/cr=w:1240,h:620' alt='cat image' />

                    </div>

                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p
                        whileInView={{x:0, opacity:1}}
                        animate={{opacity:1, x:100}}
                        transition={{duration:0.5}}
                         className='my-2 max-w-xl py-6'>My name is Dev Singh, a Full Stack Developer and AI Specialist. I excel in creating efficient and innovative AI-driven solutions and MERN stack applications. With a strong background in AI technologies, I am dedicated to improving user engagement and operational efficiency.</motion.p>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default About
