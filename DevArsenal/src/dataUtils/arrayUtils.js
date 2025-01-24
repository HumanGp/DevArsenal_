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


 //----------------------------remove duplicates----------//
/**
 * removes duplicates from an array and  returns  an array of unique "chars"
 * @param {Array} array - The array to remove duplicates
 * @returns {Array} - A new array only with unique "chars"
*/
  const removeDuplicates = (array) => {
  const seen = {};  // Object to store unique values
  const uniqueArray = [];  // Array to store the final result

  for (const item of array) {
    if (!seen[item]) {
      seen[item] = true;
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
};

export {chunkArray,removeDuplicates}
