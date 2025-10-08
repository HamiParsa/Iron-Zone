"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24">
        {/* Background image and gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://wallpapers.com/images/hd/woman-showing-gym-abs-9pspfxsgjbtlocv6.jpg"
            alt="Gym Background"
            fill
            className="object-cover object-center brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 mix-blend-multiply" />
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-[0_3px_10px_rgba(255,0,0,0.3)]">
            Push Your <span className="text-red-600">Limits</span>, <br />
            Build Your <span className="text-red-600">Strength</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Join the IronZone community and unleash the best version of yourself.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg transition-all shadow-md hover:shadow-red-600/30">
              Join Now
            </button>
            <button className="border border-gray-600 hover:border-red-600 hover:text-red-600 text-white px-6 py-3 rounded-full text-lg transition-all">
              View Programs
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="text-red-600">Programs</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Bodybuilding",
              img: "https://images.squarespace-cdn.com/content/v1/5ebef943272c1041d83b1d15/a6dbc39a-a8e6-4072-a259-bf44c4aecc6f/Natural+Bodybuilding.jpg",
            },
            {
              name: "Crossfit",
              img: "https://www.morrant.com/Portals/6/LiveBlog/841/Morrant%20crossfit%20image.png?ver=2023-11-23-114552-067",
            },
            {
              name: "Yoga",
              img: "https://i.shgcdn.com/62f0a505-76f9-4160-847f-f3dbe2ed71d0/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            },
            {
              name: "Boxing",
              img: "https://www.walkermorris.co.uk/wp-content/uploads/2022/07/woman-boxing-in-a-gym.jpg",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-black rounded-2xl overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all"
            >
              <Image
                width={1000}
                height={1000}
                src={p.img}
                alt={p.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm">
                  Train with professionals and reach your peak performance.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRAINERS SECTION ================= */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-4xl font-bold mb-12">
          Meet Our <span className="text-red-600">Trainers</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
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
          ].map((t) => (
            <div
              key={t.name}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,0,0,0.2)] transition-all"
            >
              <Image
                width={1000}
                height={1000}
                src={t.img}
                alt={t.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
                <p className="text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Choose Your <span className="text-red-600">Plan</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              plan: "Basic",
              price: "$29/mo",
              features: ["Gym Access", "Locker", "1 Trainer Session"],
            },
            {
              plan: "Pro",
              price: "$49/mo",
              features: ["All Basic +", "Unlimited Classes", "Sauna Access"],
            },
            {
              plan: "Elite",
              price: "$79/mo",
              features: ["All Pro +", "Personal Trainer", "Nutrition Plan"],
            },
          ].map((p) => (
            <div
              key={p.plan}
              className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all"
            >
              <h3 className="text-2xl font-semibold mb-2">{p.plan}</h3>
              <p className="text-red-600 text-3xl font-bold mb-6">{p.price}</p>
              <ul className="text-gray-400 mb-8 space-y-2">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-full transition-all shadow-md hover:shadow-red-600/30">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
