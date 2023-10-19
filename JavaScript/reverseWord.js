function reverseWords (sentence) {
    const words = sentence.split(' ');
    
    // Reverse each word
    const revWord = words.map(word => {
        const revChar = word.split('').reverse().join('');
        return revChar;
    })
    const revSen = revWord.join(' ');
    return revSen;
}


const inputSentence = 'This is a sunny day';
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);