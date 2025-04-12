"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        
        <div className="flex flex-col p-4 space-y-3">
          <Link 
            href="/about" 
            className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link 
            href="/about/faq" 
            className="px-6 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-xs font-medium"
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </Link>
          <Link 
            href="/jobs" 
            className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            SEARCH JOBS
          </Link>
          <Link 
            href="/clinicians" 
            className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            CLINICIANS
          </Link>
          <Link 
            href="/blog" 
            className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            BLOG
          </Link>
          <Link 
            href="/contact" 
            className="px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Hamburger Menu (Mobile Only) */}
            <button 
              className="md:hidden text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="text-xl" />
            </button>

            {/* Centered Logo (Mobile) */}
            <div className="flex-shrink-0 flex md:hidden absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <Image 
                  src="/mediclogo.jpeg"
                  alt="MedicJobs Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Logo */}
            <div className="hidden md:flex flex-shrink-0 items-center">
              <Link href="/">
                <Image 
                  src="/mediclogo.jpeg"
                  alt="MedicJobs Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            {isMounted && (
              <div className="hidden md:flex items-center space-x-6">
                <div 
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setAboutHover(true)}
                  onMouseLeave={() => setAboutHover(false)}
                >
                  <Link 
                    href="/about" 
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center h-full"
                  >
                    ABOUT
                    <svg 
                      className="ml-1 h-3 w-3" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {aboutHover && (
                    <div className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                      <Link 
                        href="/about/faq" 
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-xs"
                      >
                        FAQs
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link href="/jobs" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  SEARCH JOBS
                </Link>
                <Link href="/clinicians" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  CLINICIANS
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  BLOG
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                  CONTACT
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}