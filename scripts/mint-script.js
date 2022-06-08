const hre = require("hardhat");
web3 = require('web3')
var ethers = require('ethers');
const BigNumber = require("bignumber.js");
async function main() {

  const args = process.argv.slice(2)
  if (args.length !== 2) {
      console.error(`usage: ${process.argv[0]} ${process.argv[1]} <ipfsURI> <TOKENID>`)
      process.exit(1)
  }

  console.log("g_uri:", process.argv[2]);
  return;
  const NFT = await hre.ethers.getContractFactory("PRODUCT_NFT");
  const URI = "ipfs://bafyreiffb5oauvg5frdl4j2yxr66sqb326sv5qmlcqvj4nnmr7oqa7vtyi/metadata.json"
  const WALLET_ADDRESS = "0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f"
  const CONTRACT_ADDRESS = "0xD3a41C60752f4F359a19f36770fB5F91108bb666"
  token_id =ethers.BigNumber.from("0x3e109fac936347c72e944caf923df27f811a202f52f24c2c94529c390c99b511")
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, token_id,URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});


