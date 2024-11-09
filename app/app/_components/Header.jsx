"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import AppContext from '../_Context/AppContext' // Make sure this is correct

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { CartLength } = useContext(AppContext); 
  const { user } = useUser();

  useEffect(() => {
    // Set isLogin state to true if the URL includes "sign-in" or "sign-up"
    const currentUrl = window.location.href;
    setIsLogin(currentUrl.includes("sign-up") || currentUrl.includes("sign-in"));
  }, []); // Only runs once when the component mounts

  return (
    !isLogin && (
      <header className="bg-white">
        <div className="shadow-sm mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="#">
            <span className="sr-only">Home</span>
            {/* SVG Logo */}
            <svg
              className="h-16 w-[80px]"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#0066CC">
                <path
                  d="M50,60 L30,100 L50,140"
                  stroke="#0066CC"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M150,60 L170,100 L150,140"
                  stroke="#0066CC"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
              <g fill="#0066CC">
                <rect
                  x="70"
                  y="80"
                  width="60"
                  height="40"
                  rx="5"
                  fill="#0066CC"
                />
                <circle cx="80" cy="135" r="6" fill="#0066CC" />
                <circle cx="120" cy="135" r="6" fill="#0066CC" />
              </g>
            </svg>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#">Explore</Link></li>
                <li><Link href="#">Projects</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact Us</Link></li>
              </ul>
            </nav>

            {!user ? (
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link href="/sign-in" className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600">Login</Link>
                  <Link href="/sign-up" className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-blue-600/75 sm:block">Register</Link>
                </div>
                <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="relative cursor-pointer">
                  <BsCart2 className="text-black" size={24} />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {CartLength || 0} {/* Fallback to 0 if CartLength is undefined */}
                  </span>
                </div>
                <UserButton />
              </div>
            )}
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
