"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    monthly: 29,
    yearly: 290,
    features: ["Gym Access", "Locker", "1 Trainer Session"],
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 490,
    features: ["All Basic +", "Unlimited Classes", "Sauna Access"],
  },
  {
    name: "Elite",
    monthly: 79,
    yearly: 790,
    features: ["All Pro +", "Personal Trainer", "Nutrition Plan"],
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_3px_10px_rgba(255,0,0,0.3)]">
            Flexible <span className="text-red-600">Pricing</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Choose the perfect plan for your fitness journey.
          </p>
        </motion.div>
      </section>

      {/* Toggle Monthly / Yearly */}
      <section className="py-12 text-center">
        <div className="inline-flex bg-gray-800 rounded-full p-1">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full transition-all ${
              !isYearly ? "bg-red-600 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full transition-all ${
              isYearly ? "bg-red-600 text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            Yearly
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((p) => (
          <motion.div
            key={p.name}
            className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg hover:shadow-red-600/40 cursor-pointer transition-all"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="text-red-600 text-3xl font-bold mb-6">
              ${isYearly ? p.yearly : p.monthly}
              <span className="text-gray-400 text-base">/{isYearly ? "yr" : "mo"}</span>
            </p>
            <ul className="text-gray-400 mb-8 space-y-2">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-full transition-all shadow-md hover:shadow-red-600/30">
              Choose Plan
            </button>
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
          Ready to <span className="text-red-600">Commit</span>?
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pick a plan that suits your goals and start your fitness journey today.
        </motion.p>
        <motion.button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg transition-all shadow-md hover:shadow-red-600/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Join Now
        </motion.button>
      </section>
    </main>
  );
}
