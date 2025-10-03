import { SupportedChainsType } from './chains';
declare type AddressMap = {
    [chainId: number]: string;
};
declare type ChainAddresses = {
    v3CoreFactoryAddress: string;
    multicallAddress: string;
    quoterAddress: string;
    v3MigratorAddress?: string;
    nonfungiblePositionManagerAddress?: string;
    tickLensAddress?: string;
    swapRouter02Address?: string;
    v1MixedRouteQuoterAddress?: string;
};
export declare const UNI_ADDRESSES: AddressMap;
export declare const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = "0x8B799381ac40b838BBA4131ffB26197C432AFe78";
export declare const V2_FACTORY_ADDRESS = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
export declare const V2_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
export declare const V2_FACTORY_ADDRESSES: AddressMap;
export declare const V2_ROUTER_ADDRESSES: AddressMap;
export declare const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses>;
export declare const SWAP_ROUTER_02_ADDRESSES: (chainId: number) => string | undefined;
export {};
