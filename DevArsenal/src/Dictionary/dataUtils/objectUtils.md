# Object Utilities: Unlock the True Power of Objects

*(Note: This module is under constant refinement — we're building out an npm package for even more mind-blowing functionality. Keep your eyes peeled.)*

**Hey, you! Yes, you who’s struggling with messy, hard-to-manage, and chaotic objects in JavaScript.**  
Prepare yourself for a transformative journey into the world of seamless, tidy, and ultra-efficient object manipulation, thanks to **objectUtils.js** — the ultimate game-changer in the realm of JavaScript objects.

## What is This Sorcery?

objectUtils.js is your new best friend in the world of objects. With this library, you can dive deep into objects and emerge with solutions that are cleaner, faster, and just... smarter. We're talking about merging, deep-cloning, picking properties, and checking for nested values like a boss. Forget about repetitive code and frustration — objectUtils.js makes everything feel like a smooth breeze. It's the magical toolkit that'll make your JavaScript objects obey your every command (and maybe even earn you some street cred among your dev peers).

---

## Setup: Let’s Begin the Magic ✨

### Installation
First things first, make sure **objectUtils.js** is chilling in your project directory. We're keeping it low-key for now — no need to involve npm just yet (though, that's coming soon). Just import the powerhouse and you're ready to rock:

```javascript
import * as object from './objectUtils.js';
```

### Usage
Once you’ve got it imported, simply slap `object.` in front of the function name, and you’ll be breezing through your objects like a sorcerer with a wand. It’s elegant, clean, and—dare we say—unbeatable.

---

Ready to see what’s inside the magic box? Hold tight, because **objectUtils.js** is here to make your object game *insane*.



# Object Utilities: The Magic Wand for Your JavaScript Objects 🪄✨

**Welcome to the world of object manipulation like you’ve never seen before.** Say goodbye to boring, messy objects, and hello to powerful transformations that’ll make your code look like it came straight from the Wizarding World. With **objectUtils.js**, you can clone, merge, pick, and transform objects in ways that will make even your code editor clap in awe.

---

## What’s Inside This Spellbook? 📚

### `deepClone`: Clone It Like It’s Hot 🔥

Ever wished you could make an exact copy of an object without leaving any baggage behind? `deepClone` gives your objects a fresh start in life, without any unwanted ties. No more shallow copies. This clone is as deep as the abyss.

```javascript
const clone = object.deepClone(originalObj);
clone.address.city = 'Los Angeles';
console.log(originalObj.address.city);  // Output: 'New York'
```

- **Parameters:** 
  - `obj`: The object you want to clone.
- **Returns:** A deep copy of the object, untouched by the original.

---

### `mergeObjects`: Merge Like a Superhero Team-Up 💥

What happens when multiple objects come together to form a mega-object? You get `mergeObjects`! This function combines all properties from multiple objects into one, with deep merging for nested objects. Avengers, assemble!

```javascript
const merged = object.mergeObjects(obj1, obj2);
console.log(merged);  // Output: { name: 'Bob', age: 25, gender: 'Male', occupation: 'Engineer' }
```

- **Parameters:** 
  - `...objs`: Multiple objects to merge.
- **Returns:** A single object that’s the result of all mergers.

---

### `pick`: Choose Only the Best Parts 🍒

Just like picking the best cherries from a tree, `pick` lets you select only the properties you want. No more sifting through unnecessary fields—just grab what you need.

```javascript
const picked = object.pick(user, ['name', 'city']);
console.log(picked);  // Output: { name: 'David', city: 'Chicago' }
```

- **Parameters:** 
  - `obj`: The object to pick properties from.
  - `keys`: An array of keys to pick.
- **Returns:** A new object with only the selected keys.

---

### `omit`: Make Properties Disappear 🧙‍♂️

Abracadabra! `omit` will make properties vanish without a trace. You’ve got an object and there’s something you just don’t need? Poof! Gone. Like a magic trick.

```javascript
const clean = object.omit(userDetails, ['age']);
console.log(clean);  // Output: { name: 'Eve', city: 'Austin' }
```

- **Parameters:** 
  - `obj`: The object you want to clean up.
  - `keys`: An array of keys to remove.
- **Returns:** A new object with the unwanted properties omitted.

---

### `flattenObject`: Squash It Like a Pancake 🥞

Transform a multi-layered object into a single flat surface. `flattenObject` will compress your nested objects into a tidy, single-level masterpiece. Squash the chaos into simplicity.

