import React, { useState } from "react";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="flex flex-row w-full relative px-4 md:px-40 py-4 justify-between z-50 items-center">
      <Link href="/">
        <div className="flex gap-1 opacity-100 transition-all hover:opacity-70 items-center">
          <Image src={Logo} alt="logo" width={100} />
        </div>
      </Link>
      <div className="md:flex hidden font-light flex-row gap-16">
        <Link href="/">
          <p className="text-gray-800 hover:opacity-70 transition-all">Home</p>
        </Link>
        <Link href="/about">
          <p className="text-gray-800 hover:opacity-70 transition-all">About</p>
        </Link>
        <Link href="/services">
          <p className="text-gray-800 hover:opacity-70 transition-all">
            Services
          </p>
        </Link>
        <Link href="/contact">
          <p className="text-gray-800 hover:opacity-70 transition-all">
            Contact
          </p>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex">
        {isMobileMenuOpen ? (
          <button
            onClick={closeMobileMenu}
            className="text-slate-800 focus:outline-none"
          >
            <IoMdClose className="text-2xl" />
          </button>
        ) : (
          <button
            onClick={toggleMobileMenu}
            className="text-slate-800 focus:outline-none"
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute h-screen bg-[white] top-20 left-0 right-0 gap-20 pt-20 pb-8 flex flex-col items-center z-20"
          >
            <Link href="/">
              <p className="text-gray-800 hover:opacity-70 transition-all">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="text-slate-800 text-lg font-light hover:opacity-70 transition-all">
                About
              </p>
            </Link>
            <Link href="/services">
              <p className="text-slate-800 text-lg font-light hover:opacity-70 transition-all">
                Services
              </p>
            </Link>
            <Link href="/contact">
              <p className="text-slate-800 text-lg font-light hover:opacity-70 transition-all">
                Contact
              </p>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
