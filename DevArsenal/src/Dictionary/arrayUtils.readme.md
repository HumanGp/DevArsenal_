### Array Utility Functions

This module contains a set of utility functions for common array operations in JavaScript.
These functions include chunking an array, removing duplicates, flattening nested arrays, finding the intersection of two arrays and more.

##### Usage

You can use the functions as follows:

```javascript
//importing the neccecary functions from the module
const {
  chunkArray,
  removeDuplicates,
  flattenArray,
  intersect,
} = require("devarsenal");
// Example usage of the utility functions
const array = [1, 2, 3, 4, 5];

// Chunking an array
const chunked = chunkArray(array, 2);
console.log(chunked); // Output: [[1, 2], [3, 4], [5]]

// Removing duplicates
const arrayWithDuplicates = [1, 2, 2, [3, 4], [3, 4]];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log(uniqueArray); // Output: [1, 2, [3, 4]]

// Flattening an array
const nestedArray = [1, [2, [3, 4]], 5];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// Finding intersection of two arrays
const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const intersection = intersect(array1, array2);
console.log(intersection); // Output: [2, 3]
```

##### Functions

`chunkArray(array, size)`
Splits an array into smaller chunks of a specified size.

Parameters:

`array` (Array): The array to chunk.
`size` (number): The size of each chunk.

Returns: A new array containing the chunked arrays.

Throws:

`TypeError` if the first argument is not an array.
`TypeError` if the second argument is not a positive number.

removeDuplicates(array)
Removes duplicates from an array (including nested arrays) and returns a new array of unique values.

Parameters:

`array` (Array): The array to process and remove duplicates from.

Returns: A new array containing only unique values.

`flattenArray(arr)`
Flattens a nested array into a single-dimensional array.

Parameters:

`arr` (\*): The input array which may contain nested arrays or non-array elements.

Returns: A new array that contains all the elements of the input array, flattened to a single level.

Throws:

`TypeError` if the input is not an array.

`intersect(arr1, arr2)`
Finds the intersection of two arrays using a Set for improved performance.

Parameters:

`arr1` (Array): The first array.
`arr2` (Array): The second array.

Returns: A new array containing the elements that are present in both input arrays. If there are no common elements, returns an empty array.

Example:

```javascript
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const result = intersect(array1, array2);
console.log(result); // Output: []
```
