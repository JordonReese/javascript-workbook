'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const vowels = ['a', 'e', 'i', 'o', 'u']
function pigLatin(word) {
  word = word.trim().toLowerCase().split('');
  for (let i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) !== -1 && word[i] === word[0]) {
      return word.join('') + 'yay';
    }else if (vowels.indexOf(word[i]) >= 0){
      const tempWord = word.slice(0,i);
      word = word.slice(i,word.length);
      return word.join('') + tempWord.join('') + 'ay';
    }
  }
}

// let tempWord = '';
// for (let i = 0; i < word.length; i++ ) {
//   const firstLetter = word.substr(i,1);
//   console.log(firstLetter !== 'a' , firstLetter !== 'e', firstLetter !== 'i', firstLetter !== 'o', firstLetter !== 'u', firstLetter !== 'y');
//   if (firstLetter !== 'a' && firstLetter !== 'e'&& firstLetter !== 'i'&& firstLetter !== 'o'&& firstLetter !== 'u'&& firstLetter !== 'y') {
//     tempWord += word.substr(i,1);
//     word = word.slice(i+1,word.length);
//     console.log(word[i], 'substr')
//  }else{
//    console.log(word, 'word else');
//    return word + tempWord + 'ay';


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
