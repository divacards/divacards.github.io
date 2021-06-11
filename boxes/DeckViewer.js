import React from "react";

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
    <section className="lg-content flex flex-col lg:items-center justify-between px-6 lg:py-8">
      <div className="min-w-full px-auto text-center border-b-4 border-black text-gray-800 py-4 text-3xl font-semibold mb-10 font-cursive">
        {title}
      </div>
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
  );
};

export default DeckViewer;
