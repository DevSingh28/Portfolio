import React from 'react'
import { motion } from "framer-motion";
import img_dish_duo from "/dishduoo.png"
import img_birds from "/birds.png"
import img_chat_u from "/Chat-u.png"
import img_pp from "/pp.png"
import img_movie from "/movie.png"
import img_last from "/last.png"

function Projects() {
    const animator = (delay) => ({
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    })
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='text-4xl text-center my-20'>
                Projects
            </motion.h1>
            <div className='flex flex-wrap mb-8 lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl mb-4" height={200} width={200} src={img_dish_duo} alt='imahe 1' />
                    </div>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-2 font-semibold text-2xl'>DishDuo</motion.h6>
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-neutral-400'> A dynamic platform for sharing recipes with AI-driven personalized suggestions, enhancing user satisfaction and engagement. <a className='text-blue-800' href='https://dishduo.onrender.com/'>Link</a></motion.p>
                    <motion.span
                        variants={animator(0)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Python</motion.span>
                    <motion.span
                        variants={animator(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Flask</motion.span>
                    <motion.span
                        variants={animator(1)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Postgres</motion.span>
                    <motion.span
                        variants={animator(1.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Jinja 2</motion.span>

                </div>
            </div>
            <div className='flex flex-wrap mb-8 lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl mb-4" height={200} width={200} src={img_chat_u} alt='imahe 1' />
                    </div>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-2 font-semibold text-2xl'>Real-Time Chat App (Chat U)</motion.h6>
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-neutral-400'> A real-time chat application using MERN and socket.io for seamless and interactive communication.  <a className='text-blue-800' href='https://chat-u.onrender.com/'>Link</a></motion.p>
                    <motion.span
                        variants={animator(0)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>React</motion.span>
                    <motion.span
                        variants={animator(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>MongoDB</motion.span>
                    <motion.span
                        variants={animator(1)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Express</motion.span>
                    <motion.span
                        variants={animator(1.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Node.js</motion.span>

                </div>
            </div>
            <div className='flex flex-wrap mb-8 lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl mb-4" height={200} width={200} src={img_pp} alt='imahe 1' />
                    </div>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-2 font-semibold text-2xl'>Portfolio Website</motion.h6>
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-neutral-400'>A personal portfolio website developed using React, showcasing projects, skills, and professional achievements. <a className='text-blue-800' href='#'> Link</a></motion.p>
                    <motion.span
                        variants={animator(0)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>React</motion.span>
                    <motion.span
                        variants={animator(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Framer Motion</motion.span>
                    <motion.span
                        variants={animator(1)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Html</motion.span>
                    <motion.span
                        variants={animator(1.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Javascript</motion.span>

                </div>
            </div>
            <div className='flex flex-wrap mb-8 lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl mb-4" height={200} width={200} src={img_birds} alt='imahe 1' />
                    </div>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-2 font-semibold text-2xl'>Bird Species Classifier</motion.h6>
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-neutral-400'>Developed a robust classifier using TensorFlow and Keras, capable of predicting bird species from uploaded images with 92% accuracy. <a className='text-blue-800' href='https://huggingface.co/spaces/TheRock99/Birds_Classification'> Link </a></motion.p>
                    <motion.span
                        variants={animator(0)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Python</motion.span>
                    <motion.span
                        variants={animator(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Tensorflow</motion.span>
                    <motion.span
                        variants={animator(1)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Gradio</motion.span>
                    <motion.span
                        variants={animator(1.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Numpy</motion.span>

                </div>
            </div>
            <div className='flex flex-wrap mb-8 lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl mb-4" height={200} width={200} src={img_movie} alt='imahe 1' />
                    </div>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-2 font-semibold text-2xl'>Netflix Movie Recommender System</motion.h6>
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-neutral-400'>A movie recommender system that processes and cleans Netflix data, implementing a KNN algorithm for improved recommendation relevance and user engagement.</motion.p>
                    <motion.span
                        variants={animator(0)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Python</motion.span>
                    <motion.span
                        variants={animator(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Knn</motion.span>
                    <motion.span
                        variants={animator(1)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Pandas</motion.span>
                    <motion.span
                        variants={animator(1.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Numpy</motion.span>

                </div>
            </div>
            <div className='flex flex-wrap mb-8 lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <div>
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl mb-4" height={200} width={200} src={img_last} alt='imahe 1' />
                    </div>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'>
                    <motion.h6
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-2 font-semibold text-2xl'>Twitter Tweet Sentiment Analysis</motion.h6>
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='mb-4 text-neutral-400'>An LSTM-based model for sentiment prediction on tweet data, achieving 88% accuracy and reducing misclassifications by 25% through preprocessing and cleaning techniques.
                    </motion.p>
                    <motion.span
                        variants={animator(0)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Python</motion.span>
                    <motion.span
                        variants={animator(0.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Tensorflow</motion.span>
                    <motion.span
                        variants={animator(1)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>LSTM</motion.span>
                    <motion.span
                        variants={animator(1.5)}
                        initial='hidden'
                        whileInView='visible'
                        className='mr-2 rounded px-2 py-1 bg-neutral-900 text-purple-500'>Pandas</motion.span>

                </div>
            </div>




        </div>
    )
}

export default Projects
