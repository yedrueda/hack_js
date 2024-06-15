/**
 * mediante el loop for agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 * output => [5,4,3,2,1]
 */

const importMock = require('../mocks/mock_3');
 
let result = [];

for (const i of importMock) {
    result.push(i);
    
}

//export result
module.exports = result;