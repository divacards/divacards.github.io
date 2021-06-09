import React, { useState, useReducer } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CustomSelect, CustomRadioGroup } from "../components/Custom";
import { SuiteFilters } from "../boxes/Filter";

//Data from JSON
import cards from "../public/data/cards.json";
import decks from "../public/data/decks.json";

function reducer(state, action) {
    return state;
}
const CardFilters = (props) => {
    return (
        <section className="flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2">
          <SuiteFilters
            id="suite-select"
            instanceid="suite-select"
            opts={props.suiteOpts}
            state={props.suite}
            onChange={props.onSuiteSelect}
          />

          
          <CustomSelect
            id="order-select"
            instanceId="order-select"
            placeholder="Select an order"
            options={props.orderOpts}
            onChange={props.onOrderSelect}
          ></CustomSelect>
        </section>
    );
};


const DeckFilters = (props) => {
    return (
        <section className="flex flex-col lg:flex-row lg:ms-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-2">
          <CustomSelect
            id="deck-select"
            instanceId="deck-select"
            placeholder="Select a deck"
            options={props.deckOpts}
            onChange={props.onDeckSelect}
          ></CustomSelect>



          <CustomSelect
            id="artist-select"
            instanceId="artist-select"
            isMulti={true}
            placeholder="Select artists"
            options={props.artistOpts}
            onChange={props.onArtistSelect}
          ></CustomSelect>

        </section>
    );
};

const DeckViewer = (props) => {
    const deck = props.deck;

    const cards = deck.cards;
    if (props.reversed) {
        cards.reverse();
    }

    return (
        <section className="flex flex-col lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
          <div className="min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-semibold mb-10 font-cursive">
            {deck.title}
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative">
            {cards.map((card) => (
                <div key={card.name} className="flex flex-col gap-2">
                  <img className="mx-auto w-1/2 lg:w-10/12 rounded" src={card.img}></img>
                  <span className="mx-auto font-cursive">{card.name}</span>
                </div>
            ))}
          </div>
        </section>
    );
};

export default function Collections() {
    const deckOpts = [
        { value: "standard", label: "Standard decks" },
        { value: "curated", label: "Curated decks" },
        { value: "all", label: "All decks" },
    ];

    const artistOpts = [
        { value: "taka", label: "Taka" },
        { value: "akiho", label: "Akiho" },
    ];

    const suiteOpts = [
        { value: "s", label: "Spades" },
        { value: "h", label: "Hearts" },
        { value: "c", label: "Clubs" },
        { value: "d", label: "Diamonds" },
        { value: "j", label: "Jokers" },
    ];

    const blockchainOpts = [
        { value: "0", label: "Ethereum" },
        { value: "1", label: "BSC" },
    ];


    const orderOpts = [
        { value: "asc_rarity", label: "Low to high by Rarity" },
        { value: "desc_rarity", label: "High to low by Rarity" },
    ];

    const kuronDeck = {
        title: "kuron's deck",
        cards: [
            { name: "[kuron] placeholder A", img: "./images/H10.svg" },
            { name: "[kuron] placeholder B", img: "./images/back0.svg" },
            { name: "[kuron] placeholder C", img: "./images/H10.svg" },
            { name: "[kuron] placeholder D", img: "./images/back0.svg" },
            { name: "[kuron] placeholder E", img: "./images/H10.svg" },
            { name: "[kuron] placeholder F", img: "./images/back0.svg" },
            { name: "[kuron] placeholder G", img: "./images/H10.svg" },
        ],
    };

    const takaDeck = {
        title: "taka's deck",
        cards: [
            { name: "[taka] placeholder A", img: "./images/back0.svg" },
            { name: "[taka] placeholder B", img: "./images/back3.svg" },
            { name: "[taka] placeholder C", img: "./images/back0.svg" },
            { name: "[taka] placeholder D", img: "./images/back3.svg" },
            { name: "[taka] placeholder E", img: "./images/back0.svg" },
            { name: "[taka] placeholder F", img: "./images/back3.svg" },
            { name: "[taka] placeholder G", img: "./images/back0.svg" },
            { name: "[taka] placeholder H", img: "./images/back3.svg" },
        ],
    };

    const akihoDeck = {
        title: "akiho's deck",
        cards: [
            { name: "[akiho] placeholder A", img: "./images/back0.svg" },
            { name: "[akiho] placeholder B", img: "./images/back3.svg" },
            { name: "[akiho] placeholder C", img: "./images/back0.svg" },
            { name: "[akiho] placeholder D", img: "./images/back3.svg" },
            { name: "[akiho] placeholder E", img: "./images/back0.svg" },
            { name: "[akiho] placeholder F", img: "./images/back3.svg" },
            { name: "[akiho] placeholder G", img: "./images/back0.svg" },
            { name: "[akiho] placeholder H", img: "./images/back3.svg" },
        ],
    };

    const decksMap = {
        kuron: kuronDeck,
        akiho: akihoDeck,
        taka: takaDeck,
    };

    const [state, dispatch] = useReducer(reducer, {});
    const [deckSelected, onDeckSelect] = useState(null);
    const [suiteSelected, onSuiteSelect] = useState([]);
    const [blockchainSelected, onBlockchainSelect] = useState(null);
    const [artistSelected, onArtistSelect] = useState([]);
    const [orderSelected, onOrderSelect] = useState(null);

    const showSelected = (selected) => {
        let text = "[DEBUG] You selected ";
        if (!selected) {
            text += "nothing";
        } else {
            if (Array.isArray(selected)) {
                text += selected.map((item) => item.value).join(" ");
            } else {
                text += selected.value;
            }
        }

        return <span className="mx-4">{text}</span>;
    };

    const showDeckViewer = (artistsSelected, decksMap, order) => {
        const artists = artistsSelected.map((item) => item.value);
        const decks = [];
        if (artists.length === 0) {
            // show all
            decks.push(...Object.entries(decksMap));
        } else {
            // show selected
            for (const [key, deck] of Object.entries(decksMap)) {
                if (artists.includes(key)) {
                    decks.push([key, deck]);
                }
            }
        }

        return (
            <>
              {decks.map(([key, deck], index) => (
                  <DeckViewer
                    key={key + "-" + index}
                    deck={deck}
                    reversed={order && order.value === "desc" ? true : false}
                  />
              ))}
            </>
        );
    };

    return (
        <Layout pageTitle="diva cards">
          <Header blockchainOpts={blockchainOpts} onBlockchainSelect={onBlockchainSelect} blockchain={blockchainSelected}/>
          <main>
            <DeckFilters
              deckOpts={deckOpts}
              onDeckSelect={onDeckSelect}
              artistOpts={artistOpts}
              onArtistSelect={onArtistSelect}
            ></DeckFilters>
            <CardFilters
              suiteOpts={suiteOpts}
              onSuiteSelect={onSuiteSelect}
              orderOpts={orderOpts}
              onOrderSelect={onOrderSelect}
            ></CardFilters>
            {/* <div className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
               {showSelected(deckSelected)}
               {showSelected(suiteSelected)}
               {showSelected(blockchainSelected)}
               {showSelected(artistSelected)}
               {showSelected(orderSelected)}
               </div> */}
            {showDeckViewer(artistSelected, decksMap, orderSelected)}
          </main>
          <Footer />
        </Layout>
    );
}
