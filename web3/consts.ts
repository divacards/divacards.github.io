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
    collectables: [
      { asset_type: "lootbox", contract_addr: "" },
      { asset_type: "cards", contract_addr: "" }
    ],
    opensea: {
      domain: ""
    }
  },
  1: {
    // ETH MAINNET
    currency: {
      main: "ETH",
      payment: {
        symbol: "WETH",
        contract: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      }
    },
    collectables: [
      { asset_type: "lootbox", contract_addr: "" },
      { asset_type: "cards", contract_addr: "" }
    ],
    opensea: {
      domain: ""
    }
  },
  4: {
    // ETH RINKEBY TESTNET
    currency: {
      main: "ETH",
      payment: {
        symbol: "WETH",
        contract: "0xc778417e063141139fce010982780140aa0cd5ab",
      }
    },
    collectables: [
      { asset_type: "lootbox", contract_addr: "0xdbE1eBA71a5DC3375Ed6Ea94f537a3938677A9E4" },
      { asset_type: "cards", contract_addr: "0xDd79d5DF94d986b87EE7440913166992c13a87Af" }
    ],
    opensea: {
      // domain: "https://testnets-api.opensea.io"
      domain: "http://localhost:8010/proxy"
    }
  },
};

export const getOpenseaAssetsEndpoint = (chainId: number, ownerAddr: string, offset: any, limit: any) => {
  const host = CHAIN_CONFIG[chainId]?.opensea?.domain;
  const url = `${host}/assets?owner=${ownerAddr}&`;

  const contractStr = CHAIN_CONFIG[chainId]?.collectables?.map((item) => {
    return `asset_contract_addresses=${item.contract_addr}`
  }).join("&")

  return `${url}${contractStr}&offset=${offset ? offset : '0'}&limit=${limit ? limit : '20'}&format=json`
}

export const isChainSupported = (chainId: number): boolean => {
  return chainId in CHAIN_CONFIG;
};

export const getCurrencyConfig = (chainId: number): CurrencyConfig => {
  return CHAIN_CONFIG[chainId]?.currency;
};

export const getPaymentConfig = (chainId: number): PaymentConfig => {
  return CHAIN_CONFIG[chainId]?.currency?.payment;
};
