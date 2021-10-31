export const ETH_MAINNET_CHAINID = 1;
export const ETH_RINKEBY_CHAINID = 4;
export const BSC_CHAINID = 56;
export const MATIC_CHAINID = 137;

interface PaymentConfig {
  symbol: string;
  contract: string;
}
interface CurrencyConfig {
  main: string;
  payment: PaymentConfig;
}

export const CHAIN_CONFIG = {
  56: {
    // BSC
    currency: {
      main: "BNB",
      payment: {
        symbol: "WBNB",
        contract: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      },
    },
  },
  1: {
    // ETH MAINNET
    currency: {
      main: "ETH",
      payment: {
        symbol: "WETH",
        contract: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      },
    },
  },
  4: {
    // ETH RINKEBY TESTNET
    currency: {
      main: "ETH",
      payment: {
        symbol: "WETH",
        contract: "0xc778417e063141139fce010982780140aa0cd5ab",
      },
    },
  },
};

export const isChainSupported = (chainId: number): boolean => {
  return chainId in CHAIN_CONFIG;
};

export const getCurrencyConfig = (chainId: number): CurrencyConfig => {
  return CHAIN_CONFIG[chainId]?.currency;
};

export const getPaymentConfig = (chainId: number): PaymentConfig => {
  return CHAIN_CONFIG[chainId]?.currency?.payment;
};
