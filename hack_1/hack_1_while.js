/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
const importMock = require('../mocks/mock_1');

let result = [];

let i = 0;

while (i < importMock.length) {
    result.push(importMock[i]);
    i++;
}


//export result
module.exports = result;