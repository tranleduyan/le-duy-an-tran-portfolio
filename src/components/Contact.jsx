import React from 'react'
import contactLogo from '../assets/images/headContact.png'
const Contact = () => {
  return (
    <div name='contact' className='w-full lg:h-screen mt-8 '>
        <div className='max-w-[1000px] sm:pl-40 md:mx-auto px-8 flex flex-col justify-center h-full md:items-start items-center'>
            <div className='mt-20'>
                <img src={contactLogo} alt='contact logo'  className='w-3/4 lg:w-full mx-auto mt-20 '/>
            </div>
            <h1 className='sm:text-6xl text-4xl font-bold md:animate-[pulse_1.26s_ease-in-out_infinite]'>LET'S GET IN TOUCH:</h1>
            <a href="mailto:leduyantran@gmail.com" className='py-4 max-w-[700px] text-xl'><span className='font-bold'>Email: </span><span className='hover:text-[#ffd700]'>leduyantran@gmail.com</span></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leduyantran/" className='py-4 max-w-[700px] text-xl'><span className='font-bold'> LinkedIn: </span><span className='hover:text-[#ffd700]'> @leduyantran</span>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/8thbitboi/" className='py-4 max-w-[700px] text-xl'><span className='font-bold'> Instagram: </span><span className='hover:text-[#ffd700]'> @8thbitboi</span>
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/tranleduyan" className='py-4 max-w-[700px] text-xl'><span className='font-bold'> Github: </span><span className='hover:text-[#ffd700]'> @tranleduyan</span>
            </a>
        </div>
    </div>
  )
}

export default Contact