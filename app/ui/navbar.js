"use client"
import { Flower, Menu } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import ProtectedImage from "./ProtectedImage";

export default function NavigationBar() {
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
            <div className="fixed w-full flex justify-between items-center bg-white px-4 py-4 md:px-10 top-0 opacity-90 rounded-md">
                <div className="flex justify-start items-center gap-2">
                    {/* <Flower size={20} className="text-gray-100" /> */}
                    <i class="fas fa-dove text-lg text-gray-200"></i>
                    {/* <Image
                        src="/jv-transparent.png"
                        width={50}
                        height={50}
                        alt="Image of Juliana"
                        className="rounded-full shadow-sm"
                    /> */}

                    <ProtectedImage
                        src="/jv-transparent.png"
                        alt="Protected"
                        width={50}
                        height={50}
                        className="shadow-sm rounded"
                    />

                    <div className="">
                        <span className="text-xs text-yellow-950">Glorious Memory of</span>
                        <div className=" text-lg text-yellow-800 font-bold leading-3">
                            Juliana Vanderpuije
                        </div>
                        <span className="text-xs text-black/70">1933 - 2025</span>
                    </div>
                </div>

                <div className="text-gray-300 md:hidden hover:text-yellow-800 transition-all">
                    <Menu size={25} />
                </div>

                <div className="hidden md:flex justify-start items-center gap-5 text-black">
                    {navlinks.map((item) => (<>
                        <Link key={item.id} href={item.link} className="text-zinc-400">
                            <span className={`font-normal text-sm text-yellow-950 hover:text-yellow-800 transition-all`}>
                                {item.link}
                            </span>
                        </Link>
                    </>))}
                </div>
            </div>
        </>
    )
}