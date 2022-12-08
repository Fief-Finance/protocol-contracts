/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721Registry,
  ERC721RegistryInterface,
} from "../ERC721Registry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "adminAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "configuratorAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "added",
        type: "bool",
      },
    ],
    name: "SourceChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "clone",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxCap",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CONFIGURATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "containsKey",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
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
    name: "createToken",
    outputs: [
      {
        internalType: "address",
        name: "clonedToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "keys",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sources",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "tokens",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "source",
            type: "address",
          },
          {
            internalType: "address",
            name: "clone",
            type: "address",
          },
        ],
        internalType: "struct IERC721Registry.TokenInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "newSources",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "add",
        type: "bool",
      },
    ],
    name: "updateSources",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f5438038062001f548339810160408190526200003491620002c0565b6001600160a01b038216620000665760405162461bcd60e51b81526004016200005d906200034f565b60405180910390fd5b6001600160a01b0381166200008f5760405162461bcd60e51b81526004016200005d906200033d565b620000b960008051602062001f1483398151915260008051602062001f3483398151915262000112565b620000d460008051602062001f34833981519152836200015d565b620000ef60008051602062001f14833981519152826200015d565b6200010a60008051602062001f14833981519152336200015d565b50506200038d565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b620001748282620001a060201b62000aad1760201c565b60008281526001602090815260409091206200019b91839062000b4b62000241821b17901c565b505050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200023d576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001fc3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600062000258836001600160a01b03841662000261565b90505b92915050565b6000818152600183016020526040812054620002aa575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200025b565b5060006200025b565b80516200025b8162000373565b60008060408385031215620002d3578182fd5b620002e184838501620002b3565b91506020620002f385828601620002b3565b9150509250929050565b600d8152602081016c10b1b7b73334b3bab930ba37b960991b815290505b60200190565b60068152602081016510b0b236b4b760d11b815290506200031b565b602080825281016200025b81620002fd565b602080825281016200025b8162000321565b60006001600160a01b0382166200025b565b6200037e8162000361565b81146200038a57600080fd5b50565b611b77806200039d6000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806391d14854116100b2578063d547741f11610081578063e464544311610066578063e464544314610341578063ee8c24b814610354578063f6b102a61461036957600080fd5b8063d547741f14610307578063d853015e1461031a57600080fd5b806391d1485414610292578063a217fddf146102c9578063b750bdde146102d1578063ca15c873146102f457600080fd5b806336568abe116101095780639010d07c116100ee5780639010d07c146101f8578063904194a3146102185780639061f5af1461027f57600080fd5b806336568abe146101be57806375b238fc146101d157600080fd5b806301ffc9a71461013b578063248a9ca3146101645780632f2ff15d14610194578063307540f6146101a9575b600080fd5b61014e61014936600461149a565b61037c565b60405161015b9190611853565b60405180910390f35b610187610172366004611417565b60009081526020819052604090206001015490565b60405161015b9190611861565b6101a76101a2366004611434565b6103c0565b005b6101b16103ea565b60405161015b9190611842565b6101a76101cc366004611434565b6103fb565b6101877fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b61020b61020636600461146c565b61043a565b60405161015b9190611823565b610272610226366004611417565b604080518082019091526000808252602082015250600090815260036020908152604091829020825180840190935280546001600160a01b039081168452600190910154169082015290565b60405161015b91906119d4565b6101a761028d3660046113c2565b610459565b61014e6102a0366004611434565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b610187600081565b61014e6102df3660046112a4565b60026020526000908152604090205460ff1681565b610187610302366004611417565b61059b565b6101a7610315366004611434565b6105b2565b6101877f3b49a237fe2d18fa4d9642b8a0e065923cceb71b797783b619a030a61d848bf081565b61020b61034f3660046112c1565b6105d7565b61035c61098e565b60405161015b9190611831565b61014e610377366004611417565b610aa0565b60006001600160e01b031982167f5a05180f0000000000000000000000000000000000000000000000000000000014806103ba57506103ba82610b60565b92915050565b6000828152602081905260409020600101546103db81610bc7565b6103e58383610bd4565b505050565b60606103f66004610bf6565b905090565b6001600160a01b038116331461042c5760405162461bcd60e51b815260040161042390611963565b60405180910390fd5b6104368282610c01565b5050565b60008281526001602052604081206104529083610c23565b9392505050565b7f3b49a237fe2d18fa4d9642b8a0e065923cceb71b797783b619a030a61d848bf061048381610bc7565b826104a05760405162461bcd60e51b815260040161042390611933565b60005b838110156105945782600260008787858181106104d057634e487b7160e01b600052603260045260246000fd5b90506020020160208101906104e591906112a4565b6001600160a01b031681526020810191909152604001600020805460ff191691151591909117905584848281811061052d57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061054291906112a4565b6001600160a01b03167f69450515815f5b4a0d2fbf473170de27173a286434b03a47ad6b941165498a0e8460405161057a9190611853565b60405180910390a28061058c81611ade565b9150506104a3565b5050505050565b60008181526001602052604081206103ba90610c2f565b6000828152602081905260409020600101546105cd81610bc7565b6103e58383610c01565b60007f3b49a237fe2d18fa4d9642b8a0e065923cceb71b797783b619a030a61d848bf061060381610bc7565b6001600160a01b038d1660009081526002602052604090205460ff1661063b5760405162461bcd60e51b815260040161042390611903565b60008c8152600360205260409020600101546001600160a01b0316156106735760405162461bcd60e51b815260040161042390611953565b600060405160200161068591906117a4565b604051602081830303815290604052805190602001208c6040516020016106ac91906117a4565b6040516020818303038152906040528051906020012014156106e05760405162461bcd60e51b815260040161042390611953565b6040805160008152602081018083528151902091610702918e918e91016117b6565b6040516020818303038152906040528051906020012014156107365760405162461bcd60e51b815260040161042390611913565b6040805160008152602081018083528151902091610758918c918c91016117b6565b60405160208183030381529060405280519060200120141561078c5760405162461bcd60e51b8152600401610423906119c4565b60408051600081526020810180835281519020916107ae918a918a91016117b6565b6040516020818303038152906040528051906020012014156107e25760405162461bcd60e51b815260040161042390611923565b6107f48d6001600160a01b0316610c39565b915060405180604001604052808e6001600160a01b03168152602001836001600160a01b0316815250600360008e815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055509050506108a18c6004610cc490919063ffffffff16565b508c6001600160a01b0316826001600160a01b03167fb5227e57c94f264d324647b36f4674193c1f90c7db7d309e381e2f05c64a3595878f8f8f8f8f6040516108ef969594939291906119e2565b60405180910390a36040517f7930a65b0000000000000000000000000000000000000000000000000000000081526001600160a01b03831690637930a65b9061094c908e908e908e908e908e908e908e908e908e9060040161186f565b600060405180830381600087803b15801561096657600080fd5b505af115801561097a573d6000803e3d6000fd5b50505050509b9a5050505050505050505050565b6060600061099c6004610bf6565b80519091508067ffffffffffffffff8111156109c857634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156109f1578160200160208202803683370190505b50925060005b81811015610a9a5760036000848381518110610a2357634e487b7160e01b600052603260045260246000fd5b6020026020010151815260200190815260200160002060010160009054906101000a90046001600160a01b0316848281518110610a7057634e487b7160e01b600052603260045260246000fd5b6001600160a01b039092166020928302919091019091015280610a9281611ade565b9150506109f7565b50505090565b60006103ba600483610cd0565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610436576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610b073390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610452836001600160a01b038416610ce8565b60006001600160e01b031982167f7965db0b0000000000000000000000000000000000000000000000000000000014806103ba57507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316146103ba565b610bd18133610d37565b50565b610bde8282610aad565b60008281526001602052604090206103e59082610b4b565b60606103ba82610db5565b610c0b8282610e11565b60008281526001602052604090206103e59082610e90565b60006104528383610ea5565b60006103ba825490565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b038116610cbf5760405162461bcd60e51b815260040161042390611943565b919050565b60006104528383610ce8565b60008181526001830160205260408120541515610452565b6000818152600183016020526040812054610d2f575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103ba565b5060006103ba565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661043657610d73816001600160a01b03166014610edd565b610d7e836020610edd565b604051602001610d8f9291906117c1565b60408051601f198184030181529082905262461bcd60e51b8252610423916004016118e2565b606081600001805480602002602001604051908101604052809291908181526020018280548015610e0557602002820191906000526020600020905b815481526020019060010190808311610df1575b50505050509050919050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610436576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610452836001600160a01b0384166110d4565b6000826000018281548110610eca57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b60606000610eec836002611a44565b610ef7906002611a31565b67ffffffffffffffff811115610f1d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610f47576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610f8c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610fe557634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000611009846002611a44565b611014906001611a31565b90505b60018111156110b5577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061106357634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061108757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936110ae81611ac7565b9050611017565b5083156104525760405162461bcd60e51b8152600401610423906118f3565b600081815260018301602052604081205480156111e75760006110f8600183611a63565b855490915060009061110c90600190611a63565b905081811461118d57600086600001828154811061113a57634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061116b57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b85548690806111ac57634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103ba565b60009150506103ba565b80356103ba81611b0f565b60008083601f84011261120d578182fd5b50813567ffffffffffffffff811115611224578182fd5b60208301915083602082028301111561123c57600080fd5b9250929050565b80356103ba81611b23565b80356103ba81611b2b565b80356103ba81611b31565b60008083601f840112611275578182fd5b50813567ffffffffffffffff81111561128c578182fd5b60208301915083600182028301111561123c57600080fd5b6000602082840312156112b5578081fd5b610452838284016111f1565b60008060008060008060008060008060006101008c8e0312156112e2578687fd5b6112ee8d888e016111f1565b9a5060206112fe8e828f0161124e565b9a505060408c013567ffffffffffffffff81111561131a578788fd5b6113268e828f01611264565b995099505060608c013567ffffffffffffffff811115611344578788fd5b6113508e828f01611264565b975097505060808c013567ffffffffffffffff81111561136e578586fd5b61137a8e828f01611264565b955095505060a061138d8e828f0161124e565b93505060c061139e8e828f016111f1565b92505060e06113af8e828f016111f1565b9150509295989b509295989b9093969950565b6000806000604084860312156113d6578283fd5b8284013567ffffffffffffffff8111156113ee578384fd5b6113fa868287016111fc565b9350935050602061140d86828701611243565b9150509250925092565b600060208284031215611428578081fd5b6104528382840161124e565b60008060408385031215611446578182fd5b6114528483850161124e565b91506020611462858286016111f1565b9150509250929050565b6000806040838503121561147e578182fd5b61148a8483850161124e565b915060206114628582860161124e565b6000602082840312156114ab578081fd5b61045283828401611259565b6114c182826114d2565b5060200190565b6114c1828261156b565b6114db81611a7a565b82525050565b60006114eb825190565b8084526020938401938301825b8281101561151d57815161150c87826114b7565b9650506020820191506001016114f8565b5093949350505050565b6000611531825190565b8084526020938401938301825b8281101561151d57815161155287826114c8565b96505060208201915060010161153e565b8015156114db565b806114db565b818352602083019250611585828483611a8b565b50601f01601f19160190565b61159c828483611a8b565b500190565b60006115ab825190565b8084526020840193506115c2818560208601611a97565b601f01601f19169290920192915050565b60006115dd825190565b6115eb818560208601611a97565b9290920192915050565b60208082527f537472696e67733a20686578206c656e67746820696e73756666696369656e7491019081525b60200190565b60068152602081017f2170726f7879000000000000000000000000000000000000000000000000000081529050611621565b60058152602081017f216e616d6500000000000000000000000000000000000000000000000000000081529050611621565b60098152602081017f21626173655f757269000000000000000000000000000000000000000000000081529050611621565b60088152602081017f21736f757263657300000000000000000000000000000000000000000000000081529050611621565b60168152602081017f455243313136373a20637265617465206661696c65640000000000000000000081529050611621565b60048152602081017f216b65790000000000000000000000000000000000000000000000000000000081529050611621565b60078152602081017f2173796d626f6c0000000000000000000000000000000000000000000000000081529050611621565b805161179183826114d2565b5060208101516103e560208401826114d2565b6117ae818361156b565b602001919050565b610452818385611591565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526017016117f181846115d3565b7f206973206d697373696e6720726f6c65200000000000000000000000000000008152601101905061045281836115d3565b602081016103ba82846114d2565b6020808252810161045281846114e1565b602080825281016104528184611527565b602081016103ba8284611563565b602081016103ba828461156b565b60c08082528101611881818b8d611571565b9050818103602083015261189681898b611571565b905081810360408301526118ab818789611571565b90506118ba606083018661156b565b6118c760808301856114d2565b6118d460a08301846114d2565b9a9950505050505050505050565b6020808252810161045281846115a1565b602080825281016103ba816115f5565b602080825281016103ba81611627565b602080825281016103ba81611659565b602080825281016103ba8161168b565b602080825281016103ba816116bd565b602080825281016103ba816116ef565b602080825281016103ba81611721565b602080825281016103ba81602f81527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560208201527f20726f6c657320666f722073656c660000000000000000000000000000000000604082015260600190565b602080825281016103ba81611753565b604081016103ba8284611785565b608081016119f0828961156b565b6119fd602083018861156b565b8181036040830152611a10818688611571565b90508181036060830152611a25818486611571565b98975050505050505050565b6000821982111561159c5761159c611af9565b6000816000190483118215151615611a5e57611a5e611af9565b500290565b600082821015611a7557611a75611af9565b500390565b60006001600160a01b0382166103ba565b82818337506000910152565b60005b83811015611ab2578181015183820152602001611a9a565b83811115611ac1576000848401525b50505050565b600081611ad657611ad6611af9565b506000190190565b6000600019821415611af257611af2611af9565b5060010190565b634e487b7160e01b600052601160045260246000fd5b611b1881611a7a565b8114610bd157600080fd5b801515611b18565b80611b18565b6001600160e01b03198116611b1856fea2646970667358221220410047400218d56f5a04b21df9ad288c8385388b874e6257457822b889fa027664736f6c634300080400333b49a237fe2d18fa4d9642b8a0e065923cceb71b797783b619a030a61d848bf0a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";

type ERC721RegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721RegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Registry__factory extends ContractFactory {
  constructor(...args: ERC721RegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC721Registry";
  }

  deploy(
    adminAddress: string,
    configuratorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721Registry> {
    return super.deploy(
      adminAddress,
      configuratorAddress,
      overrides || {}
    ) as Promise<ERC721Registry>;
  }
  getDeployTransaction(
    adminAddress: string,
    configuratorAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      adminAddress,
      configuratorAddress,
      overrides || {}
    );
  }
  attach(address: string): ERC721Registry {
    return super.attach(address) as ERC721Registry;
  }
  connect(signer: Signer): ERC721Registry__factory {
    return super.connect(signer) as ERC721Registry__factory;
  }
  static readonly contractName: "ERC721Registry";
  public readonly contractName: "ERC721Registry";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721RegistryInterface {
    return new utils.Interface(_abi) as ERC721RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Registry {
    return new Contract(address, _abi, signerOrProvider) as ERC721Registry;
  }
}
