      //---------------------------------------------------------chunkArray
/**
 * Splits an array into smaller chunks of a given size.
 * @param {Array} array - The array to chunk.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - A new array with the chunked arrays.
 */
export function chunkArray(array, size) {
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
  