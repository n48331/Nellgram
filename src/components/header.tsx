"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logoWhite.jpeg";
import greenLogo from "../../public/image/logoGreen.jpeg";
import smallLogo from "../../public/image/small-logo.jpeg";
import { FunctionComponent } from "react";
import { it } from "node:test";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const navLinks = [
    {
      title: "PRODUCTS",
      href: "",
    },
    {
      title: "RECIPES",
      href: "",
    },
    {
      title: "ABOUT US",
      href: "",
    },
    {
      title: "CONTACT",
      href: "",
    },
  ];
  return (
    <div className="w-full md:bg-theme-color">
      <nav className="mx-auto w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-fit items-center justify-between">
          <div className="flex flex-1 items-center md:items-center md:justify-between">
            <div className="flex flex-shrink-0 items-center justify-between">
              <Image
                src={logo}
                alt={"logo"}
                width={200}
                height={200}
                className="hidden md:block"
              />
              <Image
                src={greenLogo}
                alt={"logo"}
                width={200}
                height={200}
                className="block md:hidden"
              />
            </div>
            <div className="hidden sm:ml-6 md:block">
              <div className="flex space-x-4 items-center">
                {navLinks.map((items, index) => {
                  if (index  === navLinks.length / 2) {
                    return (
                      <>
                        <Link
                        key={index}
                          href="#"
                          className="text-white"
                        >
                          <Image
                            src={smallLogo}
                            alt={"small logo"}
                            width={200}
                            height={200}
                          />
                        </Link>
                        <Link
                          href={items.href}
                          className="text-white rounded-md px-3 py-2 text-sm font-semibold"
                        >
                          {items.title}
                        </Link>
                      </>
                    );
                  }
                  return (
                    <Link
                    key={index}
                      href={items.href}
                      className="text-white rounded-md px-3 py-2 text-sm font-semibold"
                      aria-current="page"
                    >
                      {items.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden md:hidden" role="dialog" aria-modal="true">
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
              className="-m-2.5 rounded-full p-1 text-theme-color font-semibold border-2 border-white bg-white "
            >
              <span className="sr-only">Close menu</span>
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
                {navLinks.map((items,index)=><div key={index} className="py-4 cursor-pointer">
                  <Link
                  
                    href="#"
                    className="text-sm font-semibold"
                    aria-current="page"
                  >
                    {items.title}
                  </Link>
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
