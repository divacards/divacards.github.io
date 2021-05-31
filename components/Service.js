import React from "react";
import {
  ChatIcon,
  GlobeIcon,
  LibraryIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const ServiceHeader = (props) => {
  return (
    <div className="lg:text-center">
      <p className="uppercase font-semibold text-pink-400">{props.sectionName}</p>
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
      title: "Lorem Ipsum",
      desc: "Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize. Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize. Beautifully designed, expertly crafted components that follow all accessibility best practices and are easy to customize.",
    },
    {
      title: "Lorem Ipsum",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  const height = 40;
  const width = 40;
  return (
    <section className="flex flex-col items-center lg:justify-around mx-auto mt-10 px-6 lg:px-20 py-8 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader
          title="Services"
          sectionName="cross-chain nfts"
          desc="Describe your awesome services. Describe your awesome services. Describe your awesome services."
        ></ServiceHeader>
        <div className="mt-10 relative mx-auto grid lg:grid-cols-2 gap-10 content-center">
          <ServiceItem
            icon={<GlobeIcon height={height} width={width} className="text-pink-500" />}
            title="Service #1"
            desc={services[0].desc}
          ></ServiceItem>
          <ServiceItem
            icon={
              <LightningBoltIcon
                height={height}
                width={width}
                className="text-pink-500"
              />
            }
            title="Service #2"
            desc={services[1].desc}
          ></ServiceItem>
          <ServiceItem
            icon={
              <LibraryIcon height={height} width={width} className="text-pink-500" />
            }
            title="Service #3"
            desc={services[2].desc}
          ></ServiceItem>
          <ServiceItem
            icon={<ChatIcon height={height} width={width} className="text-pink-500" />}
            title="Service #4"
            desc={services[3].desc}
          ></ServiceItem>
        </div>
      </div>
    </section>
  );
};

export default Service;
