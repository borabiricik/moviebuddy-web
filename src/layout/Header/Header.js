import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { brand,fadeTop } from "../../../styles/Components/Header/Nav.module.scss"
import Nav from '../../Components/Header/Nav'

const Header = () => {
    const [scroll, setscroll] = useState(false)
    useEffect(() => {        
        window.addEventListener("scroll",() => {
          setscroll(window.scrollY>100);
        })
    }, [])
    return (
        <div className={`header w-full flex justify-center text-white items-center md:px-32 lg:fixed lg:top-0 z-50 lg:justify-start ${scroll ? "bg-black" : fadeTop}`}>
            <div className="flex items-center">
                <Link href="/">
                    <h1 className={`${brand} cursor-pointer font-bold text-center w-full `}>MovieBuddy</h1>
                </Link>

                <Nav />

            </div>


        </div>
    )
}

export default Header
