"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const trainers = [
  {
    name: "Alex Johnson",
    role: "Strength Coach",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Boulder_Worldcup_Vienna_28-05-2010_quali-w100_Alex_Johnson.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Yoga Instructor",
    img: "https://www.voguehk.com/media/2024/03/hh-853x1280.jpg",
  },
  {
    name: "Mike Tyson",
    role: "Boxing Expert",
    img: "https://hips.hearstapps.com/hmg-prod/images/mike-tyson-looks-on-prior-to-the-heavyweight-fight-between-news-photo-1716476934.jpg?crop=0.640xw:0.961xh;0.154xw,0.0391xh&resize=640:*",
  },
  {
    name: "Linda Brown",
    role: "Crossfit Trainer",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TrainersPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1594737625785-c0d51e0b8b2b?auto=format&fit=crop&w=1470&q=80"
            alt="Trainers Hero"
            fill
            className="object-cover brightness-75"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_3px_10px_rgba(255,0,0,0.3)]">
            Meet Our <span className="text-red-600">Trainers</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Our expert trainers will guide you to reach your peak performance.
          </p>
        </motion.div>
      </section>

      {/* Trainers Spotlight Grid */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {trainers.map((t) => (
          <motion.div
            key={t.name}
            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-red-600/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-72 w-full">
              <Image
                src={t.img}
                alt={t.name}
                fill
                className="object-cover rounded-2xl group-hover:brightness-75 transition-all"
              />
            </div>
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-1">{t.name}</h3>
              <p className="text-red-600 font-medium mb-3">{t.role}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm transition-all">
                Book Session
              </button>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-900 text-center rounded-t-3xl">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to <span className="text-red-600">Train With Us</span>?
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Contact us today and schedule your first session with our expert trainers.
        </motion.p>
        <motion.button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all shadow-md hover:shadow-red-600/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started
        </motion.button>
      </section>
    </main>
  );
}
