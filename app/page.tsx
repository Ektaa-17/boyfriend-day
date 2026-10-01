"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Flower2,
  Stars,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { useRouter } from "next/navigation";

const hearts = [
  { left: "4%", top: "17%", size: 19, delay: 0, duration: 4.5 },
  { left: "9%", top: "43%", size: 28, delay: 1.2, duration: 5.2 },
  { left: "16%", top: "24%", size: 16, delay: 2, duration: 4.2 },
  { left: "23%", top: "72%", size: 21, delay: 0.6, duration: 5 },
  { left: "31%", top: "12%", size: 15, delay: 1.8, duration: 4.7 },
  { left: "69%", top: "17%", size: 22, delay: 0.8, duration: 5.4 },
  { left: "77%", top: "43%", size: 17, delay: 2.1, duration: 4.4 },
  { left: "84%", top: "24%", size: 27, delay: 1, duration: 5 },
  { left: "91%", top: "53%", size: 20, delay: 2.5, duration: 4.8 },
  { left: "96%", top: "14%", size: 17, delay: 0.3, duration: 5.1 },
  { left: "12%", top: "88%", size: 14, delay: 1.7, duration: 4.3 },
  { left: "87%", top: "84%", size: 15, delay: 2.8, duration: 5.3 },
];

const petals = [
  { left: "7%", top: "32%", rotate: -25, delay: 0, duration: 5 },
  { left: "14%", top: "78%", rotate: 30, delay: 1, duration: 5.5 },
  { left: "27%", top: "21%", rotate: -15, delay: 2, duration: 4.8 },
  { left: "72%", top: "31%", rotate: 20, delay: 1, duration: 5.2 },
  { left: "88%", top: "37%", rotate: -30, delay: 2.5, duration: 5.7 },
  { left: "94%", top: "72%", rotate: 25, delay: 0.5, duration: 4.9 },
];

const flowers = [
  { left: "1%", top: "8%", size: 48, delay: 0 },
  { left: "7%", top: "86%", size: 40, delay: 0.8 },
  { left: "91%", top: "8%", size: 44, delay: 1.2 },
  { left: "94%", top: "82%", size: 49, delay: 0.4 },
];

