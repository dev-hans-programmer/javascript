// Q1. Highlight all of the words over 8 characters long in the paragraph text(with red colorˀˀ)

const paras = document.querySelector('#independence');
// paras.innerHTML = paras.innerHTML
//    .split(' ')
//    .map((word) => {
//       return word.length > 8
//          ? `<span style="background-color:red">${word}</span>`
//          : word;
//    })
//    .join(' ');

// Q2. Add a link back to the source of the text after the paragraph tag.
const link = document.createElement('a');
link.href = 'https://forcemipsm.com/';
link.target = '_blank';
link.innerText = 'Text generated from lorem ipsim';

document.body.appendChild(link);

// Q3. Split each new sentence to a separate line in the paragraph text. A sentence can be assumed to be a string of a text generated with a period(.).
const sentenceParts = paras.innerHTML.split(/\.[^.|<]/);
const newParagraphs = sentenceParts.join('.</p><p>');
const finalHTML = newParagraphs + '</p>';
paras.innerHTML = finalHTML;
