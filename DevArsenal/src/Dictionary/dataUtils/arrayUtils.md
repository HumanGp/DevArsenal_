# Array Utilities: The Only Tool You’ll Ever Need (for Arrays... probably)

*(Note: this module is still a work-in-progress — we’re cooking up an npm package for even more awesomeness. Stay tuned.)*

**Hey, you! Yes, you who’s tired of dealing with messy, duplicate-filled, and unorganized arrays in JavaScript.**  
Get ready for a wild ride through the land of neat, efficient, and clean arrays, thanks to **arrayUtils.js** – your new best friend in the world of arrays.

## What is This Wizardry?

arrayUtils.js is a magical collection of utilities that will transform your array game from “meh” to “wow.” With these functions, you’ll slice, dice, shuffle, and even find union without breaking a sweat. It's like having a personal assistant for your arrays. No more worrying about duplicates, sorting, or flattening. You can now *arrange* and *organize* arrays like a pro (and maybe even impress your cat).

---

## Setup: Let's Get This Party Started 🎉

### Installation
First, make sure the **arrayUtils.js** is in your project directory. No need to go to any fancy npm package manager (yet, it's coming soon). Just import this bad boy and get started:

```javascript
import * as array from './arrayUtils.js';
```

### Usage
After the import, just prepend `array.` to the function name and voilà, you're good to go! It's simple, clean, and does not come with a side of chaos.

---

## Array Functions (Prepare to Be Amazed)

### 🍕 **Chunk Array**: Who doesn’t love slices? (Not pizza, arrays)

```javascript
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.chunkArray(arr1, 2));
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
```

Chunk up your array like a true array chef. Now you can serve those elements in bite-sized pieces. Perfect for your code buffet.

---

### 🧹 **Remove Duplicates**: Because We Don’t Need Repeats (except in your Netflix shows)

```javascript
let arr = [1, 2, 3, 4, 1, 2, 3];
console.log(array.removeDuplicates(arr));
// Output: [ 1, 2, 3, 4 ]
```

You know that one friend who always says the same thing over and over? Well, this function gets rid of them. Only unique elements allowed.

---

### 🌍 **Flatten Array**: Because Nested Arrays Are Like Russian Dolls – Cute, but Unnecessary

```javascript
let arr = [1, [2, [3, 4]]];
console.log(array.flattenArray(arr));
// Output: [ 1, 2, 3, 4 ]
```

Take your nested arrays and turn them into one big happy flat family. It’s like unfolding a map – no more confusion, just clarity.

---

### 🔀 **Array Intersection**: Finding Common Ground (Literally)

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
console.log(array.intersect(arr1, arr2));
// Output: [ 3, 4 ]
```

Want to find the elements two arrays agree on? This function gives you the common ground. *No more fighting over your favorite pizza topping, I promise.*

---

### 🔍 **Array Difference**: Let’s Find the Odd One Out

```javascript
let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3];
console.log(array.arrayDifference(arr1, arr2));
// Output: [ 1, 4 ]
```

Like breaking up with your ex, this function gives you the elements that are *still* with you. Say goodbye to unwanted items.

---

### 🔄 **Sort Array by Key**: For When Your Objects Need a Little Order

```javascript
let arrayOfObj = [{ name: 'James', age: 7 }, { name: 'John', age: 14 }];
console.log(array.sortByKey(arrayOfObj, 'age'));
// Output: [{ name: 'James', age: 7 }, { name: 'John', age: 14 }]
```

Objects too messy for your taste? Sort them like you sort your playlist: by age, name, or just about anything. 

---

### 🗂 **Group By Key**: Put Everything Into Neat Categories (Like Your Closet)

```javascript
let arr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
console.log(array.groupByKey(arr, 'id'));
// Output: { '1': [ { id: 1, name: 'Alice' } ], '2': [ { id: 2, name: 'Bob' } ] }
```

Ever wish you could organize everything into neat groups? Well, this function is like your digital assistant, categorizing your data with style.

---

### 🎲 **Shuffle Array**: Because Life's Better with a Little Chaos

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(array.shuffleArray(arr));
// Output: Randomly shuffled array [ 4, 2, 1, 5, 3 ]
```

