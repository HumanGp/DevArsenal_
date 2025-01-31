'use strict';
/**
 * Deep clone an object. It's like your object is getting a fresh new life, without the baggage.
 * @param {object} obj - The object you want to clone. Think of it as your precious clone.
 * @returns {object} - A fresh clone of your object, just like you ordered.
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; // Primitives are just happy the way they are. No cloning necessary.
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item)); // Recursively clone arrays. They're just too complex for a shallow copy.
    }
  
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]); // Don't just copy—recursively clone the inner layers of your objects.
      }
    }
  
    return clonedObj;
  }
  


  /**
   * Deep merge two or more objects. It's like having multiple objects come together and form a megazord.
   * @param {...object} objs - Objects to merge. The more, the merrier.
   * @returns {object} - The merged object with all properties from the input objects.
   */
  function mergeObjects(...objs) {
    const result = {};
  
    const merge = (target, source) => {
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            if (!target[key]) target[key] = {}; // Create a home for the nested object.
            merge(target[key], source[key]);
          } else {
            target[key] = source[key]; // Otherwise, just add the property like a true team player.
          }
        }
      }
    };
  
    objs.forEach(obj => merge(result, obj));
    return result;
  }
  


  /**
   * Pick specific properties from an object. It’s like selectively choosing the best fruit from the basket.
   * @param {object} obj - The object you want to pick properties from.
   * @param {Array<string>} keys - The keys you want to pluck from the object.
   * @returns {object} - A new object containing just the selected properties.
   */
  function pick(obj, keys) {
    const result = {};
    for (let key of keys) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key]; // Select only the chosen keys. No more, no less.
      }
    }
    return result;
  }
  


  /**
   * Omit specific properties from an object. It's like performing a magical disappearing act on the unwanted properties.
   * @param {object} obj - The object from which you want to remove properties.
   * @param {Array<string>} keys - The keys you want to vanish into thin air.
   * @returns {object} - A new object without the omitted properties.
   */
  function omit(obj, keys) {
    const result = { ...obj }; // Clone the object first, like a sneak peek of the new world.
    for (let key of keys) {
      delete result[key]; // Oops! Gone without a trace.
    }
    return result;
  }
  


  /**
   * Flatten a nested object into a single-level object. It’s like squashing a multi-story building into a flat pancake.
   * @param {object} object - The nested object you want to flatten. Prepare for the transformation.
   * @param {string} [parentKey=''] - The key prefix to track where you're coming from. 
   * @param {object} [result={}] - Internal result container used in recursion.
   * @returns {object} - A flattened version of the object.
   */
  function flattenObject(object, parentKey = '', result = {}) {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
  
        if (typeof object[key] === 'object' && object[key] !== null) {
          flattenObject(object[key], newKey, result); // Flatten the inner object.
        } else {
          result[newKey] = object[key]; // Flat out the property like it was always meant to be!
        }
      }
    }
    return result;
  }
  


  /**
   * Unflatten a flattened object back into its multi-layered glory. It's like a reverse pancake!
   * @param {object} obj - The flattened object you want to restore.
   * @returns {object} - A nested object reconstructed from the flattened version.
   */
  function unflattenObject(obj) {
    const result = {};
  
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const keys = key.split('.');
        let current = result;
  
        for (let index = 0; index < keys.length; index++) {
          const part = keys[index];
          if (!current[part]) {
            current[part] = {}; // Create new levels as needed.
          }
          current = current[part];
        }
        current[keys[keys.length - 1]] = obj[key]; // Restore the deepest part.
      }
    }
    return result;
  }
  


  /**
   * Map over the keys of an object. Because who doesn't want to transform object keys? ✨
   * @param {object} obj - The object whose keys are ready for a makeover.
   * @param {Function} fn - The function to apply to each key. Make it magical!
   * @returns {object} - A new object with transformed keys.
   */
  function mapKeys(obj, fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('Second argument must be a function. We need some magic here!');
    }
  
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = fn(key, obj[key]); // Apply magic spell to each key.
        result[newKey] = obj[key];
      }
    }
    return result;
  }
  


  /**
   * Map over the values of an object. Because why should keys get all the fun? 🎉
   * @param {object} obj - The object whose values are up for transformation.
   * @param {Function} fn - The function to apply to each value. Alchemy at its best.
   * @returns {object} - A new object with transformed values.
   */
  function mapValues(obj, fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('The second argument must be a function. Come on, give us some magic!');
    }
  
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = fn(obj[key], key); // Cast a spell on the value!
      }
    }
    return result;
  }



