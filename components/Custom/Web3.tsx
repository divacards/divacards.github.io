import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contractFetcher } from "../..//web3/fetcher";
import LOOTBOX_ABI from "../../abis/LOOTBOX.json";
import { getAssetConfig } from "../../web3/consts";

import React, { useState, useEffect } from 'react';

export function ItemStatus({ method, className, token_id, library, chainId, account }) {
    const [count, setCount] = useState(undefined)
    const lootboxFetcher = contractFetcher(library, LOOTBOX_ABI);
    const assetConf = getAssetConfig(chainId, "lootbox");
    const addr = assetConf.contract_addr;

    useEffect(() => { getItemStatus() }, [chainId]);

    const getMethod = () => {
        if (method == "balanceOf") {
            return lootboxFetcher(chainId, addr, "balanceOf", account, parseInt(token_id));
        } else if (method == "totalSupply") {
            return lootboxFetcher(chainId, addr, "totalSupply", parseInt(token_id));
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