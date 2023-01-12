import React from "react";
import clientAudiophile from "../assets/images/client-audiophile.svg";
import clientDatabiz from "../assets/images/client-databiz.svg";
import clientMaker from "../assets/images/client-maker.svg";
import clientMeet from "../assets/images/client-meet.svg";
import imageHeroDesktop from "../assets/images/image-hero-desktop.png";
const HeroSection = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col-reverse gap-10 py-20 font-epilogue md:flex-row md:px-12">
        {/* Left Column */}
        <div className="flex flex-col justify-between md:w-1/2">
          <div className="flex flex-col md:space-y-16">
            <h1 className="text-center text-4xl font-bold leading-tight tracking-wide md:text-left xl:text-7xl">
              Make <br className="hidden md:block" /> remote work
            </h1>
            <p className="p-5 text-center text-xl text-gray-600 md:p-0 md:pr-32 md:text-left">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar
            </p>
            <a
              href="#"
              className="md:font-md mx-auto mb-5 self-start rounded-xl border border-black bg-black p-3 px-6 font-bold text-white md:mx-0 md:bg-white md:text-black"
            >
              Learn more
            </a>
          </div>
          <div className="flex items-center justify-between gap-5 p-3 md:justify-start">
            <img
              src={clientAudiophile}
              alt=""
              className="w-16 sm:w-24 lg:w-28"
            />
            <img src={clientDatabiz} alt="" className="w-16 sm:w-24 lg:w-28" />
            <img src={clientMaker} alt="" className="w-16 sm:w-24 lg:w-28" />
            <img src={clientMeet} alt="" className="w-16 sm:w-24 lg:w-28" />
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={imageHeroDesktop}
            alt=""
            className="object-cover"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
