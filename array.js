let numbers = [1,2,3,4];
let number = 5;
const addElement = (...args)=>{
    let result = [];
    for (const iterator of args) {
        result.push(iterator);
    }
    return result;
}
console.log(addElement(...numbers,number));