"use client"

import { ChevronDown, Dot } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function NavigationBar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    const navlinks = [
        { id: 0, path: "/", link: "Home" },
        { id: 1, path: "/biography", link: "Biography" },
        { id: 2, path: "/tributes", link: "Tribute" },
        { id: 3, path: "/photo-gallery", link: "Photo Gallery" },
    ]

    return (
        <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-zinc-100 transition-all duration-300">
            <div className="flex justify-between items-center px-5 py-4 md:px-10">
                {/* Left Logo + Title */}
                <Link href="/">
                    <div className="flex items-center gap-3">
                        <i className="fas fa-dove text-lg text-gray-200"></i>
                        <Image
                            src="/jv-transparent.png"
                            width={50}
                            height={50}
                            alt="Portrait of Juliana"
                            className="rounded-full shadow-sm select-none"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                            priority
                        />

                        <div className="leading-tight">
                            <span className="text-xs text-yellow-950 block">Glorious Memory of</span>
                            <span className="text-base md:text-lg font-bold text-yellow-800 block">
                                Juliana Vanderpuije
                            </span>
                            <span className="text-xs text-black/60 block">1933 - 2025</span>
                        </div>
                    </div>
                </Link>


                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {navlinks.map((item) => {
                        const active = pathname === item.path
                        return (
                            <Link
                                key={item.id}
                                href={item.path}
                                className={`flex items-center gap-2 transition-all ${active ? "text-yellow-900 font-bold" : "text-zinc-500 hover:text-yellow-800"
                                    }`}
                            >
                                {active && <i className="fas fa-dove text-lg text-gray-200"></i>}
                                {item.link}
                            </Link>
                        )
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden bg-zinc-100 hover:bg-yellow-50 p-2 rounded-full transition-all"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    <ChevronDown
                        size={22}
                        className={`transition-transform duration-300 ${menuOpen ? "rotate-180 text-yellow-800" : "text-zinc-600"
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute right-4 top-[70px] w-72 bg-white border border-zinc-200 rounded-2xl shadow-md p-3 md:hidden transition-all">
                    <ul className="flex flex-col gap-2">
                        {navlinks.map((item) => {
                            const active = pathname === item.path
                            return (
                                <li key={item.id}>
                                    <Link
                                        href={item.path}
                                        className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-zinc-50 transition-all"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span
                                            className={`text-sm ${active ? "text-yellow-900 font-semibold" : "text-zinc-500"
                                                }`}
                                        >
                                            {item.link}
                                        </span>
                                        <Dot
                                            size={20}
                                            className={`${active ? "text-yellow-900" : "text-zinc-300"}`}
                                        />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </nav>
    )
}
