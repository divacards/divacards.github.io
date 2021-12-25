import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contractFetcher } from "../..//web3/fetcher";
import LOOTBOX_ABI from "../../abis/LOOTBOX.json";
import ITEM_ABI from "../../abis/ITEM.json";
import { getAssetConfig } from "../../web3/consts";

import React, { useState, useEffect } from 'react';

export function ItemStatus({ isBox, method, className, token_id, library, chainId, account }) {
    const [count, setCount] = useState(undefined)
    const fetcher = isBox ? contractFetcher(library, LOOTBOX_ABI) : contractFetcher(library, ITEM_ABI);
    const addr = isBox ? getAssetConfig(chainId, "lootbox").contract_addr : getAssetConfig(chainId, "cards").contract_addr;

    useEffect(() => { getItemStatus() }, [chainId]);

    const getMethod = () => {
        if (method == "balanceOf") {
            return fetcher(chainId, addr, "balanceOf", account, parseInt(token_id));
        } else if (method == "totalSupply") {
            return fetcher(chainId, addr, "totalSupply", parseInt(token_id));
        }
    }

    const getItemStatus = async () => {
        try {
            let balance = await getMethod();
            setCount(balance.toNumber())
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={className}>
            {count ?
                (<span>{count}</span>) :
                (<FontAwesomeIcon icon={faCircleNotch} className="inline-block animate-spin" />)}
        </div>
    )
}

export function ItemAction({ method, className, token_id, library, chainId, account, isBox }) {
    const lootboxFetcher = contractFetcher(library, LOOTBOX_ABI);
    const assetConf = getAssetConfig(chainId, "lootbox");
    const addr = assetConf.contract_addr;

    const action = async () => {
        try {
            await lootboxFetcher(chainId, addr, "unpack", parseInt(token_id), account, 1);
        } catch (e) {
            console.error(e);
        }
    }

    if (!isBox) { return (<></>) }

    return (
        <button
            className="text-diablo-dark-gold border-2 border-diablo-dark-gold py-2 px-4 my-2 font-cursive"
            onClick={() => {
                action();
            }}
        >
            Unpack
        </button>
    )
}