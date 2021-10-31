import React from 'react'
import Link from "next/link"
import {nav} from "../../../styles/Components/Header/Nav.module.scss"

const Nav = () => {
    return (
        <nav className={`md:pl-12 ${nav} font-semibold hidden lg:flex`}>
            <Link href="/" scroll={false} >
                <a href="#" className={"md:mr-10"}>Home</a>
            </Link>
            <Link href="/about" scroll={false} >
                <a href="#" className={"md:mr-10"}>About</a>
            </Link>
        </nav>
    )
}

export default Nav
