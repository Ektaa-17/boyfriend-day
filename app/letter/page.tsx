"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Mail,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";

const hearts = [
  { left: "6%", top: "14%", delay: 0, size: 18 },
  { left: "90%", top: "18%", delay: 0.8, size: 14 },
  { left: "8%", top: "48%", delay: 1.4, size: 12 },
  { left: "92%", top: "52%", delay: 2, size: 18 },
  { left: "15%", top: "78%", delay: 2.5, size: 15 },
  { left: "84%", top: "82%", delay: 1.8, size: 13 },
];

const sparkles = [
  { left: "18%", top: "28%", delay: 0.5 },
  { left: "82%", top: "34%", delay: 1.2 },
  { left: "12%", top: "65%", delay: 1.8 },
  { left: "87%", top: "68%", delay: 0.9 },
];

export default function LetterPage() {
  const router = useRouter();

  return (
    <main className="letter-page">
      {/* BACKGROUND */}

      <div className="background-decoration">
        {hearts.map((heart, index) => (
          <motion.div
            key={index}
            className="floating-heart"
            style={{
              left: heart.left,
              top: heart.top,
              fontSize: heart.size,
            }}
            animate={{
              y: [0, -18, 0],
              rotate: [-8, 8, -8],
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 4 + index * 0.3,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart fill="currentColor" size={heart.size} />
          </motion.div>
        ))}

        {sparkles.map((item, index) => (
          <motion.div
            key={index}
            className="floating-sparkle"
            style={{
              left: item.left,
              top: item.top,
            }}
            animate={{
              scale: [0.6, 1.2, 0.6],
              opacity: [0.2, 0.9, 0.2],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* TOP HEADER */}

      <header className="letter-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="eyebrow">
            <Heart size={13} fill="currentColor" />
            A LITTLE LETTER FOR YOU
            <Heart size={13} fill="currentColor" />
          </div>

          <h1>
            MY
            <span>LETTER</span>
          </h1>

          <p>
            For the boy who somehow became
            <br className="desktop-break" />
            my whole world. ❤️
          </p>
        </motion.div>
      </header>

      {/* LETTER CARD */}

      <motion.section
        className="letter-container"
        initial={{ opacity: 0, y: 45, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className="letter-card">
          {/* TOP DECORATION */}

          <div className="corner-heart corner-one">♡</div>
          <div className="corner-heart corner-two">♡</div>

          {/* LETTER HEADER */}

          <div className="letter-title">
            <div className="envelope-icon">
              <Mail size={24} strokeWidth={1.8} />
            </div>

            <div>
              <span>PERSONALLY WRITTEN FOR</span>
              <h2>My Babuuu</h2>
            </div>
          </div>

          <div className="divider">
            <span></span>
            <Heart size={13} fill="currentColor" />
            <span></span>
          </div>

          {/* LETTER CONTENT */}

          <article className="letter-content">
            <p className="opening">
              Dear Purvil,
            </p>

            <p>
              Happy National Boyfriend Day to my favourite headache! 😂❤️
            </p>

            <p>
              Honestly, I don't know how I got so lucky to have someone who
              can irritate me, make me laugh, and still somehow make me love
              him more every single day. 🥹😂
            </p>

            <p>
              You're my boyfriend, my best friend, my personal entertainer,
              and sometimes my full-time headache. 😭😂
            </p>

            <p>
              Thank you for listening to my endless talks, handling my mood
              swings, and surviving my{" "}
              <span className="pink-text">"I'm not angry"</span> moments. 🤭❤️
            </p>

            <p>
              Life with you is never boring because somehow we can turn even
              the smallest thing into a full-blown discussion. 😂
            </p>

            <p>
              I love how you make me smile even when I'm pretending to be mad
              at you. 😒❤️
            </p>

            <p>
              And yes, you annoy me A LOT...
              <br />
              but unfortunately, I still choose you. 😂🫶🏻
            </p>

            <p>
              You're the person I want to share my happiness, my problems, my
              random gossip, and all my stupid thoughts with. 🥹❤️
            </p>

            <p>
              I hope we always keep laughing, fighting over silly things,
              teasing each other, and then acting like nothing happened. 😂🫂
            </p>

            <p>
              You're genuinely very special to me, even though I'll never
              admit it without teasing you first. 😌😂
            </p>

            {/* SPECIAL MESSAGE */}

            <motion.div
              className="special-message"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles size={17} />

              <p>
                You are my babuuu,
                <br />
                my favourite person,
                <br />
                and my whole world. ❤️
              </p>

              <Sparkles size={17} />
            </motion.div>

            <p>
              So Happy National Boyfriend Day, baby! ❤️
            </p>

            <p>
              Now go enjoy your special day...
              <br />
              but don't get too excited,
              <br className="mobile-break" />
              you still have to deal with me. 😂💋❤️
            </p>

            {/* END */}

            <div className="letter-ending">
              <p>
                No matter how many silly fights,
                random arguments, teasing sessions,
                or crazy days come our way...
              </p>

              <p className="forever">
                I will always choose you. ❤️
              </p>
            </div>
          </article>

          {/* SIGNATURE */}

          <div className="signature-area">
            <div className="signature-line"></div>

            <div className="signature">
              <Heart
                size={25}
                fill="currentColor"
                strokeWidth={1.5}
              />

              <div>
                <span>Forever annoying you,</span>
                <strong>Ekta ❤️</strong>
              </div>
            </div>
          </div>

          {/* DATE */}

          <div className="letter-date">
            <span>♡</span>
            Since 25 August 2025
            <span>♡</span>
          </div>
        </div>
      </motion.section>

      {/* BOTTOM MESSAGE */}

      <motion.div
        className="bottom-message"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <span>Some people become memories.</span>
        <Heart size={15} fill="currentColor" />
        <span>You became my home.</span>
      </motion.div>

      {/* NAVIGATION */}

      <div className="navigation">
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/memories")}
          className="back-button"
        >
          <ArrowLeft size={17} />
          <span>Memories</span>
        </motion.button>

        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/certificate")}
          className="certificate-button"
        >
          <span>Certificate</span>
          <ArrowRight size={17} />
        </motion.button>
      </div>

      {/* CSS */}

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .letter-page {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          padding: 55px 18px 45px;
          background:
            radial-gradient(
              circle at 8% 10%,
              rgba(255, 120, 180, 0.18),
              transparent 25%
            ),
            radial-gradient(
              circle at 92% 35%,
              rgba(255, 180, 210, 0.2),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #fff8fb 0%,
              #fff0f6 48%,
              #fffafd 100%
            );
          color: #5a3041;
        }

        .background-decoration {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .floating-heart {
          position: absolute;
          color: rgba(238, 75, 148, 0.4);
        }

        .floating-sparkle {
          position: absolute;
          color: rgba(239, 87, 157, 0.55);
          font-size: 20px;
        }

        /* HEADER */

        .letter-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 32px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          color: #eb4d96;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .letter-header h1 {
          margin: 13px 0 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(50px, 9vw, 82px);
          line-height: 0.88;
          letter-spacing: -3px;
          color: #582b3c;
        }

        .letter-header h1 span {
          display: block;
          color: #e94992;
        }

        .letter-header p {
          margin: 20px auto 0;
          color: #8a5d6d;
          font-size: 15px;
          line-height: 1.7;
          font-style: italic;
        }

        /* LETTER */

        .letter-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
        }

        .letter-card {
          position: relative;
          width: 100%;
          padding: 55px 70px 45px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(234, 80, 148, 0.16);
          border-radius: 24px;
          box-shadow:
            0 30px 80px rgba(103, 43, 68, 0.13),
            0 8px 25px rgba(103, 43, 68, 0.06);
          backdrop-filter: blur(12px);
        }

        .letter-card::before {
          content: "";
          position: absolute;
          inset: 13px;
          border: 1px dashed rgba(233, 73, 146, 0.2);
          border-radius: 16px;
          pointer-events: none;
        }

        .corner-heart {
          position: absolute;
          color: rgba(232, 73, 145, 0.4);
          font-family: Georgia, serif;
          font-size: 42px;
          z-index: 2;
        }

        .corner-one {
          left: 27px;
          top: 18px;
        }

        .corner-two {
          right: 27px;
          top: 18px;
        }

        /* TITLE */

        .letter-title {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .envelope-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: #ffe2ee;
          color: #eb4d96;
        }

        .letter-title span {
          display: block;
          margin-bottom: 4px;
          color: #eb4d96;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .letter-title h2 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          color: #54283a;
        }

        .divider {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 30px 0;
          color: #ef6ca8;
        }

        .divider span {
          height: 1px;
          flex: 1;
          background: #f4d4e1;
        }

        /* CONTENT */

        .letter-content {
          position: relative;
          z-index: 3;
          font-family: Georgia, "Times New Roman", serif;
          color: #704354;
          font-size: 17px;
          line-height: 1.95;
        }

        .letter-content p {
          margin: 0 0 20px;
        }

        .opening {
          font-size: 27px;
          font-weight: bold;
          color: #5a2c3d;
          margin-bottom: 25px !important;
        }

        .pink-text {
          color: #e94992;
          font-weight: bold;
          font-style: italic;
        }

        /* SPECIAL */

        .special-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 32px 0;
          padding: 24px 15px;
          border-top: 1px solid #f3cada;
          border-bottom: 1px solid #f3cada;
          color: #e94992;
        }

        .special-message p {
          margin: 0;
          text-align: center;
          font-size: 20px;
          line-height: 1.7;
          font-weight: bold;
        }

        /* ENDING */

        .letter-ending {
          margin-top: 30px;
          padding: 20px 0 5px;
          text-align: center;
        }

        .letter-ending p {
          color: #896072;
          font-style: italic;
        }

        .letter-ending .forever {
          color: #e94992;
          font-size: 23px;
          font-weight: bold;
          font-style: normal;
          margin-bottom: 0;
        }

        /* SIGNATURE */

        .signature-area {
          position: relative;
          z-index: 3;
          margin-top: 35px;
        }

        .signature-line {
          width: 100%;
          height: 1px;
          background: #f2d7e2;
          margin-bottom: 20px;
        }

        .signature {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          color: #eb4d96;
        }

        .signature span {
          display: block;
          color: #956678;
          font-size: 13px;
          font-style: italic;
        }

        .signature strong {
          display: block;
          font-family: "Brush Script MT", "Segoe Script", cursive;
          font-size: 30px;
          color: #e94992;
        }

        .letter-date {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
          color: #ad8191;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .letter-date span {
          color: #ef6ca8;
          font-size: 15px;
        }

        /* BOTTOM */

        .bottom-message {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 28px auto 25px;
          color: #bd6a8d;
          font-size: 13px;
          font-style: italic;
          text-align: center;
        }

        /* NAVIGATION */

        .navigation {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 15px;
        }

        .back-button,
        .certificate-button {
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          transition: 0.25s ease;
        }

        .back-button {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #f1cfdd;
          color: #734558;
          box-shadow: 0 8px 25px rgba(100, 40, 65, 0.06);
        }

        .certificate-button {
          background: #e94992;
          color: white;
          box-shadow: 0 10px 30px rgba(233, 73, 146, 0.25);
        }

        .mobile-break {
          display: none;
        }

        /* TABLET */

        @media (max-width: 768px) {
          .letter-page {
            padding: 42px 14px 35px;
          }

          .letter-card {
            padding: 48px 34px 38px;
            border-radius: 20px;
          }

          .letter-content {
            font-size: 16px;
            line-height: 1.9;
          }

          .special-message p {
            font-size: 18px;
          }
        }

        /* MOBILE */

        @media (max-width: 520px) {
          .letter-page {
            padding: 30px 10px 28px;
          }

          .letter-header {
            margin-bottom: 25px;
          }

          .eyebrow {
            font-size: 8px;
            letter-spacing: 2px;
            gap: 5px;
          }

          .letter-header h1 {
            margin-top: 12px;
            font-size: 54px;
            letter-spacing: -2px;
          }

          .letter-header p {
            margin-top: 14px;
            font-size: 13px;
          }

          .desktop-break {
            display: none;
          }

          .letter-card {
            padding: 40px 22px 32px;
            border-radius: 18px;
          }

          .letter-card::before {
            inset: 9px;
            border-radius: 12px;
          }

          .corner-heart {
            font-size: 30px;
          }

          .corner-one {
            left: 18px;
            top: 14px;
          }

          .corner-two {
            right: 18px;
            top: 14px;
          }

          .letter-title {
            gap: 11px;
          }

          .envelope-icon {
            width: 45px;
            height: 45px;
          }

          .envelope-icon svg {
            width: 20px;
          }

          .letter-title span {
            font-size: 7px;
            letter-spacing: 1.6px;
          }

          .letter-title h2 {
            font-size: 23px;
          }

          .divider {
            margin: 24px 0;
          }

          .letter-content {
            font-size: 15px;
            line-height: 1.85;
          }

          .letter-content p {
            margin-bottom: 17px;
          }

          .opening {
            font-size: 23px;
            margin-bottom: 20px !important;
          }

          .special-message {
            gap: 7px;
            margin: 25px 0;
            padding: 19px 5px;
          }

          .special-message p {
            font-size: 17px;
            line-height: 1.6;
          }

          .special-message svg {
            width: 14px;
            flex-shrink: 0;
          }

          .letter-ending {
            margin-top: 25px;
          }

          .letter-ending .forever {
            font-size: 20px;
          }

          .signature-area {
            margin-top: 28px;
          }

          .signature {
            justify-content: center;
          }

          .signature strong {
            font-size: 28px;
          }

          .letter-date {
            font-size: 8px;
            letter-spacing: 1.4px;
          }

          .bottom-message {
            flex-wrap: wrap;
            padding: 0 15px;
            font-size: 12px;
          }

          .navigation {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .back-button,
          .certificate-button {
            width: 100%;
            min-height: 44px;
            padding: 0 10px;
            font-size: 12px;
          }

          .mobile-break {
            display: block;
          }

          .floating-heart {
            opacity: 0.45;
          }

          .floating-sparkle {
            font-size: 14px;
          }
        }

        /* VERY SMALL PHONES */

        @media (max-width: 360px) {
          .letter-page {
            padding-left: 7px;
            padding-right: 7px;
          }

          .letter-header h1 {
            font-size: 48px;
          }

          .letter-card {
            padding-left: 18px;
            padding-right: 18px;
          }

          .letter-content {
            font-size: 14px;
          }

          .special-message p {
            font-size: 15px;
          }

          .back-button,
          .certificate-button {
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}