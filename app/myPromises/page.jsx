"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// ICONS
import { Heart, HandHeart, Sparkles, Star } from "lucide-react";

// ------------------
// CONTENT SECTIONS
// ------------------

const loveCommitment = {
  icon: Heart,
  title: "My Commitment to Love You",
  description:
    "I promise to love you gently, honestly, and consistently — even on days when I don’t feel perfect, my heart will still choose you.",
  items: [
    { duration: "Forever", position: "I will choose you", comapany: "In every season" },
    { duration: "Daily", position: "I will appreciate you", comapany: "In actions & words" },
    { duration: "Always", position: "I will stay loyal", comapany: "No matter what" },
  ],
};

const supportCommitment = {
  icon: HandHeart,
  title: "My Commitment to Support You",
  description:
    "Your dreams matter to me. Your peace matters to me. I promise to support you emotionally, mentally, and in every challenge life brings.",
  items: [
    { duration: "Anytime", position: "I will listen", comapany: "With patience" },
    { duration: "In hard times", position: "I will stand by you", comapany: "Fully" },
    { duration: "Through all seasons", position: "I will understand you", comapany: "Even when it's hard" },
  ],
};

const growthCommitment = {
  icon: Sparkles,
  title: "My Commitment to Grow With You",
  description:
    "I promise to become better for us — to learn, to communicate, and to build a future with intention and love.",
  items: [
    { duration: "Every day", position: "I will improve myself", comapany: "For us" },
    { duration: "In our journey", position: "I will communicate", comapany: "Honestly" },
    { duration: "Step by step", position: "I will grow with you", comapany: "At your pace" },
  ],
};

const respectCommitment = {
  icon: Star,
  title: "My Commitment to Treat You Right",
  description:
    "I promise to respect your feelings, honor your heart, speak kindly, and always make you feel valued and cherished.",
  items: [
    { duration: "Always", position: "I will respect you", comapany: "Fully" },
    { duration: "In every moment", position: "I will speak kindly", comapany: "Even in conflict" },
    { duration: "Forever", position: "I will make you feel special", comapany: "Because you are" },
  ],
};

// ------------------
// MAIN COMPONENT
// ------------------

function MyPromises() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">

        <Tabs defaultValue="love" className="flex flex-col xl:flex-row gap-[60px]">

          {/* LEFT SIDE - TABS */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">

            <TabsTrigger value="love">Love</TabsTrigger>
            <TabsTrigger value="support">Support</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
            <TabsTrigger value="respect">Respect</TabsTrigger>

          </TabsList>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full min-h-[70vh]">

            {/* LOVE */}
            <TabsContent value="love" className="w-full">
              <Section section={loveCommitment} />
            </TabsContent>

            {/* SUPPORT */}
            <TabsContent value="support" className="w-full">
              <Section section={supportCommitment} />
            </TabsContent>

            {/* GROWTH */}
            <TabsContent value="growth" className="w-full">
              <Section section={growthCommitment} />
            </TabsContent>

            {/* RESPECT */}
            <TabsContent value="respect" className="w-full">
              <Section section={respectCommitment} />
            </TabsContent>

          </div>
        </Tabs>

      </div>
    </motion.div>
  );
}

export default MyPromises;


// ------------------
// SECTION COMPONENT
// ------------------

function Section({ section }) {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">

      {/* Title */}
      <h3 className="font-bold text-4xl flex items-center justify-center gap-3 xl:justify-start text-white/60">
        <section.icon className="w-8 h-8 text-pink-400" />
        {section.title}
      </h3>

      {/* Description */}
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {section.description}
      </p>

      {/* Scrollable Items */}
      <ScrollArea className="h-[280px] ">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {section.items.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center text-center"
            >
              <span className="text-pink-300 font-semibold">{item.duration}</span>
              <h3 className="text-xl font-bold">{item.position}</h3>
              <p className="text-white/60">{item.comapany}</p>
            </li>
          ))}
        </ul>
      </ScrollArea>

    </div>
  );
}
