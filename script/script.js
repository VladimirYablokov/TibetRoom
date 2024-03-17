function titleCase(title, minorWords = '') {
    let result = '';
    let lowerWordsArr = title.toLowerCase().split(' ');
    let lowerMinorWordsArr = minorWords.toLowerCase().split(' ');

    for (let i = 0; i < lowerWordsArr.length; i++) {
        if (lowerWordsArr[i] !== '') {
            if (i === 0 || !lowerMinorWordsArr.includes(lowerWordsArr[i])) {
                result += lowerWordsArr[i][0].toUpperCase() + lowerWordsArr[i].slice(1) + ' ';
            } else {
                result += lowerWordsArr[i] + ' ';
            }
        }
    }
    return result.trim();
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));
console.log(titleCase(''));

// 'A Clash of Kings'

// 'The Wind in the Willows')

// 'The Quick Brown Fox')