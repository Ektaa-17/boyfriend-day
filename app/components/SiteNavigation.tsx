"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const pages = [
  {
    name: "Welcome",
    path: "/",
  },
  {
    name: "Our Little Story",
    path: "/story",
  },
  {
    name: "Our Memories",
    path: "/memories",
  },
  {
    name: "My Letter",
    path: "/letter",
  },
  {
    name: "Certificate",
    path: "/certificate",
  },
  {
    name: "Final Surprise",
    path: "/final",
  },
];

export default function SiteNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] px-3 pt-3 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 overflow-x-auto rounded-full border border-pink-200 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-xl">

          {/* HOME / US BUTTON */}

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push("/")}
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-md"
          >
            <Heart size={15} fill="currentColor" />
            Us
          </motion.button>

          {/* PAGE BUTTONS */}

          {pages.map((page, index) => {
            const active =
              pathname === page.path ||
              (page.path !== "/" &&
                pathname.startsWith(page.path));

            return (
              <motion.button
                key={page.path}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => router.push(page.path)}
                className={`relative shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-all sm:text-sm ${
                  active
                    ? "bg-pink-100 text-pink-600"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-500"
                }`}
              >
                {index + 1}. {page.name}

                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-pink-500" />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}