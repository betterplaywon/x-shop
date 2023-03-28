import React from "react";

const Banner = () => {
  return (
    <section className="h-96 bg-black relative">
      <div className="w-full h-full bg-cover bg-banner">
        <video className="w-full h-full" autoPlay muted loop>
          <source src="/videos/nomanual_banner_video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Banner;
