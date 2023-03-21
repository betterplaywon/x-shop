import React from "react";

const Banner = () => {
  return (
    <section className="h-96 bg-yellow-900 relative">
      <div className="w-full h-full bg-cover bg-banner">
        <div className="absolute w-full top-32 text-center">
          <h2 className="text-6xl">shop US</h2>
          <p className="text-2xl">YES MENUAL</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
