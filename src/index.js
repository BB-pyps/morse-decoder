const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let crystalArr = [];
    let i = 0;
    while(i < expr.length){
        let newArr = expr.split('').slice(i, i+10);
        let j = 0;
            while(newArr[j] == 0){
                newArr.shift();
            }
        let veryNewArr = [];
            for (let x=0; x < newArr.length; x+=2){
                let littleArr = newArr.slice(x, x+2).join('');
                if(littleArr == 10){
                    littleArr = '.';
                } else if(littleArr == 11){
                    littleArr = '-';
                } else {
                    littleArr = ' ';
                }
                veryNewArr.push(littleArr);
            }
        crystalArr.push(veryNewArr.join(''));
        i+= 10;
    }
    for(let i=0; i < crystalArr.length; i++){
        if(MORSE_TABLE.hasOwnProperty(crystalArr[i])){
            crystalArr[i] = MORSE_TABLE[crystalArr[i]];
        }
    }
    return crystalArr.join('').replace(/ +/g, ' ').trim();
}

module.exports = {
    decode
}