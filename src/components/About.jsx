import React from 'react'
import profilePic from "../assets/images/self-image.JPG";
import{SiUnity,SiJava, SiHtml5, SiCss3, SiReact} from 'react-icons/si'
const About = () => {
  return (
    <div name="about" className='w-full lg:h-screen bg-[#121212]'>
        <div className='flex justify-center sm:pl-20 items-center w-full h-full'>
            <div className='max-w-[1400px] w-full px-4 grid lg:grid-cols-3 gap-8'>
                <div className='text-center pb-8 pl-4'>
                    <p className='text-2xl font-bold inline border-b-4 border-[#ffd700] md:hover:opacity-70 md:hover:ease-in duration-250'>ABOUT ME</p>
                    <div className ="text-center mt-5 md:text-left text-base sm:text-lg md:text-xl">
                        <p>
                            I have been in love with software, website, and game development ever since I was a high school student.<br>
                            </br>
                            It was the time I was selected by my teachers to be in a programming team representing the school to participate in a robotic championship.
                            <br></br>
                            I learned so much about technology and its importance in daily life and decided to change the future of the world with it. 
                            <br></br>
                            I love to explore and try out new technologies to optimize and improve work styles and learning process. 
                            <br/>Additionally, I am always open to new opportunities 
                            and am looking for a Summer 2023 Internship in Software Development industry to grow further.
                            <br></br>
                            <span className='font-bold text-[#ffd700] md:animate-[pulse_1.26s_ease-in-out_infinite]'>Fun Fact:</span> I am also a 2D Pixel Artist, and I love to work with front-end for my creativity and back-end for my problem-solving skill.
                        </p>
                    </div>
                </div>
                <div className='mx-auto my-auto' >
                    <div>
                    <img src={profilePic} alt='profile' className='w-1/2 lg:w-2/3 mx-auto'/>
                    </div>
                    <div className="text-center text-white text-4xl py-2 leading-relaxed">
                        <SiUnity className="inline"></SiUnity> &nbsp;
                        <SiJava className=" inline"></SiJava> &nbsp;
                        <SiReact className="inline"></SiReact> &nbsp;
                        <SiHtml5 className="inline"></SiHtml5> &nbsp;
                        <SiCss3 className=" inline"></SiCss3> &nbsp;
                        <p className='font-semibold tracking-wider'>C# ASP.NET SQL</p>
                    </div>
                </div>
                <div className="text-center mx-auto" name="project">
                    <p className='text-2xl font-bold inline border-b-4 border-[#ffd700] md:hover:opacity-70 md:hover:ease-in duration-250'> MY PROJECTS</p>
                    <div className='text-center mt-5 md:text-left'>
                        <div>
                            <p className='font-semibold text-lg sm:text-xl md:text-2xl'>1. The Outer Base</p>
                            <p className='md:px-5 leading-loose'>A 2D Sci-fi Role Playing Game</p>
                            <div className='mt-4 md:ml-3'>
                                <a target="_blank" rel="noreferrer" href='https://leduyantran.itch.io/project-outer-base-in-progress' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 hover:bg-[#ffd700] hover:text-[#121212]'>DEMO</a> 
                                <a target="_blank" rel="noreferrer" href='https://github.com/tranleduyan/ProjectOuterBase' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 ml-3 hover:bg-[#ffd700] hover:text-[#121212]'>GITHUB</a>
                            </div>
                        </div>
                        <div>
                        <p className='font-semibold text-lg sm:text-xl md:text-2xl mt-5'>2. Today-Do List!</p>
                            <p className='md:px-5 leading-loose'>A Mini React To-Do List Web Application</p>
                            <div className='mt-4 md:ml-3'>
                            <a target="_blank" rel="noreferrer" href='https://stirring-druid-4d9125.netlify.app/' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 hover:bg-[#ffd700] hover:text-[#121212]'>DEMO</a> 
                                <a target="_blank" rel="noreferrer" href='https://github.com/tranleduyan/TodayDoList' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 ml-3 hover:bg-[#ffd700] hover:text-[#121212]'>GITHUB</a>
                            </div>
                        </div>
                        <div>
                        <p className='font-semibold text-lg sm:text-xl md:text-2xl mt-5'>3. Online Menu Management System</p>
                            <p className='md:px-5 leading-loose'>A DubHack'22 Hackathon Entry Project</p>
                            <div className='mt-4 md:ml-3'>
                                <button className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 hover:bg-[#ffd700] hover:text-[#121212]'>DEMO NOT AVAILABLE</button> 
                                <a target="_blank" rel="noreferrer" href='https://github.com/lethienantran/MenuManagementService' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 ml-3 hover:bg-[#ffd700] hover:text-[#121212]'>GITHUB</a>
                            </div>
                        </div>
                        <div>
                        <p className='font-semibold text-lg sm:text-xl md:text-2xl mt-5'>4. Warrior Knock Out</p>
                            <p className='md:px-5 leading-loose'>A Freshman 2-Player 2D Fighting Game</p>
                            <div className='mt-4 md:ml-3'>
                                <a target="_blank" rel="noreferrer" href='https://leduyantran.itch.io/warrior-knock-out' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 hover:bg-[#ffd700] hover:text-[#121212]'>DEMO</a> 
                                <a target="_blank" rel="noreferrer" href='https://github.com/tranleduyan/WarriorKnockOut' className='text-[#ffd700] border-[#ffd700] border-2 px-4 py-1 ml-3 hover:bg-[#ffd700] hover:text-[#121212]'>GITHUB</a>
                            </div>
                        </div>
                        <div className='mt-4'>
                        <a className='font-semibold text-base md:text-lg hover:text-[#ffd700]' target="_blank" rel="noreferrer" href='https://github.com/tranleduyan'>See More &rarr;</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About