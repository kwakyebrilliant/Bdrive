const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  let txHash, txReceipt;

  const Bdrive = await hre.ethers.getContractFactory("Bdrive");
  const bdrive = await Bdrive.deploy();
  await bdrive.deployed();

  txHash = bdrive.deployTransaction.hash;
  txReceipt = await ethers.provider.waitForTransaction(txHash);
  let bdriveAddress = txReceipt.contractAddress;

  console.log("Bdrive contract address", bdriveAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });