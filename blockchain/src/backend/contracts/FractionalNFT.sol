// // SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FractionalNFT is ERC721, Ownable {
    struct FractionalProperty {
        uint256 totalSupply;
        uint256 tokenizedSupply;
        mapping(uint256 => address) tokenOwners;
    }

    mapping(uint256 => FractionalProperty) public fractionalProperties;
    mapping(uint256 => uint256) public propertyStartingTokenId;

    constructor() ERC721("FractionalNFT", "FNFT") {}

    function tokenizeProperty(uint256 _propertyId, uint256 _totalSupply) external onlyOwner {
        require(_totalSupply > 0, "Total supply must be greater than zero");
        require(fractionalProperties[_propertyId].totalSupply == 0, "Property already tokenized");
        fractionalProperties[_propertyId].totalSupply = _totalSupply;
        fractionalProperties[_propertyId].tokenizedSupply = 0;
        propertyStartingTokenId[_propertyId] = (_propertyId * 10**18) + 1;
    }

    function mintFractionalToken(uint256 _propertyId, uint256 _amount) external onlyOwner {
        FractionalProperty storage property = fractionalProperties[_propertyId];
        require(property.totalSupply > 0, "Property not tokenized");
        require(property.tokenizedSupply + _amount <= property.totalSupply, "Exceeds total supply");
        for (uint256 i = 0; i < _amount; i++) {
            property.tokenizedSupply++;
            uint256 tokenId = propertyStartingTokenId[_propertyId] + property.tokenizedSupply - 1;
            _safeMint(msg.sender, tokenId);
            property.tokenOwners[tokenId] = msg.sender;
        }
    }

    function transferFractionalToken(uint256 _tokenId, address _to) external {
        require(_exists(_tokenId), "Token does not exist");
        require(ownerOf(_tokenId) == msg.sender, "Not the owner");
        _transfer(msg.sender, _to, _tokenId);
    }

    function getFractionalTokenOwner(uint256 _tokenId) external view returns (address) {
        require(_exists(_tokenId), "Token does not exist");
        uint256 propertyId = (_tokenId / 10**18);
        return fractionalProperties[propertyId].tokenOwners[_tokenId];
    }
}
// pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract FractionalNFT is ERC721, Ownable {
//     // Struct to represent a fractional property
//     struct FractionalProperty {
//         uint256 totalSupply;
//         uint256 tokenizedSupply;
//         mapping(uint256 => address) tokenOwners;
//     }

//     // Mapping to store fractional properties
//     mapping(uint256 => FractionalProperty) public fractionalProperties;

//     constructor() ERC721("FractionalNFT", "FNFT") {}

//     // Function to tokenize a property
//     function tokenizeProperty(uint256 _propertyId, uint256 _totalSupply) external onlyOwner {
//         require(_totalSupply > 0, "Total supply must be greater than zero");
//         require(fractionalProperties[_propertyId].totalSupply == 0, "Property already tokenized");

//         FractionalProperty storage property = fractionalProperties[_propertyId];
//         property.totalSupply = _totalSupply;
//         property.tokenizedSupply = 0;
//     }

//     // Function for minting fractional tokens
//     function mintFractionalToken(uint256 _propertyId, uint256 _amount) external onlyOwner {
//         FractionalProperty storage property = fractionalProperties[_propertyId];
//         require(property.totalSupply > 0, "Property not tokenized");
//         require(property.tokenizedSupply + _amount <= property.totalSupply, "Exceeds total supply");

//         for (uint256 i = 0; i < _amount; i++) {
//             property.tokenizedSupply++;
//             uint256 tokenId = ((_propertyId + 1) * 1000000) + property.tokenizedSupply;
//             _safeMint(msg.sender, tokenId);
//             property.tokenOwners[tokenId] = msg.sender;
//         }
//     }

//     // Function to transfer fractional token ownership
//     function transferFractionalToken(uint256 _tokenId, address _to) external {
//         require(_exists(_tokenId), "Token does not exist");
//         require(ownerOf(_tokenId) == msg.sender, "Not the owner");

//         uint256 propertyId = _tokenId / 1000000;
//         fractionalProperties[propertyId - 1].tokenOwners[_tokenId] = _to;
//         _transfer(msg.sender, _to, _tokenId);
//     }

//     // Function to get the owner of a fractional token
//     function getFractionalTokenOwner(uint256 _tokenId) external view returns (address) {
//         require(_exists(_tokenId), "Token does not exist");
//         uint256 propertyId = _tokenId / 1000000;
//         return fractionalProperties[propertyId - 1].tokenOwners[_tokenId];
//     }
// }