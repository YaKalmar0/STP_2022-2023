import { getHashZeroPadding } from "./utils";
import { Block } from "./block";


export class Blockchain {
  private chain: Block[] = [];

  genesisBlock() {
    const zeroHash = getHashZeroPadding("");
    const block0 = new Block(0, zeroHash).mine().info();

    this.chain.push(block0);
    return this;
  }

  addBlock() {
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = new Block(lastBlock.height + 1, lastBlock.blockHeader.blockHash).mine().info();
    
    this.chain.push(newBlock);
    return this;
  }
}

new Blockchain().genesisBlock().addBlock().addBlock();
