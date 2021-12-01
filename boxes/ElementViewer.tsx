import React from "react";
import { FireIcon } from "@heroicons/react/solid";
import Image from "next/image";

function getCardSrc(artist, deck, card) {
    return `/images/wiki/${deck.name.toLowerCase()}/${card.name.toLowerCase()}.svg`;
}

const ElementViewer = ({
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

    const artist = deck.categoryDetail;

    return (
        <div>
            <section className="deck-section py-5 h-20">
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <FireIcon className="w-full" />
                </div>
                <span className="w-1/3 mx-auto font-cursive text-center lg:text-2xl text-cinnabar place-self-center">
                    {title}
                </span>
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <FireIcon className="w-full" />
                </div>
            </section>

            <section className="deck-section my-5 md:space-x-10 justify-between lg:items-center font-cursive">
                <div className="grid nn:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-left gap-3 mx-auto relative w-full">
                    {cards.map((card) => {
                        const size = "100%";
                        const src = getCardSrc(artist, deck, card);
                        return (
                            <div
                                key={`${artist.name}-${deck.name}-${card.id}`}
                                className="flex flex-col gap-2 border-diablo-dark-gold border-5 bg-cod-gray justify-between hover:bg-obsidian-dark"
                            >
                                <div className="align-middle nn:h-48 sm:h-52 lg:h-52 2xl:h-80 flex m-auto">
                                    <Image
                                        layout="intrinsic"
                                        width={size}
                                        height={size}
                                        src={src}
                                        unoptimized
                                        loader={({ src }) => src}
                                    />
                                </div>
                                <div>
                                    <div className="border-diablo-dark-gold border-b-2 w-3/4 m-auto" > </div>
                                </div>
                                <div>description</div>
                                {/* <span className="mx-auto font-cursive">{card.name}</span> */}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ElementViewer;
