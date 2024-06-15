/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let importMock = require('../mocks/mock_5')
let result = [];
let i = 0;

while (i < importMock.length) {
    result.push(importMock[i]);
    i++;
}


//export result
module.exports = result;