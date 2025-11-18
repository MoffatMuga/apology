"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { num: 2, text: "years of knowing you" },
  { num: 100, text: "percent love for you" },
  { num: 1000, text: "years of loving you" },
];

function Stats() {
  return (
    <section className="pt-4 pb-4">
      <div className="flex flex-wrap flex-col md:flex-row gap-6 justify-center">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            
            // ANIMATION
            initial={{ opacity: 0, y: 80 }} // bigger offset to ensure proper animation on large screens
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}

            // FIX: Ensures animation triggers on large screens
            viewport={{ once: true, margin: "-150px" }}
          >
            <span>
              <CountUp
                end={item.num}
                duration={3}
                delay={0.3}
                className="text-4xl text-white/60 xl:text-6xl font-extrabold"
              />
            </span>

            <p
              className={`${
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              }`}
            >
              {item.text}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Stats;
