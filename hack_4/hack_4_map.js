/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
const importMock = require('../mocks/mock_4')

let result = [];

result = importMock.map(function(number) {
    return number;
})

//export result
module.exports = result;

console.log(result);