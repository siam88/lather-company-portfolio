import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1601758123927-1c3b924f0b6a?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Breadcrumb */}
      <div className="absolute top-4 left-4 text-white text-sm flex gap-2">
        <span>Home</span>
        <span>•</span>
        <span>Products</span>
        <span>•</span>
        <span>Leather</span>
      </div>

      {/* Centered Title & Description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Our Leather Experience
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-2xl">
          Leather is a material that boasts centuries of tradition, which we
          treat with love and increasingly refined techniques to enhance its
          unique characteristics.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
