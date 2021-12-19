import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core";
import { useRouter } from 'next/router';
// import { Invoker } from "../components/Widget/Invoker";

import {
  TagIcon,
  BriefcaseIcon,
  CurrencyYenIcon,
  GiftIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import { route } from "next/dist/server/router";

const tabs = [
  { "title": "Inventory", Icon: BriefcaseIcon, Comp: Inventory },
  { "title": "Omikuji", Icon: TagIcon, Comp: Omikuji },
  { "title": "Souvenir", Icon: GiftIcon, Comp: Souvenir },
  // { "title": "Forge", Icon: CubeIcon, Comp: Forge },
  // { "title": "Bounty", Icon: CurrencyYenIcon, Comp: Bounty }
]

const inv_slots = [0, 2, 10, 13, 15, 20, 21, 23, 45, 233, 343, 459, 500, 532, 921, 2929]

function Inventory() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-wrap gap-1 text-center p-2">
        {inv_slots.map((slot) => {
          return (
            <button
              key={slot}
              className="w-10 h-10 pb-full border-supernova rounded-lg bg-gray-700"
              onClick={() => { router.push(`/items?id=${slot}`) }}
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
  const { library, chainId, account } = useWeb3React();

  function switchTab(index) {
    setState({ index: index })
  }
  return (<Layout pageTitle="tokyo.cards">
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
                  `w-full p-2  mb-2 flex auto-padding border-l-4 rounded black
                    border-${state.index == index ? 'razzmatazz' : 'supernova'}`
                }
                onClick={() => { switchTab(index) }}
              >
                <Icon key={`i-${index}`} className={`w-6 mx-1 text-${state.index == index ? 'razzmatazz' : 'supernova'}`} />
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