// Object Querying
     //get: Safely access nested properties (e.g., obj.a.b.c).
     function get(obj, path, defaultValue = undefined) {
        const keys = path.split('.');
        let result = obj;
        for (let key of keys) {
          if (result && typeof result === 'object' && key in result) {
            result = result[key];
          } else {
            return defaultValue;
          }
        }
        return result;
      }

     //has: Check if an object has a nested property.
     const has = (obj, path) => {
        return path.split('.').reduce((acc, key) => acc && key in acc ? acc[key] : undefined, obj) !== undefined;
      };

    
    

    //findKey: Find the key of an object that matches a condition.
    const findKey = (obj, condition) => {
        return Object.keys(obj).find((key) => condition(key, obj[key]));
    };
    




// Object Comparison
/**
 * Deeply compare two objects. It's like matching souls—only for objects.
 * @param {object} obj1 - The first object in this epic showdown.
 * @param {object} obj2 - The second object, here to challenge.
 * @returns {boolean} - Returns `true` if they match, `false` if they don't. Simple as that.
 */
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  }
  


  /**
   * Find the difference between two objects. It's like a breakup—what's gone, what's new.
   * @param {object} obj1 - The first object in the relationship.
   * @param {object} obj2 - The second object that came along and changed things.
   * @returns {object} - A new object that shows the differences. Think of it like a breakup journal.
   */
  function diff(obj1, obj2) {
    const result = {};
    for (let key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (!obj2.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
          result[key] = obj1[key]; // These properties are clearly different. So we note them.
        }
      }
    }
    for (let key in obj2) {
      if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
        result[key] = obj2[key]; // These properties are new and we should recognize them.
      }
    }
    return result;
  }



// Object Iteration
  /**
 * Iterate over an object's keys and values. It's like exploring a treasure chest and inspecting every piece!
 * @param {object} obj - The object to iterate over.
 * @param {Function} callback - The function to run on each key-value pair. It takes two arguments: the key and the value.
 */
const forEachObject = (obj, callback) => {
    Object.entries(obj).forEach(([key, value]) => {
        callback(key, value); // Call the callback for each key-value pair.
    });
};





/**
 * Filter an object based on a condition. It’s like a VIP list—only the "cool" keys make it.
 * @param {object} obj - The object to filter.
 * @param {Function} condition - The condition to apply on each key-value pair. The function should return a boolean.
 * @returns {object} - The filtered object, only containing the key-value pairs that pass the condition.
 */
const filterObject = (obj, condition) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => condition(key, value)) // Keep only the key-value pairs that satisfy the condition.
    );
};



    

// Object Creation
/**
 * fromPairs: Convert an array of key-value pairs into an object. 💡
 *
 * @param {Array} arr - The array of key-value pairs.
 * @returns {Object} - The object formed from those pairs.
 */
const fromPairs = (arr) => {
    return Object.fromEntries(arr);
};



/**
 * toPairs: Convert an object into an array of key-value pairs. 🔄
 *
 * @param {Object} obj - The object to convert.
 * @returns {Array} - The array of key-value pairs.
 */
const toPairs = (obj) => {
    return Object.entries(obj);
};

    


//Advanced Utilities
/**
 * deepFreeze: Freeze an object and its nested properties. ❄️
 * 
 * Makes the object and all nested objects immutable. Good luck trying to change anything! 
 *
 * @param {Object} obj - The object to freeze.
 * @returns {Object} - The deeply frozen object.
 */
const deepFreeze = (obj) => {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        if (obj[prop] !== null && typeof obj[prop] === 'object') {
            deepFreeze(obj[prop]);
        }
    });
    return obj;
};

/**
 * deepSeal: Seal an object and its nested properties. 🔒
 * 
 * Prevents adding new properties while allowing modification of existing ones. 
 *
 * @param {Object} obj - The object to seal.
 * @returns {Object} - The deeply sealed object.
 */
