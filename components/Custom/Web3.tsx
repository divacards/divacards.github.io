import { faCircleNotch, faBoxOpen, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { contractFetcher } from "../..//web3/fetcher";
import LOOTBOX_ABI from "../../abis/LOOTBOX.json";
import ITEM_ABI from "../../abis/ITEM.json";
import { getAssetConfig } from "../../web3/consts";
import { OpenSeaPort, Network } from "opensea-js";
import { OrderSide } from 'opensea-js/lib/types'
import { SpinLoading, PulseLoading } from "./CustomStatus";
import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";

import React, { useState, useEffect } from 'react';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function OrderView({
    className,
    chainId,
    account,
    library,
    innerText,
    tokenAddr,
    totalSellOrder,
    tokenId
}) {

    const [order, setOrder] = useState(undefined)
    const [error, setError] = useState(undefined)

    const getSeaport = () => {
        const seaport = new OpenSeaPort(library.provider, {
            networkName: Network.Rinkeby
        })
        return seaport;
    }

    const getOrder = async (orderQuery) => {
        const seaport = getSeaport();
        await delay(2000 + getRandomInt(3) * 1000);
        try {
            const order = await seaport.api.getOrder(orderQuery);
            setOrder(order);
        } catch (error) {
            setError(error)
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }
    }

    useEffect(() => {
        getOrder({
            owner: "0x2f7C0c95f8d44579303BDb382d3fc76C22127eab",
            asset_contract_address: getAssetConfig(chainId, "lootbox").contract_addr,
            token_ids: [tokenId],
            side: OrderSide.Sell
        })
    }, [chainId]);


    const buy = async (order) => {
        const seaport = getSeaport();
        const accountAddress = account;
        await seaport.fulfillOrder({ order, accountAddress })
    }

    if (error) {
        return (
            <div className="mt-2 flex flex-wrap h-56 justify-center">
                <PulseLoading />
            </div>
        )
    }
    if (!order) {
        return (
            <div className="mt-2 flex flex-wrap h-56 justify-center">
                <SpinLoading />
            </div>
        )
    } else {
        return (
            <div className="mt-2 flex flex-wrap h-56">
                <div className="w-full px-2 text-2xl">{order.asset.name}</div>
                <div className="w-full text-left px-2 text-xs text-rarity-uncommon font-sans">{order.asset.description}</div>
                <div className="w-full text-left px-2 text-xl text-supernova">
                    <FontAwesomeIcon icon={faEthereum} className="inline-block mr-2" />
                    {formatEther(BigNumber.from(order.basePrice.toNumber().toString()))}
                </div>
                <div className="w-full px-2">
                    <div className="h-2 bg-gradient-to-r from-razzmatazz to-blue-500 rounded-lg">
                        <div className={`h-2 bg-supernova rounded-lg w-${parseFloat(`${order.asset.numSales / totalSellOrder * 100}`).toFixed()}%`}></div>
                    </div>
                </div>

                <div className="w-full text-left px-2 text-xl text-supernova text-right">
                    {order.asset.numSales} Sold
                </div>
                <button
                    onClick={() => { buy(order) }}
                    className={className}>
                    <FontAwesomeIcon icon={faBagShopping} className="inline-block mr-2" />
                    {innerText}
                </button>
            </div>
        )
    }
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