"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Sparkles,
  Star,
  Gift,
} from "lucide-react";
import { useRouter } from "next/navigation";

const gifs = [
  {
    image: "/gifs/kiss.gif",
    message: "A little kiss for my Babuuu 💋",
  },
  {
    image: "/gifs/iloveyou.gif",
    message: "I LOVE YOU SO MUCH ❤️",
  },
  {
    image: "/gifs/hug.gif",
    message: "Come here... I need a hug 🫂",
  },
  {
    image: "/gifs/best-boyfriend.png",
    message: "You're the best boyfriend in my world 👑",
  },
  {
    image: "/gifs/cute.gif",
    message: "My favourite person forever 🥹❤️",
  },
  {
    image: "/gifs/heart.gif",
    message: "You have my whole heart ❤️",
  },
  {
    image: "/gifs/love.gif",
    message: "Lucky me... I found you 🥰",
  },
  {
    image: "/gifs/couple.gif",
    message: "You + Me = My favourite story 🫶🏻",
  },
  {
    image: "/gifs/missyou.gif",
    message: "I can never get enough of you 🥹",
  },

  {
    image: "/gifs/babuu.png",
    message: "My cute Babuuu 🐻❤️",
  },
];

const floatingHearts = [
  { left: "5%", top: "15%", delay: 0, size: 20 },
  { left: "12%", top: "55%", delay: 1, size: 15 },
  { left: "88%", top: "18%", delay: 0.5, size: 22 },
  { left: "92%", top: "60%", delay: 1.8, size: 17 },
  { left: "20%", top: "85%", delay: 2, size: 18 },
  { left: "80%", top: "85%", delay: 1.3, size: 16 },
];

export default function FinalPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen overflow-hidden bg-[#fff5f9] text-[#542c3d]">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-pink-300/30 blur-3xl" />

        <div className="absolute right-[-200px] top-[25%] h-[550px] w-[550px] rounded-full bg-rose-300/25 blur-3xl" />

        <div className="absolute bottom-[-220px] left-[20%] h-[500px] w-[500px] rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      {/* FLOATING HEARTS */}
      {floatingHearts.map((heart, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-0 text-pink-400/50"
          style={{
            left: heart.left,
            top: heart.top,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [-8, 8, -8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + index * 0.3,
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

      {/* NAVIGATION */}
      <div className="relative z-20 flex items-center justify-between px-5 py-5 md:px-10">

        <button
          onClick={() => router.push("/certificate")}
          className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-[#704355] shadow-sm backdrop-blur-md"
        >
          <ArrowLeft size={17} />
          Certificate
        </button>

        <div className="flex items-center gap-2 text-sm font-bold text-pink-500">
          <Heart size={16} fill="currentColor" />
          Ekta ♡ Purvil
        </div>

      </div>

      {/* HERO */}
      <section className="relative px-5 pb-14 pt-10 md:pb-20 md:pt-16">

        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
            }}
            className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_15px_50px_rgba(236,72,153,0.18)]"
          >
            <Gift
              size={40}
              className="text-pink-500"
              strokeWidth={1.5}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400"
          >
            One last surprise for you
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 font-serif text-5xl font-bold leading-tight text-[#552c3d] md:text-7xl"
          >
            JUST FOR YOU
            <span className="block text-pink-500">PURVIL ❤️</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#805867] md:text-lg"
          >
            Before you leave this little corner of our story,
            I have a few more things I want to tell you...
          </motion.p>

        </div>
      </section>

      {/* GIF SECTION */}
      <section className="relative mx-auto max-w-6xl px-5 pb-24 md:px-10">

        <div className="mb-12 text-center">

          <div className="mb-3 flex justify-center gap-2">
            <Sparkles className="text-pink-400" size={20} />
            <Heart
              className="text-pink-500"
              size={20}
              fill="currentColor"
            />
            <Sparkles className="text-pink-400" size={20} />
          </div>

          <h2 className="font-serif text-3xl font-bold text-[#552c3d] md:text-4xl">
            Little messages for my favourite boy
          </h2>

        </div>

        {/* GIF GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gifs.map((gif, index) => (
            <motion.article
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.05, 0.25),
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group overflow-hidden rounded-[2rem] border border-pink-100 bg-white p-3 shadow-[0_15px_45px_rgba(190,24,93,0.10)]"
            >

              {/* GIF */}
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.5rem] bg-pink-50">

                <img
                  src={gif.image}
                  alt={gif.message}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-900/10 to-transparent" />

              </div>

              {/* MESSAGE */}
              <div className="px-3 pb-3 pt-5 text-center">

                <div className="mb-2 flex justify-center">
                  <Heart
                    size={17}
                    className="text-pink-400"
                    fill="currentColor"
                  />
                </div>

                <p className="font-serif text-lg font-bold text-[#633447]">
                  {gif.message}
                </p>

              </div>

            </motion.article>
          ))}

        </div>
      </section>

      {/* FINAL LOVE MESSAGE */}
      <section className="relative px-5 pb-24">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-4xl rounded-[2.5rem] border border-pink-200 bg-white/80 px-6 py-14 text-center shadow-[0_25px_80px_rgba(190,24,93,0.12)] backdrop-blur-xl md:px-14"
        >

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-pink-100"
          >
            <Heart
              size={45}
              className="text-pink-500"
              fill="currentColor"
            />
          </motion.div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
            And after all these words...
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold text-[#552c3d] md:text-6xl">
            There&apos;s still one thing
            <span className="block text-pink-500">
              I can never say enough...
            </span>
          </h2>

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-10"
          >
            <h3 className="font-serif text-5xl font-bold text-[#e13d87] md:text-7xl">
              I LOVE YOU
            </h3>

            <p className="mt-2 text-2xl font-semibold text-[#704355]">
              PURVIL ❤️
            </p>
          </motion.div>

          <div className="mx-auto my-9 h-px max-w-xs bg-pink-100" />

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#805867] md:text-lg">
            You came into my life unexpectedly,
            but somehow became the person I never want to lose.
            <br />
            <br />
            More laughter.
            <br />
            More silly fights. 😂
            <br />
            More hugs. 🫂
            <br />
            More adventures.
            <br />
            More &quot;just one more picture.&quot; 📸
            <br />
            And hopefully a lifetime of them. ❤️
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 text-pink-400">
            <Star size={17} fill="currentColor" />
            <span className="text-sm font-semibold">
              Ekta ♡ Purvil
            </span>
            <Star size={17} fill="currentColor" />
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#aa7c8d]">
            Since 25 August 2025
          </p>

        </motion.div>

      </section>

      {/* END */}
      <section className="px-5 pb-16 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-xl italic text-[#805867] md:text-2xl"
        >
          This isn&apos;t the end of our story...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 font-serif text-2xl font-bold text-pink-500 md:text-3xl"
        >
          It&apos;s just another page. ❤️
        </motion.p>

      </section>

      {/* BOTTOM NAV */}
      <div className="relative z-10 flex justify-center px-5 pb-12">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/certificate")}
          className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-semibold text-[#704355] shadow-md"
        >
          <ArrowLeft size={17} />
          Back to Certificate
        </motion.button>

      </div>

    </main>
  );
}