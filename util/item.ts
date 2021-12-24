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
        const rarity = getTrait('rarity', item.traits)
        return getRarityColor(rarity)
    }
}