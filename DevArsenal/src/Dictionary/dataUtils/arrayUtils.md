## Array Utilities
This module, arrayUtils.js, provides a collection of utility functions for working with arrays in JavaScript. When using this module, all functions are accessed via the array object. This is because the module exports all functions collectively, which are then imported as a single object named array.

**Important Note**
This setup is intended for testing purposes only. We are in the process of developing an npm package for this tool, which will provide a more efficient and streamlined way to incorporate these utilities into your projects. The npm version will offer enhanced features and easier integration

### Getting Started
#### Installation
First, ensure that you have arrayUtils.js in your project directory. You can then import the module into your JavaScript file using the following syntax:

```javascript
import * as array from './arrayUtils.js';
```
#### Usage
After importing, you can use the functions by calling them with the array prefix, like so: array.functionName(). This pattern ensures that all utility functions are neatly encapsulated within the array object, preventing any potential naming conflicts.



### Chunk Array
 ```javascript
 /**
 * Splits an array into smaller chunks of a given size.
 * @param {Array} array - The array to chunk.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - A new array with the chunked arrays.
 */
```
  ##### example
  ```javascript
   let arr1=[1,2,3,4,5,6,7,8,9,0]
   console.log(array.chunkArray(arr1,2))
   //output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 0 ] ]
```

### remove Duplicates
```javascript
/**
 * Removes duplicates from an array (including nested arrays) and returns a new array of unique values.
 * Ensures no value repeats in either the parent array or nested arrays.
 * 
 * @param {Array} array - The array to process and remove duplicates from.
 * @returns {Array} - A new array containing only unique values.
 */
```
  ##### example
  ```javascript
  //----test with flat array
      let duplicates=[1,2,3,4,1,1,2,3,4]

      console.log(array.removeDuplicates(duplicates))
      //output:[ 1, 2, 3, 4 ]


//----test with nested array
      let nestedDuplicates=[1,1,2,[2,2,3,4],[4,3,2,67,8]]
      console.log(array.removeDuplicates(nestedDuplicates))
     //output: [ 1, 2, [ 3, 4 ], [ 67, 8 ] ]
```


### flatten Array
```javascript
/**
 * Flattens a nested array into a single-dimensional array.
 * 
 * @param {Array} arr - The input array which may contain nested arrays or non-array elements.
 * @throws {TypeError} - If the input is not an array.
 * @returns {Array} - A new array that contains all the elements of the input array, flattened to a single level.
 */
```
  ##### example
  ```javascript
//------2D array
     let twodimentionArray=[1,2,[2,3,4]]
    console.log(array.flattenArray(twodimentionArray))
    //output:[ 1, 2, 2, 3, 4 ]


//-----3D array
    let threedimentionArray=[1,4,[8,9,4],[7,8,1],9,0,3]
    console.log(array.flattenArray(threedimentionArray))
    //output:[ 1, 4, 8, 9, 4,  7, 8, 1, 9, 0, 3]
  ```

###  Array intersection
```javascript
/**
 * Finds the intersection of two arrays using a Set for improved performance.
 * 
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - A new array containing the elements that are present in both input arrays.
 */
```
  ##### example
  ```javascript
    let array1=[1,2,3,4]
    let array2=[3,4,5,6]
    console.log(array.intersect(array1,array2))
    //output: [ 3, 4 ]
  ```
 ### Array difference
 ```javascript
 /**
 * Computes the difference between two arrays, returning elements from the first array
 * that are not present in the second array.
 * 
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare against.
 * @returns {Array} An array containing elements from `arr1` that are not in `arr2`.
 */
```
   ##### example
   ```javascript
     let dif1=[1,2,3,4]
     let dif2=[1,5,6,7]
     console.log(array.arrayDifference(dif1,dif2))
     //output:[ 2, 3, 4 ]
     //it checks the elements in array one and not in array two
   ``` 
### Sort Array by Key
```javascript
/**
 * Sorts an array of objects by a specified key.
 * 
 * @param {Object[]} arrayOfObj - The array of objects to be sorted.
 * @param {string} key - The key in each object to sort by. it should be a string
 * @returns {Object[]} A new array of objects sorted by the specified key.
 */
```
  ##### example
  ```javascript
   let arrayObj=[
    {name:'James',age:7},
    {name:'John',age:14},
    {name:'Tovald',age:27}
                ]  
     console.log(array.sortByKey(arrayObj,'age'))
 /*output:
     [
      { name: 'James', age: 7 },
      { name: 'John', age: 14 },
      { name: 'Tovald', age: 27 }
     ]
    */
  ```
 

### Group By Key
```javascript
/**
 * Groups an array of objects by a specified key.
 * 
 * @param {Object[]} arrayObj - The array of objects to be grouped.
 * @param {string} key - The key in each object to group by.
 * @returns {Object} - A grouped object where the objects with the same value under the specified key are grouped together.
 */
```

