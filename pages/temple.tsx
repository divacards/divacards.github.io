import Layout from "../components/Layout";
import React, { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { useRouter } from 'next/router';
import { Invoker } from "../components/Widget/Invoker";
import { isChainSupported } from "../web3/consts";
import { useTranslation } from "next-export-i18n";

import {
  TagIcon,
  BriefcaseIcon,
  GiftIcon,
  ArrowCircleUpIcon,
  ExclamationIcon,
  CubeIcon,
  CurrencyYenIcon,
} from "@heroicons/react/outline";

const tabs = [
  { title: "Inventory", Icon: BriefcaseIcon, Comp: Inventory },
  { title: "Omikuji", Icon: TagIcon, Comp: Omikuji },
  { title: "Souvenir", Icon: GiftIcon, Comp: Souvenir },
  // { "title": "Forge", Icon: CubeIcon, Comp: Forge },
  // { "title": "Bounty", Icon: CurrencyYenIcon, Comp: Bounty }
]

const inv_slots = [0, 2, 10, 13, 15, 20, 21, 23, 45, 233, 343, 459, 500, 532, 921, 2929]

function Inventory() {

  const router = useRouter();
  const { active, error, chainId } = useWeb3React();

  if (!chainId) {
    return (
      <div className="font-cursive p-auto w-full h-auto text-center my-20 text-supernova">
        Please connect the wallet <ArrowCircleUpIcon className="h-8 w-8 inline animate-bounce" />
      </div>
    );
  } else if (!isChainSupported(chainId)) {
    return (
      <div className="font-cursive p-auto w-full h-auto text-center my-20 text-supernova">
        Unsupported chain <ExclamationIcon className="h-8 w-8 inline animate-bounce" />
      </div>
    )
  }

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
  const { active, error, chainId } = useWeb3React();

  if (!chainId) {
    return (
      <div className="font-cursive p-auto w-full h-auto text-center my-20 text-supernova">
        Please connect the wallet <ArrowCircleUpIcon className="h-8 w-8 inline animate-bounce" />
      </div>
    );
  } else if (!isChainSupported(chainId)) {
    return (
      <div className="font-cursive p-auto w-full h-auto text-center my-20 text-supernova">
        Unsupported chain <ExclamationIcon className="h-8 w-8 inline animate-bounce" />
      </div>
    )
  }
  return (
    <div key="omikuji" className="m-10 font-cursive text-diablo-dark-gold text-center">
      Get your Omikuji (おみくじ) and see your fortune
    </div>
  )
}
function Forge() {
  return <div key="forge">Forge</div>
}
function Souvenir() {
  const { active, error, chainId } = useWeb3React();

  if (!chainId) {
    return (
      <div className="font-cursive p-auto w-full h-auto text-center my-20 text-supernova">
        Please connect the wallet <ArrowCircleUpIcon className="h-8 w-8 inline animate-bounce" />
      </div>
    );
  } else if (!isChainSupported(chainId)) {
    return (
      <div className="font-cursive p-auto w-full h-auto text-center my-20 text-supernova">
        Unsupported chain <ExclamationIcon className="h-8 w-8 inline animate-bounce" />
      </div>
    )
  }
  return (
    <div key="souvenir" className="m-10 font-cursive text-diablo-dark-gold text-center">
      Get your lucky charm
    </div>
  )
}
function Bounty() {
  return <div key="bounty">Bounty</div>
}

export default function Temple() {

  const { t } = useTranslation();
  const [state, setState] = useState({ index: 0 });

  function switchTab(index) {
    setState({ index: index })
  }

  return (
    <Layout pageTitle="tokyo.cards">
      <section className="deck-section py-5 h-20">
        <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
          <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
        </div>
        <span className="w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center">
          <div className="font-cursive text-diablo-dark-gold text-xl">
            {t(`temple.${tabs[state.index].title.toLowerCase()}`)}
          </div>
        </span>
        <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
          <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
        </div>
      </section>

      <section className="text-white">
        <div className="grid grid-cols-10 gap-2 my-3">
          <div className="col-span-8 bg-obsidian-dark rounded-br-lg rounded-tr-lg lg:rounded-lg">
            {tabs.map(({ Comp }, index) => {
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
                  }>
                    {t(`temple.${title.toLowerCase()}`)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
