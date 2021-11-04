import React from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const FeatureText = ({ title, description }) => {
  return (
    <div className="w-full md:w-1/2 p-4 md:p-0 md:pt-12 aos-init aos-animate">
      <h3 className="text-2xl md:text-3xl text-center md:text-justify font-bold tracking-wide leading-tight pb-6">
        {title}
      </h3>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-lg">
        {description}
      </p>
    </div>
  );
};
const FeatureImage = ({ dataAos, img }) => {
  return (
    <div
      className="relative w-full md:w-1/2 aos-init aos-animate"
      data-aos={dataAos}
    >
      <Image
        className="mx-auto pt-8 sm:pt-0 object-contain px-4 w-5/6 md:w-9/12"
        src={img}
        alt="Feature image"
        layout="fill"
        unoptimized
        loader={({ src }) => src}
      ></Image>
    </div>
  );
};

const FeatureBox = ({ feature }) => {
  return (
    <div className="flex flex-col md:flex-row py-12 lg:py-16">
      <FeatureText
        title={feature.title}
        description={feature.description}
      ></FeatureText>
      <FeatureImage img={feature.img} dataAos=""></FeatureImage>
    </div>
  );
};

const ReversedFeatureBox = ({ feature }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-12">
      <FeatureImage img={feature.img} dataAos=""></FeatureImage>
      <FeatureText
        title={feature.title}
        description={feature.description}
      ></FeatureText>
    </div>
  );
};

const Feature = () => {
  const { t } = useTranslation();
  const features = [
    {
      img: "/images/tokyo/tea-svgrepo-com.svg",
      title: t("feature.simple-title"),
      description: t("feature.simple-description"),
    },
    {
      img: "/images/tokyo/koi-svgrepo-com.svg",
      title: t("feature.interactive-title"),
      description: t("feature.interactive-description"),
    },
    {
      img: "/images/tokyo/ninja-warrior-svgrepo-com.svg",
      title: t("feature.trustless-title"),
      description: t("feature.trustless-description"),
    },
  ];

  const boxes = features.map((feature, index) => {
    return index % 2 == 0 ? (
      <FeatureBox key={index} feature={feature}></FeatureBox>
    ) : (
      <ReversedFeatureBox key={index} feature={feature}></ReversedFeatureBox>
    );
  });

  return (
    <section
      className="container px-2 md:px-4 lg:px-8 mx-auto my-8 lg:my-16"
      id="feature"
    >
      <h3 className="text-3xl leading-8 font-extrabold text-center tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        <span className="text-red-500">Fundamentalism</span> + NFT
      </h3>
      {boxes}
    </section>
  );
};

export default Feature;
