/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IERC721Initializable,
  IERC721InitializableInterface,
} from "../IERC721Initializable";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseUri",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "maxCap",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IERC721Initializable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC721InitializableInterface {
    return new utils.Interface(_abi) as IERC721InitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC721Initializable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IERC721Initializable;
  }
}
