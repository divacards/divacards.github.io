import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Layout from "../components/Layout";


function getQPara(arg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(arg);
}

export default function Items() {

    const [res, setContents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = getQPara("id");
        fetch(`https://diva.cards/api/items/${id}/`)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
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
                    {res.name}
                    {/* static */}
                </span>
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div>
                </div>
            </section>
            <section className="grid grid-cols-3 gap-4">
                <div className="text-cinnabar text-center m-5">
                    {/* <Image
                        height={500}
                        width={250}
                        loader={({ src }) => src}
                        unoptimized
                        src={res.image}
                        alt="Main image"
                        className="auto-image"
                    /> */}
                </div>
                <div className="text-cinnabar col-span-2 m-5">
                    {/* {res.name}
                    {res.attributes.map((attr, index) => (
                        <div key={index} >{attr.trait_type}: {attr.value}</div>
                    ))} */}
                </div>

            </section>
        </Layout>
    );
}
