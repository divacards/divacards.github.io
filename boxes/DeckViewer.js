import React from "react";
import { FireIcon } from "@heroicons/react/solid";

const DeckViewer = ({
  title,
  cards = [],
  deck,
  useFilter = (x) => x,
  reversed,
}) => {
  if (reversed) {
    cards.reverse();
  }
  // let data = useFilter(cards);
  if (cards.length == 0) return null;
  return (
    <main>
      <section className="flex flex-row lg:max-w-screen-2xl mx-auto lg:items-center border-b border-t py-5">
        <div className="flex flex-row mx-auto">
          <FireIcon className="w-8 m-auto" />
        </div>
        <div className="flex flex-row mx-auto font-cursive text-2xl"> {title} </div>
        <div className="flex flex-row mx-auto">
          <FireIcon className="w-8 m-auto" />
        </div>
      </section>
      <section className="flex flex-row my-5 bg-white md:space-x-10 justify-between lg:max-w-screen-2xl mx-auto lg:items-center font-cursive">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center gap-3 mx-auto relative">
          {cards.map((card) => (
            <div
              key={`${deck.artistsDetail.name}-${deck.name}-${card.id}`}
              className="flex flex-col gap-2"
            >
              <img
                className="mx-auto w-1/2 lg:w-10/12 rounded"
                src="./images/back0.svg"
              ></img>
              <span className="mx-auto font-cursive">{card.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DeckViewer;
