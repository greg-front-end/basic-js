const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (String(value)) {
      this.chain.push(`( ${String(value)} )`)
      return this
    }
    this.chain.push(`( )`)
    return this
  },
  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || position > this.chain.length) {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    }
  
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let cloneChain = this.chain.slice()
    this.chain = []
    return cloneChain.join('~~')
  }
};

module.exports = {
  chainMaker
};
