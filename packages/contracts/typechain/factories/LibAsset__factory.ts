/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibAsset, LibAssetInterface } from "../LibAsset";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x6438e3c1",
        type: "bytes32",
      },
    ],
    name: "c_0x6438e3c1",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60e0610052600b82828239805160001a607314610045577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80637a0beea8146038575b600080fd5b604e6004803603810190604a91906066565b6050565b005b50565b6000813590506060816096565b92915050565b600060208284031215607757600080fd5b60006083848285016053565b91505092915050565b6000819050919050565b609d81608c565b811460a757600080fd5b5056fea2646970667358221220057e2169d003cdf128772608263750b7f1326eb6bfe5a3ccd49fb1e24eadbe4664736f6c63430008040033";

export class LibAsset__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibAsset> {
    return super.deploy(overrides || {}) as Promise<LibAsset>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibAsset {
    return super.attach(address) as LibAsset;
  }
  connect(signer: Signer): LibAsset__factory {
    return super.connect(signer) as LibAsset__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibAssetInterface {
    return new utils.Interface(_abi) as LibAssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibAsset {
    return new Contract(address, _abi, signerOrProvider) as LibAsset;
  }
}
