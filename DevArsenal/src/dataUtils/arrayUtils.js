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

// -------------------------------Exports--------------------------- //
export {
  chunkArray,
  removeDuplicates,
  flattenArray,
  intersect,
};
