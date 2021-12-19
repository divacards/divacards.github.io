import Layout from "../components/Layout";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
// import { Invoker } from "../components/Widget/Invoker";
import {
  TagIcon,
  BriefcaseIcon,
  CurrencyYenIcon,
  GiftIcon,
  CubeIcon,
  XIcon
} from "@heroicons/react/outline";

const tabs = [
  { "title": "Inventory", Icon: BriefcaseIcon, Comp: Inventory },
  { "title": "Omikuji", Icon: TagIcon, Comp: Omikuji },
  { "title": "Souvenir", Icon: GiftIcon, Comp: Souvenir },
  // { "title": "Forge", Icon: CubeIcon, Comp: Forge },
  // { "title": "Bounty", Icon: CurrencyYenIcon, Comp: Bounty }
]

const inv_slots = [0, 2, 10, 13, 15, 20, 21, 23, 45, 233, 343, 459, 500, 532, 921, 2929]

function ItemPopOver({ state, setState }) {
  return (
    state.modal_on ?
      <div className="popover-inventory bg-black bg-opacity-80 text-center">
        <button
          className="popover-inventory-close"
          onClick={() => {
            setState({ modal_on: false, item_data: undefined })
          }}
        >
          <XIcon className="text-diablo-dark-gold w-8 h-8 inline" />
        </button>
        <div
          className="my-20 w-3/4 mx-auto"
        >
          <div className="w-full h-96 relative text-center">
            {state.item_data.image && (<Image
              loader={({ src }) => src}
              layout="fill"
              objectFit="contain"
              unoptimized
              src={state.item_data.image}
              alt={state.item_data.name}
              className="rounded-lg"
            />)}
          </div>
          <span className="font-cursive">{state.item_data && state.item_data.name}</span>
        </div>
      </div>
      : <></>
  )
}

function Inventory() {
  const [state, setState] = useState({ modal_on: false, item_data: undefined });
  return (
    <>
      <ItemPopOver state={state} setState={setState} />
      <div className="flex flex-wrap gap-1 text-center p-2">
        {inv_slots.map((slot) => {
          return (
            <button
              key={slot}
              className="w-10 h-10 pb-full border-supernova rounded-lg bg-gray-700"
              onClick={() => {
                fetch(`https://diva.cards/api/items/${slot}/`)
                  .then(response => response.json())
                  .then((data) => {
                    setState({ modal_on: true, item_data: data })
                  })
              }}
            >
              {slot}
            </button>
          )
        })}
      </div>
    </>
  )
}

function Omikuji() {
  return <div key="omikuji">Omikuji</div>
}
function Forge() {
  return <div key="forge">Forge</div>
}
function Souvenir() {
  return <div key="souvenir">Souvenir</div>
}
function Bounty() {
  return <div key="bounty">Bounty</div>
}

export default function Temple() {

  const [state, setState] = useState({ index: 0 });

  function switchTab(index) {
    setState({ index: index })
  }

  return (
    <Layout pageTitle="tokyo.cards">
      <section className="text-white">
        <div className="h-20 bg-gray-700 mt-2">
        </div>
        <div className="grid grid-cols-10 gap-2 my-3">
          <div className="col-span-8 bg-black rounded-lg">
            {tabs.map(({ title, Icon, Comp }, index) => {
              if (state.index == index) {
                return <Comp key={index} />
              }
            })}
          </div>
          <div className="col-span-2">
            {tabs.map(({ title, Icon }, index) => {
              return (
                <button
                  key={`b-${index}`}
                  className={
                    `w-full p-2  mb-2 flex auto-padding border-r-4 rounded
                    bg-${state.index == index ? 'supernova' : 'black'}
                    border-${state.index == index ? 'razzmatazz' : 'supernova'}`
                  }
                  onClick={() => { switchTab(index) }}
                >
                  <Icon key={`i-${index}`} className="w-6 mx-1 text-razzmatazz" />
                  <span key={`s-${index}`} className={
                    `font-cursive text-razzmatazz hidden sm:block ml-2`
                  }>{title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
