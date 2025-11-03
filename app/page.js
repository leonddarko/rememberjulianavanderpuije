"use client"

import { ChevronDown, Dot, Flower } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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

      <a href="#bio">
        <motion.div
          className="rounded-full p-3 w-fit bg-zinc-50 text-yellow-800 relative -top-5 m-auto shadow-md cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronDown size={22} className="animate-bounce" />
        </motion.div>
      </a>


      {/* Biography Section */}
      <section id="bio" className="py-30 px-6 md:px-10 text-center max-w-3xl mx-auto">
        <Dot size={15} className="m-auto text-yellow-900" />
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">A Life of Grace</h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          Juliana Vanderpuije lived a life of faith, compassion, and dignity.
          Her warmth and wisdom left a mark that time cannot fade.
        </p>
        <Link
          href="/biography"
          className="btn bg-yellow-800 text-white hover:bg-yellow-900 transition rounded-full"
        >
          Read Full Biography
        </Link>
      </section>
      {/* Biography Section */}


      {/* Gallery Section  */}
      <section className="bg-gray-50 py-30 px-6 md:px-10 text-center">
        <Dot size={15} className="m-auto text-yellow-900" />
        <h2 className="text-3xl font-bold text-yellow-900 mb-8">Cherished Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {["/gallery/gallery_img1.PNG", "/gallery/gallery_img2.PNG", "/gallery/gallery_img3.PNG"].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={img}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={400}
                className="object-cover hover:scale-110 transition-transform"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                priority
              />
            </div>
          ))}
        </div>
        <a
          href="/photo-gallery"
          className="btn mt-8 bg-yellow-800 text-white hover:bg-yellow-900 rounded-full"
        >
          View Full Gallery
        </a>
      </section>
      {/* Gallery Section  */}


      {/* Tribute Section */}
      <section className="py-20 px-6 md:px-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-900 mb-8">Family Tributes</h2>
        <div className="grid gap-10 md:grid-cols-3 text-left">
          <div className="bg-white shadow-sm p-6 rounded-xl border border-yellow-100">
            <p className="italic text-zinc-700">“Her love shaped us all. She was the heart of our family.”</p>
            <p className="text-sm text-yellow-800 mt-3">– Walter Senna Kwami</p>
          </div>
          <div className="bg-white shadow-sm p-6 rounded-xl border border-yellow-100">
            <p className="italic text-zinc-700">“She taught me kindness without words — through her actions.”</p>
            <p className="text-sm text-yellow-800 mt-3">– Ruby Irene Quartey Brown</p>
          </div>
          <div className="bg-white shadow-sm p-6 rounded-xl border border-yellow-100">
            <p className="italic text-zinc-700">“Grandma Juliana, your light continues to shine within us.”</p>
            <p className="text-sm text-yellow-800 mt-3">– Naa Sika</p>
          </div>
        </div>
        <a
          href="/tributes"
          className="btn mt-10 bg-yellow-800 text-white hover:bg-yellow-900 rounded-full"
        >
          Read All Tributes
        </a>
      </section>
      {/* Tribute Section */}

      {/* Closing Remarks Section */}
      <section className="bg-slate-50 py-12 text-center">
        <p className="text-zinc-600 italic max-w-2xl mx-auto">
          “Though she may be gone from our sight, her love remains our guiding light.”
        </p>
        <p className="mt-4 text-sm text-zinc-500">
          Remembering Juliana Vanderpuije with love.
        </p>
      </section>
      {/* Closing Remarks Section */}


    </>
  );
}
