import { faCircleNotch, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contractFetcher } from "../..//web3/fetcher";
import LOOTBOX_ABI from "../../abis/LOOTBOX.json";
import ITEM_ABI from "../../abis/ITEM.json";
import { getAssetConfig } from "../../web3/consts";
import { OpenSeaPort, Network } from "opensea-js";
import { OrderSide } from 'opensea-js/lib/types'

import React, { useState, useEffect } from 'react';

export function OrderView({ className, tokenAddr, chainId, account, library }) {

    const getSeaport = () => {
        const seaport = new OpenSeaPort(library.provider, {
            networkName: Network.Rinkeby
        })
        console.log(library)
        return seaport;
    }

    const getBuyOrders = async () => {
        const seaport = getSeaport();
        const order = await seaport.api.getOrder({
            asset_contract_address: getAssetConfig(chainId, "lootbox").contract_addr,
            token_ids: [0],
            side: OrderSide.Sell
        });
        console.log(order)
        console.log(account)
        const accountAddress = account;
        await seaport.fulfillOrder({ order, accountAddress })
    }

    return (
        <button
            onClick={() => { getBuyOrders() }}
            className="p-2 bg-black">
            haha
        </button>
    )
}

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
            let res = await getMethod();
            setCount(res.toNumber())
        } catch (e) {
            console.error(e);
        }
    }

    if (count != undefined) {
        return (
            <div className={className}>
                <span>{count}</span>
            </div>
        )
    } else {
        return (
            <div className={className}>
                <FontAwesomeIcon icon={faCircleNotch} className="inline-block animate-spin" />
            </div>
        )
    }
}

export function ItemAction({ method, token_id, library, chainId, account, isBox }) {
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
            onClick={() => { action(); }} >
            <FontAwesomeIcon icon={faBoxOpen} className="inline-block mr-2" />
            Unpack
        </button>
    )
}