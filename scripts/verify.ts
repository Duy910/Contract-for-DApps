import * as hardhat from "hardhat";
import * as assert from "assert";
import * as address from "../config.json";
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
/** @type import('hardhat/config').HardhatUserConfig */

const { network } = hardhat;

async function main() {
  const networkConfig = network.config as any;
  console.log(process.env.API_KEY);
  //* Verify Chest.sol
  try {
    await hardhat.run("verify:verify", {
      address: address.bsc_test.NFT,
      contract: "contracts/NFT.sol:NFT",
    });
  } catch (e: any) {
    console.error(e.message);
  }

  //! Verify BFS.sol
  // try {
  //   await hardhat.run("verify:verify", {
  //     address: address.nos_test.BFS,
  //     contract: "contracts/library/BFS.sol:BFS",
  //   });
  // } catch (e: any) {
  //   console.error(e.message);
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
