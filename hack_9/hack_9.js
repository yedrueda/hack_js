/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item[0] === 'b') {
        result++;
    }
    
}

console.log(result)


//export result
module.exports = result;