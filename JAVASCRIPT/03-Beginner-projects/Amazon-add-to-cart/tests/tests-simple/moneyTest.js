// testing code -> automated test
import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency') //group of tests named formatCurrency

// basic test case
console.log('Converts cents into dollars')

if (formatCurrency(2095) === '20.95') {
    console.log('passed')
} else {
    console.log('failed')
}

//edge case 1
console.log(`works with '0'`)
if(formatCurrency(0) === '0.00') {
    console.log('passed')
} else {
    console.log('failed')
}

//edge case 1 -> if the code rounds up
console.log('rounds up to the nearest cent')
formatCurrency(2000.5) === '20.01' ? console.log('passed') : console.log('failed') 

//edge case 2 -> if the code rounds down
console.log('rounds up to the nearest cent')
formatCurrency(2000.4) === '20.00' ? console.log('passed') : console.log('failed') 