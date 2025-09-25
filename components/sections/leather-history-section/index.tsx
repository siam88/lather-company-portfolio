import { leatherExperienceMaking, leatherPelle } from "@/assets";
import React from "react";

const LeatherHistorySection = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-gray-50">
      <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        {/* First Div */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
              The leather value chain:{" "}
              <span className="text-[#a72a2b]">excellence Made in Italy</span>
            </h2>
            <p className="text-gray-700 mb-4 text-base sm:text-lg font-rubik leading-relaxed md:leading-loose">
              Parliament has finally accepted the leather chain among the
              excellences of the DDL Made In Italy: an important acknowledgement
              for the tanning sector and strategic for Italian manufacturing.
              Promoting national production means confirming just how
              fundamental the tanning industry is to the entire sector,
              considering that, in terms of production volumes, we account for
              about two-thirds of European production and a quarter of world
              production.
            </p>
            <p className="text-gray-700 mb-6 text-base sm:text-lg font-rubik leading-relaxed md:leading-loose">
              Italian leather is distinguished by its fine quality and unique
              characteristics, the result of a combination of traditional
              craftsmanship and the adoption of innovative technologies. At
              Gruppo Mastrotto, we are proud to share the dedication and skill
              we have acquired generation after generation, putting them at the
              service of the entire supply chain.
            </p>
          </div>
          <div className="mt-6 md:mt-10 overflow-hidden rounded-xl shadow-lg">
            <img
              src={leatherExperienceMaking.src}
              alt="Italian Leather"
              className="w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Second Div */}
        <div className="flex-1 flex flex-col justify-between mt-10 md:mt-0">
          <div className="overflow-hidden rounded-xl shadow-lg mb-6 md:mb-8">
            <img
              src={leatherPelle.src}
              alt="Leather History"
              className="w-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
              A material that has{" "}
              <span className="text-[#a72a2b]">
                accompanied human evolution
              </span>
            </h2>
            <p className="text-gray-700 mb-4 text-base sm:text-lg font-rubik leading-relaxed md:leading-loose">
              Leather has a long history, which dates back to the dawn of human
              presence on the planet and continues to the present day.
            </p>
            <p className="text-gray-700 mb-6 text-base sm:text-lg font-rubik leading-relaxed md:leading-loose">
              Perfecting tanning techniques has allowed humanity to fully
              exploit the potential of this unique material in a variety of
              sectors, but tradition remains an important part of our history
              and culture.
            </p>
            <button className="bg-[#a72a2b] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#8e2122] transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeatherHistorySection;
