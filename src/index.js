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
    const chars = expr.match(/.{1,10}/g);
    let result = "";
    chars.forEach(element => {
        if (element === '**********') result += ' ';
        let units = element.match(/.{1,2}/g);
        let subResult = '';
        units.forEach(element2 => {
            if (element2 === '00') subResult += '';
            if (element2 === '10') subResult += '.';
            if (element2 === '11') subResult += '-';
        });
        for (const key in MORSE_TABLE) {
            if (key === subResult) result += MORSE_TABLE[key];
        }
    });
    return result;
}

module.exports = {
  decode
}