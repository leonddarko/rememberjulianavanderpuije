"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import AutoEmblaCarousel from "../ui/carousel"

export default function Tribute() {
    return (
        <>
            <div className="flex justify-center items-center min-h-[70vh] pt-32 pb-20 bg-[url('/backgroundimages/clouds-closeup.png')] bg-cover bg-center bg-no-repeat">
                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        src="/awura.png"
                        width={180}
                        height={180}
                        alt="Portrait of Juliana Awura Adjoa Vanderpuije"
                        className="rounded-full shadow-lg m-auto select-none"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                        priority
                    />

                    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-900 drop-shadow-md tracking-tight max-w-md mx-auto">
                        Tributes to Juliana
                    </h1>

                    <p className="text-yellow-800/80 text-lg md:text-xl font-medium">
                        Celebrating a life of faith, love, and service
                    </p>
                </motion.div>
            </div>

            <AutoEmblaCarousel />
        </>
    )
}