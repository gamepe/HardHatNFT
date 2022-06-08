const hre = require("hardhat");

async function main(wallet_address) {
  const NFT = await hre.ethers.getContractFactory("BARCODENFTMetadata");
  const URI = "https://ipfs.io/ipfs/QmeZac2UdV5F5tkDCKBCGbhz3V1AaZT3xn9WjbKrZrjz3o";
  const CONTRACT_ADDRESS = "0x4380720f409b3ccbdf58d14100f363741899c7f7"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.safeMintWithMetadata(wallet_address,"Moti", "xxxOKxxx", "123445445433","3e109fac936347c72e944caf923df27f811a202f52f24c2c94529c390c99b512","00000000000000145188c96af19bf3dd2b3580cc73be8fd7bbaf5ab7382a9881");
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
