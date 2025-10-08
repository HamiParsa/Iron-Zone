"use client";

import { Mail, User, MessageCircle, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_3px_10px_rgba(255,0,0,0.3)]">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Send us a message or reach out through our contact info.
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          className="bg-gray-900 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white px-10 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 transition-all"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white px-10 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 transition-all"
              />
            </div>
            <div className="relative">
              <MessageCircle className="absolute left-3 top-3 text-gray-400" />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-gray-800 text-white px-10 py-3 rounded-xl focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 transition-all"
              />
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-full transition-all shadow-md hover:shadow-red-600/30 mt-2">
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
          <div className="flex items-center gap-3">
            <MapPin className="text-red-600" />
            <p className="text-gray-300">123 Fitness Street, Gym City</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-red-600" />
            <p className="text-gray-300">+1 234 567 890</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-red-600" />
            <p className="text-gray-300">contact@ironzone.com</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
