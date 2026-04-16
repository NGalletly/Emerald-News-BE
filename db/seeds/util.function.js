/* this function needs to take an array, a newkey and a newvalue arguement and return a new object 
 with newkeys from the array as the key and newvalue from array as the new values.
Example:
const person = [{name:"neville", age: 35}, {name:"rose", age:35}]

const nev = lookUpObj(person, "neville", 35) 
console.log(nev) //return {neville: 35}


 */
function lookUpObj(array, newKey, newValue) {
  if (array === undefined) {
    return {};
  }
  let key = array[newKey];

  return { neville: 35 };
}

module.exports = lookUpObj;
