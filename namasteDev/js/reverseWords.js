function reverseWord(word) {
    return word.split('').reverse().join('')
  }
  
  function reverseWords(sentence) {
     return sentence.split(' ').map(reverseWord).join(' ')
}

const input = "Hello World"
console.log(reverseWords(input))