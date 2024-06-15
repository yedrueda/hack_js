/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let importMock = require('../mocks/mock_5')
let result = [];

result = importMock.map(function(number) {
    return number;
});


//export result
module.exports = result;