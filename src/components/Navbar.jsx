// Type: rafce - to create the framework below
import React, { useEffect, useState } from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleCloseMenu = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        // The code that we want to run
        window.addEventListener('scroll', handleScroll);
        // Optional return function - For clean up. Usually to reset a variable
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // The dependency array

    const handleScrollTo = (targetID) => {
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // - 105
                behavior: 'smooth'
            });
        }
    }

    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial'];
        const scrollPosition = window.scrollY + 100; // 110

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        });
    }

    const navLinks = (
        <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
            <li>
                {/* Framer Motion here */}
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('home');
                    }}
                    className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}>
                    Home
                </motion.a>
            </li>
            <li>
                <motion.a
                    href="#services"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('services');
                    }}
                    className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}>
                    Services
                </motion.a>
            </li>
            <li>
                <motion.a
                    href="#about"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('about');
                    }}
                    className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}>
                    About Us
                </motion.a>
            </li>
            <li>
                <motion.a
                    href="#pricing"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('pricing');
                    }}
                    className={`text-white ${activeSection === 'pricing' ? 'isActive' : ''}`}>
                    Pricing
                </motion.a>
            </li>
            <li>
                <motion.a
                    href="#testimonial"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('testimonial');
                    }}
                    className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}>
                    Testimonial
                </motion.a>
            </li>
        </ul>
    );

    return (
        <header className='bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10'>
            <div className='container mx-auto flex justify-between items-center h-full'>
                {/* Logo */}
                <div className='text-white text-sm font-semibold'>
                    {/* Syntax a */}
                    <a href="/">
                        {/* Syntax img */}
                        <img src="/logo.svg" alt="Mind Leap Logo" />
                        <span className='ml-12'>By Vincent</span>
                    </a>
                </div>
                {/* NavItems */}
                <div className='hidden md:flex flex-grow justify-center'>
                    {navLinks}
                </div>
                {/* Button */}
                <div className='hidden md:block'>
                    <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded' onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>
                        Contact Us
                    </a>
                </div>
                {/* Hamburger Menu */}
                {/* ${} is a dynamic class */}
                <div className='block md:hidden'>
                    <button className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`} onClick={handleToggle}>
                        <HiOutlineMenuAlt3 className='size-6' />
                    </button>
                </div>
            </div>
            {/* Mobile NavItems */}
            {/* Conditional Rendering with isOpen */}
            {
                isOpen && (
                    <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                        <ul className='flex flex-col p-4 space-y-3'>
                            {navLinks.props.children}
                            <li className='py-2'>
                                <a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded' onClick={(e) => { e.preventDefault(); handleCloseMenu(); handleScrollTo('contact'); }}>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </header>
    )
}

export default Navbar