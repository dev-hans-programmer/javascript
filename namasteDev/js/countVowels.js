function countVowels(str = '') {
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    str.toLowerCase().split('').forEach(char => {
        if(vowels.includes(char)) count ++;
    })
    return count;
}
function countVowelsAdvanced(str = '') {
    const vowels = ['a','e','i','o','u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length
}
function countVowelsMoreAdvanced(str = '') {
    const vowels = new Set(['a','e','i','o','u'])
    return str.toLowerCase().split('').filter(char => vowels.has(char)).length
}
const input = "hello"
console.log(countVowelsMoreAdvanced(input))