const deepSeal = (obj) => {
    Object.seal(obj);
    Object.getOwnPropertyNames(obj).forEach((prop) => {
        if (obj[prop] !== null && typeof obj[prop] === 'object') {
            deepSeal(obj[prop]);
        }
    });
    return obj;
};

/**
 * deepMap: Map over the keys and values of an object recursively. 🧠
 * 
 * Apply a callback to each key-value pair, even for nested objects.
 *
 * @param {Object} obj - The object to map over.
 * @param {Function} callback - The function to apply to each key-value pair.
 * @returns {Object} - The new object with mapped values.
 */
const deepMap = (obj, callback) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        acc[key] = (value !== null && typeof value === 'object') 
            ? deepMap(value, callback) 
            : callback(key, value);
        return acc;
    }, {});
};



/**
 * deepCloneWithCircularReferences: Clone an object while handling circular references. 🔄
 * 
 * This function deep clones an object, and if it detects a circular reference, it safely
 * reuses the already-cloned object to avoid infinite loops. Smart! 💡
 *
 * @param {Object} obj - The object to deep clone.
 * @param {Map} [map=new Map()] - Internal map to track circular references.
 * @returns {Object} - The deep-cloned object.
 */
function deepCloneWithCircularReferences(obj, map = new Map()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (map.has(obj)) return map.get(obj); // Circular reference, return the cached version

    const clone = Array.isArray(obj) ? [] : {};
    map.set(obj, clone);

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            clone[key] = deepCloneWithCircularReferences(obj[key], map);
        }
    }

    return clone;
}



/**
 * deepMergeCustomArrays: Merge two objects with custom handling for arrays. 🔄
 *
 * This function merges two objects deeply, but when it encounters arrays, it combines
 * them in a unique way—by only keeping unique values. Goodbye duplicates! ✌️
 *
 * @param {Object} target - The target object to merge into.
 * @param {Object} source - The source object to merge from.
 * @returns {Object} - The merged object with custom array merging.
 */
function deepMergeCustomArrays(target, source) {
    for (let key in source) {
        if (Array.isArray(source[key])) {
            if (!target[key]) target[key] = [];
            target[key] = [...new Set([...target[key], ...source[key]])];
        } else if (typeof source[key] === 'object') {
            if (!target[key]) target[key] = {};
            deepMergeCustomArrays(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}



/**
 * advancedDestructure: Destructure an object with required key validation. 🔍
 *
 * This function ensures that all required keys are present in the object, 
 * throwing an error if any are missing. No surprises! ⚡
 *
 * @param {Object} obj - The object to destructure.
 * @param {Array} requiredKeys - The list of keys that must be in the object.
 * @returns {Object} - A new object with the required key-value pairs.
 * @throws {Error} - If a required key is missing from the object.
 */
 function advancedDestructure(obj, requiredKeys) {
    const result = {};
    requiredKeys.forEach(key => {
        if (key in obj) {
            result[key] = obj[key];
        } else {
            throw new Error(`Missing required key: ${key}`);
        }
    });
    return result;
}



/**
 * setObjectValue: Set a value at a deep path in an object. 🌲
 *
 * This function allows you to set a value at a deep key path, creating any
 * intermediate objects along the way. It's like setting up a path to success! 💥
 *
 * @param {Object} obj - The object to modify.
 * @param {string} path - The deep path (e.g., 'a.b.c') to set the value.
 * @param {*} value - The value to set at the specified path.
 */
function setObjectValue(obj, path, value) {
    const keys = path.split('.');
    let current = obj;

    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            current[key] = value;
        } else {
            if (!current[key]) current[key] = {}; // Create missing objects
            current = current[key];
        }
    });
}



/**
 * getObjectValue: Retrieve a value from a deep path in an object. 🔍
 *
 * This function safely fetches a value from an object by following a given
 * key path. It returns `undefined` if any key is not found. No surprises here! 😎
 *
 * @param {Object} obj - The object to search in.
 * @param {string} path - The deep path (e.g., 'a.b.c') to retrieve the value.
 * @returns {*} - The value at the specified path, or `undefined` if not found.
 */
