"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bike,
  CalendarDays,
  ChevronDown,
  CloudRain,
  Film,
  Flower2,
  Heart,
  MapPin,
  MessageCircleHeart,
  PartyPopper,
  Sparkles,
  GraduationCap,
  Coffee,
} from "lucide-react";
import { useRouter } from "next/navigation";


const floatingHearts = [
  { left: "4%", top: "12%", size: 18, delay: 0 },
  { left: "12%", top: "38%", size: 13, delay: 1.2 },
  { left: "91%", top: "15%", size: 20, delay: 0.6 },
  { left: "95%", top: "48%", size: 14, delay: 1.8 },
  { left: "7%", top: "72%", size: 15, delay: 0.9 },
  { left: "89%", top: "78%", size: 17, delay: 1.5 },
];

const petals = [
  { left: "18%", top: "8%", rotate: 20, delay: 0 },
  { left: "76%", top: "21%", rotate: -30, delay: 1 },
  { left: "14%", top: "55%", rotate: 45, delay: 1.8 },
  { left: "83%", top: "61%", rotate: -20, delay: 0.8 },
  { left: "28%", top: "86%", rotate: 35, delay: 2 },
  { left: "68%", top: "88%", rotate: -40, delay: 1.4 },
];

const sparklePositions = [
  { left: "20%", top: "20%", delay: 0 },
  { left: "82%", top: "27%", delay: 0.8 },
  { left: "9%", top: "64%", delay: 1.5 },
  { left: "91%", top: "70%", delay: 0.4 },
  { left: "43%", top: "7%", delay: 1.2 },
];

type ChapterProps = {
  number: string;
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  date?: string;
  place?: string;
  children: React.ReactNode;
  quote?: string;
  tilt?: number;
};

