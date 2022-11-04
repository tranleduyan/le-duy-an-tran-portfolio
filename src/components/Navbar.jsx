import React from 'react'
import {FaGithub, FaLinkedin, FaHome, FaUserTie, FaEnvelope, FaInstagram} from 'react-icons/fa'
import Logo from '../assets/images/self-logo.png'
import SubLogo from '../assets/images/subtitle-logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {

    return(
        <div className='fixed w-[100px] h-screen sm:flex flex-col items-center px-4 bg-[#000] text-white-300 hidden'>
            <div className='py-5'>
                <img src={Logo} alt='Logo' style={{width:'100px'}}  />
                <img src={SubLogo} alt='Subtitle Logo' style={{width:'100px'}}  />
            </div>
        {/* navigation bar */}
            <ul className='hidden sm:flex flex-col items-center text-3xl'>
                <li className="cursor-pointer hover:text-[#ffd700]"><Link to='home' smooth={true} duration={300}><FaHome/></Link></li>
                <li className='cursor-pointer hover:text-[#ffd700]'><Link to='about' smooth={true} duration={300}><FaUserTie/></Link></li>
                <li className='cursor-pointer hover:text-[#ffd700]'><Link to='contact' smooth={true} duration={300}><FaEnvelope/></Link></li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://github.com/tranleduyan'
                    className='flex justify-between w0 hover:text-[#ffd700]'>
                        <FaGithub size={30} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/8thbitboi/'
                    className='flex justify-between w0 hover:text-[#ffd700]'>
                        <FaInstagram size={30} />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/leduyantran/'
                    className='flex justify-between w0 hover:text-[#ffd700]'>
                        <FaLinkedin size={30} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar