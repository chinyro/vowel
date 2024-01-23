let word = document.querySelector('#input-text');
let primaryButton = document.querySelector('#btn');
let result = document.querySelector('#result');

function countVowels() {
    let vowelCount = 0;
    let wordValue = word.value.toLowerCase();
    // alert(wordValue);

    for(let i = 0; i < wordValue.length; i++) {
        let letter = wordValue[i];
        if(letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
    result.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`;
}

primaryButton.addEventListener('click', countVowels);