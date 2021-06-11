import React, { useState, useReducer } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CustomSelect, CustomRadioGroup } from "../components/Custom";
import DeckViewer from "../boxes/DeckViewer";
import { SuiteFilters, OrderFilters } from "../boxes/Filter";

//Data from JSON
import artists from "../public/data/artists.json";
import decks from "../public/data/decks.json";
// import cards from "../public/data/cards.json";
import { consistDecksArr, fetchArtists, fetchDecks } from "../util";

const arr_data = consistDecksArr();

function reducer(state, action) {
    const reg = /change:(.*)/;
    const key = action.type.match(reg) || [undefined, undefined];
    switch (key[1]) {
    case "blockchain":
        return { ...state, blockchain: action.data };
    case "suite":
        let suite = state.suite;
        let index = suite.indexOf(action.data);
        if (index > -1) {
            suite.splice(index);
        } else {
            suite = [...suite, action.data];
        }
        return { ...state, suite };
    case "deck":
        let deck = action.data || { value: null };
        return { ...state, deck: deck.value };
    case "artist":
        return { ...state, artist: action.data };
    case "order":
        return { ...state, order: action.data };
    default:
    }
    return state;
}
const CardFilters = (props) => {
    return (
        <section className="card-filter-region">
          <div className="w-1/4 flex flex-row justify-around">
            <SuiteFilters
              id="suite-select"
              instanceid="suite-select"
              opts={props.suiteOpts}
              state={props.suite}
              onChange={props.onSuiteSelect}
            />
          </div>
          <OrderFilters
            id="order-select"
            instanceId="order-select"
            state={props.order}
            onChange={props.onOrderSelect}
          />
        </section>
    );
};

