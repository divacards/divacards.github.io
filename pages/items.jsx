import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import Layout from "../components/Layout";


function getQPara(arg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(arg);
}

function getRarityColor(rarity) {
    if (["uncommon", "rare", "epic", "legendary"].indexOf(rarity.toLowerCase()) > -1) {
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

    useEffect(() => {
        const id = getQPara("id");
        fetch(`https://diva.cards/api/items/${id}/`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false)
                setContents(data)
            })
    }, []);

    if (loading || !res) return <div> Loading... </div>

    return (
        <Layout pageTitle="tokyo.cards">
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
            <section className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
                <div className="w-full h-96 relative  border-diablo-dark-gold rounded-lg text-center">
                    {res.image && (<Image
                        loader={({ src }) => src}
                        layout="fill"
                        objectFit="contain"
                        unoptimized
                        src={res.image}
                        alt={res.name}
                        className="rounded-lg"
                    />)}
                </div>
                <div className="text-cinnabar p-4 border-2 rounded-lg border-diablo-dark-gold">
                    {res.attributes && (
                        <div className={`text-2xl font-cursive text-${getRarityColor(getTrait('Rarity', res.attributes).value)}`}>
                            {res && res.name}
                        </div>
                    )}
                    {res.attributes && (
                        <div className={`text-base font-cursive text-${getRarityColor(getTrait('Rarity', res.attributes).value)}`}>
                            {getTrait('Rarity', res.attributes).value}
                        </div>
                    )}
                    {res.attributes && (
                        <div className={`text-sm font-cursive text-diablo-dark-gold`}>
                            {getTrait('Card Type', res.attributes).value}
                        </div>
                    )}
                    <div className={`text-xs text-rarity-artifact`}>
                        {res && res.description}
                    </div>

                </div>
                <div className="text-cinnabar grid grid-cols-2 gap-2 text-center align-middle">
                    {res.attributes && res.attributes.map((attr, index) => (
                        <div key={index} className={`text-sm border-2 rounded-lg border-diablo-dark-gold`}>
                            <div className='my-3 font-cursive'>{attr.trait_type}</div>
                            <div className={`text-${getRarityColor(attr.value)}`}>{attr.value}</div>
                        </div>
                    ))}
                </div>
                <div className="text-cinnabar p-4 border-2 rounded-lg border-diablo-dark-gold">
                    Total Supply: 200
                </div>

            </section>
        </Layout>
    );
}
