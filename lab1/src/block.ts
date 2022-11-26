import { SHA256 } from "crypto-js";
import { extractFirstZeros } from "./utils";

export class Block {
  private blockSize = 1;
  blockHeader: BlockHeader;
  private txCount = 0;
  private txs: string;

  constructor(public height: number, prevBlockHash: string) {
    this.blockHeader = new BlockHeader(prevBlockHash);
  }

  mine() {
    this.blockHeader.mine();

    this.txs = `Andrii sent ${this.height} coins to Alice`;
    this.txCount += 1;
    this.blockHeader.merkleRoot = SHA256(this.txs).toString();
    return this;
  }

  info() {
    console.log(JSON.stringify(this, null, 2));
    return this;
  }
}

class BlockHeader {
  private version = 1;
  merkleRoot: string;
  private readonly timestamp: number;
  private readonly bits = "ffff001f";
  private nonce = 0;
  blockHash: string;

  constructor(private prevBlockHash: string) {
    const unixTime = Date.now() / 1000;
    this.timestamp = unixTime;
    this.blockHash = this.createBlockHash();
  }

  mine() {
    const difficulty = 4;
    while(extractFirstZeros(this.blockHash).length != difficulty) {
      this.nonce += 1;
      this.blockHash = this.createBlockHash();
    }
  }

  private createBlockHash() {
    const concat = `${this.version}${this.prevBlockHash}${this.merkleRoot}${this.timestamp}${this.nonce}`;
    return String(SHA256(SHA256(concat)));
  }

}