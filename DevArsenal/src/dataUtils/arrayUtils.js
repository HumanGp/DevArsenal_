'use strict';
 import Joi from "joi";
 
// -------------------------------chunkArray------------------------- //
/**
 * Splits an array into smaller chunks of a given size.
 * @param {Array} array - The array to chunk.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - A new array with the chunked arrays.
 */
function chunkArray(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('The first argument must be an array.');
  }
  if (typeof size !== 'number' || size <= 0) {
    throw new TypeError('The second argument must be a positive number.');
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}



// -------------------------------removeDuplicates------------------- //
/**
 * Removes duplicates from an array (including nested arrays) and returns a new array of unique values.
 * Ensures no value repeats in either the parent array or nested arrays.
 * 
 * @param {Array} array - The array to process and remove duplicates from.
 * @returns {Array} - A new array containing only unique values.
 */
const removeDuplicates = (array) => {
  const seen = new Set(); // Set to track all unique values across the array

  const processArray = (arr) => {
    const uniqueArray = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        // Recursively process nested arrays
        const nestedUnique = processArray(item);
        if (nestedUnique.length > 0) {
          uniqueArray.push(nestedUnique);
        }
      } else if (!seen.has(item)) {
        // Add unique primitive values to the set and result array
        seen.add(item);
        uniqueArray.push(item);
      }
    }
    return uniqueArray;
  };

  return processArray(array);
};



// -------------------------------flattenArray----------------------- //
/**
 * Flattens a nested array into a single-dimensional array.
 * 
 * @param {Array} arr - The input array which may contain nested arrays or non-array elements.
 * @throws {TypeError} - If the input is not an array.
 * @returns {Array} - A new array that contains all the elements of the input array, flattened to a single level.
 */
function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('The argument must be an array.');
  }

  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      // Recursively flatten nested arrays
      result = result.concat(flattenArray(item));
    } else {
      // Add non-array elements to the result
      result.push(item);
    }
  });

  return result;
}



// -------------------------------intersect-------------------------- //
/**
 * Finds the intersection of two arrays using a Set for improved performance.
 * 
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - A new array containing the elements that are present in both input arrays.
 */
function intersect(arr1, arr2) {
  const set2 = new Set(arr2); // Create a Set from the second array for fast lookups
  return arr1.filter((item) => set2.has(item)); // Filter arr1 based on presence in set2
}


//----------------------------------array difference----//
/**
 * Computes the difference between two arrays, returning elements from the first array
 * that are not present in the second array.
 * 
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare against.
 * @returns {Array} An array containing elements from `arr1` that are not in `arr2`.
 */
function arrayDifference(arr1,arr2) {
  let unique= new Set(arr2)
  let result=[]

  arr1.forEach(element=>{
    if(!unique.has(element)){
   result.push(element)
    }
  })
  return result
  
}



//-------------------sort by key-------//
/**
 * Sorts an array of objects by a specified key.
 * 
 * @param {Object[]} arrayOfObj - The array of objects to be sorted.
 * @param {string} key - The key in each object to sort by. it should be a string
 * @returns {Object[]} A new array of objects sorted by the specified key.
 */
function sortByKey(arrayOfObj, key) {
  return arrayOfObj.sort((a,b) => {
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      return a[key] - b[key];
    } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      return a[key].localeCompare(b[key]);
    }
    return 0; // Fallback for non-comparable types
  });
}



//------------ Sort by Multiple Keys -------------------------------//
// Sort an array by multiple keys.

/**
 * Sorts an array of objects by multiple keys.
 * 
 * @param {Object[]} arrayOfObj - The array of objects to be sorted.
 * @param {string[]} keys - The keys to sort by, in order of priority.
 * @returns {Object[]} A new array of objects sorted by the specified keys.
 */
function sortByMultipleKeys(arrayOfObj, keys) {
  return arrayOfObj.slice().sort((a, b) => {
    for (let key of keys) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
    }
    return 0;
  });
}



//------------------ Group By Key----------------//
/**
 * Groups an array of objects by a specified key.
 * 
 * @param {*} arrayObj - The array of objects to be grouped.
 * @param {*} key - The key in each object to group by.
 * @returns {Object} - Returns a grouped object where the objects with the same value under the specified key are grouped together.
 */
