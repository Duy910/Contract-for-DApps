import { ethers, hardhatArguments } from "hardhat";
import * as Config from "./config";
async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [deployer] = await ethers.getSigners();
  console.log("deploy from address: ", deployer.address);

  // const Duy = await ethers.getContractFactory("Duy");
  // const duy = await Duy.deploy();
  // console.log("Duy address: ", duy.address);
  // Config.setConfig(network + ".Duy", duy.address);

  // const Vault = await ethers.getContractFactory("Vault");
  // const vault = await Vault.deploy();
  // console.log("Vault address: ", vault.address);
  // Config.setConfig(network + ".Vault", vault.address);

  const Duy = await ethers.getContractFactory("USDT");
  const duy = await Duy.deploy();
  console.log("USDT address: ", duy.address);
  Config.setConfig(network + ".USDT", duy.address);

  // const Ico = await ethers.getContractFactory("DUYCrowdSale");
  // const ico = await Ico.deploy(
  //   10000,
  //   100,
  //   "0xDF1B860C0e0e3D33306106249933495bC037565D",
  //   "0x6153a25C9C653106A0ADfb03Ca2490BBDD86269E"
  // );
  // console.log("ICO address: ", ico.address);
  // Config.setConfig(network + ".ico", ico.address);

  await Config.updateConfig();
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
