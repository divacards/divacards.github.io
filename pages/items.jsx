import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import Layout from "../components/Layout";
import { ArrowLeftIcon, HomeIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router';


function getQPara(arg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(arg);
}

function getRarityColor(rarity) {
    if (["uncommon", "rare", "epic", "legendary"].indexOf(rarity.toString().toLowerCase()) > -1) {
        return `rarity-${rarity.toLowerCase()}`
    } else {
        return "diablo-dark-gold"
    }
}

function getTrait(trait, attributes) {
    return attributes.find(ele => ele.trait_type == trait)
}

export default function Items() {

    const { t } = useTranslation();
    const [res, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isInternal, setFrom] = useState(undefined);
    const [isBox, setAssetType] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const id = getQPara("id");
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

    if (loading || !res) return <div> Loading... </div>

    return (
        <Layout pageTitle="tokyo.cards">
            <button
                className="block h-14 w-14 bg-supernova rounded-full fixed z-40 bottom-5 right-5 drop-shadow-lg"
                onClick={() => {
                    isInternal ? router.back() : router.push("/")
                }}
            >
                {isInternal ? <ArrowLeftIcon className="h-8 w-8 m-auto text-cinnabar" /> : <HomeIcon className="h-8 w-8 m-auto text-cinnabar" />}
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
                <div className="w-full h-96 relative border-diablo-dark-gold rounded-lg text-center">
                    {res.image ? (<Image
                        loader={({ src }) => src}
                        layout="fill"
                        objectFit="contain"
                        unoptimized
                        src={res.image}
                        alt={res.name}
                        className="rounded-lg"
                    />) : (
                        <div className="font-cursive text-supernova mt-40">
                            Loading ...
                            <ArrowCircleDownIcon className="h-8 w-8 inline animate-bounce" />
                        </div>
                    )}
                </div>
                <div className="text-cinnabar p-4 rounded-lg bg-black w-full lg:w-6/12">
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
                <div className="text-cinnabar p-4 rounded-lg w-full lg:w-5/12 bg-black">
                    Total Supply: 200
                </div>
                <div className="text-cinnabar flex flex-wrap gap-2 text-center justify-start place-content-center w-full">
                    {res.attributes && !(isBox) && res.attributes.map((attr, index) => (
                        attr.trait_type == "Name" ? (<></>) : (
                            <div key={index} className={`text-sm rounded-lg h-24 w-24 p-2 bg-black relative`}>
                                <div className='absolute'>{attr.trait_type}</div>
                                <div className={`absolute top-10 w-20 text-${getRarityColor(attr.value)}`}>{attr.value}</div>
                            </div>)
                    ))}
                </div>


            </section>
        </Layout>
    );
}
