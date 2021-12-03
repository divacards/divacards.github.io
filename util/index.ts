//Data from JSON
import artists from "../public/data/artists.json";
import decks from "../public/data/decks.json";
import cards from "../public/data/cards.json";
import elements from "../public/data/elements.json";
import element_sets from "../public/data/element_sets.json";

export const fetchArtists = () => {
  let result = {};
  artists.data.forEach((artist) => (result[artist.id] = artist));
  return result;
};

export const fetchCategories = () => {
  let result = {};
  artists.data.forEach((category) => (result[category.id] = category));
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

export const fetchElementSets = () => {
  let result = {};
  element_sets.data.forEach((element_set) => (result[element_set.id] = element_set));

  Object.keys(result).forEach((id) => {
    // memory lack gc
    result[id].items.length = 0;
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

interface ElementSet {
  id: string;
  name: string;
  items: string[];
  category: number;
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

export const buildElementSetData = () => {
  let categories = fetchCategories();
  let element_sets: any = fetchElementSets();
  elements.data.forEach((element) => element_sets[element.element_set].items.push(element));

  return Object.values(element_sets)
    .map((element_set: ElementSet) => ({
      ...element_set,
      categoryDetail: categories[element_set.category],
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
