"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const utils_1 = require("./utils");
const block_1 = require("./block");
class Blockchain {
    constructor() {
        this.chain = [];
    }
    genesisBlock() {
        const zeroHash = utils_1.getHashZeroPadding("");
        const block0 = new block_1.Block(0, zeroHash).mine().info();
        this.chain.push(block0);
        return this;
    }
    addBlock() {
        const lastBlock = this.chain[this.chain.length - 1];
        const newBlock = new block_1.Block(lastBlock.height + 1, lastBlock.blockHeader.blockHash).mine().info();
        this.chain.push(newBlock);
        return this;
    }
}
exports.Blockchain = Blockchain;
new Blockchain().genesisBlock().addBlock().addBlock();
//# sourceMappingURL=blockchain.js.map