import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import useSWR from "swr";
import WETH_ABI from "../../abis/WETH.json";
import { getPaymentConfig, isChainSupported } from "../../web3/consts";
import { contractFetcher } from "../../web3/fetcher";
import { formatEther, parseEther } from "@ethersproject/units";
import { BigNumber } from "@ethersproject/bignumber";

const toEther = (value) => {
  try {
    return BigNumber.from(parseEther(value));
  } catch (e) {
    return BigNumber.from(0);
  }
};

const Transfer = () => {
  const { library, chainId, account } = useWeb3React();
  const [amount, setAmount] = useState(BigNumber.from(0));

  const [error, setError] = useState(null);
  const fetcher = contractFetcher(library, WETH_ABI);

  const paymentConf = getPaymentConfig(chainId);
  const addr = paymentConf.contract;

  const transfer = async (amount: BigNumber) => {
    setError(null);
    if (amount > BigNumber.from(0)) {
      try {
        await fetcher(chainId, addr, "transfer", account, amount);
      } catch (e) {
        console.error(e);
        setError(e.message);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between">
        <input
          type="number"
          step="0.0001"
          min="0"
          className="form-number rounded"
          onChange={(e) => setAmount(toEther(e.target.value))}
        />
        <button className="btn btn-black mx-2" onClick={() => transfer(amount)}>
          Transfer WETH
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export const Invoker = () => {
  const { chainId } = useWeb3React();

  if (!chainId) {
    return <div>Please connect the wallet</div>;
  } else if (!isChainSupported(chainId)) {
    return <div>Unsupported chain</div>;
  }

  return <Transfer />;
};
