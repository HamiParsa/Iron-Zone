"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const allPrograms = [
  {
    name: "Bodybuilding",
    category: "Strength",
    img: "https://images.squarespace-cdn.com/content/v1/5ebef943272c1041d83b1d15/a6dbc39a-a8e6-4072-a259-bf44c4aecc6f/Natural+Bodybuilding.jpg",
    desc: "Build strength and muscle with expert guidance.",
  },
  {
    name: "Crossfit",
    category: "Endurance",
    img: "https://www.morrant.com/Portals/6/LiveBlog/841/Morrant%20crossfit%20image.png?ver=2023-11-23-114552-067",
    desc: "High-intensity workouts to boost endurance and power.",
  },
  {
    name: "Yoga",
    category: "Flexibility",
    img: "https://i.shgcdn.com/62f0a505-76f9-4160-847f-f3dbe2ed71d0/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    desc: "Enhance flexibility, balance, and inner peace.",
  },
  {
    name: "Boxing",
    category: "Combat",
    img: "https://www.walkermorris.co.uk/wp-content/uploads/2022/07/woman-boxing-in-a-gym.jpg",
    desc: "Learn boxing techniques and improve agility.",
  },
];

const categories = ["All", "Strength", "Endurance", "Flexibility", "Combat"];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPrograms =
    activeCategory === "All"
      ? allPrograms
      : allPrograms.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-black text-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_3px_10px_rgba(255,0,0,0.3)]">
            Explore Our <span className="text-red-600">Programs</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Find the perfect training program to reach your fitness goals.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-6 text-center">
        <div className="flex justify-center gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPrograms.map((p) => (
          <motion.div
            key={p.name}
            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-red-600/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-64 w-full">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-cover rounded-2xl group-hover:brightness-75 transition-all"
              />
            </div>
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{p.desc}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
