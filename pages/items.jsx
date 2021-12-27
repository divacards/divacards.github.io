import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useTranslation } from "next-export-i18n";
import Layout from "../components/Layout";
import { useWeb3React } from "@web3-react/core";
import { isChainSupported } from "../web3/consts";
import { SpinLoading, PlaceHoldStatus } from "../components/Custom/CustomStatus";
import { ArrowLeftIcon, HomeIcon, ArrowCircleUpIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';
import { getRarityColor, getTrait, getQPara } from "../util/item";
import { ItemStatus, ItemAction } from "../components/Custom/Web3";
import { ThreeCanvas } from "../components/Custom/ThreeD";

function ChainActionPanel({ isBox, item_id }) {

    const { library, account, chainId } = useWeb3React();

    if (!chainId) {
        return (<PlaceHoldStatus message="Please connect the wallet" Icon={ArrowCircleUpIcon} />);
    } else if (!isChainSupported(chainId)) {
        return (<PlaceHoldStatus message="Unsupported chain" Icon={ExclamationIcon} />);
    }

    return (
        <div className="flex flex-wrap space-around h-full content-between font-cursive">
            <div className="w-full">
                Total Supply:
                <ItemStatus className="inline mx-2"
                    method="totalSupply"
                    token_id={item_id} library={library} account={account} chainId={chainId} isBox={isBox} />
            </div>

            <div className="w-full mb-2">
                Owns:
                <ItemStatus className="inline mx-2"
                    method="balanceOf"
                    token_id={item_id} library={library} account={account} chainId={chainId} isBox={isBox} />
            </div>
            <div className="w-full border-t-2 pt-2 border-razzmatazz">
                <ItemAction method="unpack"
                    token_id={item_id} library={library} account={account} chainId={chainId} isBox={isBox} />
            </div>
        </div>
    )
}

export default function Items() {

    const { t } = useTranslation();
    const [res, setContents] = useState([]);
    const [item_id, setItemId] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [isInternal, setFrom] = useState(undefined);
    const [isBox, setAssetType] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const id = getQPara("id");
        setItemId(id);
        const item_type = getQPara("asset_type") == "box" ? "box" : "items";
        if (item_type == "box") {
            setAssetType(true)
        }
        const isFromInternal = window.history.length != 1;

        fetch(`https://diva.cards/api/${item_type}/${id}/`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false)
                setContents(data)
                setFrom(isFromInternal);
            })
    }, []);

    if (loading || !res) return <SpinLoading />

    return (
        <Layout pageTitle="tokyo.cards">
            <button
                className="block h-14 w-14 bg-diablo-dark-gold rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg text-white"
                onClick={() => { isInternal ? router.back() : router.push("/") }}
            >
                {isInternal ? <ArrowLeftIcon className="h-8 w-8 m-auto" /> : <HomeIcon className="h-8 w-8 m-auto" />}
            </button>
            <section className="deck-section py-5 h-20">
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
                </div>
                <span className="w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center">
                    <div className="font-cursive text-diablo-dark-gold text-xl"> {t("items.detail")} </div>
                </span>
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
                </div>
            </section>
            <section className="flex flex-wrap gap-5 m-3">
                <div className="w-full h-96 relative border-diablo-dark-gold rounded-lg text-center lg:w-6/12">
                    {res.image ? (<ThreeCanvas
                        objScale={1}
                        objPos={undefined}
                        fogColor={['#0E93AD', 0, 1000]}
                        pntLgtPos={[10, 10, 10]}
                        boxTexture={res.image}
                        isBox={isBox} />
                    ) : <SpinLoading />}
                </div>
                <div className="text-cinnabar  w-full lg:w-5/12 flex flex-wrap gap-4">
                    <div className="bg-obsidian-gray w-full p-4 rounded-lg border-2 border-supernova">
                        {res.attributes && isBox && (
                            <>
                                <div className={`text-2xl font-cursive text-rarity-artifact`}>
                                    {res && res.name}
                                </div>
                                <div className={`text-base font-cursive text-diablo-dark-gold`}>
                                    Limited
                                </div>
                                <div className={`text-sm font-cursive text-diablo-dark-gold`}>
                                    Box
                                </div>
                                <div className={`text-xs font text-rarity-uncommon`}>
                                    {res.attributes[0].value} item inside
                                </div>
                            </>
                        )}
                        {res.attributes && !(isBox) && (
                            <>
                                <div className={`text-2xl font-cursive text-${getRarityColor(getTrait('Rarity', res.attributes).value)}`}>
                                    {res && res.name}
                                </div>
                                <div className={`text-base font-cursive text-${getRarityColor(getTrait('Rarity', res.attributes).value)}`}>
                                    {getTrait('Rarity', res.attributes).value}
                                </div>
                                <div className={`text-sm font-cursive text-diablo-dark-gold`}>
                                    {getTrait('Card Type', res.attributes).value}
                                </div>
                            </>
                        )}
                        <div className={`text-xs text-rarity-artifact`}>
                            {res && res.description}
                        </div>
                    </div>

                    <div className="text-cinnabar p-4 rounded-lg w-full bg-obsidian-gray border-razzmatazz border-2">
                        <ChainActionPanel isBox={isBox} item_id={item_id} />
                    </div>
                </div>

                {/* NFT Traits */}
                <div className="text-cinnabar flex flex-wrap gap-2 text-center justify-start place-content-center w-full" key="traits">
                    {res.attributes && !(isBox) && res.attributes.map((attr, index) => (
                        attr.trait_type == "Name" ? (null) : (
                            <div key={`c-${index}`} className={`text-sm rounded-lg h-24 w-24 p-2 bg-obsidian-gray relative`}>
                                <div key={`title-${index}`} className='absolute'>{attr.trait_type}</div>
                                <div key={`value-${index}`} className={`absolute top-10 w-20 text-${getRarityColor(attr.value)}`}>{attr.value}</div>
                            </div>)
                    ))}
                </div>
            </section>
        </Layout >
    );
}
