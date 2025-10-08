"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 text-center mt-12">
      <div className="flex justify-center gap-6 mb-4">
        <Facebook className="hover:text-red-600 cursor-pointer transition-colors" />
        <Instagram className="hover:text-red-600 cursor-pointer transition-colors" />
        <Twitter className="hover:text-red-600 cursor-pointer transition-colors" />
      </div>
      <p className="text-gray-500 text-sm">
        © 2025 IronZone Gym. All rights reserved.
      </p>
    </footer>
  );
}
