const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  storageChain: [],
  newStorage: [],
  getLength() {
    return this.storageChain.length;
  },
  addLink(value) {
    this.storageChain.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (this.storageChain[position - 1] === undefined) {
      this.storageChain.splice(0, this.storageChain.length);
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.storageChain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.storageChain.reverse();
    return this;
  },
  finishChain() {
    this.newStorage = this.storageChain.slice();
    let chainStr = this.newStorage.join('');
    this.storageChain.splice(0, this.storageChain.length);
    return chainStr.slice(0, chainStr.length - 2);
  },
};


//console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())
//def 3 8 obj
module.exports = {
  chainMaker
};
