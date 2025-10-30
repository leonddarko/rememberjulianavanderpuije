"use client";

import Image from "next/image";

export default function Footer() {
    const d = new Date();

    return (
        <>
            <div className="bg-zinc-100 text-sm text-zinc-500 flex flex-col justify-center items-center gap-2 px-4 py-20 md:px-10 text-center">
                <Image
                    src="/jv-transparent.png"
                    width={30}
                    height={30}
                    alt="Image of Juliana"
                    className="rounded-full shadow-sm"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                />
                <div className="text-lg text-yellow-950/60 font-semibold tracking-wide">
                    In Loving Memory
                </div>
                <span className="text-zinc-500 md:ml-4">
                    © {d.getFullYear()} Remembering Juliana Awula Adjoa Vanderpuije —
                    A life of faith, grace, and love.
                </span>
            </div>
        </>
    );
}
