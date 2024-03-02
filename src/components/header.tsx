/* eslint-disable react/jsx-key */
"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/nellgram_logo_white.svg";
import greenLogo from "../../public/image/nellgram_logo_green.svg";
import smallLogo from "../../public/image/small-logo.jpeg";
import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion"

const container = {
  hide: {},
  show: {
    transition: {
      delay: 1,
      type: "spring",
      duration: 0.15,
      staggerChildren: 0.05,
    },
  },
};

interface HeaderProps { }

const Header: FunctionComponent<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      title: "PRODUCTS",
      href: "/#products",
    },
    {
      title: "QUALITY",
      href: "/quality",
    },
    {
      title: "ABOUT US",
      href: "/#about",
    },
    {
      title: "CONTACT",
      href: "/#contact",
    },
  ];
  return (
    <div className="w-full md:bg-theme-color sticky top-0 z-10 bg-[#fff]">
      <nav className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-fit items-center justify-between">
          <div className="flex md:flex-1 items-center md:items-center md:justify-between">
            <div className="flex flex-shrink-0 items-center justify-between">
              <Link href={'/'}>
              <Image
                src={logo}
                alt={"logo"}
                width={180}
                height={180}
                className="hidden md:block"
                style={{padding:'0 1rem',margin:'1rem 0'}}
                />
              <Image
                src={greenLogo}
                alt={"logo"}
                width={180}
                height={180}
                style={{padding:'0 1rem',margin:'1rem 0'}}
                className="block md:hidden"
                />
                </Link>
            </div>
            
              <div className="hidden sm:ml-6 md:block">
                <div className="flex space-x-4 items-center">
                  {navLinks.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-white rounded-md px-3 py-2 text-sm font-semibold"
                    >
                      {item.title}
                    </Link>
                  ))}
                  
                  <Link href="#" className="text-white">
                    <Image
                      src={smallLogo}
                      alt="small logo" 
                      width={120}
                      height={120} 
                    />
                  </Link>
                </div>
              </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-theme-color"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div

        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between bg-theme-color px-6 py-2">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                src={smallLogo}
                alt={"small logo"}
                width={100}
                height={100}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-full p-1 text-theme-color font-semibold border-2 border-white bg-white"
              onClick={() => setIsOpen(false)}
            >

              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 px-6 py-6 flow-root text-theme-color ">
            <div className="-my-6 py-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 divide-y divide-gray-500/10">
                {navLinks.map((items) => (
                  <motion.div className="py-4 cursor-pointer" key={items.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}

                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={items.href}
                      className="text-sm font-semibold"
                      aria-current="page"
                      key={items.title}
                    >
                      {items.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
