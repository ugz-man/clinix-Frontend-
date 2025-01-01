"use client";

import { Collapse, IconButton, Navbar } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";

function HomePageNavbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(function () {
    function handleResize() {
      return window.innerWidth >= 960 && setOpenNav(false);
    }

    window.addEventListener("resize", handleResize);

    return function () {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList: React.ReactNode = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link href="/" className="flex items-center text-gray-700">
          Home
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link href="#services" className="flex items-center text-gray-700">
          Services
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link href="#doctors" className="flex items-center text-gray-700">
          Doctors
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link href="#about" className="flex items-center text-gray-700">
          About
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link href="#contact" className="flex items-center text-gray-700">
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar className="max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between px-0 text-blue-gray-900">
        <a
          href="#"
          className="mr-4 cursor-pointer py-1.5 text-lg font-bold lg:text-3xl"
        >
          Clinix
        </a>
        <div className="flex items-center gap-x-5">
          <div className="hidden lg:block">{navList}</div>

          {/* <Button type="secondary" size="sm" className="hidden lg:inline-block">
            Log In
          </Button> */}
          {/* <Button type="primary" size="sm" className="hidden lg:inline-block">
            Sign Up
          </Button> */}
          <ButtonLink
            type="secondary"
            href="/login"
            className="hidden lg:inline-block"
          >
            Log In
          </ButtonLink>
          <ButtonLink
            type="primary"
            href="signup"
            className="hidden lg:inline-block"
          >
            Sign Up
          </ButtonLink>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1 px-2 py-2">
            {/* <Button type="secondary" size="sm" className="flex-grow text-black">
              Log In
            </Button> */}
            <ButtonLink
              type="secondary"
              href="/login"
              className="flex-grow text-black"
            >
              Log In
            </ButtonLink>
            {/* <Button type="primary" size="sm" className="flex-grow">
              Sign Up
            </Button> */}
            <ButtonLink type="primary" href="/signup" className="flex-grow">
              Sign Up
            </ButtonLink>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default HomePageNavbar;
