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

