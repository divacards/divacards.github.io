import React, { useState, useEffect } from 'react';
import Image from "next/image";
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

export default function Items() {

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
                    <div className="font-cursive text-diablo-dark-gold text-2xl">{res && res.name}</div>
                </span>
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
                </div>
            </section>
            <section className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3">
                <div className="w-48 h-96 relative border-2 border-diablo-dark-gold rounded-lg text-center">
                    {res.image && (<Image
                        loader={({ src }) => src}
                        layout="fill"
                        objectFit="cover"
                        unoptimized
                        src={res.image}
                        alt={res.name}
                        className="rounded-lg"
                    />)}
                </div>
                <div className="text-cinnabar grid grid-cols-2 gap-2 text-center align-middle">
                    {res.attributes && res.attributes.map((attr, index) => (
                        <div key={index} className={`text-sm border-2 rounded-lg border-${getRarityColor(attr.value)}`}>
                            <div className='my-4 font-cursive'>{attr.trait_type}</div>
                            <div className={`text-${getRarityColor(attr.value)}`}>{attr.value}</div>
                        </div>
                    ))}
                </div>
                <div className="text-cinnabar">
                </div>
                <div className="text-cinnabar">
                </div>

            </section>
        </Layout>
    );
}
