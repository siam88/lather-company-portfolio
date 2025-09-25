import React from "react";
import { leatherMeaningCover } from "@/assets";

const LeatherMeaningSection = () => {
  return (
    <section className="min-h-screen flex">
      {/* Left side with image */}
      <div className="flex-1 flex items-center justify-center h-screen shadow-md ">
        <img
          src={leatherMeaningCover.src}
          alt="Leather Meaning Cover"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right side with text */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-16 bg-white">
        <p className="text-sm text-gray-500 mb-2 uppercase">Definition</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What is Leather?
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          Leather is a material with a precise definition and specific
          characteristics. According to the standard{" "}
          <strong>ISO 15115:2019</strong>, the most important requirement is
          that the material must be of animal origin. Otherwise, it cannot be
          called leather.
          <br />
          <br />
          Materials often marketed as “synthetic leather,” “imitation leather,”
          or “faux leather” do not contain any animal or organic elements. These
          are entirely plastic-based products, typically PVC or polyurethane,
          with printed surfaces or films applied to mimic the look and feel of
          real leather.
        </p>
        <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg w-max transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default LeatherMeaningSection;
