import React from 'react'
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function Authenticated({ children }) {
    const theme = useSelector((state) => state.theme.theme)
    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-black' : ''} `}>
            <Navbar />
            <div className="container mx-auto relative top-20">
                {children}
            </div>
        </div>
    )
}
