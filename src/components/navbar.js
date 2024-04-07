"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Menu from "../../public/icon-menu.svg";
import CloseMenu from "../../public/icon-close-menu.svg";
import Link from "next/link";

export default function Navbar({ menu, handleClick }) {
   
    return (
        <nav className={`${menu ? "mb-32" : "mb-0"} flex justify-between items-center relative`}>
            <div id="logo" className="flex justify-center items-center relative">
                <Image src='/inolystic.png' alt="logo" width={50} height={50} />
                <h1 className='text-2xl'>Innolytics</h1>
            </div>

            {/* Render navigation links in a flex layout on big screens */}
            <ul className="hidden lg:flex justify-between gap-3">
                <li className="opacity-65 hover:opacity-100 cursor-pointer"><Link href="/">Home</Link></li>
                <li className="opacity-65 hover:opacity-100 cursor-pointer"><Link href="../about">About US</Link></li>
                <li className="opacity-65 hover:opacity-100 cursor-pointer"><Link  href="../media-center">Media Center</Link></li>
                <li className="opacity-65 hover:opacity-100 cursor-pointer"><Link Link href="../contact-us">Contact US</Link></li>
            </ul>

            {/* Render navigation links below the button when menu is open */}
            <div className={`lg:hidden ${menu ? 'block absolute top-20 left-4 md:left-[0.8rem]' : 'hidden'}`}>
                <Link className="block mb-3 opacity-65 hover:opacity-100 cursor-pointer" href="/">Home</Link>
                <Link className="block mb-3 opacity-65 hover:opacity-100 cursor-pointer" href="../about">About US</Link>
                <Link className="block mb-3 opacity-65 hover:opacity-100 cursor-pointer" href="../media-center">Media Center</Link>
                <Link className="block mb-3 opacity-65 hover:opacity-100 cursor-pointer" href="../contact-us">Contact US</Link>
            </div>

            <button className='lg:hidden' onClick={handleClick}>
                {menu ? <Image src={CloseMenu} alt='close-menu--con' width={40} /> : <Image src={Menu} alt="menu-icon" width={40} />}
            </button>
        </nav>
    );
};