```javascript
const flat = object.flattenObject(nestedObj);
console.log(flat);  // Output: { 'user.profile.name': 'Frank', 'user.profile.age': 50, 'location.city': 'Seattle' }
```

- **Parameters:** 
  - `object`: The object to flatten.
  - `parentKey` (optional): Key prefix for nested objects.
- **Returns:** A flattened version of the object.

---

### `unflattenObject`: Reverse the Pancake 🥞🔄

Did you squish too much? Let’s restore that pancake back into its glorious multi-layered self! `unflattenObject` reverses the flattening process, creating a beautiful nested structure once more.

```javascript
const unflattened = object.unflattenObject(flatObj);
console.log(unflattened);  // Output: { person: { name: 'Grace', age: 35 }, address: { city: 'Boston' } }
```

- **Parameters:** 
  - `obj`: The flattened object to unflatten.
- **Returns:** A nested object restored from the flattened version.

---

### `mapKeys`: Transform Those Keys 🔑🔮

Want to give your object keys a makeover? `mapKeys` lets you change every key in your object using a transformation function. Time to turn those boring keys into something magical.

```javascript
const mappedKeys = object.mapKeys(data, key => key.toUpperCase());
console.log(mappedKeys);  // Output: { FIRSTNAME: 'Hannah', LASTNAME: 'Jackson' }
```

- **Parameters:** 
  - `obj`: The object whose keys need to be transformed.
  - `fn`: The transformation function.
- **Returns:** A new object with transformed keys.

---

### `mapValues`: Give Your Values a Glow-Up ✨

Just like `mapKeys` but for values! With `mapValues`, you can transform the values of an object however you want. Time to add some sparkle to your values.

```javascript
const mappedValues = object.mapValues(info, value => `${value}-info`);
console.log(mappedValues);  // Output: { name: 'Isaac-info', age: '55-info' }
```

- **Parameters:** 
  - `obj`: The object whose values need to be transformed.
  - `fn`: The transformation function.
- **Returns:** A new object with transformed values.

---

### `get`: Safely Fetch Deep Properties 🚀

Getting deep into your object? Use `get` to safely retrieve values from nested objects without fear of crashes or errors. If a key doesn’t exist, you get a fallback value. It’s like the safety net of object querying.

```javascript
const name = object.get(deepData, 'user.profile.name');
console.log(name);  // Output: 'Jack'
```

- **Parameters:** 
  - `obj`: The object to query.
  - `path`: The path to the property (can be nested).
  - `defaultValue` (optional): A fallback value if the path doesn’t exist.
- **Returns:** The value at the specified path, or the default value if not found.

---

### `has`: Check If a Property Exists 🔍

Want to know if an object contains a certain key (or even a deeply nested key)? `has` checks whether the object has that property. It’s like a detective for your objects.

```javascript
const exists = object.has(obj, 'a.b.c');
console.log(exists);  // Output: true
```

- **Parameters:** 
  - `obj`: The object to check.
  - `path`: The path to the property.
- **Returns:** `true` if the property exists, `false` otherwise.


---

## Object Comparison: The Battle of the Objects ⚔️

### `deepEqual`: The Ultimate Showdown 🤜🤛

When two objects face off, who wins? `deepEqual` compares two objects to see if they are an exact match. It checks both values and structure—no cheats allowed. It’s like comparing soulmates... but for objects.

```javascript
const areEqual = object.deepEqual(obj1, obj2);
console.log(areEqual);  // Output: true or false
```

- **Parameters:**
  - `obj1`: The first object.
  - `obj2`: The second object.
- **Returns:** `true` if the objects are deeply equal, `false` if they’re not.

---

### `diff`: Breakup Journal for Objects 💔

Ever wonder what changed in your object relationship? `diff` will tell you what properties were added or removed. Think of it like a breakup journal. You’ll see what’s new, and what’s gone.

```javascript
const differences = object.diff(oldObj, newObj);
console.log(differences);  // Output: { newKey: 'value' } or { removedKey: 'oldValue' }
```

- **Parameters:**
  - `obj1`: The first object (ex-partner).
  - `obj2`: The second object (new lover).
- **Returns:** A new object showing the differences between the two.

---

## Object Iteration: Adventure Awaits 🏴‍☠️

### `forEachObject`: A Treasure Hunt Through Your Object 💎

Want to inspect every treasure inside your object? `forEachObject` will let you explore the keys and values as if you were a pirate searching for hidden gems.

```javascript
object.forEachObject(user, (key, value) => {
  console.log(key, value);
});
```

