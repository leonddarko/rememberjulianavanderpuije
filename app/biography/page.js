"use client"

import { CircleSmall, Flower } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Circle } from "lucide-react"

export default function Biography() {

    const highlightsData = [
        {
            id: 1,
            title: "Born",
            text: "31st July 1933, Zongo Lane, Greater Accra Region."
        },
        {
            id: 2,
            title: "Parents",
            text: "Mr. J. E. Vanderpuije and Madam Emma Kwakai Quartey (both of blessed memory)."
        },
        {
            id: 3,
            title: "Education",
            text: "Accra Royal School — Standard Seven Leaving Certificate."
        },
        {
            id: 4,
            title: "Career",
            text: "Government Printing Press — rose to Supervisor before focusing on family."
        },
        {
            id: 5,
            title: "Faith",
            text: "Devout Anglican — served as National Treasurer, Vice President, and Chairperson of Anglican Women’s Fellowships."
        },
        {
            id: 6,
            title: "Family",
            text: "Mother of five — Sheik Mustapha Watson-Quartey (deceased), Ruby Irene Quartey-Brown, Bertha Esinu Kwami, Walter Senna Kwami, and Maud Naa Sika Kwami."
        },
        {
            id: 7,
            title: "Legacy",
            text: "Remembered for her faith, humility, and generosity — a mentor, mother, and pillar in her community."
        },
        {
            id: 8,
            title: "Passed On",
            text: "Survived by her children, grandchildren, and extended family. Resting in perfect peace."
        }
    ];


    return (
        <>
            <div className=" flex justify-center items-center mt-40">
                <div className="">
                    <Image
                        src="/jv-transparent.png"
                        width={200}
                        height={200}
                        alt="Image of Juliana"
                        className="rounded-full shadow-sm m-auto"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="px-4 text-4xl md:text-5xl text-center text-yellow-800 font-bold my-4">
                        JULIANA'S BIOGRAPHY
                    </div>
                    <div className="flex justify-center gap-1">
                        <Flower size={40} className="text-gray-200" />
                    </div>
                </div>
            </div>

            <div className=" flex flex-wrap justify-center items-center md:items-start gap-4 px-4 py-8 md:px-30 md:py-20">

                {/* Main Sheet */}
                <div className="w-4xl">
                    <div className=" bg-zinc-100 rounded-2xl px-10 py-15 md:py-20 md:px-15 shadow-md text-black/80 text-sm">
                        <div className="text-3xl text-center md:text-left text-yellow-950/70 font-bold mb-6">
                            Her Life
                        </div>

                        <div className="space-y-5 text-justify leading-relaxed">
                            <p>
                                Affectionately known as Sister Awura Adjoa by some and Auntie Julie by others,
                                Madam Juliana Awula Adjoa Vanderpuije was a woman of quiet strength,
                                unwavering faith, and boundless grace. She was born on 31st July 1933 at Zongo
                                Lane in the Greater Accra Region to Mr. J. E. Vanderpuije and Madam Emma Kwakai
                                Quartey, both of blessed memory. She was the second child of her mother and
                                grew up surrounded by love, faith, and strong family values.
                            </p>

                            <p>
                                Juliana began her education at Accra Royal School, where she obtained her
                                Standard Seven Leaving Certificate. Soon after, she joined the Government Printing
                                Press, where she worked diligently and rose through the ranks to become a
                                supervisor. It was there that she met her beloved life partner, Mr. Gottwalt Kwami.
                                In time, she chose to resign from her job to focus fully on raising her growing family—a
                                role she embraced with deep love and devotion.
                            </p>

                            <p>
                                A devout Anglican, Juliana didn’t just practice her faith—she lived it. Her life was
                                rooted in Christ, and she served her church with joy and humility. At Holy Trinity
                                Cathedral, Accra, she held several leadership roles, including:
                            </p>

                            <p>
                                Through these roles, she became a mentor, a spiritual guide, and a mother to many.
                                She nurtured families, strengthened communities, and helped grow the work of the
                                church across generations.
                            </p>

                            <p>
                                Juliana was also an enterprising woman with many talents. She ran a confectionery
                                business, known for her delicious cakes, bread, and pastries. She found joy in
                                gardening, sewing, and storytelling, often delighting children and adults alike with
                                tales that taught values and brought smiles.
                            </p>

                            <p>
                                Elegant and humble, Juliana had a calming presence that comforted those around
                                her. She carried herself with dignity and inspired others through her wisdom,
                                warmth, and deep sense of compassion. Her home was a sanctuary—open to
                                family, friends, and strangers alike. She had a gift for encouragement and often
                                reminded others:
                            </p>

                            <p className="italic text-yellow-950/70">
                                “Do your best and leave the rest to God.”
                            </p>

                            <p>
                                Madam Juliana had five children – Sheik Mustapha Watson-Quartey (deceased),
                                Ruby Irene Quartey-Brown, Bertha Esinu Kwami, Walter Senna Kwami, and Maud
                                Naa Sika Kwami. She is survived by her children, grandchildren, great-grandchildren,
                                siblings, nieces, nephews, and the Vanderpuije, Quartey, and Kwami families. She is
                                also remembered dearly by her church community and countless lives she touched
                                with her kindness and faith.
                            </p>

                            <p>
                                Her passing leaves an irreplaceable void. We, her family, mourn the loss of a
                                beacon, a mentor, a mother, a sister, and a beautiful friend. Yet we hold on to the
                                promise of heaven, where there is no more pain, hardship, or toil.
                            </p>

                            <p className="italic text-yellow-950/70">
                                “I am a sojourner here, a stranger. We are on earth only for a time. Our home is far
                                from here—where God Himself dwells. That is home for us.”
                            </p>

                            <p>
                                Rest, Sister. Rest in perfect peace. You are deeply loved and forever missed.
                                Sister Awura Adzoa, Auntie Julie.
                            </p>

                            <p className="italic">
                                Nye Awo <br />
                                Yaa wc odjogban <br />
                                Yehowah abu ohe.
                            </p>

                            <p className="text-right">By Mrs. Hannah Owusu (Sister)</p>
                        </div>

                    </div>
                </div>

                {/* Highlights Sheet  */}
                <div className=" w-80">
                    <div className=" rounded-2xl py-20 px-10 text-black text-sm">
                        <div className="text-lg text-center md:text-left text-yellow-950/70 font-bold mb-4">
                            Life Highlights
                        </div>

                        <div className="relative w-full max-w-md z-10">
                            {/* Vertical line */}
                            <div className="absolute left-5 top-0 h-full w-[2px] bg-yellow-900/30 rounded-full"></div>

                            <ul className="space-y-8">
                                {highlightsData.map((item, index) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.4 }}
                                        className="relative pl-12"
                                    >
                                        <div className="absolute left-4 top-1.5">
                                            <CircleSmall
                                                size={10}
                                                className="text-yellow-900 bg-yellow-50 rounded-full"
                                            />
                                        </div>
                                        <h3 className="text-xs text-yellow-950/50">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-black text-justify leading-relaxed">
                                            {item.text}
                                        </p>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* {highlightsData.map((item) => (
                            <>
                                <div className="pb-4" key={item.id}>
                                    <span className=" text-xs text-black/50">{item.title}:</span>
                                    <p className=" text-justify text-md text-black">
                                        {item.text}
                                    </p>
                                </div>
                            </>
                        ))} */}


                    </div>
                </div>

            </div>

        </>
    )
}