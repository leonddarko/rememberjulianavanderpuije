"use client"

import { ChevronDown, Flower } from "lucide-react";
import { motion } from "framer-motion";
import NavigationBar from "./ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <section className="mt-24 flex flex-col md:flex-row justify-center items-center gap-8 px-6 py-16 bg-[url('/backgroundimages/clouds-closeup.png')] bg-cover bg-center bg-no-repeat rounded-3xl shadow-lg overflow-hidden">
        <motion.div
          className="text-center md:text-left space-y-4 max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center md:justify-start gap-3 mb-3 text-indigo-100">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
              >
                <i className="fas fa-dove text-lg text-gray-300"></i>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-yellow-800 tracking-wide uppercase font-semibold">
            In Loving Memory
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-yellow-900 leading-tight">
            Juliana Awula Adjoa Vanderpuije
          </h1>

          <p className="text-base text-yellow-800/90">
            A life of faith, grace, and love.
          </p>

          <div className="flex justify-center md:justify-start gap-3 pt-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.3 }}
              >
                <Flower size={22} className="text-gray-300 drop-shadow-sm" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/older-jv.png"
            width={380}
            height={550}
            alt="Portrait of Juliana Awura Adjoa Vanderpuije"
            className="rounded-full shadow-md select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            priority
          />
        </motion.div>
      </section>

      <motion.div
        className="rounded-full p-3 w-fit bg-zinc-50 text-yellow-800 relative -top-5 m-auto shadow-md cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ChevronDown size={22} className="animate-bounce" />
      </motion.div>
    </>
  );
}
