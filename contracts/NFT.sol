// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract PRODUCT_NFT is ERC721, Ownable {
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) private _tokenURIs;
  
  constructor() ERC721("PRODUCT_NFT", "QRNFT") {}
  function _setTokenURI(uint256 tokenId, string memory _tokenURI)
    internal
    virtual
  {
    _tokenURIs[tokenId] = _tokenURI;
  }



  function tokenURI(uint256 tokenId) 
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }


  function mint(address recipient,  uint256 newItemId,string memory uri)
    public onlyOwner
    returns (uint256)
  {
    
    _mint(recipient, newItemId);
    _setTokenURI(newItemId, uri);
    return newItemId;
  }
}