export default function StoryPage() {
  const router = useRouter();

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8fb] text-[#492b38]">
      {/* =====================================================
          SCROLL PROGRESS
      ====================================================== */}

      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[4px] origin-left bg-[#d94f83]"
        style={{
          scaleX: smoothProgress,
        }}
      />

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-pink-200/35 blur-3xl" />

        <div className="absolute right-[-200px] top-[25%] h-[550px] w-[550px] rounded-full bg-rose-200/30 blur-3xl" />

        <div className="absolute bottom-[-220px] left-[20%] h-[500px] w-[500px] rounded-full bg-pink-100/50 blur-3xl" />

        <div className="absolute left-[40%] top-[45%] h-[350px] w-[350px] rounded-full bg-purple-100/20 blur-3xl" />
      </div>

      {/* =====================================================
          FLOATING HEARTS
      ====================================================== */}

      {floatingHearts.map((heart, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-0 text-pink-300/60"
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
            duration: 4 + index * 0.35,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}

      {/* =====================================================
          FLOATING PETALS
      ====================================================== */}

      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-0"
          style={{
            left: petal.left,
            top: petal.top,
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 8, -5, 0],
            rotate: [petal.rotate, petal.rotate + 30, petal.rotate - 20],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + index * 0.3,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={16} className="text-pink-300/60" />
        </motion.div>
      ))}

      {/* =====================================================
          SPARKLES
      ====================================================== */}

      {sparklePositions.map((sparkle, index) => (
        <motion.div
          key={index}
          className="pointer-events-none fixed z-0 text-pink-400/60"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          animate={{
            scale: [0.6, 1.2, 0.6],
            opacity: [0.2, 0.9, 0.2],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
          }}
        >
          <Sparkles size={15} />
        </motion.div>
      ))}

      {/* =====================================================
          TOP NAV
      ====================================================== */}

      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="flex items-center gap-2 rounded-full border border-pink-200 bg-white/75 px-5 py-3 text-sm font-medium text-[#704355] shadow-sm backdrop-blur-xl"
        >
          <ArrowLeft size={17} />
          Home
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
          Ekta ♡ Purvil
        </motion.div>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-5 pb-24 pt-10 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* HEART ORBIT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative mx-auto mb-9 flex h-28 w-28 items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-pink-300"
            />

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 shadow-[0_15px_50px_rgba(236,72,153,0.18)]"
            >
              <Heart
                size={38}
                className="text-pink-500"
                fill="currentColor"
              />
            </motion.div>

            <motion.div
              className="absolute -right-1 top-4 text-pink-400"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-pink-400"
          >
            A little story about us
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="font-serif text-5xl font-bold leading-tight text-[#552c3d] md:text-7xl"
          >
            OUR LITTLE
            <span className="block text-pink-500">
              LOVE STORY
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#805867] md:text-lg"
          >
            From two MCA classmates who barely knew each other...
            <br />
            to two people who slowly became each other&apos;s world. ❤️
          </motion.p>

          {/* DATE PILLS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <DatePill>
              <CalendarDays size={14} />
              25 AUG 2025
            </DatePill>

            <DatePill>
              <Heart size={14} fill="currentColor" />
              THE BEGINNING
            </DatePill>

            <DatePill>
              <CalendarDays size={14} />
              01 SEP 2025
            </DatePill>

            <DatePill>
              <Heart size={14} fill="currentColor" />
              FIRST DATE
            </DatePill>
          </motion.div>

          {/* SCROLL */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
            }}
            className="mt-14 flex flex-col items-center gap-2 text-pink-400"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Scroll to remember
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STORY INTRO
      ====================================================== */}

      <section className="px-5 pb-24">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-pink-100 bg-white/70 p-8 text-center shadow-[0_25px_80px_rgba(190,24,93,0.08)] backdrop-blur-xl md:p-14"
        >
          <motion.div
            className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pink-100/70"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-rose-100/70"
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <Heart
            size={25}
            className="mx-auto text-pink-400"
            fill="currentColor"
          />

          <p className="mx-auto mt-5 max-w-2xl font-serif text-xl italic leading-9 text-[#704355] md:text-2xl">
            &quot;Sometimes the most beautiful love stories don&apos;t
            begin with a perfect first meeting.
            <br />
            They begin with two people slowly discovering each other.&quot;
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-pink-400">
            <span>♡</span>
            <span>Ekta &amp; Purvil</span>
            <span>♡</span>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CHAPTER 01
      ====================================================== */}

      <StoryChapter
        number="01"
        eyebrow="THE BEGINNING"
        title="Two classmates. One unexpected story."
        icon={<GraduationCap size={28} />}
        date="25 August 2025"
        place="GLS College"
        tilt={-1}
      >
        <p>
          We were just college classmates at GLS College, studying MCA.
          You were there, I was there, and honestly... I didn&apos;t know
          that you would become such an important part of my life.
        </p>

        <p>
          I wasn&apos;t someone who usually started conversations with
          stranger boys. So at that point, you were simply another person
          in my college life.
        </p>

        <p>
          I had no idea that somewhere between classes, placements,
          random conversations and ordinary college days, a beautiful
          little story was about to begin.
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 02
      ====================================================== */}

      <StoryChapter
        number="02"
        eyebrow="THIRD SEMESTER"
        title="When placements gave us a reason to talk."
        icon={<MessageCircleHeart size={28} />}
        place="GLS College"
        tilt={1}
      >
        <p>
          Then third semester arrived, and suddenly placements became
          one of the biggest topics around us.
        </p>

        <p>
          Companies were coming to college, interviews were happening,
          and everyone was talking about preparation, jobs and
          opportunities.
        </p>

        <p>
          That&apos;s when we started talking more. At first it was
          simply about companies, interviews and college things.
          Nothing dramatic.
        </p>

        <p className="font-serif text-xl italic text-pink-500">
          But sometimes the smallest conversations are the beginning
          of something much bigger. ❤️
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 03
      ====================================================== */}

      <StoryChapter
        number="03"
        eyebrow="QSPIDER"
        title="The group of ten."
        icon={<Coffee size={28} />}
        place="GLS College"
        tilt={-1}
      >
        <p>
          Then QSpider came to our college.
        </p>

        <p>
          A group of ten people had to be created, and I was the only
          girl in that group. You were there too.
        </p>

        <p>
          By then we had started talking, but I still had absolutely
          no idea what was happening inside your heart.
        </p>

        <p>
          I was just enjoying our conversations and getting to know you
          little by little.
        </p>

        <MemoryNote>
          <Sparkles size={17} />
          <span>
            If only I knew what was coming next...
          </span>
        </MemoryNote>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 04
      ====================================================== */}

      <StoryChapter
        number="04"
        eyebrow="THAT RAINY DAY"
        title="After almost ten no's... I finally said yes."
        icon={<CloudRain size={28} />}
        place="On the way to the metro"
        tilt={1}
      >
        <p>
          Then came that rainy day.
        </p>

        <p>
          It was raining heavily, and you kept trying to convince me
          to let you drop me to the metro station on your Activa.
        </p>

        <p>
          And I kept saying no.
        </p>

        <div className="my-7 rounded-3xl bg-pink-50 p-6 text-center">
          <p className="font-serif text-2xl font-bold text-pink-500">
            &quot;No.&quot;
          </p>

          <p className="mt-2 text-sm text-[#8b6170]">
            ...probably almost ten times. 😂
          </p>
        </div>

        <p>
          But you kept convincing me, and eventually I agreed.
        </p>

        <p>
          It was such a small moment, but when I look back now,
          I feel like life was quietly pushing us a little closer.
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 05
      ====================================================== */}

      <StoryChapter
        number="05"
        eyebrow="THE SECRET"
        title="The girl you liked... was me."
        icon={<MessageCircleHeart size={28} />}
        place="Our conversations"
        tilt={-1}
      >
        <p>
          One day you told me that you liked a girl.
        </p>

        <p>
          You also told me that you were scared because you thought
          she might reject you.
        </p>

        <p>
          And the funniest part?
        </p>

        <div className="relative my-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-50 to-rose-100 p-8 text-center">
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Heart
              size={34}
              className="mx-auto text-pink-500"
              fill="currentColor"
            />
          </motion.div>

          <p className="mt-4 font-serif text-2xl font-bold text-[#653348]">
            I HAD NO IDEA
          </p>

          <p className="mt-2 text-sm text-[#8b6170]">
            that the girl you were talking about was me.
          </p>
        </div>

        <p>
          I was listening to you without realizing that I was actually
          the person at the center of the story.
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 06
      ====================================================== */}

      <StoryChapter
        number="06"
        eyebrow="THE REVELATION"
        title="One and a half years."
        icon={<Heart size={28} />}
        place="Computer Lab"
        tilt={1}
      >
        <p>
          One day in the computer lab, I sat with you and your friend
          because I was helping you with something.
        </p>

        <p>
          Then I went home.
        </p>

        <p>
          And the next day, you finally told me the truth.
        </p>

        <div className="my-8 rounded-[2rem] border border-pink-100 bg-white p-7 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-400">
            The revelation
          </p>

          <p className="mt-4 font-serif text-2xl font-bold leading-9 text-[#5d3042] md:text-3xl">
            You told me that I was the girl you had liked for
            <span className="text-pink-500"> 1.5 years.</span>
          </p>
        </div>

        <p>
          Suddenly so many little things started making sense.
        </p>

        <p>
          And suddenly, our story felt much more real.
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 07
      ====================================================== */}

      <StoryChapter
        number="07"
        eyebrow="MY ANSWER"
        title="I took a few days... and chose us."
        icon={<Heart size={28} />}
        date="25 August 2025"
        tilt={-1}
      >
        <p>
          I asked you for around four to six days to think.
        </p>

        <p>
          I had questions. I had fears. I wanted to understand what
          this could become.
        </p>

        <p>
          And you answered all of them patiently.
        </p>

        <p>
          Your answers made me feel reassured. Slowly, the fear started
          becoming trust.
        </p>

        <div className="my-9 text-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="inline-flex rounded-full bg-pink-100 px-8 py-5"
          >
            <span className="font-serif text-4xl font-bold text-pink-500">
              YES ❤️
            </span>
          </motion.div>
        </div>

        <p className="font-serif text-xl italic text-pink-500">
          And that little YES became the beginning of our relationship.
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 08
      ====================================================== */}

      <StoryChapter
        number="08"
        eyebrow="OUR FIRST DATE"
        title="01 September 2025."
        icon={<MapPin size={28} />}
        date="01 September 2025"
        place="ISKCON Temple → Alfa One Mall"
        tilt={1}
      >
        <p>
          Our first date.
        </p>

        <p>
          We went to ISKCON Temple together, and that day felt different
          from everything before it.
        </p>

        <div className="my-8 grid gap-4 md:grid-cols-2">
          <MiniMemory
            icon={<MapPin size={20} />}
            title="ISKCON Temple"
            text="The beginning of our first date."
          />

          <MiniMemory
            icon={<Film size={20} />}
            title="Alfa One Mall"
            text="Movie + lunch together."
          />
        </div>

        <p>
          We watched a movie and had lunch together.
        </p>

        <p>
          It wasn't some huge extravagant date.
          It was simply our first one.
        </p>

        <p className="font-serif text-xl italic text-pink-500">
          And because it was ours, it became special. ❤️
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 09
      ====================================================== */}

      <StoryChapter
        number="09"
        eyebrow="THE FRESHER PARTY"
        title="The day your shayari made me feel safe."
        icon={<PartyPopper size={28} />}
        date="12 September 2025"
        place="College Fresher Party"
        tilt={-1}
      >
        <p>
          Our relationship was still new.
        </p>

        <p>
          I had fears. I wondered if you would stay, if you would
          really mean everything you said, and whether I could trust
          this new relationship completely.
        </p>

        <p>
          Then came the fresher party.
        </p>

        <p>
          There was a game where people anonymously wrote something
          about their crush.
        </p>

        <div className="relative my-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-50 via-pink-50 to-white p-8 text-center">
          <motion.div
            animate={{
              rotate: [-5, 5, -5],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md"
          >
            <Sparkles
              size={28}
              className="text-pink-500"
            />
          </motion.div>

          <p className="mt-5 font-serif text-xl font-bold text-[#633348]">
            You wrote a shayari for me.
          </p>

          <p className="mt-3 text-sm leading-7 text-[#805867]">
            I don't remember the exact words anymore...
            but I remember how special that moment felt.
          </p>
        </div>

        <p>
          And when it became clear to everyone, something inside me
          changed.
        </p>

        <p>
          It helped me feel more secure about us. I trusted you a little
          more, and I started falling for you a little deeper.
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 10
      ====================================================== */}

      <StoryChapter
        number="10"
        eyebrow="OUR EVERYDAY"
        title="The ordinary days became my favourite ones."
        icon={<Coffee size={28} />}
        place="College"
        tilt={1}
      >
        <p>
          After that, we started going to college together almost every
          day.
        </p>

        <p>
          We would bunk lectures, sit together in the tutorial room,
          go out for snacks and spend time with your friend.
        </p>

        <p>
          Nothing about these moments looked extraordinary from the
          outside.
        </p>

        <p>
          But for me, they slowly became some of the happiest parts of
          my everyday life.
        </p>

        <div className="my-8 grid gap-3 md:grid-cols-3">
          <TinyMemory text="College together" />
          <TinyMemory text="Bunking lectures" />
          <TinyMemory text="Snack breaks" />
        </div>

        <p className="font-serif text-xl italic text-pink-500">
          Somehow, doing nothing with you became doing everything I
          wanted. ❤️
        </p>
      </StoryChapter>

      {/* =====================================================
          CHAPTER 11
      ====================================================== */}

      <StoryChapter
        number="11"
        eyebrow="ONE SPECIAL MEMORY"
        title="Your new bike, and a little moment I will always remember."
        icon={<Bike size={28} />}
        place="A very special day"
        tilt={-1}
      >
        <p>
          Then came the day you bought your new bike.
        </p>

        <p>
          What made it special for me was that you had the muhurat done
          through my hands.
        </p>

        <div className="my-9 flex justify-center">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 shadow-inner"
          >
            <Bike
              size={42}
              className="text-pink-500"
            />
          </motion.div>
        </div>

        <p>
          It may seem like a small thing, but moments like this mean
          so much to me.
        </p>

        <p>
          It made me feel included in something important in your life.
        </p>

        <p className="font-serif text-xl italic text-pink-500">
          And I think that is one of the things I love most about us —
          the feeling that we are becoming part of each other&apos;s
          lives. ❤️
        </p>
      </StoryChapter>

      {/* =====================================================
          THE BIG ENDING
      ====================================================== */}

      <section className="relative px-5 pb-32 pt-10">
        {/* HEART BURST */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2">
          {[...Array(12)].map((_, index) => {
            const angle = index * 30;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 text-pink-300"
                animate={{
                  x: [
                    0,
                    Math.cos((angle * Math.PI) / 180) * 130,
                    0,
                  ],
                  y: [
                    0,
                    Math.sin((angle * Math.PI) / 180) * 130,
                    0,
                  ],
                  opacity: [0, 1, 0],
                  scale: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart
                  size={index % 2 === 0 ? 14 : 10}
                  fill="currentColor"
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-pink-100 shadow-[0_20px_60px_rgba(236,72,153,0.18)]"
          >
            <Heart
              size={48}
              className="text-pink-500"
              fill="currentColor"
            />
          </motion.div>

          <p className="mt-9 text-xs font-bold uppercase tracking-[0.35em] text-pink-400">
            And somewhere along the way...
          </p>

          <h2 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#552c3d] md:text-6xl">
            You became my
            <span className="block text-pink-500">
              whole world.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#805867] md:text-lg">
            From a college classmate...
            <br />
            to my favourite person.
            <br />
            From random conversations...
            <br />
            to a story I never want to end.
          </p>

          <motion.p
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-8 font-serif text-2xl font-bold text-[#633348] md:text-3xl"
          >
            My Babuuuu. My love. My whole world. ❤️
          </motion.p>

          {/* =================================================
              MEMORIES BUTTON
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 18px 40px rgba(217,79,131,0.28)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => router.push("/memories")}
              className="inline-flex items-center gap-3 rounded-full bg-[#d94f83] px-8 py-4 font-semibold text-white shadow-[0_12px_30px_rgba(217,79,131,0.2)]"
            >
              Open Our Memories
              <ArrowRight size={18} />
              <Heart
                size={17}
                fill="currentColor"
              />
            </motion.button>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-5 text-xs text-[#a77989]"
          >
            Our story so far... and there&apos;s still so much more to
            come. ♡
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}

/* ============================================================
   STORY CHAPTER
============================================================ */

function StoryChapter({
  number,
  eyebrow,
  title,
  icon,
  date,
  place,
  children,
  quote,
  tilt = 0,
}: ChapterProps) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pb-28 md:px-10 md:pb-36">
      {/* CONNECTING LINE */}

      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-pink-200 to-transparent md:block" />

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.75,
          ease: "easeOut",
        }}
        className="relative"
      >
        {/* CHAPTER NUMBER */}

        <div className="relative z-20 mx-auto mb-8 flex h-20 w-20 items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-pink-300"
          />

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(236,72,153,0.12)]">
            <span className="text-sm font-bold text-pink-500">
              {number}
            </span>
          </div>
        </div>

        {/* PAPER */}

        <motion.div
          whileHover={{
            y: -5,
          }}
          style={{
            rotate: tilt,
          }}
          className="relative mx-auto max-w-4xl"
        >
          {/* BACK PAPER */}

          <div
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2.7rem] bg-pink-100/60"
            style={{
              transform: `rotate(${-tilt * 1.5}deg) translate(8px, 8px)`,
            }}
          />

          <div className="relative overflow-hidden rounded-[2.7rem] border border-pink-100 bg-white/85 p-7 shadow-[0_25px_80px_rgba(190,24,93,0.09)] backdrop-blur-xl md:p-12">
            {/* DECORATIVE CORNERS */}

            <div className="absolute right-7 top-7 text-pink-200">
              <Sparkles size={20} />
            </div>

            <div className="absolute bottom-7 left-7 text-pink-200">
              <Heart size={17} fill="currentColor" />
            </div>

            {/* ICON */}

            <motion.div
              initial={{
                scale: 0,
                rotate: -20,
              }}
              whileInView={{
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                delay: 0.15,
              }}
              className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-500"
            >
              {icon}
            </motion.div>

            {/* EYEBROW */}

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-pink-400">
              {eyebrow}
            </p>

            {/* TITLE */}

            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-[#552c3d] md:text-5xl">
              {title}
            </h2>

            {/* META */}

            {(date || place) && (
              <div className="mt-6 flex flex-wrap gap-2">
                {date && (
                  <span className="flex items-center gap-2 rounded-full bg-pink-50 px-4 py-2 text-xs text-[#805867]">
                    <CalendarDays
                      size={14}
                      className="text-pink-500"
                    />
                    {date}
                  </span>
                )}

                {place && (
                  <span className="flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-xs text-[#805867]">
                    <MapPin
                      size={14}
                      className="text-pink-500"
                    />
                    {place}
                  </span>
                )}
              </div>
            )}

            {/* DIVIDER */}

            <div className="my-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-pink-100" />

              <Heart
                size={13}
                className="text-pink-300"
                fill="currentColor"
              />

              <div className="h-px flex-1 bg-pink-100" />
            </div>

            {/* STORY */}

            <div className="space-y-6 text-[15px] leading-8 text-[#704355] md:text-base">
              {children}
            </div>

            {/* OPTIONAL QUOTE */}

            {quote && (
              <div className="mt-8 rounded-3xl bg-pink-50 p-6 text-center">
                <p className="font-serif text-xl italic text-pink-500">
                  &quot;{quote}&quot;
                </p>
              </div>
            )}

            {/* BOTTOM */}

            <div className="mt-9 flex items-center justify-center gap-2 text-pink-300">
              <span className="h-px w-12 bg-pink-100" />

              <Heart
                size={14}
                fill="currentColor"
              />

              <span className="text-xs font-medium tracking-wider">
                Ekta ♡ Purvil
              </span>

              <Heart
                size={14}
                fill="currentColor"
              />

              <span className="h-px w-12 bg-pink-100" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============================================================
   DATE PILL
============================================================ */

function DatePill({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      className="flex items-center gap-2 rounded-full border border-pink-100 bg-white/80 px-4 py-2 text-[11px] font-semibold text-[#805867] shadow-sm backdrop-blur-md"
    >
      <span className="text-pink-500">{children}</span>
    </motion.div>
  );
}

/* ============================================================
   MEMORY NOTE
============================================================ */

function MemoryNote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      className="my-8 flex items-center justify-center gap-3 rounded-3xl bg-pink-50 p-5 text-center text-sm font-medium text-pink-500"
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   MINI MEMORY
============================================================ */

function MiniMemory({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-500">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-[#633348]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#8b6170]">
        {text}
      </p>
    </motion.div>
  );
}

/* ============================================================
   TINY MEMORY
============================================================ */

function TinyMemory({
  text,
}: {
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        rotate: 1,
      }}
      className="rounded-2xl bg-pink-50 px-4 py-4 text-center text-sm font-medium text-[#805867]"
    >
      <Heart
        size={14}
        className="mx-auto mb-2 text-pink-400"
        fill="currentColor"
      />

      {text}
    </motion.div>
  );
}