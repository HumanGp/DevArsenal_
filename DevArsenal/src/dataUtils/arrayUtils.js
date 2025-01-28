'use strict';

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

// Group By Key
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

//Partition Array
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

// Zip Arrays
function zipArrays(...arrays) {
 // Find the length of the shortest array
 const minLength = Math.min(...arrays.map(arr => arr.length));

 // Create a new array by combining corresponding elements from each array
 const result = [];
 for (let i = 0; i < minLength; i++) {
  result.push(arrays.map(arr => arr[i]));
 }

 return result;
}





// -------------------------------Exports--------------------------- //
export {
  chunkArray,
  removeDuplicates,
  flattenArray,
  intersect,
   arrayDifference,
   sortByKey,
};
