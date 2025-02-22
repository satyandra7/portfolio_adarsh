import { assets, infoList, toolsData  } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
    return (
        <div id='about' className='w-full px-[12%] pt-14 pb-4 
    scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg
       font-Ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
            <div className='flex w-full flex-col lg:flex-row items-center 
    gap-4 py-16'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 mx-w-2xl font-Ovo'>
                    Hi! I am Adarsh Shukla, a Data Scientist and Researcher with a passion for research and development. I hold an MSc in Computer Science from the University of Delhi , 
                    where I honed my skills in data analysis , machine learning  and research methodologies.
                    With a strong background in these areas , I am dedicated to applying my expertise 
                    to solve real-world problems.My commitment to continuous improvement and my enthusiasm 
                    for innovation drive me to explore new challenges and make meaningful contributions to 
                    both academia and industry.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-gray-300 rounded-xl p-6 hover:shadow-black cursor-pointer
                hover:bg-lightHover hover:translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                                key={index}>
                                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/80 whitespace-pre-line'>{description}</p>
                            </li>

                        ))}
                    </ul>
                    <h4 className='my-6 text-gray-700 font-Ovo  dark:text-white/80 '> Tools I Use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                border-gray-400 rounded-lg cursor-pointer hover:translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
