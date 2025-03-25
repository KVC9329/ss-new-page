"use client"

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-300 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center fixed">
        <Link href="/" className="text-blue-600 text-xl font-bold">
          SS Consultants
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? "X" : "="}
          </button>
        </div>
        <ul
          className={`md:flex space-x-6 absolute md:static bg-blue-600 md:bg-transparent w-full md:w-auto top-16 left-0 md:flex-row flex-col md:space-x-6 space-y-4 md:space-y-0 items-center p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="#AI-Recruitment" className="text-white bg-blue-600 py-2 px-5 rounded-md">
              Ai Recruitment
            </Link>
          </li>
          <li>
            <Link href="#Our-Process" className="text-white bg-blue-600 py-2 px-5 rounded-md">
              Our process
            </Link>
          </li>
          <li>
            <Link href="#Our-Services" className="text-white bg-blue-600 py-2 px-5 rounded-md">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="#blogs" className="text-white bg-blue-600 py-2 px-5 rounded-md">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;