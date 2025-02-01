# **DevArsenal** ⚡️

<!-- markdownlint-disable first-line-h1 -->
<!-- markdownlint-disable html -->
<!-- markdownlint-disable no-duplicate-header -->

<div align="center">
  <img src="logo.jpg" width="60%" alt="DevArsenal Logo" />
</div>

<hr>

<div align="center" style="line-height: 1;">
  <a href="https://your-homepage.com" target="_blank" style="margin: 2px;">
    <img alt="Homepage" src="https://img.shields.io/badge/Homepage-DevArsenal-blue?style=for-the-badge" style="display: inline-block; vertical-align: middle;"/>
  </a>
  <a href="https://npmjs.com/package/dev-arsenal" target="_blank" style="margin: 2px;">
    <img alt="npm Version" src="https://img.shields.io/npm/v/dev-arsenal?color=red&style=for-the-badge" style="display: inline-block; vertical-align: middle;"/>
  </a>
  <a href="https://github.com/yourusername/dev-arsenal" target="_blank" style="margin: 2px;">
    <img alt="GitHub Repo" src="https://img.shields.io/badge/GitHub-DevArsenal-black?logo=github&style=for-the-badge" style="display: inline-block; vertical-align: middle;"/>
  </a>
</div>

<div align="center" style="line-height: 1;">
  <a href="https://discord.gg/your-server" target="_blank" style="margin: 2px;">
    <img alt="Discord" src="https://img.shields.io/badge/Discord-DevArsenal-7289da?logo=discord&style=for-the-badge" style="display: inline-block; vertical-align: middle;"/>
  </a>
  <a href="https://twitter.com/your-twitter" target="_blank" style="margin: 2px;">
    <img alt="Twitter Follow" src="https://img.shields.io/badge/Twitter-DevArsenal-blue?logo=x&style=for-the-badge" style="display: inline-block; vertical-align: middle;"/>
  </a>
</div>

<div align="center" style="line-height: 1;">
  <a href="https://github.com/yourusername/dev-arsenal/blob/main/LICENSE" style="margin: 2px;">
    <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" style="display: inline-block; vertical-align: middle;"/>
  </a>
</div>

<p align="center">
  <a href="DevArsenal_Docs.pdf"><b>Documentation</b> 📖</a>
</p>



**DevArsenal** is the ultimate *toolkit* for JavaScript developers who want to level up their coding game. Packed with a suite of powerful, reusable utilities, **DevArsenal** cuts down the time you spend on repetitive tasks and supercharges your workflow. Whether you're wrangling arrays, manipulating objects, or handling APIs, DevArsenal has got your back!

### **Why DevArsenal?**
Think of **DevArsenal** as your trusty coding sidekick—the one that handles the grunt work so you can focus on what really matters. From simple array manipulations to complex object handling, this library has everything you need to become a development wizard. ✨

### **Features** 🌟
- **Array Sorcery**: Transform arrays effortlessly with functions like `chunk`, `flatten`, and `filterUnique`. Wave goodbye to the hassle of handling arrays manually!
- **Object Wizardry**: Master deep cloning, object merging, and property manipulation like a pro.
- **String Alchemy**: Breeze through string tasks with helpers for trimming, padding, casing, and more.
- **API Magic**: Simplify your API requests and responses with easy-to-use wrappers. API calls have never been this smooth!
- **Async Sorcery**: Conquer async tasks with concurrency control and promise helpers that make your asynchronous code a walk in the park.
- **File System Hacks**: Handle file system operations with ease—because your filesystem shouldn’t feel like a maze.
- **CLI Power-ups**: Boost your terminal game with handy CLI utilities that make your command-line life easier.

### **Getting Started: Let’s Do This!**
Ready to start working smarter? It’s simple—just install **DevArsenal** and you’re good to go (for now, at least 😉).

```bash
npm install devarsenal
```

### **Usage Example**
Here’s how you can unleash the power of **DevArsenal** in your project:

```javascript
const { chunkArray, mergeObjects } = require('devarsenal');

// Chunk array into smaller pieces
const arr = [1, 2, 3, 4, 5, 6];
const chunked = chunkArray(arr, 2);  // [[1, 2], [3, 4], [5, 6]]

// Merge two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);  // { a: 1, b: 3, c: 4 }
```

### **Coming Soon: The NPM Package** 🏎️💨
Hold on tight, because **DevArsenal** is about to hit NPM soon! That’s right—this toolkit will be available as an NPM package, so you can easily bring it into your projects with just a simple `npm install`. It’s going to make object and array manipulation *ridiculously* easy—and *way* more fun. Stay tuned! 🚀

### **Contributing: Be Part of the Fun!**
We love to see new contributors! Fork the repo, submit a pull request, and make sure to stick to the JavaScript style guide. Bonus points for clear and witty commit messages—because coding should be fun, right?

