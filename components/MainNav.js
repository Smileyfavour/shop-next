import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu} from 'react-icons/hi';
import { AiOutlineClose,AiOutlineArrowRight,AiFillHome, AiOutlineCloseCircle } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { BsFillHeartFill,BsFillCreditCardFill, BsCart4,} from 'react-icons/bs';
import { ImInfo } from 'react-icons/im';
import {FaRegHandshake} from "react-icons/fa"
import {BiSupport, biSupport} from "react-icons/bi"
import { useRouter } from 'next/router';
import { useSession,signOut, signIn } from 'next-auth/react';
import { icons } from 'react-icons';

export default function MainNav() {
    const [showMobileNav,setShowMobileNav] = useState(false);
    // const { data:session } = useSession();

    const router = useRouter();

    // const handleFirebaseSignout = () => {
        
    // }

    return (
        <div>
            <nav className={mainNavStyles.navBar} id='mainNav' style={{
                backgroundColor:router.asPath.split('/').includes('/') ? '#ddd6fe' : null,
            }}>
            <ul className={mainNavStyles.navSection}>
                <li className={mainNavStyles.responsiveMenuItems}>
                    <Link href='/' className={mainNavStyles.brandName}>Shop-Next</Link>
                </li>
                <li>
                    <Image width={30} height={38} src='/shop-next logo.png' alt='shop-next'/>
                </li>

                {/* <li className={navbarStyles.responsiveMenuItems}>
                    <Link href='#' className={navbarStyles.navText}>order</Link>
                </li> */}
            </ul>

            <ul className={mainNavStyles.navSection}>
               <div className={mainNavStyles.searchBlock}>
                     <div className={mainNavStyles.searchPanel}>
                     {/* Input field */}
                     <input type="type"
                     placeholder="search products and categories"
                     className={mainNavStyles.search}/>
                     <button className={mainNavStyles.searchBtn}>
                         <GiMagnifyingGlass/>
                     </button>
                     </div>
                   </div>
                <li className={mainNavStyles.responsiveMenuItems} 
                style={{paddingRight:8,}}>
                    {
                       <Link href='/signin' className={mainNavStyles.navText}>SIGN IN</Link>
                     
                    }
                </li>
                <li className={mainNavStyles.responsiveMenuItems} 
                style={{paddingRight:8}}>
                    {
                       <Link href='#' className={mainNavStyles.navText}>SIGN UP</Link>
                     
                    }
                </li>
                {/* <li className={mainNavStyles.responsiveMenuItems}>
                <Link href='/addtocart' className={mainNavStyles.navPicture}><Image className={mainNavStyles.navPicture} 
                 width={30} height={30} src='/shopping-cart.png' alt='add to cart'/></Link>
                </li> */}
                <li>
                <HiMenu
                className={mainNavStyles.menu}
                onClick={() => setShowMobileNav(true)}/>
                </li>
            </ul>
            </nav>

            <nav className={mainNavStyles.mobileNav} 
            style={{display:showMobileNav ? 'block' : 'none'}}>
            <AiOutlineCloseCircle
            className={mainNavStyles.mobileMenuClose}
            onClick={() => setShowMobileNav(false)}
            />

            <div className={mainNavStyles.halfScreenMenuBlock}>
                <ul className={mainNavStyles.mobileMenuItems}>
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>Home</Link>
                        </span><AiFillHome color='#e35a63'/>
                       </p>
                    </li>
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='#' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>Wishlist</Link>
                        </span><BsFillHeartFill color='#e35a63'/>
                       </p>
                    </li>
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/addtocart' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>Add to cart</Link>
                        </span><BsCart4 color='#e35a63' />
                       </p>
                    </li>
                 
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='#' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>Buy</Link>
                        </span><BsFillCreditCardFill color='#e35a63'/>
                       </p>
                    </li>
                 
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='#' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>sell</Link>
                        </span><FaRegHandshake color='#e35a63'/>
                       </p>
                    </li>
                 
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/products/contact-us' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>contact us</Link>
                        </span><FiPhoneCall color='#e35a63'/>
                       </p>
                    </li>
                 
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='/about-us' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>About Us</Link>
                        </span><ImInfo color='#e35a63'/>
                       </p>
                    </li>
                 
                    <li className={mainNavStyles.mobileMenuItem}>
                       <p>
                        <span>
                            <Link href='#' onClick={() =>setShowMobileNav (false)} className={mainNavStyles.iconText}>support</Link>
                        </span><BiSupport color='#e35a63'/>
                       </p>
                    </li>
                 
                </ul>    
            </div>
        </nav>
        </div>
    )
}

const mainNavStyles= {
    navBar:'h-[80px] flex flex-row justify-between items-center px-3   border border-gray-200 shadow-md',
    navSection:'flex flex-row space-x-3  ',
    navText:'flex px-3 text-white  border border-blue-600 rounded-full shadow-xl bg-indigo-800 shadow-lg shadow-indigo-800/50 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 px-8 py-2 bg-indigo-800',
    brandName:'font-reading text-2xl text-red-600 font-bold',
    halfScreenMenuBlock:'h-screen min-w-[300px] max-w-[420px] flex flex-col bg-black absolute right-0 top-0',
    mobileMenuItem:'flex flex-row',
    mobileMenuClose:'text-gray-600 w-[38px] h-[38px] absolute top-2 right-2 z-10 ',
    iconText:' lg:text-red-300 text-red-300 hover:text-red-400',
    mobileMenuItems:'flex flex-col gap-3 pt-[60px] pr-4 pl-2',
    responsiveMenuItems:'hidden sm:block ',
    menu:'block md:hidden w-[38px] h-[38px] text-gray-500',
    mobileNav:'h-screen w-full bg-black/80 absolute top-0 left-0',
    mobileMenuText:'text-[20px] font-reading text-gray-400',
    mobileBottomItems:'flex flex-col gap-2 px-3 pb-3',
    searchBlock:'md:pr-[80px] pr-[50px]',
    searchPanel:' flex flex-row gap-2 justify-center',
    search:'md:w-[450px] w-[150px] border border-red-400 rounded-md py-2 px-3',
    searchBtn:'w-[50px] flex justify-center items-center bg-indigo-800 text-white  rounded-md cursor-pointer',
    // // authBtn:'block w-full h-[58px] flex flex-row justify-between items-center px-3 bg-pink-400 rounded-md',
    // btnItems:'text-xl',
    // createAcctBtn:'',
    // icon:'icons:flex flex-col gap-[none]',
    // navPicture:'flex flex-col justify-center items-cnter',
}