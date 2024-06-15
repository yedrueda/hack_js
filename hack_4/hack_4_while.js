/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
const importMock = require('../mocks/mock_4')
let result = [];
let i = 0;

while (i < importMock.length) {

    result.push(importMock[i]);
    i++;
}


//export result
module.exports = result;