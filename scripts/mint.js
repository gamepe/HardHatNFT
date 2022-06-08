const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("BARCODENFTMetadata");
  const URI = "https://ipfs.io/ipfs/QmeZac2UdV5F5tkDCKBCGbhz3V1AaZT3xn9WjbKrZrjz3o";
  const WALLET_ADDRESS = "0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f"
  const CONTRACT_ADDRESS = "0x4380720f409b3ccbdf58d14100f363741899c7f7"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.safeMintWithMetadata(WALLET_ADDRESS,"The Israel Coins & Medals Corp ", "POB 424, 50 Bar Yehuda Road, Nesher, Israel 3666017  ", "123-456-789","3e109fac936347c72e944caf923df27f811a202f52f24c2c94529c390c99b512","00000000000000145188c96af19bf3dd2b3580cc73be8fd7bbaf5ab7382a9881");
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
