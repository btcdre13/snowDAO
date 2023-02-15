const hre = require("hardhat");

async function main() {
  // Token deployment 
  
 const SnowToken = await hre.ethers.getContractFactory("SnowToken");
 const snowtoken = await SnowToken.deploy();
 await snowtoken.deployed();
 
 console.log(`SnowToken deployed at address: ${snowtoken.address}`);

 // Timelock deployment

 const minDelay = 10;
 const TimeLock = await hre.ethers.getContractFactory("TimeLock");
 const timelock = await TimeLock.deploy(minDelay, ["proposers addresses"], ["executors addresses"], "admin address");
 await timelock.deployed();

 console.log(`TimeLock contract deployed at address: ${timelock.address}`);
 
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
