import React, { useState } from 'react'
import thumbnailImg from '../assets/video-thumbnail.webp'
// React Icons here
import { IoPlayOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
// Import Animation
import { motion } from "framer-motion"
import { fadeIn } from '../utils/AnimationVariants';

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  }

  return (
    <motion.div id='about' className='bg-[#f7f8fc] pb-16 pt-20' variants={fadeIn('down', 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
      <div className='container mx-auto'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          <div className='md:w-1/2 w-full mb-8 md:mb-0'>
            {/* Left Side */}
            {
              !isVideoPlaying && (
                <div className='relative'>
                  <img src={thumbnailImg} alt="Thumbnail Image" className='w-full md:h-[446px] h-auto rounded-lg object-cover' />
                  <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer' onClick={handleVideoPlay}>
                    <IoPlayOutline className='text-white size-12 pl-1' />
                  </button>
                </div>
              )
            }
          </div>
          <div className='w-full md:w-1/2 px-4'>
            {/* Right Side */}
            <h2 className='text-3xl font-bold mb-4 font-secondary capitalize'>
              Individual consult and therapy
            </h2>
            <p className='text-lg mb-8'>
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia. Lorem Ipsum is simply dummy text.
            </p>
            <button className='bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90'>
              <a href="/" className='flex gap-1 items-center'>
                <span>Get Started</span>
                <IoArrowForwardCircleSharp className='size-5' />
              </a>
            </button>
          </div>
        </div>
        {
          isVideoPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
              <div className='relative w-full h-full flex items-center justify-center z-50'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9x7zAxxPRxU?si=xNMZtU6UacI2X4d3&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                  <IoIosClose />
                </button>
              </div>
            </div>
          )
        }
      </div>
    </motion.div>
  )
}

export default About