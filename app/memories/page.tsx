"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

type Memory = {
  id: number;
  image: string;
  date: string;
  place: string;
  title: string;
  story: string;
  rotation: number;
};

const memories: Memory[] = [

    {
    id: 1,
    image: "/photos/frs.jpeg",
    date: "25 August 2025",
    place: "Behind the GLS College",
    title: "Where Our Story Started",
    story:
      "We barely knew each other back then, just classmates sharing a simple breakfast behind GLS College.❤️I didn’t even know this picture was being taken, but somehow it captured the beginning of something so special. I had no idea that this random classmate would slowly become such an important part of my life. 🥹 Funny how the most unexpected moments can become the most beautiful memories. ✨",
    rotation: -2,
  },
  {
    id: 2,
    image: "/photos/gls.jpg",
    date: "25 August 2025",
    place: "GLS College",
    title: "Where Our Story Started",
    story:
      "I had no idea that one of my classmates at GLS College would slowly become such an important part of my life. ❤️ What started with simple conversations and familiar smiles became something so much more. Somehow, a classmate became my favorite person. 🥹 And that’s where our beautiful story quietly began. ✨",
    rotation: -2,
  },
  {
    id: 3,
    image: "/photos/chat.jpeg",
    date: "20 August 2025",
    place: "GLS College",
    title: "Those First Conversations",
    story:
      "Third semester brought placements, interviews and lots of conversations. What started as normal college talks slowly became something much more special.",
    rotation: 2,
  },
  
  {
    id: 4,
    image: "/photos/WhatsApp Image 2026-10-01 at 11.20.55 PM.jpeg",
    date: "August 2025",
    place: "Exam Preparation(You can talk to me under this pretext",
    title: "The Little Revelation",
    story:
      "I remember sitting with you and your friend in the tutorial room, helping you with something. Your friend suddenly clicked our photo.(Exam prepapration to sirf ek bahana hai uska mujhse baat karne ka.🫣",
    rotation: 1,
  },
  
  {
    id: 5,
    image: "/photos/WhatsApp Image 2026-10-01 at 10.05.36 PM.jpeg",
    date: "11 November 2025",
    place: "Your Hostel",
    title: "Your First Bike(even mine hehe) for Muhurat",
    story:
      "I still remember the day you got your new bike, and you asked me to do the muhurat with my hands. 🥹❤️ It may have seemed like a small moment, but for me, it felt so special and meaningful. 🫣✨ I didn’t know then how many beautiful memories we would create together, but this little moment will always have a special place in my heart. 🫶🏻☺️",
    rotation: 2,
  },
  
  {
    id: 6,
    image: "/photos/2.jpeg",
    date: "12 September 2025",
    place: "College Fresher Party",
    title: "The Day Everyone Found Out",
    story:
      "Our relationship was still new and I had many fears. Then came the fresher party and an anonymous crush game that changed everything.",
    rotation: 1,
  },
 
  {
    id: 7,
    image: "/photos/jhg.jpeg",
    date: "September 2025",
    place: "GLS College",
    title: "College Became Different",
    story:
      "After that, college wasn't just college anymore. It became the place where I got to see you, talk to you and spend little pieces of every day with you.",
    rotation: 2,
  },
  {
    id: 8,
    image: "/photos/3.jpeg",
    date: "September 2025",
    place: "Tutorial Room",
    title: "Bunking Lectures Together",
    story:
      "We started bunking lectures and sitting together in the tutorial room. Somehow those stolen hours became some of my favourite hours.",
    rotation: -1,
  },
  ,
 
  {
    id: 9,
    image: "/photos/uu.jpeg",
    date: "2025",
    place: "OTW",
    title: "Ordinary Days, Extraordinary Memories",
    story:
      "Some of my favorite memories are the simplest ones. 🥹❤️ Just us, heading home together and clicking a random picture in the metro lift. ☺️🫣 Nothing fancy, nothing planned — just a normal day that became a special memory. 🫶🏻 I think these little moments are what make our story so beautiful. ❤️✨",
    rotation: 1,
  },
  {
    id: 10,
    image: "/photos/WhatsApp Image 2026-10-01 at 10.05.41 PM.jpeg",
    date: "12 November 2025",
    place: "Thol Lake",
    title: "More Little Adventures",
    story:
      "A little adventure, a lot of laughter, and the best company. 🥹❤️ Walking hand in hand, exploring new places, and making memories without even trying. 🫶🏻✨ Thol Lake gave us more than just beautiful views — it gave us another beautiful memory together. ☺️🫣 Just us, enjoying the moment and making our own little story. ❤️",
    rotation: -1,
  },
  {
    id: 11,
    image: "/photos/WhatsApp Image 2026-10-01 at 10.03.41 PM.jpeg",
    date: "2026",
    place: "Together",
    title: "More Smiles With You",
    story:
      "Some memories are difficult to explain. They are simply moments where you look at a picture and instantly remember exactly how happy you were.",
    rotation: 2,
  },
  {
    id: 12,
    image: "/photos/hh.jpeg",
    date: "2025",
    place: "Our Favourite Place",
    title: "Thank you",
    story:
      "Thank you for making one of my little dreams come true. 🥹❤️ You knew how much I wanted these YSL heels, and seeing you make that dream come true for me meant more than the heels themselves. 🫣👠 It’s not just a gift I’ll remember, but the love and thought behind it. 🫶🏻 Thank you for always making me feel so special. ❤️☺️",
    rotation: -2,
  },
  {
    id: 13,
    image: "/photos/m.jpeg",
    date: "11 November 2025",
    place: "Together",
    title: "The Days I Want To Remember",
    story:
      "There are so many small moments that never made it into a diary. Luckily, some of them made it into photographs.",
    rotation: 1,
  },
  {
    id: 14,
    image: "/photos/pp.jpeg",
    date: "2025",
    place: "Together",
    title: "Another Favourite Memory",
    story:
      "Every picture has a little piece of us in it — our smiles, our craziness, our conversations and the happiness we found in simply being together.",
    rotation: -1,
  },
  {
    id: 15,
    image: "/photos/pl.jpeg",
    date: "12 November 2025",
    place: "Together",
    title: "My Safest Place",
    story:
      "In a world full of places, you’ll always be my safest place. 🥹❤️ With you, I feel at home, understood, and completely myself. 🫣🫶🏻 Maybe that’s what makes our little moments so special. ☺️❤️",
    rotation: 2,
  },
  {
    id: 16,
    image: "/photos/WhatsApp Image 2026-10-01 at 10.03.43 PM.jpeg",
    date: "2026",
    place: "Primal Garden",
    title: "From Flight to Forever",
    story:
      "We were fighting, but somehow even after the storm, we found our way back to each other. 🥹❤️ One little moment of understanding, and suddenly everything felt okay again. 🫣🫶🏻 This picture reminds me that no matter how silly our fights get, we always choose each other. ☺️❤️ Because at the end of the day, you’re still my safest place. 🥹🫂",
    rotation: -2,
  }
];

