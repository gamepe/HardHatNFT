const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("BARCODE_NFT");
  const URI = "https://ipfs.io/ipfs/QmeZac2UdV5F5tkDCKBCGbhz3V1AaZT3xn9WjbKrZrjz3o"
  const WALLET_ADDRESS = "0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f"
  const CONTRACT_ADDRESS = "0xEC425b2ae06a5A150Be4D8bA37A29D57bC457D59"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});