function groupByKey(arrayObj, key) {
  return arrayObj.reduce((result, obj) => {
    const keyValue = obj[key]; // Get the value of the specified key
    if (!result[keyValue]) {
      result[keyValue] = []; // Initialize an array for the key if it doesn't exist
    }
    result[keyValue].push(obj); // Add the object to the corresponding group
    return result;
  }, {});
}



//--------------------Partition Array---------------//
/**
 * Partitions an array into two arrays based on a condition.
 * 
 * @param {*} array - The array to be partitioned.
 * @param {*} condition - A function that returns true or false for each element.
 * @returns {Array[]} - Returns an array with two sub-arrays: one with elements that satisfy the condition and one with elements that do not.
 */
function partitionArray(array, condition) {
  return array.reduce(
    ([pass, fail], element) => {
      if (condition(element)) {
        pass.push(element); // If condition is true, add to 'pass'
      } else {
        fail.push(element); // Otherwise, add to 'fail'
      }
      return [pass, fail];
    },
    [[], []] // Initialize with two empty arrays: [pass, fail]
  );
}



//------------------------ Zip Arrays------------//
/**
 * Combines multiple arrays into a single array of arrays, where each inner array contains elements from each input array at the same index.
 * 
 * @param  {...any} arrays - Multiple arrays to be zipped.
 * @returns {Array[]} - Returns a new array with zipped elements.
 */
function zipArrays(...arrays) {
  const minLength = Math.min(...arrays.map(arr => arr.length)); // Find the length of the shortest array
  const result = [];
  for (let i = 0; i < minLength; i++) {
    result.push(arrays.map(arr => arr[i])); // Create a new array by combining corresponding elements from each array
  }
  return result;
}



//-----------------------shuffle array----------//
/**
 * Randomly shuffles the elements of an array.
 * 
 * @param {*} array - The array to be shuffled.
 * @returns {Array} - Returns the shuffled array.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Swap elements at i and randomIndex
  }
  return array;
}



//----------------cartesian product-------------//
/**
 * Computes the cartesian product of multiple arrays.
 * 
 * @param  {...any} arrays - Multiple arrays to compute the cartesian product.
 * @returns {Array[]} - Returns an array of arrays, where each inner array is a combination of elements from the input arrays.
 */
function cartesianProduct(...arrays) {
  let result = [[]]; // Start with a single element: an array with an empty array
  arrays.forEach((array) => {
    result = result.flatMap(res => array.map(element => [...res, element])); // Map each combination in result with each element in the current array
  });
  return result;
}


//---------- arrray to object --------------------//
//--Array of key-value pairs into an object
/**
 * Converts an array of key-value pairs into an object.
 * 
 * @param {*} array - The array of key-value pairs.
 * @returns {Object} - Returns an object constructed from the key-value pairs.
 */
function convertPairsToObject(array) {
  const obj = Object.fromEntries(array);
  return obj;
}



//--Array of elements to object with index a keys
/**
 * Converts an array of elements into an object with indices as keys.
 * 
 * @param {*} array - The array of elements.
 * @returns {Object} - Returns an object where each key is an index and each value is the corresponding element from the array.
 */
function objectFromIndexedArray(array) {
  const obj = array.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
  }, {});
  return obj;
}



//--array of elements to object with Custom Keys
/**
 * Converts an array of elements into an object with custom keys.
 * 
 * @param {Array} array - The array of elements.
 * @param {Array} customKeys - An array of custom keys.
 * @returns {Object} - Returns an object where each key is from customKeys and each value is from the array.
 */
function objectFromCustomKeys(array, customKeys) {
  const obj = {};
  // Ensure that the number of custom keys matches the number of elements in the array
  const length = Math.min(array.length, customKeys.length);
  for (let i = 0; i < length; i++) {
    obj[customKeys[i]] = array[i]; // Assign each element to the corresponding custom key
  }
  return obj;
}



//--convert an Array of Objects to a single Object
/**
 * Converts an array of objects into a single object by merging them.
 * 
 * @param {Array} array - The array of objects to be merged.
 * @returns {Object} - Returns a single object that combines all the properties of the objects in the array.
 */
function mergeArrayOfObjects(array) {
  // Use Object.assign to merge all objects in the array into a single object.
  // The spread operator (...) is used to pass each object in the array as an argument to Object.assign.
  const obj = Object.assign({}, ...array);
  
  // Return the merged object.
  return obj;
}



