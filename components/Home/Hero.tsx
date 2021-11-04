import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-around home-section">
      <div className="text-center lg:text-left w-4/5 sm:w-2/3 lg:w-1/2 mx-auto py-4">
        <h2 className="text-3xl leading-tight font-extrabold text-gray-900 xs:text-4xl sm:text-5xl md:text-6xl">
          {t("hero.header-simple")}
          <span className="text-themecolor">
            {t("hero.header-collectables")}
          </span>
        </h2>
        <p className="mt-6 text-base font-body text-lightgray sm:text-lg md:text-xl">
          {t("hero.catch-phrase")}
        </p>
        <div className="mt-5 sm:mt-8 flex justify-between lg:justify-start">
          <button className="px-4 py-2 border border-transparent text-xl btn-themecolor focus:outline-none md:px-6 font-semibold text-white">
            {t("button-buy-cards")}
          </button>
          <button className="lg:mx-2 px-4 py-2 border border-transparent text-xl btn-white focus:outline-none md:px-6 font-semibold text-red-500">
            {t("button-airdrop")}
          </button>
        </div>
      </div>

      <div
        className="relative mx-auto mt-6 mb-16 lg:m-0 w-full lg:w-1/2"
        data-aos="fade-up"
      >
        <Image
          height={500}
          width={1000}
          loader={({ src }) => src}
          unoptimized
          src="/images/tokyo/tokyo-tower.svg"
          alt="Main image"
          className="w-full h-full z-20 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
