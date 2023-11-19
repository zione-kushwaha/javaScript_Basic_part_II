// in javascript the array is non primitive type
// javascript arrays are resixable and can contain a mix different data types 
//javascript arrays are not associative array 
// associative array meaning that string based indexing 
// javascript have zero based indexing
/*
javascript array copy operation is shallow copies 

shallow copies of an object is a copy of an object whose properties shares the same refrences
as those of the source object from which the copy was made

another concept of the deep copy
     deep copy of an object is a copy whose properties don't share the same refrences
*/

const myArray=[0,1,2,3,4]
const myHeros=['saktiman','ryukendo','power_rangers','naag_raaj']
console.log(typeof myArray)  // its type is object
console.log(myHeros)//['saktiman','ryukendo','power_rangers','naag_raaj']

// another way to make the array
const myarray2=new Array(['1','2'])
console.log(myarray2)
myarray2.push(2)
console.log(myarray2)
myArray.push(5)// working fine
console.log(myArray)

// let's try the pop operation 
console.log(myArray.pop()) // 5 --> meaning that returns the pop element

// unshift/unshift operation in javascript

myArray.shift()
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.shift()
console.log(myArray)
myArray.shift()
console.log(myArray)
/*// output result
[ 1, 2, 3, 4 ]
[ 2, 3, 4 ]
[ 3, 4 ]
[ 4 ]
 */
myArray.unshift(3)
console.log(myArray)
myArray.unshift(1)
console.log(myArray)
myArray.unshift(2)
console.log(myArray)
myArray.unshift()
console.log(myArray)
/* 
 meaning that we can convert we can use shift and unshift to shift but in the case of
 unshift we should pass the parameter which element to be unshift
*/

//to check wheather the array contains the particular element or not
console.log(myArray.slice(1,2))
console.log(myArray.splice(0,3))

/* 
this shows slice not manipulate the original array 
but the splice manipute the original array
*/