"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center text-white">
        {/* Logo - Left */}
        <Link href="/" className="text-3xl font-bold">
          <span className="text-[#FF385C]">Rent</span>
          <span className="text-white">Bro</span>
          <span className="text-[#FF385C]">.</span>
        </Link>

        {/* Centered Navigation Links */}
        <ul className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <button href="/" className="hover:text-gray-400">
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                document
                  .getElementById("howworks")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-gray-400"
            >
              How it works
            </button>
          </li>
          <li>
            <button onClick={() =>
                    document
                      .getElementById("listings")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-400">
              Listings
            </button>
          </li>
          <li>
            <button href="/contact" className="hover:text-gray-400">
              Contact us
            </button>
          </li>
        </ul>

        {/* Log in / Sign up Buttons - Right (Desktop Only) */}
        <div className="hidden md:flex space-x-3">
          <button className="border rounded-md px-4 py-2 hover:bg-zinc-700">
            Log in
          </button>
          <button className="rounded px-4 py-2 text-white bg-[#FF385C] hover:bg-[#E0274E] transition duration-300">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button - Right */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-gray-800 p-5 rounded-md shadow-lg"
          >
            <ul className="text-center space-y-4 text-white">
              <li>
                <button
                  honClick={() =>
                    document
                      .getElementById("howworks")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("howworks")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-400"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("listings")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-400"
                >
                  Listings
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("howworks")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-gray-400"
                >
                  Contact us
                </button>
              </li>
            </ul>

            {/* Mobile Log in / Sign up Buttons - Now inside Menu */}
            <div className="text-white flex justify-center space-x-3 mt-4">
              <button className="border rounded-md px-4 py-2 hover:bg-zinc-700">
                Log in
              </button>
              <button className="rounded px-4 py-2 text-white bg-[#FF385C] hover:bg-[#E0274E] transition duration-300">
                Sign up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
