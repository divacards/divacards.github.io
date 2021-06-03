import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "react-select";
import React, { useState } from "react";

const CustomSelect = (props) => (
  <Select
    id={props.id}
    instanceId={props.instanceId}
    placeholder={props.placeholder}
    options={props.options}
    onChange={props.onChange}
    className="p-4 w-10/12 lg:w-2/12"
  />
);

const Filters = (props) => {
  return (
    <section className="flex flex-col lg:flex-row max-w-screen-xl mx-auto p-4 md:p-6">
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
        placeholder="Select an artist"
        options={props.artistOpts}
        onChange={props.onArtistSelect}
      ></CustomSelect>

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

const DeckViewer = (props) => {
  return (
    <section className="flex flex-col">
      <p className="mx-auto border-b-2"> {props.title} </p>
      <div className="grid grid-rows-3 grid-cols-3 gap-3 mx-auto p-4">
        {props.decks.map((item) => (
          <span key={item.name}>{item.name}</span>
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

  const orderOpts = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  const [deckSelected, onDeckSelect] = useState(null);
  const [artistSelected, onArtistSelect] = useState(null);
  const [orderSelected, onOrderSelect] = useState(null);

  const showSelected = (selected) => (
    <p>[DEBUG] You selected {selected !== null ? selected.value : "nothing"}</p>
  );
  const showDeckViewer = (artist, akihoDecks, takaDecks) => {
    if (artist && artist.value == "taka") {
      return <DeckViewer title={takaDecks.title} decks={takaDecks.decks} />;
    } else if (artist && artist.value == "akiho") {
      return <DeckViewer title={akihoDecks.title} decks={akihoDecks.decks} />;
    }
  };

  const takaDecks = {
    title: "takaDecks",
    decks: [
      { name: "[taka] placeholder A" },
      { name: "[taka] placeholder B" },
      { name: "[taka] placeholder C" },
      { name: "[taka] placeholder D" },
      { name: "[taka] placeholder E" },
      { name: "[taka] placeholder F" },
    ],
  };

  const akihoDecks = {
    title: "akihoDecks",
    decks: [
      { name: "[akiho] placeholder A" },
      { name: "[akiho] placeholder B" },
      { name: "[akiho] placeholder C" },
      { name: "[akiho] placeholder D" },
      { name: "[akiho] placeholder E" },
      { name: "[akiho] placeholder F" },
    ],
  };

  return (
    <Layout pageTitle="diva cards">
      <Header />
      <main>
        <Filters
          deckOpts={deckOpts}
          onDeckSelect={onDeckSelect}
          artistOpts={artistOpts}
          onArtistSelect={onArtistSelect}
          orderOpts={orderOpts}
          onOrderSelect={onOrderSelect}
        ></Filters>
        <div className="flex flex-row gap-2 max-w-screen-xl mx-auto p-2 md:p-3">
          {showSelected(deckSelected)}
          {showSelected(artistSelected)}
          {showSelected(orderSelected)}
        </div>
        {showDeckViewer(artistSelected, akihoDecks, takaDecks)}
      </main>
      <Footer />
    </Layout>
  );
}
