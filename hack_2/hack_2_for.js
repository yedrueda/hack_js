/**
 * mediante el loop for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */

const importMock = require('../mocks/mock_2');
 
let result = [];

for (const i of importMock) {
    result.push(i);
    
}

//export result
module.exports = result;