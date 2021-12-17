import Layout from "../components/Layout";
import React, { useState } from 'react';
import { Invoker } from "../components/Widget/Invoker";
import {
  TagIcon,
  BriefcaseIcon,
  CurrencyYenIcon,
  GiftIcon,
  CubeIcon,
} from "@heroicons/react/outline";

const tabs = [
  { "title": "Inventory", Icon: BriefcaseIcon, Comp: Inventory },
  { "title": "Omikuji", Icon: TagIcon, Comp: Omikuji },
  { "title": "Souvenir", Icon: GiftIcon, Comp: Souvenir },
  { "title": "Forge", Icon: CubeIcon, Comp: Forge },
  { "title": "Bounty", Icon: CurrencyYenIcon, Comp: Bounty }
]

function Inventory() {
  return (
    <div className="grid grid-cols-5 gap-4">
      Inventory
    </div>
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
        <div className="h-20 bg-gray-700 mt-2 rounded">
        </div>
        <div className="grid grid-cols-10 gap-2 my-3">
          <div className="col-span-8 bg-black rounded p-5">
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
                  onTouchStart={() => { switchTab(index) }}
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
