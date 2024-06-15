/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */

let importMock = require('../mocks/mock_7.js')
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

arr.map(item => {
    result.push(item.charAt(0).toUpperCase() + item.slice(1));
})



//export result
module.exports = result;

console.log(result);