const floatingHearts = [
  { left: "5%", top: "12%", size: 18, delay: 0 },
  { left: "12%", top: "45%", size: 13, delay: 1.2 },
  { left: "88%", top: "15%", size: 17, delay: 0.5 },
  { left: "94%", top: "48%", size: 12, delay: 1.8 },
  { left: "8%", top: "78%", size: 15, delay: 0.8 },
  { left: "91%", top: "82%", size: 20, delay: 1.5 },
];

export default function MemoriesPage() {
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedMemory =
    selectedIndex !== null ? memories[selectedIndex] : null;

  const openMemory = (index: number) => {
    setSelectedIndex(index);
  };

  const closeMemory = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? memories.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === memories.length - 1 ? 0 : selectedIndex + 1
    );
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff8fb] text-[#3d2430]">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-3xl" />

        <div className="absolute right-[-180px] top-[25%] h-[500px] w-[500px] rounded-full bg-rose-200/30 blur-3xl" />

        <div className="absolute bottom-[-200px] left-[20%] h-[500px] w-[500px] rounded-full bg-pink-100/50 blur-3xl" />
      </div>

      {/* FLOATING HEARTS */}
      {floatingHearts.map((heart, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-0 text-pink-300/60"
          style={{
            left: heart.left,
            top: heart.top,
          }}
          animate={{
            y: [0, -22, 0],
            rotate: [-8, 8, -8],
            opacity: [0.35, 0.8, 0.35],
          }}
          transition={{
            duration: 4 + index * 0.4,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={heart.size}
            fill="currentColor"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      {/* TOP NAVIGATION */}
      <div className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/story")}
          className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-5 py-3 text-sm font-medium text-[#6d3b4d] shadow-sm backdrop-blur-md"
        >
          <ArrowLeft size={17} />
          Our Story
        </motion.button>

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="flex items-center gap-2 text-sm font-semibold text-pink-500"
        >
          <Heart size={17} fill="currentColor" />
          <span>Ekta ♡ Purvil</span>
        </motion.div>
      </div>

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-pink-200 bg-white/80 shadow-[0_15px_45px_rgba(236,72,153,0.15)]"
          >
            <Camera
              size={34}
              className="text-pink-500"
              strokeWidth={1.5}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-pink-400"
          >
            Every picture has a little piece of us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="font-serif text-5xl font-bold leading-tight text-[#552c3d] md:text-7xl"
          >
            OUR MEMORIES
            <span className="block text-pink-500">♡</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#805867] md:text-lg"
          >
            From the first days at college to all the little adventures
            we&apos;ve shared since then — here are some moments I never want
            to forget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <MemoryBadge icon={<CalendarDays size={15} />}>
              25 August 2025
            </MemoryBadge>

            <MemoryBadge icon={<Heart size={15} fill="currentColor" />}>
              Our Story
            </MemoryBadge>

            <MemoryBadge icon={<Camera size={15} />}>
              16 Little Memories
            </MemoryBadge>
          </motion.div>
        </div>
      </section>

      {/* MEMORY INTRO */}
      <section className="px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl rounded-[2rem] border border-pink-100 bg-white/70 px-7 py-8 text-center shadow-[0_20px_70px_rgba(190,24,93,0.08)] backdrop-blur-xl md:px-12"
        >
          <div className="mb-4 flex justify-center">
            <Sparkles className="text-pink-400" size={23} />
          </div>

          <p className="font-serif text-xl italic leading-8 text-[#704355] md:text-2xl">
            &quot;Some memories are photographs.
            <br />
            Some memories are feelings.
            <br />
            Ours are both.&quot;
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-pink-400">
            <Heart size={14} fill="currentColor" />
            <span>Ekta &amp; Purvil</span>
            <Heart size={14} fill="currentColor" />
          </div>
        </motion.div>
      </section>

      {/* PHOTO SCRAPBOOK */}
      <section className="relative mx-auto max-w-7xl px-5 pb-28 md:px-10">
        <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
          {memories.map((memory, index) => (
            <MemoryPhoto
              key={memory.id}
              memory={memory}
              index={index}
              onClick={() => openMemory(index)}
            />
          ))}
        </div>
      </section>

      {/* END SECTION */}
      <section className="relative px-5 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 shadow-inner"
          >
            <Heart
              size={42}
              className="text-pink-500"
              fill="currentColor"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.35em] text-pink-400"
          >
            And this is only the beginning
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 font-serif text-4xl font-bold text-[#552c3d] md:text-6xl"
          >
            More memories are waiting for us.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-xl leading-8 text-[#805867]"
          >
            More photos.
            <br />
            More places.
            <br />
            More silly fights.
            <br />
            More laughter.
            <br />
            More &quot;just one more picture&quot; moments.
            <br />
            And hopefully a lifetime of them. ❤️
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {/* STORY BUTTON */}
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push("/story")}
                className="inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white px-7 py-4 font-semibold text-[#d94f83] shadow-[0_10px_30px_rgba(217,79,131,0.12)]"
            >
                <ArrowLeft size={18} />
                Read Our Story Again
            </motion.button>

            {/* LETTER BUTTON */}
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => router.push("/letter")}
                className="inline-flex items-center gap-3 rounded-full bg-[#d94f83] px-7 py-4 font-semibold text-white shadow-[0_15px_35px_rgba(217,79,131,0.25)]"
            >
                Read My Letter
                <ArrowRight size={18} />
            </motion.button>

            </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedMemory && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#260f1b]/90 p-4 backdrop-blur-md"
            onClick={closeMemory}
          >
            {/* CLOSE */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeMemory}
              className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
            >
              <X size={23} />
            </motion.button>

            {/* PREVIOUS */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md md:left-8"
            >
              <ChevronLeft size={27} />
            </motion.button>

            {/* NEXT */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md md:right-8"
            >
              <ChevronRight size={27} />
            </motion.button>

            {/* LIGHTBOX CONTENT */}
            <motion.div
              key={selectedMemory.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#fffafc] p-4 shadow-2xl md:p-7"
            >
              <div className="grid gap-7 md:grid-cols-[1.15fr_0.85fr] md:items-center">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[1.5rem] bg-pink-50">
                  <img
                    src={selectedMemory.image}
                    alt={selectedMemory.title}
                    className="max-h-[65vh] w-full object-contain"
                  />
                </div>

                {/* STORY */}
                <div className="px-2 py-3 md:px-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
                    Memory {String(selectedMemory.id).padStart(2, "0")}
                  </p>

                  <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#552c3d] md:text-4xl">
                    {selectedMemory.title}
                  </h2>

                  <div className="mt-5 space-y-3 text-sm text-[#805867]">
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={17}
                        className="text-pink-500"
                      />
                      {selectedMemory.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={17} className="text-pink-500" />
                      {selectedMemory.place}
                    </div>
                  </div>

                  <div className="my-6 h-px bg-pink-100" />

                  <p className="text-[15px] leading-8 text-[#704355]">
                    {selectedMemory.story}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-pink-400">
                    <Heart size={17} fill="currentColor" />
                    <span className="text-sm font-medium">
                      Ekta ♡ Purvil
                    </span>
                  </div>

                  <p className="mt-5 text-xs text-[#aa7c8d]">
                    {selectedIndex + 1} / {memories.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* -----------------------------------------
   MEMORY PHOTO
----------------------------------------- */

function MemoryPhoto({
  memory,
  index,
  onClick,
}: {
  memory: Memory;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        rotate: memory.rotation,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: memory.rotation,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.03, 0.25),
      }}
      whileHover={{
        y: -10,
        rotate: 0,
        scale: 1.015,
        transition: {
          duration: 0.25,
        },
      }}
      className="group relative mb-8 break-inside-avoid cursor-pointer"
      onClick={onClick}
    >
      {/* BACK PAPER */}
      <div className="absolute inset-1 translate-x-2 translate-y-2 rounded-[1.7rem] bg-pink-100/70" />

      {/* PHOTO PAPER */}
      <div className="relative overflow-hidden rounded-[1.7rem] border border-pink-100 bg-white p-3 shadow-[0_15px_45px_rgba(190,24,93,0.10)]">
        {/* PIN */}
        <div className="absolute left-1/2 top-2 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-pink-400 shadow-md" />

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[1.2rem] bg-pink-50">
          <img
            src={memory.image}
            alt={memory.title}
            className="block h-auto max-h-[620px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#8d2f57]/0 transition duration-500 group-hover:bg-[#8d2f57]/35">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-pink-500 opacity-0 shadow-xl transition duration-300 group-hover:opacity-100"
            >
              <Heart size={27} fill="currentColor" />
            </motion.div>
          </div>
        </div>

        {/* DETAILS */}
        <div className="px-2 pb-2 pt-5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-pink-400">
              Memory {String(memory.id).padStart(2, "0")}
            </span>

            <Heart
              size={14}
              className="text-pink-300"
              fill="currentColor"
            />
          </div>

          <h3 className="mt-2 font-serif text-xl font-bold text-[#5c3041]">
            {memory.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="flex items-center gap-1 rounded-full bg-pink-50 px-3 py-1 text-[11px] text-[#89556a]">
              <CalendarDays size={12} />
              {memory.date}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-[11px] text-[#89556a]">
              <MapPin size={12} />
              {memory.place}
            </span>
          </div>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#805867]">
            {memory.story}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-pink-400">
              View memory
            </span>

            <ArrowRight
              size={15}
              className="text-pink-400 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* -----------------------------------------
   BADGE
----------------------------------------- */

function MemoryBadge({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-xs font-medium text-[#805867] shadow-sm backdrop-blur-md">
      <span className="text-pink-500">{icon}</span>
      {children}
    </div>
  );
}