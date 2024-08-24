import React from 'react'
import footerLogo from '../assets/footer-logo.svg'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='py-12 bg-gray-100 px-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
                <div className='space-y-6 mr-14'>
                    <div className='flex items-center space-x-2'>
                        <img src={footerLogo} alt="Footer Logo" className='w-32 h-auto' />
                    </div>
                    <p className='text-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex space-x-4'>
                        <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaFacebookF />
                        </a>
                        <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaTwitter />
                        </a>
                        <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaInstagram />
                        </a>
                        <a href="#" className='bg-gray-200 text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-primary hover:text-white'>
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-4'>
                        Quick Links
                    </h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#home" className='hover:underline text-gray-700'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className='hover:underline text-gray-700'>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#services" className='hover:underline text-gray-700'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:underline text-gray-700'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-4'>
                        Contact Info
                    </h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#" className='hover:underline text-gray-700'>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline text-gray-700'>
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:underline text-gray-700'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className='hover:underline text-gray-700'>
                                Support Center
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-semibold mb-4'>
                        Support
                    </h3>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-2'>
                            <FaMapMarkerAlt className='text-primary' />
                            <p className='text-gray-700'>
                                123 Street, City, Country
                            </p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaPhoneAlt className='text-primary' />
                            <p className='text-gray-700'>
                                +123 456 7890
                            </p>
                        </li>
                        <li className='flex items-center gap-2'>
                            <FaEnvelope className='text-primary' />
                            <p className='text-gray-700'>
                                info@company.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer