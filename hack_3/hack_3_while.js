/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
const importMock =require('../mocks/mock_3')

let result = [];
let i= 0;

while (i < importMock.length) {
    
    result.push(importMock[i]);
    i++;
}

//export result
module.exports = result;