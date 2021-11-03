import React, { useState, useReducer } from "react";

import Layout from "../components/Layout";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { CustomSelect, CustomRadioGroup } from "../components/Custom";
import DeckViewer from "../boxes/DeckViewer";
import { SuiteFilters, OrderFilters } from "../boxes/Filter";
import { useTranslation } from "next-export-i18n";

//Data from JSON
import artists from "../public/data/artists.json";
import decks from "../public/data/decks.json";
// import cards from "../public/data/cards.json";
import { buildDeckData, reducer } from "../util";

const DECK_DATA = buildDeckData();

const CardFilters = (props) => {
  return (
    <section
      className="card-filter-region mx-auto w-10/12
      lg:pr-0
      sm:w-full
      sm:px-6
      nn:w-full
      nn:px-6
    "
    >
      <div className="flex flex-row gap-1">
        <SuiteFilters
          // instanceid="suite-select"
          opts={props.suiteOpts}
          state={props.suite}
          onChange={props.onSuiteSelect}
        />
      </div>
      <OrderFilters
        // instanceId="order-select"
        state={props.order}
        onChange={props.onOrderSelect}
      />
    </section>
  );
};

const DeckFilters = (props) => {
  return (
    // <section className="flex flex-row justify-between mx-auto w-10/12 lg:gap-4 lg:justify-start lg-section gap-1">
    <section
      className="flex flex-row justify-between mx-auto w-10/12
      lg:pl-0
      nn:mb-2
      sm:mb-2
      lg:mb-0
      sm:w-full
      sm:px-6
      nn:w-full
      nn:px-6
      lg:gap-4 lg:justify-start lg-section gap-1
    "
    >
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

  const [state, dispatch] = useReducer(reducer, {
    deck: null,
    artist: [],
    suite: [],
    order: 0,
  });
  const { suite, deck, artist, order } = state;
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
  const withFilters = (filters) => (cards) =>
    [cards, ...filters].reduce((result, y) => result.filter(y));

  // TODO move to utils part useFilter(args)
  // TODO: refactor this part
  const filterCards = withFilters([suiteFilter, deckFilter]);

  let count = 0;
  const filteredDecks = DECK_DATA.filter(artistsFilter).map((deck, index) => {
    let f_cards = filterCards(deck.cards);
    count += f_cards.length;
    return {
      ...deck,
      cards: f_cards,
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

  const { t } = useTranslation();
  const prompt = t("cards-found", { count });

  return (
    <Layout pageTitle="tokyo.cards">
      <Header />
      <main>
        <section
          className="flex flex-col my-4 gap-2 bg-white mx-auto justify-between
            lg:flex-row
            2xl:max-w-screen-2xl
            2xl:px-0
            xl:max-w-screen-xl
            xl:px-0
            lg:items-center
            lg:px-5
          "
        >
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
        </section>
        <div
          className="
                        flex flex-row my-5 bg-white mx-auto justify-between
                        2xl:max-w-screen-2xl
                        2xl:px-0
                        xl:max-w-screen-xl
                        xl:px-0
                        lg:items-center
                        lg:px-5
                        md:space-x-10
                        sm:w-full
                        sm:px-6
                        nn:w-full
                        nn:px-6
                        font-cursive
                    "
        >
          {prompt}
        </div>
        {showDeckViewer(filteredDecks)}
      </main>
      <Footer />
    </Layout>
  );
}