- **Parameters:**
  - `obj`: The object you want to explore.
  - `callback`: A function that’s called for each key-value pair.
- **Returns:** `undefined` (side effect function).

---

### `filterObject`: VIP List for Your Keys 🕶️

Only the best make the list! `filterObject` helps you filter out the "uncool" keys and only keeps the VIPs based on your condition. Select your stars wisely!

```javascript
const filtered = object.filterObject(user, (key, value) => value !== 'nope');
console.log(filtered);  // Output: { key1: 'goodValue', key2: 'anotherGoodValue' }
```

- **Parameters:**
  - `obj`: The object to filter.
  - `condition`: A condition function to filter key-value pairs.
- **Returns:** A new object with only the key-value pairs that passed the condition.

---

## Object Creation: Let's Build Stuff 🛠️

### `fromPairs`: The Object Constructor 💡

Got an array of key-value pairs? `fromPairs` will turn it into an object, faster than you can say “transformation complete!”

```javascript
const obj = object.fromPairs([['name', 'Alice'], ['age', 25]]);
console.log(obj);  // Output: { name: 'Alice', age: 25 }
```

- **Parameters:**
  - `arr`: An array of key-value pairs.
- **Returns:** A new object created from the pairs.

---

### `toPairs`: Turn Your Object Into an Array 🔄

If you want to convert your object into a more portable format, `toPairs` will turn your object into an array of key-value pairs. It’s like converting your solid object into a flexible, list-like format.

```javascript
const pairs = object.toPairs({ name: 'Bob', age: 30 });
console.log(pairs);  // Output: [['name', 'Bob'], ['age', 30]]
```

- **Parameters:**
  - `obj`: The object to convert.
- **Returns:** An array of key-value pairs.

---

## Advanced Utilities: The Ultimate Power Moves ⚡

### `deepFreeze`: The Coldest Object ❄️

Want to lock down your object, making it completely immutable? `deepFreeze` will freeze both the object and its nested properties, making sure no one can mess with it—unless they have a superpower (or permission).

```javascript
const frozen = object.deepFreeze(user);
frozen.name = 'Charlie';  // TypeError: Cannot assign to read only property 'name'
```

- **Parameters:**
  - `obj`: The object to freeze.
- **Returns:** The deeply frozen object.

---

### `deepSeal`: Lock It Down 🔒

Want to prevent new properties from being added but still allow modifications to existing ones? `deepSeal` does just that—locking your object but leaving its contents still editable.

```javascript
const sealed = object.deepSeal(user);
sealed.name = 'Eve';  // Allowed
sealed.newProp = 'new';  // TypeError: Cannot add property newProp, object is sealed
```

- **Parameters:**
  - `obj`: The object to seal.
- **Returns:** The deeply sealed object.

---

### `deepMap`: Map Your Object to New Realms 🧠

Need to apply some transformation to every key-value pair in your object? `deepMap` does it recursively, going as deep as necessary. It’s like a mental exercise for your objects!

```javascript
const mapped = object.deepMap(user, (key, value) => key.toUpperCase() + ':' + value);
console.log(mapped);  // Output: { NAME: 'Alice', AGE: '25' }
```

- **Parameters:**
  - `obj`: The object to map.
  - `callback`: The function to apply to each key-value pair.
- **Returns:** A new object with transformed keys and values.

---

### `deepCloneWithCircularReferences`: Clone Without the Infinite Loop 🔄

When objects have circular references, things can get tricky. But fear not! `deepCloneWithCircularReferences` clones your object, handling circular references like a pro, and avoiding infinite loops.

```javascript
const circular = { a: 'foo' };
circular.b = circular; // Circular reference
const cloned = object.deepCloneWithCircularReferences(circular);
console.log(cloned);  // Output: { a: 'foo', b: [Circular] }
```

- **Parameters:**
  - `obj`: The object to clone.
  - `map` (optional): An internal map to track circular references (useful for advanced cloning).
- **Returns:** A deeply cloned object, with circular references handled properly.

---

## Custom Object Utilities: Mastering the Dark Arts 🖤

### `deepMergeCustomArrays`: Merge Objects, the Cool Way 🌀

When two objects collide, `deepMergeCustomArrays` merges them—but with a twist! If arrays are involved, it ensures only unique values are kept. Bye-bye duplicates! 👋

```javascript
const merged = object.deepMergeCustomArrays(target, source);
console.log(merged);  // Output: Merged object with unique values in arrays
```

