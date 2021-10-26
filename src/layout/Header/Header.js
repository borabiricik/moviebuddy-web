import React from 'react'
import Layout from '../Layout'
import Link from "next/link"
import styles from "../../../styles/Header.module.scss"
import Nav from '../../Components/Header/Nav'

const Header = () => {
    return (
        <div className="flex bg-primary justify-between text-white items-center md:px-32">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className={`${styles.brand} cursor-pointer `}>MovieBuddy</h1>
                </Link>

                <Nav />
                
            </div>


        </div>
    )
}

export default Header