##### Example
```javascript
let keyArray = [
  { id: 1, name: 'Alpha' },
  { id: 1, name: 'humanGpt' },
  { id: 2, name: 'rose' },
  { id: 3, name: 'musk' },
  { id: 1, name: 'mark' }
];
console.log(array.groupByKey(keyArray, 'id'));
/* Output:
{
  '1': [
    { id: 1, name: 'Alpha' },
    { id: 1, name: 'humanGpt' },
    { id: 1, name: 'mark' }
  ],
  '2': [ { id: 2, name: 'rose' } ],
  '3': [ { id: 3, name: 'musk' } ]
}
*/
```

### Sort by Multiple Keys
```javascript
/**
Sorts an array of objects by multiple keys.
@param {Object[]} arrayOfObj - The array of objects to be sorted.
@param {string[]} keys - The keys to sort by, in order of priority.
@returns {Object[]} A new array of objects sorted by the specified keys.
 */
```
#### Example
```javascript
const people = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Chicago' },
  { name: 'Charlie', age: 25, city: 'New York' },
  { name: 'David', age: 30, city: 'Chicago' },
];

const sortedPeople = array.sortByMultipleKeys(people, ['age', 'city']);
console.log(sortedPeople);
/* Output:
[
  { name: 'Bob', age: 25, city: 'Chicago' },
  { name: 'Charlie', age: 25, city: 'New York' },
  { name: 'David', age: 30, city: 'Chicago' },
  { name: 'Alice', age: 30, city: 'New York' }
]
*/
```

### Partition Array
```javascript
/**
 * Partitions an array into two arrays based on a condition.
 * 
 * @param {Array} array - The array to be partitioned.
 * @param {Function} condition - A function that returns true or false for each element.
 * @returns {Array[]} - An array with two sub-arrays: one with elements that satisfy the condition and one with elements that do not.
 */
```
##### Example
```javascript
//--test with even and odd
    let numbers =[1,2,3,4,5,6,7,8]

    const [even,odd] = array.partitionArray(numbers, x => x%2 === 0)
    //console.log(`even:${even}`)
    //console.log(`odd:${odd}`)
    /*output: even:2,4,6,8
              odd:1,3,5,7
    */

//--test with Objects
    const people=[
        {name:'Alice', age:30},
        {name:'Bob', age:16},
        {name:'Tom', age:26},
        {name:'Ann', age:19},
        {name:'Ruby', age:18},
        {name:'Andrew', age:10},
        {name:'Thomas', age:56},
    ]

    const [adults,minors] = array.partitionArray( people , person=> person.age >= 18 )
    //console.log(`adults :`,adults)
    //console.log(`minors :`,minors)

    /* output : 
        adults : [
           { name: 'Alice', age: 30 },
           { name: 'Tom', age: 26 },
           { name: 'Ann', age: 19 },
           { name: 'Ruby', age: 18 },
          { name: 'Thomas', age: 56 }
              ]

        minors : [ { name: 'Bob', age: 16 }, { name: 'Andrew', age: 10 } ]
    */

```


### Zip Arrays
```javascript
/**
 * Combines multiple arrays into a single array of arrays, where each inner array contains elements from each input array at the same index.
 * 
 * @param {...Array} arrays - Multiple arrays to be zipped.
 * @returns {Array[]} - A new array with zipped elements.
 */
```
##### Example
```javascript
const names = ['John', 'Mark', 'Mathew', 'Musk', 'Terry'];
const ages = [24, 23, 13, 10];
const cities = ['New York', 'Nairobi', 'Chicago'];
console.log(array.zipArrays(names, ages, cities));
/* Output:
[
  [ 'John', 24, 'New York' ],
  [ 'Mark', 23, 'Nairobi' ],
  [ 'Mathew', 13, 'Chicago' ]
]
*/
```


### Shuffle Array
```javascript
/**
 * Randomly shuffles the elements of an array.
 * 
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} - The shuffled array.
 */
```
##### Example
```javascript
const arrayToShuffle = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.shuffleArray(arrayToShuffle));
/* Output: A shuffled version of the input array, e.g., [5, 2, 3, 4, 7, 9, 1, 8, 6] */
```
### Cartesian Product
```javascript
/**
 * Computes the cartesian product of multiple arrays.
 * 
 * @param {...Array} arrays - Multiple arrays to compute the cartesian product.
 * @returns {Array[]} - An array of arrays, where each inner array is a combination of elements from the input arrays.
 */
```
##### Example
```javascript
const cart1 = ['a', 'b', 'c'];
const cart2 = [1, 2, 3];
console.log(array.cartesianProduct(cart1, cart2));
/* Output:
[
  [ 'a', 1 ], [ 'a', 2 ],
  [ 'a', 3 ], [ 'b', 1 ],
  [ 'b', 2 ], [ 'b', 3 ],
  [ 'c', 1 ], [ 'c', 2 ],
  [ 'c', 3 ]
]
*/
```
### Convert Pairs to Object
```javascript

/**
 * Converts an array of key-value pairs into an object.
 * 
 * @param {Array} array - The array of key-value pairs.
 * @returns {Object} - An object constructed from the key-value pairs.
 */
```
##### Example
```javascript

const arrayToObj1 = [['Adam', 'Eve'], ['apple', 'lemon'], ['javascript', 'react']];
console.log(array.convertPairsToObject(arrayToObj1));
// Output: { Adam: 'Eve', apple: 'lemon', javascript: 'react' }
```