- **Parameters:**
  - `target`: The object you're merging into.
  - `source`: The object you're merging from.
- **Returns:** The merged object with custom handling for arrays (no duplicates allowed!).

---

### `advancedDestructure`: No Surprises, Only Perfection 🎯

When you destructure an object, `advancedDestructure` ensures the required keys are present. If any are missing, it throws a fit—*or* rather, it throws an error. No surprises here!

```javascript
const user = object.advancedDestructure({ name: 'Alice', age: 30 }, ['name', 'age']);
console.log(user);  // Output: { name: 'Alice', age: 30 }
```

- **Parameters:**
  - `obj`: The object to destructure.
  - `requiredKeys`: An array of keys that must be present.
- **Returns:** A new object with the required keys.
- **Throws:** If any required key is missing, an error will be thrown.

---

### `setObjectValue`: Create Your Path to Glory 🌱

Want to set a value in a deeply nested object? `setObjectValue` allows you to do just that, effortlessly creating intermediate objects along the way. It’s like carving a path through the jungle of data!

```javascript
object.setObjectValue(user, 'address.city', 'New York');
console.log(user);  // Output: { address: { city: 'New York' } }
```

- **Parameters:**
  - `obj`: The object you want to modify.
  - `path`: The deep path (e.g., `'a.b.c'`) to set the value.
  - `value`: The value to set at the path.
- **Returns:** `undefined` (side effect function).

---

### `getObjectValue`: Seek the Hidden Treasures 🔎

Like an explorer, `getObjectValue` helps you retrieve a value from a deep key path. If any part of the path is missing, it simply returns `undefined`—no traps, no surprises!

```javascript
const city = object.getObjectValue(user, 'address.city');
console.log(city);  // Output: 'New York' or undefined if not found
```

- **Parameters:**
  - `obj`: The object to search in.
  - `path`: The deep path (e.g., `'a.b.c'`) to retrieve the value.
- **Returns:** The value at the specified path, or `undefined` if not found.

---

## Special Object Functions: Unleash the Power ⚡

### `deepEqualWithTolerance`: Compare with a Little Grace ⚖️

Do your objects contain numbers? `deepEqualWithTolerance` allows you to compare them with a tolerance level, so tiny differences (like floating-point errors) won’t tear apart the universe. It’s like comparing two galaxies, but with a bit of wiggle room.

```javascript
const isEqual = object.deepEqualWithTolerance(obj1, obj2, 0.1);
console.log(isEqual);  // Output: true or false depending on tolerance
```

- **Parameters:**
  - `obj1`: The first object.
  - `obj2`: The second object.
  - `tolerance` (optional): The acceptable numerical difference before declaring them unequal.
- **Returns:** `true` if the objects are equal within the specified tolerance, `false` if they are not.

---

### `createObjectWatcher`: Keep an Eye on Your Objects 👀

Ever wanted to know *exactly* when something changes inside an object? `createObjectWatcher` allows you to set up a proxy to watch your object for any modifications, and it calls a callback whenever a change occurs. Spooky, right?

```javascript
const watchedUser = object.createObjectWatcher(user, (key, value) => {
  console.log(`Changed ${key} to ${value}`);
});
watchedUser.name = 'Bob';  // Output: Changed name to Bob
```

- **Parameters:**
  - `obj`: The object to be watched.
  - `callback`: The function to run whenever a change happens.
- **Returns:** A proxy object that watches for changes.

---

### `flattenWithSeparator`: Flatten the Abyss 🌀

Deep, nested objects? No problem! `flattenWithSeparator` flattens them into a single-level structure, where each key is joined by a separator. Think of it as making sense of the chaos in one fell swoop.

```javascript
const flattened = object.flattenWithSeparator(user, '_');
console.log(flattened);  // Output: { 'address_city': 'New York' }
```

- **Parameters:**
  - `obj`: The object to flatten.
  - `separator` (optional): The separator between keys.
  - `parentKey` (optional): The prefix used for keys.
- **Returns:** A flattened object, with keys joined by the separator.

---

### `invertObject`: The Dark Mirror 🪞

Prepare yourself to look into the abyss—`invertObject` flips the keys and values of your object. But beware: if the values aren’t unique, the mirror might shatter, and chaos will reign.

```javascript
const inverted = object.invertObject({ name: 'Alice', age: 30 });
console.log(inverted);  // Output: { 'Alice': 'name', '30': 'age' }
```

- **Parameters:**
  - `obj`: The object to invert.
- **Returns:** A new object with keys and values swapped.
- **Throws:** An error if the values aren’t unique.

