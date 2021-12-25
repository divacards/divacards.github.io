import Layout from "../components/Layout";
import React, { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core";
import { useRouter } from 'next/router';
import { faWallet, faDice, faGifts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isChainSupported, getOpenseaAssetsEndpoint } from "../web3/consts";
import { useTranslation } from "next-export-i18n";
import { SpinLoading, PlaceHoldStatus } from "../components/Custom/CustomStatus";
import { getItemColor, getItemType, getItemAssetbyItem, getTrait } from "../util/item";
import { ArrowCircleUpIcon, ExclamationIcon, InboxIcon, } from "@heroicons/react/outline";

import { ItemStatus } from "../components/Custom/Web3";


const tabs = [
  { title: "Inventory", Icon: faWallet, Comp: Inventory },
  { title: "Omikuji", Icon: faDice, Comp: Omikuji },
  { title: "Souvenir", Icon: faGifts, Comp: Souvenir },
  // { "title": "Forge", Icon: CubeIcon, Comp: Forge },
  // { "title": "Bounty", Icon: CurrencyYenIcon, Comp: Bounty }
]

function ItemTrait({ className, item, trait }) {
  if (getItemType(item) == "box") {
    return <></>
  }
  return (
    <div className={className}>{getTrait(trait, item.traits).value}</div>
  )
}

function Item({ item, router, library, chainId, account }) {
  const Asset = getItemAssetbyItem(item);
  return (
    <button key={item.token_id}
      className={`w-18 h-18 pb-full border-${getItemColor(item)} p-4  border-2 rounded-lg relative`}
      onClick={() => { router.push(`/items?id=${item.token_id}&asset_type=${getItemType(item)}`) }}>
      <ItemTrait item={item} trait="Inscription"
        className={`absolute -left-3 -bottom-3 bg-${getItemColor(item)} w-auto h-6 text-centerk rounded-full text-xs py-1 px-2`} />
      <ItemTrait item={item} trait="Deck"
        className={`absolute -left-3 -top-3 bg-${getItemColor(item)} w-auto h-6 text-centerk rounded-full text-xs py-1 px-2`} />
      <ItemStatus
        method="balanceOf" token_id={item.token_id} library={library} chainId={chainId} account={account} isBox={getItemType(item) == "box"}
        className={`absolute -right-3 -bottom-3 bg-${getItemColor(item)} w-auto h-6 text-centerk rounded-full text-xs py-1 px-2`} />
      <Asset className="h-12 w-12" />
    </button>
  )
}

function Inventory() {
  const router = useRouter();
  const { library, account, chainId } = useWeb3React();
  const [res, setContents] = useState({ assets: [] });

  useEffect(() => {
    if (chainId) {
      const assets_endpoint = getOpenseaAssetsEndpoint(chainId, account, null, null)
      setContents(undefined)
      fetch(assets_endpoint)
        .then(response => response.json())
        .then((data) => {
          setContents(data)
        })
    } else {
      // console.log("No Chain ID")
      // do nothing
    }
  }, [chainId]);

  if (!chainId) {
    return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
  } else if (!isChainSupported(chainId)) {
    return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
  }

  if (res) {
    if (res.assets.length == 0) {
      // Inventory is empty
      return (<PlaceHoldStatus message="Inventory is Empty" Icon={InboxIcon} />);
    } else {
      // Inventory is not empty
      return (
        <div className="flex flex-wrap gap-5 text-center p-2 justify-start place-content-center m-2">
          {res && res.assets.map((item, index) => {
            return (<Item
              key={index}
              item={item}
              router={router}
              library={library}
              chainId={chainId}
              account={account}
            />)
          })}
        </div>
      )
    }
  } else {
    return (<SpinLoading />)
  }


}

function Omikuji() {
  const { active, error, chainId } = useWeb3React();
  if (!chainId) {
    return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
  } else if (!isChainSupported(chainId)) {
    return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
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
    return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
  } else if (!isChainSupported(chainId)) {
    return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
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
                    `w-full p-2  mb-2 flex auto-padding border-l-4 rounded border-${state.index == index ? 'razzmatazz' : 'supernova'}`
                  }
                  onClick={() => { switchTab(index) }}
                >

                  <FontAwesomeIcon
                    icon={Icon}
                    key={`i-${index}`}
                    className={`w-6 mx-1 text-2xl text-${state.index == index ? 'razzmatazz' : 'supernova'}`}
                  />
                  {/* <Icon key={`i-${index}`} className={`w-6 mx-1 text-${state.index == index ? 'razzmatazz' : 'supernova'}`} /> */}
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
