import React from "react";
import { sustainabilityCover } from "@/assets";

const Index = () => {
  return (
    <section className="min-h-screen flex">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center px-6 md:px-20 py-16 bg-white">
        <p className="text-sm text-gray-500 mb-2 uppercase">Sustainability</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Leather: an example of circular economy
        </h1>
        <p className="text-gray-700 leading-relaxed mb-8">
          As well as possessing unique and inimitable properties, leather is
          also an ally of sustainability. It is a natural, biodegradable and
          recyclable material. A by-product of the food and dairy chain, it is
          ennobled giving life to new items avoiding its disposal in landfills
          as organic waste.
          <br />
          <br />
          Moreover, at Gruppo Mastrotto, more than 93% of the waste that leather
          generates in its processing is reused in other product sectors
          (agriculture, pharmaceuticals, nutraceuticals, chemicals),
          constituting one of the most virtuous examples of circular economy.
        </p>
        <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg w-max transition">
          Learn More
        </button>
      </div>

      {/* Right side with full image fitting the viewport */}
      <div className="flex-1 flex items-center justify-center h-screen shadow-md ">
        <img
          src={sustainabilityCover.src}
          alt="Sustainability Cover"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Index;
