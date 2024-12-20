"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {

    const pathname = usePathname();

    return (
        <nav className="flex w-full bg-gray-200 h-20 gap-10 p-1">
            <Image src="/images/logo.png" width={72} height={72} alt="logo" />
            <div className="flex items-center gap-5">
                <Link className={`${pathname == "/" ? "active" : ""} [&.active]:underline`} href="/">Home</Link>
                <Link className={`${pathname.startsWith("/gallery") ? "active" : ""} [&.active]:underline`} href="/gallery">Gallery</Link>
            </div>
        </nav>
    )
}

export default NavBar