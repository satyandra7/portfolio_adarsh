import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { Typewriter } from "nextjs-simple-typewriter";

const Header = () => {
  return (
    <div className='w-11/12 mx-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4 pt-8 lg:pt-14'>
      <div>
        <Image src={assets.profile_img} alt=" " className='rounded-full w-60 h-60 object-cover'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I am Adarsh Shukla <Image src={assets.hand_icon} alt=" "
        className='w-8'/> </h3>
      <div>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
          I'm a <span> </span>
          <span className='text-red-500'>
          <Typewriter
            words={['Researcher', 'Data Scientist', 'Web Developer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
          </span>
        </h1>
      </div>  
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a Data Scientist with a passion for research and development. I have a strong background in data analysis and machine learning, and
            I am always looking for new ways to apply my skills to solve real-world problems.I am always looking for new opportunities to learn and grow, and I am excited to see where my career will take me next.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" 
            className='px-10 py-3 border rounded-full bg-black
            text-white flex items-center gap-2 dark:bg-transparent'>
            Contact me <Image src={assets.right_arrow_white} alt=" " 
            className='w-4'/> </a>

            <a href="/sample-resume.pdf" download 
            className='px-10 py-3 border rounded-full border-gray-500 
            flex items-center gap-2 bg-white dark:text-black'>
             My Resume<Image src={assets.download_icon} alt=" " 
            className='w-4'/> </a>
        </div>
    </div>
  )
}

export default Header