Need to spice things up? Shuffle your array. Sometimes the world needs more chaos. We’re here for it.

---

### 🚀 **Cartesian Product**: Combos Like You've Never Seen Before

```javascript
let arr1 = ['a', 'b'];
let arr2 = [1, 2];
console.log(array.cartesianProduct(arr1, arr2));
// Output: [ [ 'a', 1 ], [ 'a', 2 ], [ 'b', 1 ], [ 'b', 2 ] ]
```

Combine your arrays into the perfect combo meals, one element at a time. It's like a buffet, but you get to pick all the items.

---

### 💡 **Array to CSV**: Because Data Needs to Be Presentable

```javascript
let data = [{ name: 'Alice', age: 25 }];
console.log(array.arrayToCSV(data));
// Output: name,age\nAlice,25
```

Impress your boss, your friends, or your grandma by turning your data into neat, tabular CSV format. Bonus: It makes you look *super professional*.


---

### 💥 **Partition Array**: Split Things Up, Like a Pro

```javascript
/**
 * Partitions an array into two arrays based on a condition.
 * 
 * @param {Array} array - The array to be partitioned.
 * @param {Function} condition - A function that returns true or false for each element.
 * @returns {Array[]} - An array with two sub-arrays: one with elements that satisfy the condition and one with elements that do not.
 */
```

#### Example
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [even, odd] = array.partitionArray(numbers, x => x % 2 === 0);
console.log(even); // Output: [ 2, 4, 6, 8 ]
console.log(odd);  // Output: [ 1, 3, 5, 7 ]
```

Let’s face it: Some things just don’t mix. This function splits your array into two categories, based on whatever condition you want. Think of it as an "introvert" and "extrovert" sorter.

---

### 🎁 **Zip Arrays**: Combine Multiple Arrays into One Big Present

```javascript
/**
 * Combines multiple arrays into a single array of arrays, where each inner array contains elements from each input array at the same index.
 * 
 * @param {...Array} arrays - Multiple arrays to be zipped.
 * @returns {Array[]} - A new array with zipped elements.
 */
```

#### Example
```javascript
const names = ['John', 'Mark', 'Mathew'];
const ages = [24, 23, 13];
const cities = ['New York', 'Nairobi', 'Chicago'];

console.log(array.zipArrays(names, ages, cities));
// Output: [ ['John', 24, 'New York'], ['Mark', 23, 'Nairobi'], ['Mathew', 13, 'Chicago'] ]
```

We’re zipping, we’re zapping, we’re bringing arrays together like that perfect trio: peanut butter, jelly, and bread.

---

### 🔄 **Rotate Array**: Shift It Like It’s Hot

```javascript
/**
 * Rotates an array by N positions.
 *
 * @param {Array} array - The array to rotate.
 * @param {number} n - The number of positions to rotate the array by.
 * @returns {Array} - The rotated array.
 */
```

#### Example
```javascript
const array = [1, 2, 3, 4, 5];
console.log(array.rotateArray(array, 2));
// Output: [ 3, 4, 5, 1, 2 ]
```

You ever feel like you need a fresh perspective on life? Rotate your arrays and see them from a new angle. *So refreshing.*

---

### 🛠 **Array to CSV**: Get Those Data Tables Organized

```javascript
/**
 * Converts an array of objects into CSV format.
 *
 * @param {Array} array - The array of objects to be converted.
 * @param {string} [delimiter=','] - The delimiter to use for separating values (default is a comma).
 * @returns {string} - The CSV formatted string.
 * @throws {TypeError} - Throws an error if the input is not an array of objects.
 */
```

#### Example
```javascript
const data = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco, CA' }
];

