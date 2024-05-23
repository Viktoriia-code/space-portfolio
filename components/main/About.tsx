"use client"

import React, { createRef, useEffect, useRef } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { slideInFromLeft, slideInFromRight, slideInFromTop, slideInFromBottom } from '@/utils/motion'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id='about' className='scroll-mt-16 lg:scroll-mt-24'>
      <div className="bottom-[10px] px-[5px]">
        {/* <motion.div 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromRight(0)}
          className="cursive text-[20px] font-medium text-gray-300"
        >
          Let me introduce myself
        </motion.div>

        <motion.h3 
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromRight(0.5)}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          About me
        </motion.h3> */}
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromRight(0.8)}
          className="text-basicText mb-5 max-w-[800px]"
        >
          Before diving into software development, in 2015 I completed my bachelor degree in management and after that I worked for three years as an Electronic Data Interchange (EDI) specialist in a major IT company that provides a vast variety of EDI and SaaS solutions for business. I got a deep understanding of B2B EDI and business processes, learned to efficiently organize work processes in IT, and learned to communicate with clients and partners.
        </motion.p>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromRight(0.8)}
          className="text-basicText my-5 max-w-[800px]"
        >
          Last autumn I completed a vocational degree in Information Technology at Keuda vocational school in Kerava and I got 6 months of experience working as a frontend developer. In terms of my tech skills, I have solid skills on web development using HTML, CSS, JavaScript, React and TypeScript, as well as desktop application development using C# and Python. When I worked as a frontend developer, I focused on creating and testing frontend side of web interfaces, project documentation writing and collaboration with different teams remotely.
        </motion.p>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={slideInFromRight(0.8)}
          className="text-basicText my-5 max-w-[800px]"
        >
          I&apos;m continuing the profession I began in vocational school, and now I&apos;m studying for my bachelor&apos;s degree in Information Technology at Metropolia AMK in Espoo. We're learning Python programming, databases, and React for frontend development.
        </motion.p>
      </div>
    </section>
    
  )
}

export default About