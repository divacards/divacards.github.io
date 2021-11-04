import React from "react";
import {
  BeakerIcon,
  RefreshIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/solid";
import { useTranslation } from "next-export-i18n";

const ServiceHeader = ({ sectionName, title, desc }) => {
  return (
    <div className="lg:text-center">
      <p className="uppercase font-semibold text-red-400">{sectionName}</p>
      <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        {title}
      </h2>
      <p className="mt-4 max-w-screen-xl text-xl leading-7 text-lightgray lg:mx-auto">
        {desc}
      </p>
    </div>
  );
};

const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div className="flex space-x-4">
      <div>{icon}</div>
      <div>
        <h3 className="mb-2 font-semibold text-gray">{title}</h3>
        <p className="leading-normal text-lightgray">{desc}</p>
      </div>
    </div>
  );
};

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      Icon: ScaleIcon,
      title: "Trading",
      desc: "Trade or exchange with anyone either with our partners or in person. Our market partner include OpenSea.io and Adam.jp, both provide wonderful services.",
    },
    {
      Icon: BeakerIcon,
      title: "Crafting",
      desc: "Can't find the item you wanted anywhere ? Try crafting it with disenchanted card parts. There is a chance to a better item during the process.",
    },
    {
      Icon: LightningBoltIcon,
      title: "Enchanting",
      desc: "Discover the magical power of enchanting by add more power to one of the items, or disenchant the item that is not needed any longer.",
    },
    {
      Icon: RefreshIcon,
      title: "Recycling",
      desc: "Unwanted NFTs from other NFT projects are welcomed here. Instead of leaving it in the wallet, smash it into pieces and craft something new.",
    },
  ];

  return (
    <section className="flex flex-col items-center lg:justify-around mx-auto mt-10 px-6 lg:px-20 py-8 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader
          title={t("service.header-title")}
          sectionName={t("service.header-section")}
          desc={t("service.header-description")}
        ></ServiceHeader>
        <div className="mt-10 relative mx-auto grid lg:grid-cols-2 gap-10 content-center">
          {services.map(({ Icon, title, desc }, index) => {
            const height = 40;
            const width = 40;
            return (
              <ServiceItem
                key={`service-${index}`}
                icon={
                  <Icon
                    height={height}
                    width={width}
                    className="text-red-500"
                  />
                }
                title={title}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
