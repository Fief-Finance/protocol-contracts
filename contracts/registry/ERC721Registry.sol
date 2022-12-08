// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";
import "../tokens/interfaces/IERC721Initializable.sol";
import "./IERC721Registry.sol";

contract ERC721Registry is AccessControlEnumerable, IERC721Registry {
    using Clones for address;
    using EnumerableSet for EnumerableSet.Bytes32Set;

    bytes32 public constant override ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant override CONFIGURATOR_ROLE = keccak256("CONFIGURATOR_ROLE");

    // Source contract (or implementation) => true or false
    mapping(address => bool) public override sources;

    mapping(bytes32 => TokenInfo) internal _tokens;

    EnumerableSet.Bytes32Set private _keys;

    constructor(address adminAddress, address configuratorAddress) {
        require(adminAddress != address(0x0), "!admin");
        require(configuratorAddress != address(0x0), "!configurator");
        _setRoleAdmin(CONFIGURATOR_ROLE, ADMIN_ROLE);

        _grantRole(ADMIN_ROLE, adminAddress);
        _grantRole(CONFIGURATOR_ROLE, configuratorAddress);
        _grantRole(CONFIGURATOR_ROLE, _msgSender());
    }

    function createToken(
        address source,
        bytes32 key,
        string calldata name,
        string calldata symbol,
        string calldata baseUri,
        uint256 maxCap,
        address admin,
        address minter
    ) external override onlyRole(CONFIGURATOR_ROLE) returns (address clonedToken) {
        require(sources[source], "!proxy");
        require(_tokens[key].clone == address(0x0), "!key");
        require(
            keccak256(abi.encodePacked(key)) != keccak256(abi.encodePacked(bytes32(""))),
            "!key"
        );
        require(keccak256(abi.encodePacked(name)) != keccak256(abi.encodePacked("")), "!name");
        require(keccak256(abi.encodePacked(symbol)) != keccak256(abi.encodePacked("")), "!symbol");
        require(
            keccak256(abi.encodePacked(baseUri)) != keccak256(abi.encodePacked("")),
            "!base_uri"
        );

        clonedToken = source.clone();

        _tokens[key] = TokenInfo({source: source, clone: clonedToken});

        _keys.add(key);

        emit TokenCreated(clonedToken, source, maxCap, key, name, symbol);

        IERC721Initializable(clonedToken).initialize(name, symbol, baseUri, maxCap, admin, minter);
    }

    function updateSources(address[] calldata newSources, bool add)
        external
        override
        onlyRole(CONFIGURATOR_ROLE)
    {
        require(newSources.length > 0, "!sources");
        for (uint256 index = 0; index < newSources.length; index++) {
            sources[newSources[index]] = add;
            emit SourceChanged(newSources[index], add);
        }
    }

    /** View Functions */

    function getTokenAddresses() external view override returns (address[] memory addresses) {
        bytes32[] memory values = _keys.values();
        uint256 length = values.length;
        addresses = new address[](length);
        for (uint256 index = 0; index < length; index++) {
            addresses[index] = _tokens[values[index]].clone;
        }
    }

    function tokens(bytes32 key) external view override returns (TokenInfo memory) {
        return _tokens[key];
    }

    function keys() external view override returns (bytes32[] memory) {
        return _keys.values();
    }

    function containsKey(bytes32 key) external view override returns (bool) {
        return _keys.contains(key);
    }

    /** Internal Functions */

    /** Modifiers */
}
