import React from "react";
import { FireIcon } from "@heroicons/react/solid";
import Image from "next/image";

function getCardSrc(artist, deck, card) {
  return `/images/card_set/${artist.name.toLowerCase()}/${deck.id}/${
    card.poker_suite + card.poker_sign.toLowerCase()
  }.png`;
}

const DeckViewer = ({
  title,
  cards = [],
  deck,
  useFilter = (x: any) => x,
  reversed,
}) => {
  if (reversed) {
    cards.reverse();
  }

  // let data = useFilter(cards);
  if (cards.length == 0) return null;

  const artist = deck.artistsDetail;

  return (
    <div>
      <section className="deck-section border-b border-t py-5 h-20">
        <div className="flex flex-row mx-auto w-1/3">
          <FireIcon className="w-full" />
        </div>
        <span className="w-1/3 mx-auto font-cursive text-center lg:text-2xl">
          {title}
        </span>
        <div className="flex flex-row mx-auto w-1/3">
          <FireIcon className="w-full" />
        </div>
      </section>

      <section className="deck-section my-5 bg-white md:space-x-10 justify-between lg:items-center font-cursive">
        <div className="grid nn:grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative">
          {cards.map((card) => {
            const size = 800;
            const src = getCardSrc(artist, deck, card);

            return (
              <div
                key={`${artist.name}-${deck.name}-${card.id}`}
                className="flex flex-col gap-2"
              >
                <Image
                  width={size}
                  height={size}
                  className="mx-auto w-1/2 lg:w-10/12 rounded"
                  src={src}
                  unoptimized
                  loader={({ src }) => src}
                />
                <span className="mx-auto font-cursive">{card.name}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default DeckViewer;
