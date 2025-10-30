"use client"

import { ChevronDown, Dot, Flower, Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function NavigationBar() {
    const pathname = usePathname();

    const navlinks = [
        {
            id: 0,
            path: "/",
            link: "Home",
        },
        {
            id: 1,
            path: "/biography",
            link: "Biography",
        },
        {
            id: 2,
            path: "/tribute",
            link: "Tribute",
        },
        {
            id: 3,
            path: "/gallery",
            link: "Photo Gallery",
        },
    ];

    return (
        <>
            <div className="fixed w-full flex justify-between items-center bg-white px-4 py-4 md:px-10 top-0 rounded-md z-50">
                <div className="flex justify-start items-center gap-2">
                    {/* <Flower size={20} className="text-gray-100" /> */}
                    <i className="fas fa-dove text-lg text-gray-200"></i>
                    <Image
                        src="/jv-transparent.png"
                        width={50}
                        height={50}
                        alt="Image of Juliana"
                        className="rounded-full shadow-sm"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                    />

                    <div className="">
                        <span className="text-xs text-yellow-950">Glorious Memory of</span>
                        <div className=" text-lg text-yellow-800 font-bold leading-3">
                            Juliana Vanderpuije
                        </div>
                        <span className="text-xs text-black/70">1933 - 2025</span>
                    </div>
                </div>

                {/* Small Screen Navigation */}
                <div className="dropdown dropdown-end md:hidden">
                    {/* <div className="text-gray-300 md:hidden hover:text-yellow-800 transition-all">
                    </div> */}
                    <button tabIndex={0} role="button"
                        className="btn-neutral p-3 border-0 text-black bg-zinc-100 md:hidden rounded-full">
                        <ChevronDown size={20} />
                    </button>

                    <ul tabIndex={0} className="dropdown-content menu rounded-2xl z-[100] w-80 p-2 shadow-md mt-2 bg-white border border-zinc-200">
                        <li>
                            {navlinks.map((item) => (
                                <a key={item.id} href={item.path} className="flex justify-between items-center gap-2 text-black/40 transition-all">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <span className={` ${item.path === pathname && "text-yellow-950"} font-semibold font-notosans text-sm transition-all`}>
                                            {item.link}
                                        </span>
                                    </div>
                                    <Dot size={20} className={`${item.path === pathname ? "text-black" : "text-zinc-300"}`} />
                                </a>
                            ))}
                        </li>
                    </ul>
                </div>
                {/* Small Screen Navigation */}

                <div className="hidden md:flex justify-start items-center gap-5 text-black">
                    {navlinks.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-center items-center gap-2 p-1 rounded-4xl"
                        >
                            {pathname === item.path && (
                                <i className={`fas fa-dove text-sm text-yellow-800/20 transition ease-in`}></i>
                            )}
                            <div key={item.id}>
                                <Link href={item.path} className="text-zinc-400">
                                    <span className={`font-normal text-sm text-yellow-950 hover:text-yellow-800 transition-all`}>
                                        {item.link}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}