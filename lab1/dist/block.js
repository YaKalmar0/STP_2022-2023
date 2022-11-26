"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const crypto_js_1 = require("crypto-js");
const utils_1 = require("./utils");
class Block {
    constructor(height, prevBlockHash) {
        this.height = height;
        this.blockSize = 1;
        this.txCount = 0;
        this.blockHeader = new BlockHeader(prevBlockHash);
    }
    mine() {
        this.blockHeader.mine();
        this.txs = `Andrii sent ${this.height} coins to Alice`;
        this.txCount += 1;
        this.blockHeader.merkleRoot = crypto_js_1.SHA256(this.txs).toString();
        return this;
    }
    info() {
        console.log(JSON.stringify(this, null, 2));
        return this;
    }
}
exports.Block = Block;
class BlockHeader {
    constructor(prevBlockHash) {
        this.prevBlockHash = prevBlockHash;
        this.version = 1;
        this.bits = "ffff001f";
        this.nonce = 0;
        const unixTime = Date.now() / 1000;
        this.timestamp = unixTime;
        this.blockHash = this.createBlockHash();
    }
    mine() {
        const difficulty = 4;
        while (utils_1.extractFirstZeros(this.blockHash).length != difficulty) {
            this.nonce += 1;
            this.blockHash = this.createBlockHash();
        }
    }
    createBlockHash() {
        const concat = `${this.version}${this.prevBlockHash}${this.merkleRoot}${this.timestamp}${this.nonce}`;
        return String(crypto_js_1.SHA256(crypto_js_1.SHA256(concat)));
    }
}
//# sourceMappingURL=block.js.map