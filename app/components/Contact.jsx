import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'



const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "27db5a1c-ea47-4a30-9b64-55a30b1a305a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[(url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90px%_auto] dark:bg-none'>
            <h4 className='text-center mb-2 text-lgf font-Ovo'>
                Connect with me </h4>
            <h2 className='text-center text-5xl font-Ovo'>
                Get in Touch </h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I'd love to hear from you! Whether you have a question, a project you'd like to discuss, or just want to say hi, feel free to reach out to me using the form below. I'll get back to you as soon as I can.</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-4 mt-10 mb-8'>
                    <input type="text" placeholder="Enter Your Name" required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name' />
                    <input type="email" placeholder="Enter Your Email" required
                        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email' />
                </div>
                <textarea rows='6' placeholder='Enter Your Message' required
                    className='w-full p-4 outline-none border-[0.5px] border-gray-400
         rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'/>
                <button type='submit'
                    className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transapent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit Now
                    <Image src={assets.right_arrow_white} alt='' className='w-4' /> </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}

export default Contact
