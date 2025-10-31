"use client"

import { useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

export default function AutoEmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", skipSnaps: false },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    )

    const [grab, setGrab] = useState("cursor-grab")

    useEffect(() => {
        if (emblaApi) {
            emblaApi.on("select", () => console.log("Slide changed"))
        }
    }, [emblaApi])

    const tributeData = [
        {
            id: 1,
            image: "",
            title: "TRIBUTE BY NAA SIKA (DAUGHTER)",
            text: [
                "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.”— Revelation 21: 4(NIV)",

                "Awula Adjoa 1 as I affectionately call you, my comfort, my guide, my greatest cheerleader. Mum, your life was a beautiful symphony of love, service, and faith, and I am forever grateful to have been your daughter.",

                "I remember sitting beside you in church, you prayed with such quiet power. Attending fellowship meetings, prayer nights, and women’s retreats with gave me more than just spiritual nourishment — they gave me lasting memories of what it means to be a woman of faith, strength, and grace. Those memories are etched in my heart.",

                "Church was your second home. I remember how your face would light up during worship, and how you never missed a chance to serve. You didn’t just attend church, you lived it. Your love for hymns was unmatched, you sung and listened to hymns till your last breath. You were a pillar in the fellowship, always ready with a warm meal, a helping hand, and a heart full of grace. Your faith was not just spoken; it was lived out in every act of kindness. As a caterer, you didn’t just cook., you nourished. You served your family and church with such joy and dedication that even the simplest meal felt like a feast of love. You thought me the value of presence, how just being there for someone can be the greatest gift.",

                "Juu, I can’t forget the calm joy of a quiet Christmas morning, the hustle and bustle of preparing for family gatherings. Your kitchenwas a place of comfort, and your food carried the warmth of your heart and love could be tasted in every bite. here you taught me that service is sacred and thank you for teaching me that faith isn’t just something you speak — it’s something you lived. My memory rests on the times we just packed our bags and took off to Elmina, away from the noise in Accra, even if it wasonly a short trip.",

                "I miss you more than I can express, but Irejoice in knowing you are now restingpeacefully, surrounded by the glory of theOne you so faithfully served. Though youare no longer with us in body, your spiritlives on—in the lessons you taught, the love you gave, and the legacy you left behind.",

                "Until we meet again, I love you. Always. Rest in the bosom of the Lord. – Maud Naa Sika Kwami (Daughter)"
            ]
        },

        {
            id: 2,
            image: "",
            title: "TRIBUTE TO MY MOTHER RUBY IRENE QUARTEY BROWN (DAUGHTER)",
            text: [
                "A fond memory of my mother: I was in primary 6, when one fine day without any notice my mother showed up in my school and fetched me from my classroom after a tete-a-tete with my class teacher discuss my academic progress.",

                "When she was ready to leave, she asked me to walk with her out. She allay my fears when she said it was a friendly visit - a visit to find out what my school life was like. I was relieved to hear that. I had a shocker waiting for me on my return back to the classroom.",

                "My class teacher went, “Ruby your mum is very beautiful, inside and out. It's no wonder you’re neat and well dressed.” I could see all my mates looking at me with awe. First, I was shocked to her that then the realization kicked in and I felt so good about myself that with head up and shoulders thrown back I walked proudly to my seat. It was my first moment of self-awareness and self-confidence which has lived with me till today and I relive it with nostalgia.",

                "Juliana Awura Adjoa Vanderpuije - Auntie Julie, sister Awura Adjoa as all her loved ones called her, I affectionately called her Ju. She was more than parent; she was my friend, confidante, and guiding light. I'll cherish the memories of our laughter, adventure, and quiet moments together. Her kindness, generosity, and unwavering support for family inspired me to be a better person.",

                "She wore many hats, as a seamstress, made our dresses and some to sell during Christmas time, a baker- baked cakes, bread and pastries, a jeweler- designed trinkets for her goldsmith to make for her to sell and at the same time worked at Assembly Press now Ghana Publishing.",

                "I'm grateful for the lessons she taught me, the values she instilled in me, and the unconditional love she showed me and my siblings. Though she's no longer with me physically, her spirit lives on in my heart, and I’ll continue to celebrate her life and legacy.",

                "Adios amigo, adios my friend. Fare Thee Well, Yaa wo ojogbann Oke Nyiemo jro – Ruby Irene Quartey-Brown (Daughter)",
            ]
        }
    ]


    return (
        <div
            className={`relative overflow-hidden px-4 py-10 md:px-16 md:py-20 ${grab} transition-all duration-300`}
            ref={emblaRef}
            onMouseDown={() => grab === "cursor-grab" && setGrab("cursor-grabbing")}
            onMouseUp={() => grab === "cursor-grabbing" && setGrab("cursor-grab")}
            aria-roledescription="carousel"
        >
            <div className="flex gap-8">
                {tributeData.map((item) => (
                    <div key={item.id} className="min-w-full md:min-w-[80%] embla__slide">
                        <div className="bg-zinc-100 rounded-2xl px-8 py-10 md:px-12 md:py-16 shadow-lg text-black/80 text-base leading-relaxed overflow-y-auto max-h-[75vh]">
                            <h2 className="text-2xl md:text-3xl text-center md:text-left text-yellow-900 font-bold mb-8">
                                {item.title}
                            </h2>
                            <div className="space-y-5 text-justify">
                                {item.text.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}