const DeckFilters = (props) => {
    return (
        <section className="flex justify-start lg-section gap-1">
          <CustomSelect
            id="deck-select"
            instanceId="deck-select"
            placeholder="Select a deck"
            options={props.deckOpts}
            onChange={props.onDeckSelect}
            isClearable
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

export default function Collections() {
    const deckOpts = decks.data.map(({ id, name, title }) => ({
        value: id,
        label: title,
    }));
    const artistOpts = artists.data.map(({ id, name }) => ({
        value: id,
        label: name,
    }));

    const suiteOpts = [
        { value: "s", label: "Spades" },
        { value: "h", label: "Hearts" },
        { value: "c", label: "Clubs" },
        { value: "d", label: "Diamonds" },
        { value: "j", label: "Jokers" },
    ];

    // const kuronDeck = {
    //   title: "kuron's deck",
    //   cards: [
    //     { name: "[kuron] placeholder A", img: "./images/H10.svg" },
    //     { name: "[kuron] placeholder B", img: "./images/back0.svg" },
    //     { name: "[kuron] placeholder C", img: "./images/H10.svg" },
    //     { name: "[kuron] placeholder D", img: "./images/back0.svg" },
    //     { name: "[kuron] placeholder E", img: "./images/H10.svg" },
    //     { name: "[kuron] placeholder F", img: "./images/back0.svg" },
    //     { name: "[kuron] placeholder G", img: "./images/H10.svg" },
    //   ],
    // };

    // const takaDeck = {
    //   title: "taka's deck",
    //   cards: [
    //     { name: "[taka] placeholder A", img: "./images/back0.svg" },
    //     { name: "[taka] placeholder B", img: "./images/back3.svg" },
    //     { name: "[taka] placeholder C", img: "./images/back0.svg" },
    //     { name: "[taka] placeholder D", img: "./images/back3.svg" },
    //     { name: "[taka] placeholder E", img: "./images/back0.svg" },
    //     { name: "[taka] placeholder F", img: "./images/back3.svg" },
    //     { name: "[taka] placeholder G", img: "./images/back0.svg" },
    //     { name: "[taka] placeholder H", img: "./images/back3.svg" },
    //   ],
    // };

    // const akihoDeck = {
    //   title: "akiho's deck",
    //   cards: [
    //     { name: "[akiho] placeholder A", img: "./images/back0.svg" },
    //     { name: "[akiho] placeholder B", img: "./images/back3.svg" },
    //     { name: "[akiho] placeholder C", img: "./images/back0.svg" },
    //     { name: "[akiho] placeholder D", img: "./images/back3.svg" },
    //     { name: "[akiho] placeholder E", img: "./images/back0.svg" },
    //     { name: "[akiho] placeholder F", img: "./images/back3.svg" },
    //     { name: "[akiho] placeholder G", img: "./images/back0.svg" },
    //     { name: "[akiho] <pla></pla>ceholder H", img: "./images/back3.svg" },
    //   ],
    // };

    // const decksMap = {
    //   kuron: kuronDeck,
    //   akiho: akihoDeck,
    //   taka: takaDeck,
    // };

    const [state, dispatch] = useReducer(reducer, {
        blockchain: "0",
        deck: null,
        artist: [],
        suite: [],
        order: 0,
    });
    const { blockchain, suite, deck, artist, order } = state;
    const onBlockchainSelect = (data) => dispatch({ type: "change:blockchain", data });
    const onSuiteSelect = (data) => dispatch({ type: "change:suite", data });
    const onDeckSelect = (data) => dispatch({ type: "change:deck", data });
    const onArtistSelect = (data) => dispatch({ type: "change:artist", data });
    const onOrderSelect = (data) => dispatch({ type: "change:order", data });

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

    const suiteFilter = (card) => {
        if (suite.length == 0) {
            return true;
        }
        return suite.includes(card.poker_suite);
    };
    const deckFilter = (card) => {
        if (deck == null) {
            return true;
        }
        return deck == card.deck;
    };
    const artistsFilter = (deck) => {
        if (artist.length == 0) {
            return true;
        }
        return artist.map(({ value }) => value).includes(deck.id);
    };
    const withFilters = (filters) => (cards) => [cards, ...filters].reduce((result, y) => result.filter(y));

    // TODO move to utils part useFilter(args)
    const useFilter = withFilters([suiteFilter, deckFilter]) || ((x) => x);
    // const showDeckViewer = (artistsSelected, decksMap, order) => {
    //     const artists = artistsSelected.map((item) => item.value);
    //     const decks = [];
    //     if (artists.length === 0) {
    //         // show all
    //         decks.push(...Object.entries(decksMap));
    //     } else {
    //         // show selected
    //         for (const [key, deck] of Object.entries(decksMap)) {
    //             if (artists.includes(key)) {
    //                 decks.push([key, deck]);
    //             }
    //         }
    //     }

    //     return (
    //         <>
    //           {decks.map(([key, deck], index) => (
    //               <DeckViewer
    //                 key={key + "-" + index}
    //                 title={deck.title}
    //                 cards={deck.cards}
    //                 reversed={order == 1}
    //                 useFilter={useFilter}
    //               />
    //           ))}
    //         </>
    //     );
    // };

    let sum_cards = 0;
    const arr_decks = arr_data.filter(artistsFilter).map((deck, index) => {
        let f_cards = useFilter(deck.cards);
        sum_cards += f_cards.length;
        return {
            ...deck, cards: f_cards,
        };
    });
    const showDeckViewer = (decks) => {
        return (
            <>
              {decks.map((deck, index) => (
                  <DeckViewer
                    key={`${deck.artistsDetail.name}-${deck.id}`}
                    deck={deck}
                    title={deck.title}
                    cards={deck.cards}
                    reversed={order == 1}
                    /* useFilter={useFilter} */
                  />
              ))}
            </>
        );
    };

    return (
        <Layout pageTitle="diva cards">
          <Header onBlockchainSelect={onBlockchainSelect} blockchain={blockchain} />
          <main>
            <div className="lg-content desktop-filter-region">
              <DeckFilters
                deckOpts={deckOpts}
                onDeckSelect={onDeckSelect}
                artistOpts={artistOpts}
                onArtistSelect={onArtistSelect}
              ></DeckFilters>
              <CardFilters
                suite={suite}
                order={order}
                suiteOpts={suiteOpts}
                onSuiteSelect={onSuiteSelect}
                onOrderSelect={onOrderSelect}
              ></CardFilters>
            </div>
            <div className="hidden lg:block lg-content px-2 -mb-10">
              {sum_cards} Cards found
            </div>
            {/* <div className="flex flex-col lg:flex-row lg:items-center justify-between max-w-screen-xl mx-auto px-6 lg:px-20 lg:py-8">
               {showSelected(deckSelected)}
               {showSelected(suiteSelected)}
               {showSelected(blockchainSelected)}
               {showSelected(artistSelected)}
               {showSelected(orderSelected)}
               </div> */}
            {showDeckViewer(arr_decks)}
          </main>
          <Footer />
        </Layout>
    );
}
