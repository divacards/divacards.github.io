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

interface Deck {
  id: string;
  name: string;
  cards: string[];
  artists: number;
  rarity: number;
}

export const buildDeckData = () => {
  let artists = fetchArtists();
  let decks: any = fetchDecks();
  cards.data.forEach((card) => decks[card.deck].cards.push(card));

  return Object.values(decks)
    .map((deck: Deck) => ({
      ...deck,
      artistsDetail: artists[deck.artists],
    }))
    .sort((x, y) => (x.rarity < y.rarity ? 1 : -1));
};

export const withCheck = (classname, checked) =>
  `${classname} ${checked ? "valid" : "invalid"}`;

export function reducer(state, action) {
  const reg = /change:(.*)/;
  const key = action.type.match(reg) || [undefined, undefined];
  switch (key[1]) {
    case "suite":
      let suite = state.suite;
      let index = suite.indexOf(action.data);
      if (index > -1) {
        suite.splice(index, 1);
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
