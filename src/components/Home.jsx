import React from 'react'
import charLogo from '../assets/images/charLogo.png'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full lg:h-screen'>
        {/* Container */}
        <div className='max-w-[1145px] sm:pl-40 md:mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='pt-10 md:mt-0'> Hi, I'm</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ffd700] md:animate-[pulse_1.26s_ease-in-out_infinite]'>Le Duy An Tran</h1>
            <h2 className="text-3xl sm:text-6xl font-bold md:hover:opacity-70 md:hover:ease-in duration-250">Undergraduate Computer Science</h2>
            <p className='py-4 max-w-[700px]'>Aspiring Full-Stack Software/Game Developer Seeking For Internship Summer 2023
            </p>
            <div>
              <button className='text-[#ffd700] border-[#ffd700] border-2 px-3 py-1 hover:bg-[#ffd700] hover:text-[#121212]
              md:px-6 md:py-3 md:my-2'><Link to='about' smooth={true} duration={400}>ABOUT ME AND MY WORK</Link></button>
            </div>
        <div className='mx-auto'>
          <img src={charLogo} alt='character logo' className='mb-10'/>
        </div>
        </div>
    </div>
  )
}

export default Home