function countVowels(str = '') {
   const vowels = ['a', 'e', 'i', 'o', 'u'];

   return str.split('').filter((s) => vowels.includes(s.toLocaleLowerCase()))
      .length;
}

console.log(countVowels('fck'));
