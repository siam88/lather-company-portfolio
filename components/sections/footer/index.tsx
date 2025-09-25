"use client";
import React from "react";
import Image from "next/image";
import { Logo } from "@/assets";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaVimeoV,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 mt-16 min-h-screen flex flex-col justify-between relative">
      {/* Company Name at the top */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        {/* Optional logo above name */}

        <h2 className="text-3xl font-bold text-gray-900">
          Excellent Leather Agency
        </h2>
      </div>

      {/* Main content: 4 columns */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src={Logo}
            alt="Excellent Leather Agency Logo"
            width={160}
            height={40}
          />
        </div>
        {/* Column 1: Contact */}
        <div className="space-y-4 text-lg">
          <p>Via Quarta Strada 7</p>
          <p>36071 Arzignano, Vicenza, Italy</p>
          <p>
            e:{" "}
            <a href="mailto:info@mastrotto.com" className="underline">
              info@mastrotto.com
            </a>
          </p>
          <p>
            pec:{" "}
            <a href="mailto:gruppomastrotto@legalmail.it" className="underline">
              gruppomastrotto@legalmail.it
            </a>
          </p>
          <p>
            t:{" "}
            <a href="tel:+390444621200" className="underline">
              +39 0444 621200
            </a>
          </p>
        </div>

        {/* Column 2: Sections */}
        <div className="space-y-4 text-lg font-semibold">
          <p>Fashion</p>
          <p>Automotive</p>
          <p>Interior & Design</p>
          <p>Aviation</p>
          <p>Nautical</p>
          <p>Regenerated materials</p>
          <p>The Leather</p>
          <p>News</p>
        </div>

        {/* Column 4: Info */}
        <div className="space-y-4 text-lg font-semibold">
          <p>Headquarters and premises in Italy</p>
          <p>Foreign offices</p>
          <p>Dealers network</p>
          <p>Code of ethics</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto px-6 flex justify-start md:justify-end space-x-6 py-6 border-t border-gray-200">
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-gray-900"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-gray-600 hover:text-gray-900"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="#"
          aria-label="Facebook"
          className="text-gray-600 hover:text-gray-900"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          aria-label="Vimeo"
          className="text-gray-600 hover:text-gray-900"
        >
          <FaVimeoV size={24} />
        </a>
      </div>

      {/* Bottom copyright & links */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between border-t border-gray-200 relative">
        {/* Left: copyright */}
        <span className="text-sm text-gray-500 md:order-1">
          © 2025 Excellent Leather Agency. All rights reserved.
        </span>

        {/* Center: links */}
        <div className="flex space-x-6 my-2 md:my-0 md:order-2">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
            Cookie Policy
          </a>
        </div>

        <div className="md:order-3"></div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          aria-label="Back to Top"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
