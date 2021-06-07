import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-around mx-auto mt-10 px-6 lg:px-20 lg:py-8 max-w-screen-xl relative">
      <div
        className="text-center lg:text-left w-4/5 sm:w-2/3 lg:w-1/2 mx-auto py-4 aos-init aos-animate"
        data-aos="fade-in"
      >
        <h2 className="text-3xl leading-tight font-extrabold text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl">
          Your headline <span className="text-lightpink">goes here</span>
        </h2>
        <p className="mt-6 text-base font-body text-lightgray sm:text-lg md:text-xl">
          Supplement it with an easy to read subheading.
        </p>
        <div className="mt-5 sm:mt-8 flex justify-between lg:justify-start">
          <button className="px-4 py-2 border border-transparent text-xl btn-pink focus:outline-none md:px-6   font-semibold text-white">
            Buy Cards
          </button>
          <button className="lg:mx-2 px-4 py-2 border border-transparent text-xl btn-white focus:outline-none md:px-6   font-semibold text-pink-500">
            Air Drop
          </button>
        </div>
      </div>

      <div
        className="mx-auto mt-6 mb-16 lg:m-0 w-full lg:w-1/2 aos-init aos-animate"
        data-aos="fade-up"
      >
        <img
          height="500"
          width="1000"
          className="w-full h-full z-20 object-contain"
          src="/images/Group Members.png"
          alt="main-img"
        />
      </div>
    </section>
  );
};

export default Hero;
