const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.operators = {
      '+': (a = 0, b = 0) => a + b,
      '-': (a = 0, b = 0) => (a + this.alphabet.length) - b
    }
    this.direct = direct
  }
  mainCrypt(message, key, direct, operators) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let encrString = ''
    message = message.toUpperCase()
    key = key.toUpperCase()
    for (let i = 0, idx = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let messIdx = this.alphabet.indexOf(message[i])
        let keyIdx = this.alphabet.indexOf(key[idx % key.length])
        encrString +=
          this.alphabet[(operators(messIdx, keyIdx) % this.alphabet.length)]
        idx++
      }
      else {
        encrString += message[i]
      }
    }
    return this.direct ? encrString : encrString.split('').reverse().join('')
  }
  encrypt(message, key) {
    return this.mainCrypt(message, key, true, this.operators['+'])
  }
  decrypt(message, key) {
    return this.mainCrypt(message, key, false, this.operators['-'])
  }
}

module.exports = {
  VigenereCipheringMachine
};