console.log(array.arrayToCSV(data));
// Output: 
// name,age,city
// Alice,25,New York
// Bob,30,"San Francisco, CA"
```

Need to turn your messy data into a neat, professional spreadsheet format? This function’s got your back. Your boss won’t know what hit them.

---

### 🎭 **Object from Indexed Array**: Index Your Stuff

```javascript
/**
 * Converts an array of elements into an object with indices as keys.
 *
 * @param {Array} array - The array of elements.
 * @returns {Object} - An object where each key is an index and each value is the corresponding element from the array.
 */
```

#### Example
```javascript
const array = ['a', 'b', 'c', 'd'];
console.log(array.objectFromIndexedArray(array));
// Output: { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }
```

Now your array elements have become dignified objects, each assigned its own index as a key. Finally, some organization that feels like home.

---

### 🔑 **Object from Custom Keys**: You Do You, But With Keys

```javascript
/**
 * Converts an array of elements into an object with custom keys.
 *
 * @param {Array} array - The array of elements.
 * @param {Array} customKeys - An array of custom keys.
 * @returns {Object} - An object where each key is from customKeys and each value is from the array.
 */
```

#### Example
```javascript
const elements = ['apple', 'banana', 'cherry'];
const keys = ['first', 'second', 'third'];
console.log(array.objectFromCustomKeys(elements, keys));
// Output: { first: 'apple', second: 'banana', third: 'cherry' }
```

This tool is for when you want your elements to be more fancy and organized. Like giving your socks custom labels for easy matching. 

---

### 🧩 **Merge Array of Objects**: All Your Objects Into One

```javascript
/**
 * Converts an array of objects into a single object by merging them.
 *
 * @param {Array} array - The array of objects.
 * @returns {Object} - A single object that combines all the properties of the objects in the array.
 */
```

#### Example
```javascript
const array = [{ name: 'Tom' }, { age: 32 }, { nationality: 'USA' }];
console.log(array.mergeArrayOfObjects(array));
// Output: { name: 'Tom', age: 32, nationality: 'USA' }
```

You’ve got a bunch of objects, but you want to consolidate them into one powerful mega-object. Done. Now you have everything in one place.

---

### 🚶 **Sliding Window**: Let’s Get Moving!

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

#### Example
```javascript
const maxSumSubarray = (arr, k) => {
  return array.slidingWindow(arr, k, ({ windowStart, windowEnd, result }) => {
    const windowSum = arr.slice(windowStart, windowEnd + 1).reduce((sum, num) => sum + num, 0);
    return Math.max(result || -Infinity, windowSum);
  });
};
console.log(maxSumSubarray([1, 2, 3, 4, 5, 6], 3));
// Output: 15 (because [4, 5, 6] is the subarray with the max sum)
```

Sliding windows help you break things down into chunks and apply functions on each. It’s like doing a bit of window shopping – but you’re always focused on the best deals.

---

### 🌐 **Find Union**: Bring It All Together

```javascript
/**
 * Returns all unique elements from multiple arrays.
 *
 * @param  {...any} arrays - Multiple arrays to find the union of.
 * @returns {Array} - An array containing all unique elements from the input arrays.
 */
```

#### Example
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 9, 8];
console.log(array.findUnion(arr1, arr2));
// Output: [ 1, 2, 3, 4, 9, 8 ]
```

Combine arrays without duplicates. It’s like a family reunion where everyone’s invited, but no one’s repeating themselves.

---

## There You Have It!

Congratulations, you’re now officially an array magician. Whether you're chunking, flattening, zipping, or even rotating your data, **arrayUtils.js** has got you covered.

Go forth and organize your arrays with style. You’ve earned it. 💪

## Conclusion: This ReadMe is Your New Best Friend

Don't let arrays get the best of you. With **arrayUtils.js**, you're armed with everything you need to conquer the world of data manipulation. If you’ve made it this far, congratulations! You now officially know how to make arrays behave like you want them to. 

Now, go forth and code with the power of arrays on your side. ✨🚀

