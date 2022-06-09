require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;

require("@nomiclabs/hardhat-web3");
//npx hardhat  minter  --nftaddress 0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f  --tokenid 13  --uri xxxxxx  --network mumbai
//npx hardhat  checktoken   --tokenid 14    --network mumbai

task("minter", "mint nft for barcode/qr")
  .addParam("nftaddress", "nft address")
  .addParam("tokenid", "nft tokenid")
  .addParam("uri", "nft uri")
  .setAction(async (taskArgs) => {
   console.log("nftaddress=",taskArgs.nftaddress);
   console.log("tokenid=",taskArgs.tokenid);
   console.log("uri=",taskArgs.uri);
   const NFT = await hre.ethers.getContractFactory("PRODUCT_NFT");
   const URI = "ipfs://bafyreiffb5oauvg5frdl4j2yxr66sqb326sv5qmlcqvj4nnmr7oqa7vtyi/metadata.json"
   //const WALLET_ADDRESS = "0x1dA45683bd3ccd6f8308050d0D99c1ee7F761E5f"
    return ;
   const WALLET_ADDRESS = taskArgs.nftaddress

   const CONTRACT_ADDRESS = "0xD3a41C60752f4F359a19f36770fB5F91108bb666"
   token_id =ethers.BigNumber.from(taskArgs.tokenid)
   const contract = NFT.attach(CONTRACT_ADDRESS);
   await contract.mint(WALLET_ADDRESS, token_id,URI);
   console.log("NFT minted:", contract);
  });



  task("checktoken", "check tokenid")
  .addParam("tokenid", "nft tokenid")
  .setAction(async (taskArgs) => {

   console.log("tokenid=",taskArgs.tokenid);
   const NFT = await hre.ethers.getContractFactory("PRODUCT_NFT");
   const CONTRACT_ADDRESS = "0x4d74fcbF613e894fCe9e404257C62F7B6ebe50e6"
   token_id =ethers.BigNumber.from(taskArgs.tokenid)
   const contract = NFT.attach(CONTRACT_ADDRESS);
   const owner_address=await contract.checkIfTokenExist(token_id);
   console.log("owner_address:", owner_address);
  });


module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [PRIVATE_KEY]
    },
    matic: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [MAINNET_PRIVATE_KEY]
    },
    dev: {
      url: "https://127.0.0.1:7545",
      accounts: [MAINNET_PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}