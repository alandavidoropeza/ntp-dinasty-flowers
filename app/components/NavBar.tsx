"use client"
import { Button } from '@radix-ui/themes'
import React from 'react'
import { X, Menu } from 'lucide-react';
import { useState } from "react";


const NavBar = () => {
    
const [isOpen, setIsOpen] = useState(false);

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
                    <a href='#' className='hidden lg:flex text-black bg-gradient-hero py-1 px-4 rounded-md hover:text-white transition-colors duration-300' >Request Quote</a>                    
                </div>
            

                {/* Mobil Menu */}
                <div className='md:hidden'>
                    <a href='#' onClick={(e)=>{e.preventDefault(); setIsOpen(!isOpen);}} className='text-foreground hover:text-primary transition-colors duration-300'>
                        {isOpen ? <X /> : <Menu /> }
                    </a>
                </div>
            </div>

            {isOpen &&

            <div className='md:hidden'>
                <div className='className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border'>
                    <a onClick={e=>setIsOpen(false)} className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#home">Home</a>
                    <a onClick={e=>setIsOpen(false)} className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#aboutus">About Us</a>
                    <a onClick={e=>setIsOpen(false)} className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#services">Servicios</a>
                    <a onClick={e=>setIsOpen(false)} className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#gallery">Gallery</a>
                    <a onClick={e=>setIsOpen(false)} className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#testimonials">Testimonials</a>
                    <a onClick={e=>setIsOpen(false)} className='block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium' href="#contactus">Contact Us</a>
                    <a onClick={e=>setIsOpen(false)} href='#' className='text-center block px-3 py-2 text-black bg-gradient-hero rounded-md hover:text-white transition-colors duration-300' >Request Quote</a>

                </div>
            </div>
            }


        </div>
    </nav>
  )
}

export default NavBar