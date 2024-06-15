/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let importMock = require('../mocks/mock_4')

let result = [];

for (let i of importMock) {
    
    result.push(i);
    
}

//export result
module.exports = result;