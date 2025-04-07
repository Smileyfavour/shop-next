import Link from "next/link"
import {ImFacebook2} from 'react-icons/im';
import {BsInstagram,BsTwitter, BsYoutube} from 'react-icons/bs'

export default function Footer() {
    const year = new Date().getFullYear();



    return(
        <footer className={footerStyles.footer}>
            <div className={footerStyles.copyrightsBlock}>
            <small className={footerStyles.copyrights}>&copy; {year} Shop-Next All rights reserved</small>
            </div>

           
            <ul className={footerStyles.socialBlock}>
                
                <li>
                    <Link href=''><ImFacebook2 className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href=''><BsInstagram className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><BsTwitter className={footerStyles.icon}/></Link>
                </li>
                <li>
                    <Link href='#'><BsYoutube className={footerStyles.icon}/></Link>
                </li>
                
            </ul>

            <ul className={footerStyles.legalBlock}>
            <li>
                    <Link href='#' className={footerStyles.legalText}>Terms and conditions</Link>
                </li>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Bug bounty</Link>
                 
                </li>
                <li>
                    <Link href='#' className={footerStyles.legalText}>Privacy Policy</Link>
                </li>
                <li>
                    <Link href='/products/contact-us' className={footerStyles.legalText}>Contact Us</Link>
                </li>
                <li>
                    <Link href='/about-us' className={footerStyles.legalText}>About Us</Link>
                </li>
            </ul>
        </footer>
    )
}

const footerStyles = {
    footer:'w-full flex flex-col md:flex-row justify-center items-center gap-2 md:justify-between bg-indigo-950 py-6 px-4',
    copyrightsBlock:'flex items-center',
    copyrights:'text-red-300',
    socialBlock:'flex flex-row items-center gap-1 md:gap-3',
    icon:'w-6 h-6 md:w-10 md:h-10 text-red-200',
    legalBlock:'flex flex-row items-center gap-3',
    legalText:'text-red-400 text-xs md:text-sm',
}

