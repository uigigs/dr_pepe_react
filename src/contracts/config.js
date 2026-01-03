//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token contract address
const tokenContractAddress = "";

//contract chainid
const contractChainId = 1;

//token contract configuration
export const tokenContractConfig = {
  address: tokenContractAddress,
  abi: TokenContractAbi,
  chainId: contractChainId,
};

//token symbol read
export const tokenSymbolCall = {
    ...tokenContractConfig,
    functionName: "symbol",
    watch: true,
  };

//token decimals read
export const tokenDecimalsCall = {
  ...tokenContractConfig,
  functionName: "decimals",
  watch: true,
};

//token balanceOf read
export const tokenBalanceOfCall = {
  ...tokenContractConfig,
  functionName: "balanceOf",
  watch: true,
};
