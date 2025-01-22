import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const footer = ({isDarkMode}) => {
    return (
        <div className='mt-20'>

            <div className='text-center'>
               

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon } alt=" " className='w-36 mx-auto mb-2'
                    style={{ width: '20px', height: '15px' }} />
                    <p className='mb-2'>adarshshukla.mcs22.du@gmail.com</p>
                </div>

            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Adarsh Shukla. All rights rsereved</p>
                <ul className='flex iten-center gap-10  justify-center mt-4 sm:mt-0'>
                    <li> <a target='_blank' href="https://github.com/technomancerAdarsh?tab=repositories">Github </a></li>
                    <li> <a target='_blank' href="https://www.linkedin.com/in/adarsh-shukla-7a201b179?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn </a></li>
                    <li> <a target='_blank' href="https://x.com/420_adarsh?s=09">Twitter</a></li>

                </ul>

            </div>
            </div>
            );
        };

            export default footer
