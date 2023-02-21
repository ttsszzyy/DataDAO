require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]

    //deploy MembershipNFT
    const MembershipNFT = await ethers.getContractFactory('MembershipNFT', wallet);
    console.log('Deploying MembershipNFT...');
    const membershipNFT = await MembershipNFT.deploy();
    await membershipNFT.deployed()
    console.log('MembershipNFT deployed to:', membershipNFT.address);

    //deploy DataDaoExample
    const DataDaoExample = await ethers.getContractFactory('DataDAOExample', wallet);
    console.log('Deploying DataDaoExample...');
    const dataDaoExample = await DataDaoExample.deploy(['0x91a951f6c27813B7aFab1748E3C98568730f6f17'],membershipNFT.address);
    await dataDaoExample.deployed()
    console.log('DataDaoExample deployed to:', dataDaoExample.address);

    //deploy DealRewarder
    // const DealRewarder = await ethers.getContractFactory('DealRewarder', wallet);
    // console.log('Deploying DealRewarder...');
    // const dealRewarder = await DealRewarder.deploy();
    // await dealRewarder.deployed()
    // console.log('DealRewarder deployed to:', dealRewarder.address);
}