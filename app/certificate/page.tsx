"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CertificatePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#fff0f6] px-3 py-5 sm:px-5 sm:py-8">
      
      {/* TOP NAVIGATION */}
      <div className="mx-auto mb-5 flex w-full max-w-6xl items-center justify-between">
        
        <motion.button
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/letter")}
          className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#6d3b4d] shadow-sm"
        >
          <ArrowLeft size={17} />
          Letter
        </motion.button>

        <div className="flex items-center gap-2 text-sm font-semibold text-pink-500">
          <Heart size={16} fill="currentColor" />
          Ekta ♡ Purvil
        </div>

      </div>

      {/* CERTIFICATE */}
      <motion.section
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_70px_rgba(190,24,93,0.18)]">
          
          <img
            src="/certificate/certificate.png"
            alt="Official Certificate for Purvil Modi"
            className="block h-auto w-full"
          />

        </div>
      </motion.section>

      {/* BOTTOM MESSAGE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row"
      >
        
        <button
          onClick={() => router.push("/letter")}
          className="flex items-center gap-2 rounded-full border border-pink-200 bg-white px-5 py-3 text-sm font-semibold text-[#704355] shadow-sm transition hover:bg-pink-50"
        >
          <ArrowLeft size={17} />
          Read My Letter
        </button>

        <p className="text-center text-sm italic text-[#9a6579]">
          Officially certified as my favourite person. ❤️
        </p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => router.push("/final")}
          className="flex items-center gap-2 rounded-full bg-[#e83f8f] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(232,63,143,0.25)]"
        >
          Final Surprise
          <ArrowRight size={17} />
        </motion.button>

      </motion.div>

    </main>
  );
}