function getObjectValue(obj, path) {
    const keys = path.split('.');
    return keys.reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
}








 /**
 * Deeply compares two objects, with a tolerance for numerical values.
 * @param {Object} obj1 - The first object from the abyss.
 * @param {Object} obj2 - The second object from the pit.
 * @param {number} [tolerance=0] - The threshold for numerical differences (beyond this, the universe shatters).
 * @returns {boolean} - True if the objects are equal within the demonic tolerance, false if they are not.
 */
function deepEqualWithTolerance(obj1, obj2, tolerance = 0) {
    // If they are the same cursed object, it's true (for now...)
    if (obj1 === obj2) return true;
    
    // If either is not an object (or it's a cursed null), it's false
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;
    
    // Gather the keys from the depths of both objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    // If their keys don't match in number, the demonic forces are displeased
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        // If the other object doesn't possess this key, then chaos will reign
        if (!keys2.includes(key)) return false;
        
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        // If both values are numbers, check if their difference is acceptable by the dark gods
        if (typeof val1 === 'number' && typeof val2 === 'number') {
            if (Math.abs(val1 - val2) > tolerance) return false;  // Even the slightest difference could tear the fabric of space-time
        } else if (!deepEqualWithTolerance(val1, val2, tolerance)) {
            return false;  // Recursive torment, just as it should be
        }
    }
    return true;  // The forces align, and we return true from the abyss
}



/**
 * Creates an object watcher that reacts to changes like a demon on a leash.
 * @param {Object} obj - The object to be watched by the unholy forces.
 * @param {Function} callback - The function to invoke whenever a change is made (the call of the demon).
 * @returns {Proxy} - A proxy object, more sinister than its innocent counterpart.
 */
function createObjectWatcher(obj, callback) {
    return new Proxy(obj, {
        set(target, prop, value) {
            target[prop] = value;
            callback(prop, value); // Call the callback whenever a cursed change occurs
            return true;
        }
    });
}



/**
 * Flattens a nested object into a single-level structure using the separator of choice (dark magic included).
 * @param {Object} obj - The cursed object to be flattened.
 * @param {string} [separator='.'] - The separator used to join keys (if you're feeling *dark*).
 * @param {string} [parentKey=''] - The prefix used for the keys (our portal's starting point).
 * @param {Object} [result={}] - The result object, holding all cursed data from the abyss.
 * @returns {Object} - The flattened object, writhing in torment.
 */
