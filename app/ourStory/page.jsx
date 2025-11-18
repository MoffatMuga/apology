'use client';
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaFire, FaCommentDots, FaInfinity } from "react-icons/fa";

const timeline = [
  {
    year: "2023",
    title: "Where It All Began",
    desc: "We met in Moringa School in 2023 — a moment that changed everything.",
    icon: FaCommentDots,
  },
  {
    year: "2023",
    title: "Growing Close",
    desc: "The chats, the laughter, the connection — it all grew naturally.",
    icon: FaFire,
  },
  {
    year: "2024",
    title: "A Strong Bond",
    desc: "We faced things together, trusted each other, and built something real.",
    icon: FaHeart,
  },
  {
    year: "2025",
    title: "Growing Together",
    desc: "We supported each other's dreams and kept choosing each other.",
    icon: FaStar,
  },
  {
    year: "Forever",
    title: "Our Future",
    desc: "This is only the beginning. I want to build the rest of my life with you.",
    icon: FaInfinity,
  },
];

export default function LoveTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-white/60">
        Our Story
      </h2>

      <div className="relative">
        {/* Vertical Line (center on lg, left on mobile) */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-500/40 top-0 bottom-0"></div>
        <div className="lg:hidden absolute left-4 w-1 bg-pink-500/40 top-0 bottom-0"></div>

        {timeline.map((item, index) => {
          const Icon = item.icon;
          const isLeft = index % 2 === 0; // even index on left, odd on right

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                mb-16 flex items-center
                ${isLeft ? "lg:justify-start" : "lg:justify-end"}
              `}
            >
              {/* TIMELINE DOT */}
              <div
                className={`
                  absolute 
                  ${isLeft ? "lg:left-[calc(50%-6px)]" : "lg:left-[calc(50%-6px)]"}
                  left-3
                `}
              >
                <div className="bg-pink-500 p-2 rounded-full shadow-lg shadow-pink-500/20">
                  <Icon className="text-white" size={16} />
                </div>
              </div>

              {/* CARD */}
              <div
                className={`
                  bg-[#1a1a1f] border border-pink-500/20 p-6 rounded-xl w-full lg:w-[45%]
                  ${isLeft ? "lg:ml-0 lg:mr-auto" : "lg:mr-0 lg:ml-auto"}
                `}
              >
                <h3 className="text-pink-400 font-semibold text-lg">{item.year}</h3>
                <h4 className="text-white font-bold text-xl">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}