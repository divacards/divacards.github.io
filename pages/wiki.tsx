import React, { useState, useReducer } from "react";

import Layout from "../components/Layout";
import { CustomSelect } from "../components/Custom";
import ElementViewer from "../boxes/ElementViewer";
import { SuiteFilters, OrderFilters } from "../boxes/Filter";
import { useTranslation } from "next-export-i18n";

//Data from JSON
import wiki_items from "../public/data/elements.json";
import categories from "../public/data/categories.json";
import { buildElementSetData, buildDeckData, reducer } from "../util";

const DECK_DATA = buildElementSetData();
// console.log(DECK_DATA);
// const WIKI_DATA = ;

const WikiFilters = (props) => {
  return (
    <section
      className="container card-filter-region mx-auto w-full
    "
    >
      <div className="flex flex-row gap-1">
        <SuiteFilters
          opts={props.qualityOpts}
          state={props.suite}
          onChange={props.onSuiteSelect}
        />
      </div>
      <OrderFilters
        state={props.order}
        onChange={props.onOrderSelect}
      />
    </section>
  );
};

const CategoryFilters = (props) => {
  const { t } = useTranslation();
  return (
    <section
      className="container flex flex-col md:flex-row justify-between mx-auto w-full
      lg:gap-4 lg:justify-start lg-section gap-2
    "
    >
      <CustomSelect
        id="deck-select"
        instanceId="deck-select"
        placeholder={t("select.category")}
        options={props.categoryOpts}
        onChange={props.onCategorySelect}
        isClearable
      ></CustomSelect>
    </section>
  );
};

const FilteredDeckViewer = ({ className, decks, order }) => {
  return (
    <section className={className}>
      {decks.map((deck, index) => (
        <ElementViewer
          key={`${deck.categoryDetail.name}-${deck.id}`}
          deck={deck}
          title={deck.title}
          cards={deck.cards}
          reversed={order == 1}
        /* useFilter={useFilter} */
        />
      ))}
    </section>
  );
};
export default function Wiki() {
  const categoryOpts = categories.data.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const qualityOpts = [
    { value: "common", label: "Common" },
    { value: "uncommon", label: "Uncommon" },
    { value: "rare", label: "Rare" },
    { value: "epic", label: "Epic" },
    { value: "legendary", label: "Legendary" },
    { value: "artifact", label: "Artifact" },
  ];

  const [state, dispatch] = useReducer(reducer, {
    category: null,
    artist: [],
    suite: [],
    order: 0,
  });
  const { suite, deck, artist, order } = state;
  const onSuiteSelect = (data) => dispatch({ type: "change:suite", data });
  const onCategorySelect = (data) => dispatch({ type: "change:category", data });
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
    let f_cards = filterCards(deck.items);
    count += f_cards.length;
    return {
      ...deck,
      cards: f_cards,
    };
  });

  const { t } = useTranslation();
  const prompt = t("items-found", { count });

  return (
    <Layout pageTitle="tokyo.cards">
      <section className="collection-section flex flex-col lg:flex-row gap-2 justify-between lg:items-center">
        <CategoryFilters
          categoryOpts={categoryOpts}
          onCategorySelect={onCategorySelect}
        />
        <WikiFilters
          suite={suite}
          order={order}
          qualityOpts={qualityOpts}
          onSuiteSelect={onSuiteSelect}
          onOrderSelect={onOrderSelect}
        />
      </section>
      <span className="collection-section flex flex-row justify-between font-cursive text-diablo-dark-gold">
        {prompt}
      </span>
      <FilteredDeckViewer
        className="collection-section"
        decks={filteredDecks}
        order={order}
      />
    </Layout>
  );
}
