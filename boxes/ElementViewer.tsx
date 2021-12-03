import React from "react";
import { FireIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

function getCardSrc(artist, deck, card) {
    return `/images/wiki/${deck.name.toLowerCase()}/${card.color.toLowerCase()}_${card.size.toLowerCase()}.svg`;
}

function getRarityColor(card) {
    switch (card.rarity) {
        case 0:
            return "text-rarity-common"
        case 1:
            return "text-rarity-uncommon"
        case 2:
            return "text-rarity-rare"
        case 3:
            return "text-rarity-epic"
        case 4:
            return "text-rarity-legendary"
        case 5:
            return "text-rarity-artifact"
        default:
            return "text-rarity-common"
    }
}

function getRarityText(card) {
    switch (card.rarity) {
        case 0:
            return "common"
        case 1:
            return "uncommon"
        case 2:
            return "rare"
        case 3:
            return "epic"
        case 4:
            return "legendary"
        case 5:
            return "artifact"
        default:
            return "common"
    }
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

    const { t } = useTranslation();
    const elementSet = deck.categoryDetail;
    return (
        <div>
            <section className="deck-section py-5 h-20">
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <FireIcon className="w-full" />
                </div>
                <span className="w-1/3 mx-auto lufddo text-center lg:text-2xl text-diablo-dark-gold place-self-center">
                    {title}
                </span>
                <div className="flex flex-row mx-auto w-1/3 text-cinnabar">
                    <FireIcon className="w-full" />
                </div>
            </section>

            <section className="deck-section my-5 md:space-x-10 justify-between lg:items-center font-cursive">
                <div className="grid nn:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-left gap-3 mx-auto relative w-full">
                    {cards.map((card) => {
                        const card_size = t(`elements.${card.size}`);
                        const size = "100%";
                        const src = getCardSrc(elementSet, deck, card);
                        return (
                            <div
                                key={`${elementSet.name}-${deck.name}-${card.id}`}
                                className="flex flex-col gap-2 border-obsidian-gold border-4 bg-cod-gray justify-between hover:bg-obsidian-dark hover:border-diablo-dark-gold hover:animate-pulse"
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
                                <div className={`font-sans text-center ${getRarityColor(card)}`}>{
                                    t(`elements.${deck.name}`) + " " +
                                    t(`elements.${card.size}`)
                                }</div>
                                <div> <div className="border-obsidian-gold border-b-2 w-1/2 m-auto" > </div> </div>
                                <div className="m-5 text-diablo-dark-gold">
                                    <span className={`block ${getRarityColor(card)}`}>
                                        {t(`rarity.${getRarityText(card)}`)}
                                    </span>
                                    <span className="block">{t(`elements.${card.color}`)} {t("elements.color")}</span>
                                    <span className="block text-rarity-uncommon text-xs font-sans mt-2">{card.usage ? t(`elements.usage.${card.usage}`, { card_size }) : ""}</span>
                                    <span className="block text-rarity-artifact text-xs font-sans mt-2">"{card.obtain ? t(`elements.obtain.${card.obtain}`) : ""}"</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default ElementViewer;
