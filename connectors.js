import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { UnsupportedChainIdError } from "@web3-react/core";
import {
  ETH_MAINNET_CHAINID,
  ETH_RINKEBY_CHAINID,
  BSC_CHAINID,
  MATIC_CHAINID,
} from "./consts";
export const injected = new InjectedConnector({
  supportedChainIds: [
    ETH_MAINNET_CHAINID,
    ETH_RINKEBY_CHAINID,
    BSC_CHAINID,
    MATIC_CHAINID,
    3,
    5,
    42,
  ],
});

export function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof UserRejectedRequestError) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    console.error(error);
    return "An unknown error occurred. Check the console for more details.";
  }
}
