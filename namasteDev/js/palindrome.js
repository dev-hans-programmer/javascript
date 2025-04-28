function cleanOrReverse(str, reverse = false) {
    const cleanedInput = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    return reverse ?  cleanedInput.split('').reverse().join('') : cleanedInput
}

function validPalindrome(str) {
    const original = cleanOrReverse(str);
    const reversed = cleanOrReverse(str, true);
    console.log({
        original, reversed
    })
    return Object.is(original, reversed)

}

// const input = 'A man, a plan, a canal: Panama'
const input = "1234"
console.log(validPalindrome(input))