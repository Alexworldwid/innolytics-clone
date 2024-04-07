"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState, cloneElement } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
      setMenu(!menu);
  }

  const childrenWithProps = React.Children.map(children, child =>
    cloneElement(child, { menu, handleClick })
  );


  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar menu={menu} handleClick={handleClick} />
        {childrenWithProps}
        <Footer />
      </body>
    </html>
  );
}
