import React from 'react'
import { useSelector } from "react-redux";

export default function GuestLayout({ children }) {
    const theme = useSelector((state) => state.theme.theme)
    return (
        <div className={` ${theme === 'dark' ? 'bg-black' : ''} `}>
            <div className="container mx-auto relative top-20">
                {children}
            </div>
        </div>
    )
}
