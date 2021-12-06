import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <section className="flex flex-col lg:flex-row items-center lg:justify-around home-section">
      <div className="text-center lg:text-left w-10/12 lg:w-1/2 mx-auto py-4">
        <h2 className="leading-tight font-extrabold text-themecolor-bright text-3xl md:text-6xl">
          <span className="break-words block my-3">
            {t("hero.header-collections")}
          </span>
        </h2>
        <p className="mt-5 font-body text-description text-base sm:text-lg md:text-xl">
          {t("hero.description-collections")}
        </p>
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
          src="/images/tokyo/omamori-svgrepo-com.svg"
          alt="Main image"
          className="auto-image"
        />
      </div>
    </section>
  );
};

export default Hero;
