import React from "react";
import {
  BeakerIcon,
  RefreshIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/solid";

const ServiceHeader = (props) => {
  return (
    <div className="lg:text-center">
      <p className="uppercase font-semibold text-red-400">
        {props.sectionName}
      </p>
      <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        {props.title}
      </h2>
      <p className="mt-4 max-w-screen-xl text-xl leading-7 text-lightgray lg:mx-auto">
        {props.desc}
      </p>
    </div>
  );
};

const ServiceItem = (props) => {
  return (
    <div className="flex space-x-4">
      <div>{props.icon}</div>
      <div>
        <h3 className="mb-2 font-semibold text-gray">{props.title}</h3>
        <p className="leading-normal text-lightgray">{props.desc}</p>
      </div>
    </div>
  );
};

const Service = () => {
  const services = [
    {
      title: "Trading",
      desc: "Trade or exchange with anyone either with our partners or in person. Our market partner include OpenSea.io and Adam.jp, both provide wonderful services.",
    },
    {
      title: "Crafting",
      desc: "Can't find the item you wanted anywhere ? Try crafting it with disenchanted card parts. There is a chance to a better item during the process.",
    },
    {
      title: "Enchanting",
      desc: "Discover the magical power of enchanting by add more power to one of the items, or disenchant the item that is not needed any longer.",
    },
    {
      title: "Recycling",
      desc: "Unwanted NFTs from other NFT projects are welcomed here. Instead of leaving it in the wallet, smash it into pieces and craft something new.",
    },
  ];
  const height = 40;
  const width = 40;
  return (
    <section className="flex flex-col items-center lg:justify-around mx-auto mt-10 px-6 lg:px-20 py-8 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader
          title="A Commuity"
          sectionName="tokyo.cards NFTs"
          desc="Find the right person in the community to exchange, trade or craft new collectables."
        ></ServiceHeader>
        <div className="mt-10 relative mx-auto grid lg:grid-cols-2 gap-10 content-center">
          <ServiceItem
            icon={
              <ScaleIcon
                height={height}
                width={width}
                className="text-red-500"
              />
            }
            title={services[0].title}
            desc={services[0].desc}
          ></ServiceItem>
          <ServiceItem
            icon={
              <BeakerIcon
                height={height}
                width={width}
                className="text-red-500"
              />
            }
            title={services[1].title}
            desc={services[1].desc}
          ></ServiceItem>
          <ServiceItem
            icon={
              <LightningBoltIcon
                height={height}
                width={width}
                className="text-red-500"
              />
            }
            title={services[2].title}
            desc={services[2].desc}
          ></ServiceItem>
          <ServiceItem
            icon={
              <RefreshIcon
                height={height}
                width={width}
                className="text-red-500"
              />
            }
            title={services[3].title}
            desc={services[3].desc}
          ></ServiceItem>
        </div>
      </div>
    </section>
  );
};

export default Service;
