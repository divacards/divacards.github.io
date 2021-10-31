import { Contract } from "@ethersproject/contracts";

export const fetcher =
  (library) =>
  (chainId, method, ...args) => {
    // because we need to update when chain id changes
    // so it's necessary to catch it
    const [...params] = args;
    console.log("fetcher", method, params, chainId);
    return library[method](...params);
  };

export const contractFetcher =
  (library, abi) =>
  (chainId, address, method, ...args) => {
    const [...params] = args;
    console.log("contract fetcher", method, params, chainId);
    const contract = new Contract(address, abi, library.getSigner());
    return contract[method](...params);
  };