//------------ Sliding Window  -------------------------------//
/**
 * Applies a sliding window technique on an array and processes each window using a callback function.
 *
 * @param {Array} arr - The array to be processed.
 * @param {number} k - The size of the window.
 * @param {Function} callback - A function that processes each window. It receives an object with the window's start and end indices and the current result.
 * @returns {*} - Returns the final result as determined by the callback function.
 */
function slidingWindow(arr, k, callback) {
  let windowStart = 0; // Initialize the start of the window
  let result = null;   // Initialize the result that will be returned

  // Iterate over the array with the windowEnd pointer
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Perform custom logic using the callback function, passing the current window state
    result = callback({ windowStart, windowEnd, result });

    // Slide the window forward once it reaches the specified size k
    if (windowEnd >= k - 1) {
      windowStart++; // Move the start of the window forward
    }
  }

  return result; // Return the final result after processing all windows
}


//------------ Find Union -------------------------------//
// Return all unique elements from multiple arrays.
/**
 * Returns all unique elements from multiple arrays.
 *
 * @param  {...any} arrays - Multiple arrays to find the union of.
 * @returns {Array} - An array containing all unique elements from the input arrays.
 */
function findUnion(...arrays) {
  // Use the flat method to flatten the arrays into a single array
  // Then use a Set to filter out duplicate elements
  // Finally, spread the Set back into an array to return
  return [...new Set(arrays.flat())];
}



//------------ Rotate Array -------------------------------//
/**
 * Rotates an array by N positions.
 *
 * @param {Array} array - The array to rotate.
 * @param {number} n - The number of positions to rotate the array by.
 * @returns {Array} - The rotated array.
 */
function rotateArray(array, n) {
  const len = array.length;
  n = n % len; // Handle cases where n > array length

  // Concatenate two slices: from n to end, and from start to n
  return array.slice(n).concat(array.slice(0, n));
}



//------------ Array to CSV -------------------------------//
/**
 * Converts an array of objects into CSV format.
 *
 * @param {Array} array - The array of objects to be converted.
 * @param {string} [delimiter=','] - The delimiter to use for separating values (default is a comma).
 * @returns {string} - The CSV formatted string.
 * @throws {TypeError} - Throws an error if the input is not a non-empty array of objects.
 */
function arrayToCSV(array, delimiter = ',') {
 // Check if the input is a non-empty array
 if (!Array.isArray(array) || array.length === 0) {
  throw new TypeError('Input must be a non-empty array of objects.');
 }

 // Extract the headers from the first object in the array
 const headers = Object.keys(array[0]);

 // Map over each object in the array to create CSV rows
 const rows = array.map(obj =>
  headers.map(header => {
   const value = obj[header];

   // Convert non-string values to strings
   const stringValue = value === null || value === undefined ? '' : String(value);

   // Escape double quotes and wrap the value in quotes if necessary
   if (typeof stringValue === 'string' && (stringValue.includes(delimiter) || stringValue.includes('\n') || stringValue.includes('"'))) {
    return `"${stringValue.replace(/"/g, '""')}"`;
   }
   return stringValue;
  }).join(delimiter) // Join the values with the specified delimiter
 );

 // Escape headers and join them with the delimiter
 const escapedHeaders = headers.map(header => {
  if (header.includes(delimiter) || header.includes('\n') || header.includes('"')) {
   return `"${header.replace(/"/g, '""')}"`;
  }
  return header;
 }).join(delimiter);

 // Return the CSV string with headers followed by rows, each separated by a newline
 return [escapedHeaders, ...rows].join('\n');
}

// -------------------------------Exports--------------------------- //
export {
  // Array manipulation
  chunkArray,
  flattenArray,
  removeDuplicates,
  intersect,
  arrayDifference,
  findUnion,

  // Sorting and grouping
  sortByKey,
  groupByKey,
  partitionArray,
  sortByMultipleKeys, 

  // Combination and transformation
  zipArrays,
  shuffleArray,
  cartesianProduct,
  rotateArray,

  // Conversion utilities
  convertPairsToObject,
  objectFromIndexedArray,
  objectFromCustomKeys,
  mergeArrayOfObjects,
  slidingWindow,
  arrayToCSV,
};