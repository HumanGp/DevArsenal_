 //----------------------------------------chunkArray----------//
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

  //--------------------remove duplicates------------
 /**
 * Removes duplicates from an array (including nested arrays) and returns a new array of unique values.
 * Ensures no value repeats in either the parent array or nested arrays.

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

export {chunkArray,removeDuplicates}