---

## More Dark Magic for Objects: Chaos and Transformation 🖤

### `flipObject`: Flip Everything, Even the Cosmos 🔄

Ever wanted to flip the world upside down? `flipObject` will recursively flip each level of an object, disturbing the natural order. Nothing will be as it once was.

```javascript
const flipped = object.flipObject({ a: { b: 'c' } });
console.log(flipped);  // Output: { a: { b: 'c' } }
```

- **Parameters:**
  - `obj`: The object to flip.
- **Returns:** The flipped object, forever changed.
- **Warning:** The universe may never be the same again.

---

### `deepSpread`: Spread Chaos, One Object at a Time 🌪️

`deepSpread` spreads multiple objects into one, recursively merging everything in its path. It’s like a dark force, combining all objects without mercy.

```javascript
const merged = object.deepSpread({ a: 1 }, { b: { c: 2 } });
console.log(merged);  // Output: { a: 1, b: { c: 2 } }
```

- **Parameters:**
  - `...objs`: Objects to spread and merge.
- **Returns:** One single object, forever fused in torment.

---

### `demonizeObject`: Infuse Your Object with Dark Powers 👹

Take your object and infuse it with dark forces! `demonizeObject` creates a proxy that transforms your object’s behavior. The dark side calls.

```javascript
const demonized = object.demonizeObject({ name: 'Alice' });
console.log(demonized.name);  // Output: Alice
console.log(demonized.hidden);  // Output: undefined (the hidden truth is lost)
```

- **Parameters:**
  - `obj`: The object to demonize.
- **Returns:** A proxy object possessed by dark forces.
- **Warning:** Avoid summoning the demon `demon`.

---

### `generateWrathObject`: Create an Object of Pure Chaos 🔥

Summon an object as unpredictable as the underworld itself. `generateWrathObject` creates deeply nested objects full of random keys and values. The deeper you go, the more chaotic it gets.

```javascript
const wrath = object.generateWrathObject();
console.log(wrath);  // Output: A deeply nested object with random keys and values
```

- **Parameters:**
  - `depth` (optional): The depth of the wrathful object.
  - `maxKeys` (optional): The maximum number of keys at each level.
- **Returns:** A random, deeply nested object filled with chaos.

---

### `reverseObject`: Reverse Everything and Embrace Chaos 🔁

When everything is upside down, reverse it again! `reverseObject` recursively reverses the keys and values of an object. The fabric of reality bends.

```javascript
const reversed = object.reverseObject({ a: 'b' });
console.log(reversed);  // Output: { b: 'a' }
```

- **Parameters:**
  - `obj`: The object to reverse.
- **Returns:** The reversed object, plunging into chaos.

---

### `reincarnateObject`: Transform Your Object into Something New 🔮

Just when you think your object is lost to time, reincarnate it with `reincarnateObject`. Apply a series of transformations and forge your object anew, like a phoenix from the ashes.

```javascript
const reincarnated = object.reincarnateObject({ name: 'Alice' }, [
  obj => { obj.name = 'Bob'; return obj; },
]);
console.log(reincarnated);  // Output: { name: 'Bob' }
```

- **Parameters:**
  - `obj`: The object to transform.
  - `transformations`: An array of transformation functions.
- **Returns:** The reincarnated object, reshaped by dark forces.

---

### `unholyMerge`: Merge Everything into One Horrifying Union 😈

Merging objects was never this intense! `unholyMerge` pulls together multiple objects into one, recursively merging everything. The objects scream in agony as they unite.

```javascript
const merged = object.unholyMerge({ a: 1 }, { b: { c: 2 } });
console.log(merged);  // Output: { a: 1, b: { c: 2 } }
```

- **Parameters:**
  - `...objects`: Objects to merge into one.
- **Returns:** The merged object, born of endless suffering.

---




## Conclusion: Unleash the Object Mayhem ⚡

Get ready to break all the rules of object manipulation! With these ridiculously powerful (and slightly insane) utilities, you can flip, merge, clone, and freeze objects like you're some kind of object sorcerer. Whether you're diving into the depths of nested chaos, spreading utter object madness, or just messing around with some truly wacky transformations, these tools are the wild ride you didn’t know you needed.

And the cherry on top? You won’t have to summon them manually for long. A *super cool* npm package is coming soon, making this whirlwind of object chaos easily available for your projects. The future of object manipulation is about to get way more fun—and a whole lot less predictable. Stay tuned, it’s going to be a blast!







