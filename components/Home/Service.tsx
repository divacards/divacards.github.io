import React from "react";
import {
  BeakerIcon,
  RefreshIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/solid";
import { useTranslation } from "next-export-i18n";

const ServiceHeader = ({ section, title, description }) => {
  return (
    <div className="lg:text-center p-4 md:p-0">
      <p className="uppercase font-semibold text-red-400">{section}</p>
      <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mt-4 text-2xl leading-7 text-lightgray lg:mx-auto">
        {description}
      </p>
    </div>
  );
};

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="flex space-x-4 auto-padding">
      <div>{icon}</div>
      <div className="my-2 lg:my-4">
        <h3 className="mb-2 font-semibold text-gray text-2xl lg:text-3xl">
          {title}
        </h3>
        <p className="leading-normal text-lightgray text-xl">{description}</p>
      </div>
    </div>
  );
};

const Service = () => {
  const { t } = useTranslation();

  const services = [
    {
      Icon: ScaleIcon,
      title: t("service.trading-title"),
      description: t("service.trading-description"),
    },
    {
      Icon: BeakerIcon,
      title: t("service.crafting-title"),
      description: t("service.crafting-description"),
    },
    {
      Icon: LightningBoltIcon,
      title: t("service.enchanting-title"),
      description: t("service.enchanting-description"),
    },
    {
      Icon: RefreshIcon,
      title: t("service.recycling-title"),
      description: t("service.recycling-description"),
    },
  ];

  return (
    <section id="service" className="home-section">
      <ServiceHeader
        title={t("service.header-title")}
        section={t("service.header-section")}
        description={t("service.header-description")}
      ></ServiceHeader>
      <div className="service-grid-top relative mx-auto service-grid">
        {services.map(({ Icon, title, description }, index) => {
          const height = 40;
          const width = 40;
          const icon = (
            <Icon height={height} width={width} className="text-red-500" />
          );
          return (
            <ServiceItem
              key={`service-${index}`}
              icon={icon}
              title={title}
              description={description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