function flattenWithSeparator(obj, separator = '.', parentKey = '', result = {}) {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const newKey = parentKey ? `${parentKey}${separator}${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flattenWithSeparator(obj[key], separator, newKey, result);  // Recursive descent into the pit of madness
            } else {
                result[newKey] = obj[key];  // Binding the cursed data to the new key
            }
        }
    }
    return result;  // The transformation is complete, the key has been claimed
}



/**
 * Inverts the keys and values of an object (prepare to face the dark mirror).
 * @param {Object} obj - The object to be inverted.
 * @returns {Object} - The object with its keys and values swapped (do not gaze too long).
 * @throws {Error} - If values are not unique, chaos ensues.
 */
function invertObject(obj) {
    const inverted = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (inverted[value] !== undefined) {
                throw new Error('Cannot invert object with non-unique values... The demons will feast!');
            }
            inverted[value] = key;  // The inversion begins, prepare for horrors
        }
    }
    return inverted;
}



/**
 * Flips an object at every level, disturbing the natural order (nothing is sacred).
 * @param {Object} obj - The object to flip (if you dare).
 * @returns {Object} - The flipped object, forever changed.
 */
function flipObject(obj) {
    const flipped = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (typeof value === 'object' && value !== null) {
                flipped[key] = flipObject(value);  // Recursively flip each nested structure
            } else {
                flipped[key] = value;  // The base forms remain, their souls untouched
            }
        }
    }
    return flipped;  // The flip is complete, the cosmos will never be the same
}



/**
 * A twisted version of object spreading, merging everything in its path (without mercy).
 * @param {...Object} objs - The objects to spread into a single unholy creation.
 * @returns {Object} - A single object, forever fused in a painful union.
 */
function deepSpread(...objs) {
    return objs.reduce((acc, obj) => {
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    acc[key] = deepSpread(acc[key] || {}, obj[key]);  // Recursive spreading from the underworld
                } else {
                    acc[key] = obj[key];  // The final merging, as foretold
                }
            }
        }
        return acc;  // One final object, tortured and united
    }, {});
}



/**
 * Demonizes an object by modifying its behavior with dark proxies (be careful).
 * @param {Object} obj - The innocent object to be transformed.
 * @returns {Proxy} - A proxy, possessed by the dark forces.
 */
function demonizeObject(obj) {
    const handler = {
        get(target, prop) {
            if (prop === 'hidden') {
                return undefined; // The hidden truth is lost to us
            }
            return prop in target ? target[prop] : 'Not Found';  // Embrace the unknown
        },
        set(target, prop, value) {
            if (prop === 'demon') {
                value = 'The Dark Lord';  // Name your demon, but do not mistake its power
            }
            target[prop] = value;
            return true;
        }
    };
    return new Proxy(obj, handler);  // The transformation begins, you have been warned
}



/**
 * Generates an object of wrath, deep and unpredictable as the underworld itself.
 * @param {number} [depth=3] - The depth of torment within this object.
 * @param {number} [maxKeys=5] - The maximum number of keys per cursed level.
 * @returns {Object} - A demonic object, filled with chaos and uncertainty.
 */
function generateWrathObject(depth = 3, maxKeys = 5) {
    if (depth <= 0) return Math.random().toString(36).substring(2, 7); // Random strings, as meaningless as the void
    
    const obj = {};
    const keyCount = Math.floor(Math.random() * maxKeys) + 1; // The random forces of creation are cruel
    
    for (let i = 0; i < keyCount; i++) {
        const key = Math.random().toString(36).substring(2, 7);
        const valueType = Math.random() > 0.5 ? 'object' : 'primitive';
        
        if (valueType === 'object') {
            obj[key] = generateWrathObject(depth - 1, maxKeys);
        } else {
            obj[key] = Math.random().toString(36).substring(2, 7); // A random value to torment your soul
        }
    }
    
    return obj;  // The object of wrath is born, with no escape
}



/**
 * Reverses the keys and values of an object, descending into chaos.
 * @param {Object} obj - The object to reverse, its fate sealed.
 * @returns {Object} - The reversed object, where order no longer matters.
 */
function reverseObject(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;  // Base case, the universe is at peace
    
    const reversed = {};
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            reversed[key] = reverseObject(obj[key]);  // The reversal spirals downward
        }
    }
    return reversed;  // The object is reversed, and the world will never be the same
}



/**
 * Reincarnates an object through a series of transformations.
 * @param {Object} obj - The object to be transformed (reborn, perhaps).
 * @param {Function[]} transformations - The transformations that will forever change the object.
 * @returns {Object} - The reincarnated object, a new form of cursed existence.
 */
function reincarnateObject(obj, transformations) {
    return transformations.reduce((currentObj, transform) => transform(currentObj), obj);  // A new soul is forged
}



/**
 * Merges multiple objects, pulling them into a hellish union.
 * @param {...Object} objects - The objects to merge into one infernal creation.
 * @returns {Object} - The merged object, born of endless suffering.
 */
function unholyMerge(...objects) {
    return objects.reduce((acc, obj) => {
        for (let key in obj) {
            if (obj[key] !== undefined) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    acc[key] = unholyMerge(acc[key] || {}, obj[key]);  // Recursively pull in the suffering
                } else {
                    acc[key] = obj[key];  // The dark merging proceeds
                }
            }
        }
        return acc;  // A single object of torment is forged
    }, {});
}

export {
    deepClone, mergeObjects, pick,omit, 
    flattenObject,unflattenObject, 
    mapKeys, mapValues, get ,
    has, findKey,  deepEqual, diff, 
    forEachObject, filterObject,
    fromPairs, toPairs, deepFreeze, 
    deepSeal, deepMap,
    deepCloneWithCircularReferences,
    deepMergeCustomArrays,
    advancedDestructure,
    setObjectValue,getObjectValue,
    deepEqualWithTolerance,
    createObjectWatcher,
    flattenWithSeparator,
    invertObject,flipObject,
    deepSpread,demonizeObject,
    generateWrathObject,reverseObject,
    reincarnateObject,unholyMerge,
}

      
      
      
      
      
      
      
      
      
    













