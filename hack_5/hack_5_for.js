/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let importMock = require('../mocks/mock_5')
let result = [];

for (let i of importMock) {
    result.push(i);
    
}

//export result
module.exports = result;