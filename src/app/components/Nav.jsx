"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";


export function getDefaultTheme() {
    if (typeof window !== 'undefined' && window.matchMedia) {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (prefersDarkMode) {
            return 'dark';
        } else {
            return 'light';
        }
    } else {
        // Handle non-browser environment
        return 'light';
    }
}

const Nav = () => {
    const localTheme = localStorage.getItem('theme')
    const defaultTheme = localTheme ? localTheme : getDefaultTheme();
    const [theme, setTheme] = useState(defaultTheme);

    const pathname = usePathname();

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    });

    return (
        <nav className="navbar sticky-top navbar-expand-lg border-bottom bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">Murodilla | Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-link ${pathname === "/" && "active"}`} href="/">Home</Link>
                        <Link className={`nav-link me-2 ${pathname === "/about" && "active"}`} href="/about">About</Link>
                        <div>
                            <button className="btn btn-outline-secondary" onClick={changeTheme}>
                                {theme === 'light' ? <BsMoonStarsFill className="fs-4" /> : <HiSun className="fs-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;