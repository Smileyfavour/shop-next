import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineCloseCircle, AiFillHome } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { BsFillHeartFill, BsFillCreditCardFill, BsCart4 } from 'react-icons/bs';
import { ImInfo } from 'react-icons/im';
import { FaRegHandshake } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { useRouter } from 'next/router';

export default function MainNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* Main Navigation */}
      <nav className={mainNavStyles.navBar}>
        {/* Left Section */}
        <ul className={mainNavStyles.navSection}>
          <li>
            <Link href="/" className={mainNavStyles.brandName}>
              Shop-Next
            </Link>
          </li>
          <li>
            <Image width={30} height={38} src="/shop-next logo.png" alt="shop-next" />
          </li>
        </ul>

        {/* Middle - Search Bar */}
        <div className={mainNavStyles.searchBlock}>
          <div className={mainNavStyles.searchPanel}>
            <input
              type="text"
              placeholder="Search products and categories"
              className={mainNavStyles.search}
            />
            <button className={mainNavStyles.searchBtn}>
              <GiMagnifyingGlass />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <ul className={mainNavStyles.navSection}>
          <li className={mainNavStyles.responsiveMenuItems}>
            <Link href="/login" className={mainNavStyles.navText}>
              LOGIN
            </Link>
          </li>
          <li className={mainNavStyles.responsiveMenuItems}>
            <Link href="/signup" className={mainNavStyles.navText}>
              SIGNUP
            </Link>
          </li>
          <li className={mainNavStyles.responsiveMenuItems}>
            <Link href="/help" className={mainNavStyles.navText}>
              help
            </Link>
          </li>
          <li>
            <HiMenu
              className={mainNavStyles.menu}
              onClick={() => setShowMobileNav(true)}
            />
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Overlay */}
      {showMobileNav && (
        <div className={mainNavStyles.mobileNav}>
          <div className={mainNavStyles.halfScreenMenuBlock}>
            <AiOutlineCloseCircle
              className={mainNavStyles.mobileMenuClose}
              onClick={() => setShowMobileNav(false)}
            />

            <ul className={mainNavStyles.mobileMenuItems}>
              <MobileNavItem href="/" label="Home" icon={<AiFillHome color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="#" label="Wishlist" icon={<BsFillHeartFill color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="/addtocart" label="Add to cart" icon={<BsCart4 color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="#" label="Buy" icon={<BsFillCreditCardFill color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="#" label="Sell" icon={<FaRegHandshake color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="/products/contact-us" label="Contact Us" icon={<FiPhoneCall color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="/about-us" label="About Us" icon={<ImInfo color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="#" label="Support" icon={<BiSupport color="#e35a63" />} onClick={setShowMobileNav} />
              <MobileNavItem href="/signup" label="sign up" icon={<IoMdLogIn color="#e35a63" />} onClick={setShowMobileNav} />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ href, label, icon, onClick }) {
  return (
    <li className={mainNavStyles.mobileMenuItem}>
      <Link
        href={href}
        className={mainNavStyles.iconText}
        onClick={() => onClick(false)}
      >
        {label}
      </Link>
      {icon}
    </li>
  );
}

const mainNavStyles = {
  navBar: 'h-[80px] flex justify-between items-center px-3 border border-gray-200 shadow-md ',
  navSection: 'flex items-center space-x-3',
  navText: 'px-4 py-2 text-white bg-indigo-800 rounded-full border border-blue-600',
  brandName: 'font-reading text-2xl text-red-600 font-bold',
  searchBlock: 'hidden md:flex items-center md:pr-20',
  searchPanel: 'flex gap-2 justify-center',
  search: 'md:w-[450px] w-[150px] border border-red-400 rounded-md py-2 px-3',
  searchBtn: 'w-[50px] flex justify-center items-center bg-indigo-800 text-white rounded-md',
  responsiveMenuItems: 'hidden sm:block',
  menu: 'block md:hidden w-[38px] h-[38px] text-gray-500 cursor-pointer',
  mobileNav: 'fixed inset-0 bg-black/80 z-50 flex justify-end',
  halfScreenMenuBlock: 'h-screen w-[300px] max-w-[420px] bg-black p-4 relative',
  mobileMenuClose: 'text-gray-300 w-[38px] h-[38px] absolute top-2 right-2 cursor-pointer',
  mobileMenuItems: 'flex flex-col gap-4 mt-14 text-white',
  mobileMenuItem: 'flex justify-between items-center border-b border-gray-700 pb-2',
  iconText: 'text-red-300 hover:text-red-400',
};
