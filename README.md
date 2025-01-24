# DevArsenal

**DevArsenal** is a powerful and modular JavaScript utility library designed to streamline development by providing a collection of reusable tools for various common programming tasks. From array manipulation to API handling, **DevArsenal** offers solutions that empower developers to tackle everyday challenges with ease and efficiency.

### Aim of DevArsenal
DevArsenal is like a Swiss Army knife for JavaScript developers. It provides tools that make your development process faster, cleaner, and more organized. The goal is to enable developers to focus on their core tasks, while DevArsenal takes care of the repetitive or complex operations.

### Features
- **Array Tools**: Functions like `chunk`, `flatten`, and `filterUnique` to make array manipulation a breeze.
- **Object Utilities**: Tools for deep cloning, merging objects, and property manipulation.
- **String Helpers**: Functions for common string manipulations like trimming, padding, and casing.
- **API Wrappers**: Simplify making HTTP requests and handling responses.
- **Async Tools**: Utilities like concurrency control and promise wrappers.
- **File System Tools**: Utility functions to work with the file system efficiently.
- **CLI Tools**: Command-line interface helpers to enhance terminal-based workflows.

### Getting Started
To use **DevArsenal**, simply include it in your project:

```bash
npm install devarsenal

Usage Example
Once installed, you can use DevArsenal in your project like this:
```

```javascript
const { chunkArray, mergeObjects } = require('devarsenal');

// Example usage of chunkArray
const arr = [1, 2, 3, 4, 5, 6];
const chunked = chunkArray(arr, 2);  // [[1, 2], [3, 4], [5, 6]]

// Example usage of mergeObjects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);  // { a: 1, b: 3, c: 4 }
```
Contributing
We welcome contributions! Feel free to fork the repo and submit pull requests. Please follow the standard JavaScript style guide and write clear commit messages.

