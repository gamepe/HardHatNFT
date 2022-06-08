const hre = require("hardhat");
web3 = require('web3')
var ethers = require('ethers');
const BigNumber = require("bignumber.js");
async function main() {
  const NFT = await hre.ethers.getContractFactory("PRODUCT_NFT");
  const URI = "https://ipfs.io/ipfs/bafkreiey6pam74dav2km3gnrkqtkfdtkpcmeilyiqeohnrf6v2d4yklr5u"
  const WALLET_ADDRESS = "0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f"
  const CONTRACT_ADDRESS = "0xD3a41C60752f4F359a19f36770fB5F91108bb666"
  token_id =ethers.BigNumber.from("0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f")
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, token_id,URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});


