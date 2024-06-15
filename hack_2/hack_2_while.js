/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */

const importMock =require('../mocks/mock_2')

let result = [];
let i= 0;

while (i < importMock.length) {
    
    result.push(importMock[i]);
    i++;
}

//export result
module.exports = result;