### Object from Indexed Array
```javascript

/**
 * Converts an array of elements into an object with indices as keys.
 * 
 * @param {Array} array - The array of elements.
 * @returns {Object} - An object where each key is an index and each value is the corresponding element from the array.
 */
```
##### Example
```javascript

const arrayToObj_indexAsKeys = ['a', 'b', 'c', 'd'];
console.log(array.objectFromIndexedArray(arrayToObj_indexAsKeys));
// Output: { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
```


### Object from Custom Keys
```javascript

/**
 * Converts an array of elements into an object with custom keys.
 * 
 * @param {Array} array - The array of elements.
 * @param {Array} customKeys - An array of custom keys.
 * @returns {Object} - An object where each key is from customKeys and each value is from the array.
 */
```
##### Example
```javascript

const elements = ['apple', 'banana', 'cherry'];
const keys = ['first', 'second', 'third'];
const result = array.objectFromCustomKeys(elements, keys);
console.log(result);
// Output: { first: 'apple', second: 'banana', third: 'cherry' }
```
### Merge Array of Objects
```javascript

/**
 * Converts an array of objects into a single object by merging them.
 * 
 * @param {Array} array - The array of objects.
 * @returns {Object} - A single object that combines all the properties of the objects in the array.
 */
```
##### Example
```javascript
const objs_ToObj = [
  { name: 'Tom' },
  { age: 32 },
  { nationality: 'USA' }
];
console.log(array.mergeArrayOfObjects(objs_ToObj));
// Output: { name: 'Tom', age: 32, nationality: 'USA' }
```
### sliding window
```javascript
 /**
 * Applies a sliding window technique on an array and processes each window using a callback function.
 *
 * @param {Array} arr - The array to be processed.
 * @param {number} k - The size of the window.
 * @param {Function} callback - A function that processes each window. It receives an object with the window's start and end indices and the current result.
 * @returns {*} - Returns the final result as determined by the callback function.
 */
```
 ##### example
 ```javascript
   const maxSumSubarray = (arr, k) => {
    return array.slidingWindow(arr, k, ({ windowStart, windowEnd, result }) => {
      const windowSum = arr.slice(windowStart, windowEnd + 1).reduce((sum, num) => sum + num, 0);
      return Math.max(result || -Infinity, windowSum);
    });
    };
 ```


### find union
```javascript
/**
 * Returns all unique elements from multiple arrays.
 *
 * @param  {...any} arrays - Multiple arrays to find the union of.
 * @returns {Array} - An array containing all unique elements from the input arrays.
 */
```
  ##### example
 ```javascript
   const un1=[1,2,3,4]
    const un2=[1,2,9,8]

    //console.log(array.findUnion(un1,un2))
    // output : [ 1, 2, 3, 4, 9, 8 ]
 ```

### rotate array
```javascript
/**
 * Rotates an array by N positions.
 *
 * @param {Array} array - The array to rotate.
 * @param {number} n - The number of positions to rotate the array by.
 * @returns {Array} - The rotated array.
 */
```
  ##### example
 ```javascript
      const rotate=[1,2,3,4,5]

     //console.log(array.rotateArray(rotate,2))
     //outpu : [ 3, 4, 5, 1, 2 ]
 ```

### Array to CSV
```javascript
/**
 * Converts an array of objects into CSV format.
 *
 * @param {Array} array - The array of objects to be converted.
 * @param {string} [delimiter=','] - The delimiter to use for separating values (default is a comma).
 * @returns {string} - The CSV formatted string.
 * @throws {TypeError} - Throws an error if the input is not a non-empty array of objects.
 */
```
  ##### example
 ```javascript
     const data = [
       { name: 'Alice', age: 25, city: 'New York' },
       { name: 'Bob', age: 30, city: 'San Francisco, CA' },
       { name: 'Charlie', age: 35, city: 'Los Angeles\nCA' },
       { name: 'Dave', age: 40, city: 'Seattle, "WA"' },
  ];
  
  console.log(array.arrayToCSV(data));
  /*
   output :
   
    name,age,city
    Alice,25,New York
    Bob,30,"San Francisco, CA"
    Charlie,35,"Los Angeles
    CA"
    Dave,40,"Seattle, ""WA"""

  */

 ```

