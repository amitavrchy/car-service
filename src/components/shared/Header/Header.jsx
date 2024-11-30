import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

const Header = () => {
    const menu = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' },
    ]
    return (
        <div className="navbar w-11/12 mx-auto py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link href='/'>
                    <Image width='80' height='50' src='assets/logo.svg' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-6 text-[13px]">
                    {menu.map((item) =>
                        <Link className='font-semibold text-secondary hover:text-primary duration-300' key={item.link} href={item.link}>{item.name}</Link>
                    )}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='icons flex gap-5 text-xl mr-5 text-secondary'>
                    <div className='cursor-pointer hover:text-primary duration-300'>
                        <MdOutlineShoppingBag />
                    </div>
                    <div className='cursor-pointer hover:text-primary duration-300'>
                        <IoSearch />
                    </div>
                </div>
                <a className="btn btn-outline border border-primary text-primary hover:bg-primary hover:text-white hover:border-primary">Appointment</a>
            </div>
        </div>
    )
}

export default Header