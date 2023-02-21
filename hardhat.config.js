require("@nomicfoundation/hardhat-toolbox")
require("hardhat-deploy")
require("hardhat-deploy-ethers")
// require("./tasks/deploy") // Your deploy task.
require("./tasks/0_join-dao")
require("./tasks/1_create-deal")
require("./tasks/2_approve-deal")
require("./tasks/3_activate-deal")
require("./tasks/4_collect-reward")
require("dotenv").config()

// const PRIVATE_KEY = 'e60bce8e1aa12a4bccfcb6b69ddab05278c1321ab0d88bc9d41922cd208f8ea7'; // 合约构建私钥
const PRIVATE_KEY = '052d44046b7925b974c78ac8788686606a121d597336359699276d36575f8b29'; // Dao参与者私钥

// const PRIVATE_KEY = process.env.PRIVATE_KEY
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hyperspace",
    networks: {
        hyperspace: {
            chainId: 3141,
            // url: " https://wss.hyperspace.node.glif.io/apigw/lotus/rpc/v1",
            url: "https://api.hyperspace.node.glif.io/rpc/v1",
            accounts: [PRIVATE_KEY],
        },
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts",
    },
}