const sparkles = [
  { left: "20%", top: "17%", size: 13, delay: 0 },
  { left: "78%", top: "15%", size: 15, delay: 1 },
  { left: "11%", top: "61%", size: 11, delay: 1.7 },
  { left: "89%", top: "63%", size: 13, delay: 0.7 },
  { left: "37%", top: "80%", size: 12, delay: 1.4 },
  { left: "64%", top: "78%", size: 11, delay: 2 },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffafd] text-[#352b31] selection:bg-[#f7bfd0] selection:text-[#4d2634]">

      
      {/* =========================================================
          ANIMATED BACKGROUND
      ========================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-[220px] -left-[180px] w-[600px] h-[600px] rounded-full bg-[#ffdce9] blur-[100px]"
          animate={{
            x: [0, 35, 0],
            y: [0, 25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-[18%] -right-[220px] w-[550px] h-[550px] rounded-full bg-[#ffeef5] blur-[110px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-[260px] left-[25%] w-[700px] h-[500px] rounded-full bg-[#ffe5ef] blur-[120px]"
          animate={{
            x: [0, 25, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(255,250,253,0.25)_45%,transparent_75%)]" />
      </div>

      {/* =========================================================
          TOP RIBBON
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute top-7 left-1/2 -translate-x-1/2 w-[82%] max-w-5xl pointer-events-none z-20"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[#efabc1] to-transparent" />

        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 -translate-x-1/2 -top-3 px-5 bg-[#fffafd] text-[#e783a3]"
        >
          <Heart size={20} fill="currentColor" strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* =========================================================
          FLOWERS
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none z-10">
        {flowers.map((flower, index) => (
          <motion.div
            key={index}
            className="absolute text-[#f3abc2]"
            style={{
              left: flower.left,
              top: flower.top,
            }}
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -15,
            }}
            animate={{
              opacity: [0.3, 0.65, 0.3],
              scale: [0.9, 1.06, 0.9],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: flower.delay,
              ease: "easeInOut",
            }}
          >
            <Flower2 size={flower.size} strokeWidth={1.1} />
          </motion.div>
        ))}
      </div>

      {/* =========================================================
          FLOATING HEARTS
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none z-10">
        {hearts.map((heart, index) => (
          <motion.div
            key={index}
            className="absolute text-[#f2a6be]"
            style={{
              left: heart.left,
              top: heart.top,
            }}
            animate={{
              y: [0, -16, 0],
              x: [0, index % 2 === 0 ? 6 : -6, 0],
              rotate: [-7, 7, -7],
              opacity: [0.25, 0.7, 0.25],
              scale: [0.9, 1.08, 0.9],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: "easeInOut",
            }}
          >
            <Heart
              size={heart.size}
              fill="currentColor"
              strokeWidth={1.2}
            />
          </motion.div>
        ))}
      </div>

      {/* =========================================================
          FLOATING PETALS
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none z-10">
        {petals.map((petal, index) => (
          <motion.div
            key={index}
            className="absolute text-[#f5afc5]"
            style={{
              left: petal.left,
              top: petal.top,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, index % 2 === 0 ? 10 : -10, 0],
              rotate: [
                petal.rotate,
                petal.rotate + 18,
                petal.rotate,
              ],
              opacity: [0.25, 0.65, 0.25],
            }}
            transition={{
              duration: petal.duration,
              repeat: Infinity,
              delay: petal.delay,
              ease: "easeInOut",
            }}
          >
            <Flower2 size={19} strokeWidth={1.1} />
          </motion.div>
        ))}
      </div>

      {/* =========================================================
          SPARKLES
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none z-10">
        {sparkles.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-[#e996b1]"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.25, 0.7],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* =========================================================
          MAIN HERO
      ========================================================== */}

      <section className="relative z-20 min-h-screen flex items-center justify-center px-5 sm:px-8 py-24">
        <div className="w-full max-w-5xl text-center">

          {/* TOP EYEBROW */}

          <motion.div
            initial={{
              opacity: 0,
              y: -25,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="flex items-center justify-center gap-3 mb-7"
          >
            <motion.div
              animate={{
                rotate: [0, 15, 0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Sparkles
                size={17}
                className="text-[#e98ba8]"
              />
            </motion.div>

            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.4em] text-[#d97898] font-semibold">
              A LITTLE SURPRISE FOR YOU
            </span>

            <motion.div
              animate={{
                rotate: [0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <Sparkles
                size={17}
                className="text-[#e98ba8]"
              />
            </motion.div>
          </motion.div>

          {/* =====================================================
              MAIN GLASS CARD
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.45,
              ease: "easeOut",
            }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Glow behind card */}

            <motion.div
              className="absolute -inset-6 rounded-[3rem] bg-[#f9bfd1]/20 blur-3xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [0.98, 1.03, 0.98],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative rounded-[2.5rem] border border-white/80 bg-white/55 backdrop-blur-xl shadow-[0_30px_100px_rgba(220,100,140,0.12)] px-6 sm:px-10 md:px-16 py-10 sm:py-14">

              {/* SMALL LOVE BADGE */}

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
                  delay: 0.75,
                  type: "spring",
                  stiffness: 160,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff1f6] border border-[#f8d1de] text-[#d87596] text-xs font-medium"
              >
                <Heart
                  size={13}
                  fill="currentColor"
                />

                Made with love by Ekta
              </motion.div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                }}
                className="mt-8 text-5xl sm:text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight text-[#e35d86]"
              >
                Happy
                <br />

                <span className="relative inline-block mt-3">
                  Boyfriend&apos;s Day

                  <motion.span
                    className="absolute -right-7 sm:-right-10 -top-4 sm:-top-5 text-[#ee7ea2]"
                    animate={{
                      rotate: [-12, 12, -12],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart
                      size={27}
                      className="sm:w-[34px] sm:h-[34px]"
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  </motion.span>
                </span>
              </motion.h1>

              {/* =================================================
                  HEART
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 130,
                }}
                className="flex justify-center my-8"
              >
                <div className="relative">

                  {/* outer rings */}

                  <motion.div
                    className="absolute -inset-7 rounded-full border border-[#f7c8d7]"
                    animate={{
                      scale: [0.8, 1.25, 0.8],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />

                  <motion.div
                    className="absolute -inset-4 rounded-full border border-[#f6d5e0]"
                    animate={{
                      scale: [0.85, 1.2, 0.85],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      delay: 0.5,
                      ease: "easeOut",
                    }}
                  />

                  {/* heart */}

                  <motion.div
                    animate={{
                      scale: [1, 1.13, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart
                      size={57}
                      fill="#f28aaa"
                      stroke="#f28aaa"
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* =================================================
                  NAME
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 1.35,
                  duration: 0.8,
                }}
              >
                <p className="text-xs tracking-[0.4em] text-[#ad9da5] uppercase mb-3">
                  This little surprise is for
                </p>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#352d33]">
                  Purvil Modi
                </h2>

                <motion.div
                  className="flex items-center justify-center gap-3 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.55 }}
                >
                  <div className="w-10 sm:w-16 h-px bg-[#f2c4d2]" />

                  <Heart
                    size={13}
                    fill="#ef91ac"
                    className="text-[#ef91ac]"
                  />

                  <span className="text-sm text-[#9a8d93]">
                    Since 25 August 2025
                  </span>

                  <Heart
                    size={13}
                    fill="#ef91ac"
                    className="text-[#ef91ac]"
                  />

                  <div className="w-10 sm:w-16 h-px bg-[#f2c4d2]" />
                </motion.div>
              </motion.div>

              {/* =================================================
                  DATE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.65,
                }}
                className="mt-6"
              >
                <span className="text-xs sm:text-sm tracking-[0.35em] text-[#a29399]">
                  03 • OCTOBER • 2026
                </span>
              </motion.div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

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
                  delay: 1.85,
                }}
                className="mt-9"
              >
                <p className="text-lg sm:text-xl md:text-2xl text-[#6f636a] italic leading-relaxed">
                  &quot;My favourite headache,
                  <br className="sm:hidden" /> my favourite person.&quot;
                </p>

                <div className="mt-3 text-xl">
                  😂❤️
                </div>
              </motion.div>

              {/* =================================================
                  BUTTON
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 2.05,
                }}
                className="mt-10"
              >
                <motion.button
                  onClick={() => router.push("/story")}
                  whileHover={{
                    scale: 1.06,
                    boxShadow:
                      "0 20px 45px rgba(230,104,143,0.28)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#f18aaa] to-[#e8759c] text-white font-semibold text-base sm:text-lg shadow-[0_12px_35px_rgba(240,130,165,0.25)] overflow-hidden"
                >
                  {/* shine */}

                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{
                      x: "-100%",
                    }}
                    whileHover={{
                      x: "100%",
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                  />

                  <Heart
                    size={19}
                    fill="currentColor"
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    Open My Heart
                  </span>

                  <motion.span
                    className="relative z-10"
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight size={19} />
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* =================================================
                  LITTLE NOTE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 2.25,
                }}
                className="mt-10 flex items-center justify-center gap-2 text-sm text-[#a3949b]"
              >
                <HeartHandshake
                  size={16}
                  className="text-[#e890aa]"
                />

                <span>
                  A tiny website for a very special person
                </span>

                <Heart
                  size={14}
                  fill="#efa0b8"
                  className="text-[#efa0b8]"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =====================================================
              BOTTOM LOVE SIGNATURE
          ====================================================== */}

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
              delay: 2.4,
            }}
            className="mt-10"
          >
            <div className="flex items-center justify-center gap-4 text-[#efabc0]">
              <div className="w-14 sm:w-24 h-px bg-gradient-to-r from-transparent to-[#f2c6d3]" />

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                }}
              >
                <Heart
                  size={15}
                  fill="currentColor"
                />
              </motion.div>

              <div className="w-14 sm:w-24 h-px bg-gradient-to-l from-transparent to-[#f2c6d3]" />
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#a1949a]">
              Made with lots of love by{" "}
              <span className="font-semibold text-[#d97898]">
                Ekta Gohel
              </span>
              {" "}💕
            </p>
          </motion.div>

          {/* =====================================================
              SCROLL HINT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              delay: 3,
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-8 flex flex-col items-center gap-2 text-[#c29ba9]"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">
              Our story awaits
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <Stars size={15} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          BOTTOM FLOWERS
      ========================================================== */}

      <div className="absolute bottom-[-20px] left-[-20px] opacity-35 pointer-events-none z-10">
        <div className="flex items-end gap-1">
          <motion.div
            animate={{
              rotate: [-4, 4, -4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <Flower2
              size={80}
              className="text-[#f2b0c6]"
              strokeWidth={1}
            />
          </motion.div>

          <motion.div
            animate={{
              rotate: [4, -4, 4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Flower2
              size={50}
              className="text-[#f8c6d5]"
              strokeWidth={1}
            />
          </motion.div>

          <Flower2
            size={62}
            className="text-[#f1a7bf]"
            strokeWidth={1}
          />
        </div>
      </div>

      <div className="absolute bottom-[-20px] right-[-20px] opacity-35 pointer-events-none z-10">
        <div className="flex items-end gap-1">
          <Flower2
            size={52}
            className="text-[#f8c6d5]"
            strokeWidth={1}
          />

          <motion.div
            animate={{
              rotate: [4, -4, 4],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
            }}
          >
            <Flower2
              size={82}
              className="text-[#f1a7bf]"
              strokeWidth={1}
            />
          </motion.div>

          <Flower2
            size={46}
            className="text-[#f2b0c6]"
            strokeWidth={1}
          />
        </div>
      </div>

      {/* =========================================================
          CORNER MINI HEARTS
      ========================================================== */}

      <motion.div
        className="absolute top-[12%] left-[3%] text-[#f2a6be] opacity-50 pointer-events-none"
        animate={{
          rotate: [-10, 10, -10],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <Heart size={12} fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-[12%] right-[3%] text-[#f2a6be] opacity-50 pointer-events-none"
        animate={{
          rotate: [10, -10, 10],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
        }}
      >
        <Heart size={14} fill="currentColor" />
      </motion.div>
    </main>
  );
}