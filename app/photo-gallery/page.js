"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Dot, Flower } from "lucide-react"

export default function GalleryPage() {
  const images = [
    { src: "/gallery/gallery_img1.PNG", alt: "" },
    { src: "/gallery/gallery_img2.PNG", alt: "" },
    { src: "/gallery/gallery_img3.PNG", alt: "" },
    { src: "/gallery/gallery_img4.PNG", alt: "" },
    { src: "/gallery/gallery_img5.PNG", alt: "" },
    { src: "/gallery/gallery_img6.PNG", alt: "" },
    { src: "/gallery/gallery_img7.PNG", alt: "" },
    { src: "/gallery/gallery_img8.PNG", alt: "" },
    { src: "/gallery/gallery_img9.PNG", alt: "" },
    { src: "/gallery/gallery_img10.PNG", alt: "" },
    { src: "/gallery/gallery_img11.PNG", alt: "" },
    { src: "/gallery/gallery_img12.PNG", alt: "" },
    { src: "/gallery/gallery_img13.PNG", alt: "" },
    { src: "/gallery/gallery_img14.PNG", alt: "" },
    { src: "/gallery/gallery_img15.PNG", alt: "" },
    { src: "/gallery/gallery_img16.PNG", alt: "" },
  ]

  return (
    <main className="min-h-screen bg-[url('/backgroundimages/clouds-closeup.png')] bg-cover bg-center bg-no-repeat text-yellow-900 py-40 px-4 md:px-10">
      <section className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex justify-center gap-2 mb-3">
            {[...Array(3)].map((_, i) => (
              <Dot key={i} size={20} className="text-zinc-300 drop-shadow-sm" />
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4 drop-shadow-sm">
            Photo Gallery
          </h1>
          <p className="text-yellow-900/80 max-w-2xl mx-auto leading-relaxed mb-10">
            A collection of cherished memories celebrating the beautiful life, faith, and grace
            of <span className="font-semibold">Juliana Awula Adjoa Vanderpuije</span>.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md bg-zinc-100 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                <p className="text-sm text-white font-medium drop-shadow-md">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
