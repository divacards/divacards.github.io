import { getCardAsset } from "../components/Custom/CardIcons";
export function getRarityColor(rarity) {
    if (["uncommon", "rare", "epic", "legendary"].indexOf(rarity.toString().toLowerCase()) > -1) {
        return `rarity-${rarity.toLowerCase()}`
    } else {
        if (rarity == "box") {
            return "diablo-dark-gold"
        }
        return "diablo-dark-gold"
    }
}

export function getTrait(trait, attributes) {
    return attributes.find(ele => ele.trait_type == trait)
}

export function getItemType(item) {
    return item.traits.length == 1 ? "box" : "card";
}

export function getItemColor(item) {
    const item_type = getItemType(item);
    if (item_type == "box") {
        return getRarityColor("box");
    } else if (item_type == "card") {
        const rarity = getTrait('Rarity', item.traits)
        return getRarityColor(rarity.value)
    }
}
export function getQPara(arg) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(arg);
}

export function getItemAssetbyItem(item) {
    const item_type = getItemType(item);
    if (item_type == "box") {
        return getCardAsset("chest");
    } else if (item_type == "card") {
        let face = getTrait("Face", item.traits).value.toLowerCase();
        let house = getTrait("House", item.traits).value.toLowerCase().slice(0, -1);
        return getCardAsset(`${house}_${face}`);
    }
}