import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-around home-section">
      <div className="text-center lg:text-left w-10/12 lg:w-1/2 mx-auto py-4">
        <h2 className="leading-tight font-extrabold text-gray-900 text-3xl md:text-6xl">
          {t("hero.header-simple")}
          <span className="text-themecolor">
            {t("hero.header-collectables")}
          </span>
        </h2>
        <p className="mt-5 font-body text-lightgray text-base sm:text-lg md:text-xl">
          {t("hero.catch-phrase")}
        </p>
        <div className="mt-5 flex justify-between lg:justify-start">
          <button className="btn-hero btn-themecolor text-white">
            {t("button-buy-cards")}
          </button>
          <button className="btn-hero btn-white text-red-500">
            {t("button-airdrop")}
          </button>
        </div>
      </div>

      <div
        className="relative mx-auto mt-6 mb-16 lg:m-0 w-full lg:w-1/2"
        data-aos=""
      >
        <Image
          height={500}
          width={1000}
          loader={({ src }) => src}
          unoptimized
          src="/images/tokyo/tokyo-tower.svg"
          alt="Main image"
          className="auto-image"
        />
      </div>
    </section>
  );
};

export default Hero;
