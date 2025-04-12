"use client";
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 py-5 text-center shadow-sm text-white">
      {/* Main Heading */}
      <h1 className="text-2xl font-bold mb-4">
        BE A PART OF THE ECHO LOCUM TENENS TEAM
      </h1>

      {/* Opportunities Button */}
      <Link
        href="#"
        className="inline-block mx-3 mb-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
      >
        Opportunities
      </Link>

      {/* Social Icons - Centered */}
      <div className="flex justify-center space-x-4 my-4">
        <Link 
          href="#" 
          className="hover:text-blue-300 transition-colors text-xl"
          aria-label="Facebook"
        >
          <FaFacebook />
        </Link>
        <Link 
          href="#" 
          className="hover:text-blue-300 transition-colors text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </Link>
        <Link 
          href="#" 
          className="hover:text-blue-300 transition-colors text-xl"
          aria-label="Twitter"
        >
          <FaTwitter />
        </Link>
      </div>

      {/* Bottom Links */}
      <div className="mt-3 space-x-4">
        <Link href="#" className="hover:text-blue-300 transition-colors">
          Terms of Use
        </Link>
        <Link href="#" className="hover:text-blue-300 transition-colors">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-blue-300 transition-colors">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}