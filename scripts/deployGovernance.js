const hre = require("hardhat");

async function main(){

    const tokenAddress = "insert deployment address of tokencontract";
    const timelockAddress = "insert deployment address of timelockcontract";
    
    const SnowGovernor = await hre.ethers.getContractFactory("SnowGovernor");
    const snowgovernor = await SnowGovernor.deploy(tokenAddress, timelockAddress);
    await snowgovernor.deployed();
   
    console.log(`SnowGovernor contract deployed at address: ${snowgovernor.address}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})