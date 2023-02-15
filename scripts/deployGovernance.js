const hre = require("hardhat");

async function main(){

    const tokenAddress = 0x3d3dfC61BB4cfbb4a3B09209c4929EC094CeeC62;
    const timelockAddress = 0x8DDd26dbfD8Eb91BC3335b0d9b4B5Eb657BECe52;
    
    const SnowGovernor = await hre.ethers.getContractFactory("SnowGovernor");
    const snowgovernor = await SnowGovernor.deploy(tokenAddress, timelockAddress);
    await snowgovernor.deployed();
   
    console.log(`SnowGovernor contract deployed at address: ${snowgovernor.address}`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})