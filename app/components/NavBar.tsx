"use client"
import { Button } from '@radix-ui/themes'
import React from 'react'
import { X, Menu } from 'lucide-react'


const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 border-b border-border'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/*Desktop Menu */}
            <div className='flex justify-between items-center h-16'>
                {/* Logo//Title */}
                <div className='flex items-center'>
                    <h1 className='text-2xl font-heading font-bold bg-gradient-hero bg-clip-text text-transparent text-nowrap'>
                        Ntp Dinasty Florest
                    </h1>
                </div>
                
                <div className='hidden md:flex items-center space-x-4 text-nowrap'>
                    <a className='text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#home">Home</a>
                    <a className='text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#aboutus">About Us</a>
                    <a className='text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#services">Servicios</a>
                    <a className='text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#gallery">Gallery</a>
                    <a className='text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#testimonials">Testimonials</a>
                    <a className='text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#contactus">Contact Us</a>
                    <a href='#' className='hidden lg:flex text-black bg-gradient-hero py-1 px-2 rounded-md hover:text-white transition-colors duration-300' >Request Quote</a>
                    
                </div>
            

                {/* Mobil Menu */}
                <div className='md:hidden'>
                    <a href='#' className='text-foreground hover:text-primary transition-colors duration-300'>
                        <Menu />
                    </a>
                </div>

            </div>

        </div>
    </nav>
  )
}

export default NavBar