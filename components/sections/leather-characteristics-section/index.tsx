import React from "react";

const LeatherAndTabsSection = () => {
  return (
    <section
      className="w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "#e8e4e1" }}
    >
      {/* Top: Leather Characteristics */}
      <div className="flex flex-col justify-center items-center px-6 md:px-20 py-16 flex-1">
        {/* Subtitle */}
        <p className="text-[16px] text-gray-600 mb-4 tracking-wide text-center md:text-left">
          Our Leather Experience
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-[4.375rem] font-bold text-gray-900 mb-12 md:mb-20 text-center md:text-left">
          Leather Characteristics
        </h2>

        {/* Descriptions */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-6xl w-full items-center md:items-start ">
          <p className="w-full md:flex-1  text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left ">
            An unparalleled tactile experience, unrivalled durability. Capable
            of adapting like few other materials, leather is an unrivalled
            combination of elegance and durability.
          </p>
          <p className="w-full md:flex-1  text-gray-800 text-base md:text-lg leading-relaxed text-center md:text-left ">
            Soft, supple, yet also hard-wearing, it is the perfect product to
            create an infinite number of refined and timeless products. At
            Gruppo Mastrotto we transform leather into an emotion, using
            innovative machinery and processing techniques to enhance its
            intrinsic characteristics.
          </p>
        </div>
      </div>

      {/* Bottom: Three Tabs */}
      <div className="bg-white w-full py-16 flex items-center justify-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-center gap-10 w-full">
          {/* Tab 1 */}
          <div className="flex-1 px-4 md:px-6">
            <h3 className="text-3xl md:text-[4.375rem] font-bold text-gray-900 mb-4">
              65+
            </h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-widest">
              Years of Experience
            </p>
          </div>

          {/* Divider (hidden on mobile) */}
          <div className="hidden md:block w-px h-32 border-r-2 border-dotted border-gray-300"></div>

          {/* Tab 2 */}
          <div className="flex-1 px-4 md:px-6">
            <h3 className="text-3xl md:text-[4.375rem] font-bold text-gray-900 mb-4">
              3
            </h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-widest">
              Business Units: Fashion, Interior Design, Automotive
            </p>
          </div>

          {/* Divider (hidden on mobile) */}
          <div className="hidden md:block w-px h-32 border-r-2 border-dotted border-gray-300"></div>

          {/* Tab 3 */}
          <div className="flex-1 px-4 md:px-6">
            <h3 className="text-3xl md:text-[4.375rem] font-bold text-gray-900 mb-4">
              ∞
            </h3>
            <p className="text-sm md:text-base text-gray-600 uppercase tracking-widest">
              Possibilities of Use
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeatherAndTabsSection;
