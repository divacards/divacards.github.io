//Data from JSON
import artists from "../public/data/artists.json";
import decks from "../public/data/decks.json";
import cards from "../public/data/cards.json";

export const fetchArtists = () => {
  let result = {};
  artists.data.forEach((artist) => (result[artist.id] = artist));
  return result;
};
export const fetchDecks = () => {
  let result = {};
  decks.data.forEach((deck) => (result[deck.id] = deck));

  Object.keys(result).forEach((id) => {
    // memory lack gc
    result[id].cards.length = 0;
  });
  return { ...result };
};

export const consistDecksArr = () => {
  let artists = fetchArtists();
  let decks = fetchDecks();
  cards.data.forEach((card) => decks[card.deck].cards.push(card));

  const arr_data = Object.values(decks)
    .map((deck) => ({ ...deck, artistsDetail: artists[deck.artists] }))
    .sort((x, y) => (x.value < y.value ? 1 : -1));
  return arr_data;
};

export const withCheck = (classname, checked) =>
  `${classname} ${checked ? "" : "invalid"}`;
