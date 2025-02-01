// Import from your utility module
import {object} from '../../src/dataUtils/index.js'


//------------test deepclone---------//
     let originalObj = { name: 'Alice', address: { city: 'New York', zip: '10001' }};
     //console.log(object.deepClone(originalObj));
     //output: { name: 'Alice', address: { city: 'New York', zip: '10001' } }
     // Note: Modifying clone should not affect the original object


 let clone = object.deepClone(originalObj);
    clone.address.city = 'Los Angeles';
    //console.log(object.originalObj.address.city); 
    //output: 'New York'

 
 //------test mergeObjects------//
   let obj1 = { name: 'Bob', age: 25 };
   let obj2 = { gender: 'Male', occupation: 'Engineer' };
   //console.log(object.mergeObjects(obj1, obj2));
   //output: { name: 'Bob', age: 25, gender: 'Male', occupation: 'Engineer' }


   
 //------------- Deep merge with nested objects
   let objA = { person: { name: 'Charlie', age: 30 }, country: 'USA' };
   let objB = { person: { city: 'Boston' }, occupation: 'Doctor' };
   //console.log(object.mergeObjects(objA, objB));
   //output: { person: { name: 'Charlie', age: 30, city: 'Boston' }, country: 'USA', occupation: 'Doctor' }



//----test pick------//
   let user = { name: 'David', age: 40, city: 'Chicago' };
    //console.log(object.pick(user, ['name', 'city']));
    //output: { name: 'David', city: 'Chicago' }



//----test omit------//
   let userDetails = { name: 'Eve', age: 45, city: 'Austin' };
   //console.log(object.omit(userDetails, ['age']));
   //output: { name: 'Eve', city: 'Austin' }



//----test flattenObject------//
   let nestedObj = { user: { profile: { name: 'Frank', age: 50 } }, location: { city: 'Seattle' } };
   //console.log(object.flattenObject(nestedObj));
   //output: { 'user.profile.name': 'Frank', 'user.profile.age': 50, 'location.city': 'Seattle' }



//----test unflattenObject------//
   let flatObj = { 'person.name': 'Grace', 'person.age': 35, 'address.city': 'Boston' };
   //console.log(object.unflattenObject(flatObj));
   //output: { person: { name: 'Grace', age: 35 }, address: { city: 'Boston' } }



//----test mapKeys------//
   let data = { firstName: 'Hannah', lastName: 'Jackson' };
   //console.log(object.mapKeys(data, (key) => key.toUpperCase()));
   //output: { FIRSTNAME: 'Hannah', LASTNAME: 'Jackson' }



//----test mapValues------//
   let info = { name: 'Isaac', age: 55 };
   //console.log(object.mapValues(info, (value) => `${value}-info`));
   //output: { name: 'Isaac-info', age: '55-info' }



//----------------------------------------test get------//
   let deepData = { user: { profile: { name: 'Jack' } } };
   //console.log(object.get(deepData, 'user.profile.name'));
   //output: 'Jack'

// Test with a non-existent path
   //console.log(object.get(deepData, 'user.profile.age', 'Not Found'));
  // output: 'Not Found'


//----test has------//
  let obj = { a: { b: { c: 3 } } };
  //console.log(object.has(obj, 'a.b.c'));  //output: true
  //console.log(object.has(obj, 'a.b.d'));  //output: false
  //console.log(object.has(obj, 'a.x.c'));  //output: false


//----test findKey------//
  let obj0 = { a: 1, b: 2, c: 3 };
  //console.log(object.findKey(obj0, (key, value) => value > 2));  //output: 'c'


//----test deepEqual------//
  let obja = { name: 'John', age: 30 };
  let objb = { name: 'John', age: 30 };
  let objc = { name: 'John', age: 31 };
  //console.log(object.deepEqual(obja, objb));  //output: true
  //console.log(object.deepEqual(objb, objc));  //output: false



//----test diff------//
  let obj111 = { name: 'Alice', age: 25, city: 'New York' };
  let obj22 = { name: 'Alice', age: 30, country: 'USA' };
   //console.log(object.diff(obj111, obj22));  //output: { age: 25, city: 'New York', country: 'USA' }



//----test forEachObject------//
  let obj33 = { a: 1, b: 2, c: 3 };
   //console.log(object.forEachObject(obj33, (key, value) => console.log(`${key}: ${value}`)));
  //Expected output:
  // a: 1
  // b: 2
  // c: 3


//----test filterObject------//
  let obj43 = { a: 1, b: 2, c: 3 };
  //console.log(object.filterObject(obj43, (key, value) => value > 1)); //output: { b: 2, c: 3 }



//----test fromPairs------//
  let pairs = [['a', 1], ['b', 2], ['c', 3]];
  //console.log(object.fromPairs(pairs));  //output: { a: 1, b: 2, c: 3 }



//----test toPairs------//
  let obj53 = { x: 10, y: 20, z: 30 };
  //console.log(object.toPairs(obj53));  //output: [ ['x', 10], ['y', 20], ['z', 30] ]



//----test deepFreeze------//
  let obj63 = { name: 'Bob', address: { city: 'Los Angeles' } };
  //console.log(object.deepFreeze(obj63));
  //console.log( obj63.name = 'Alice'); // Should throw error due to immutability



//----test deepSeal------//
  let obj73 = { name: 'Charlie', age: 25 };
    //console.log(object.deepSeal(obj73));
    //console.log( obj73.city = 'Boston' ); // Should throw error due to inability to add properties



//----test deepMap------//
  let obj83 = { person: { name: 'David', age: 30 }, location: 'California' };
  //console.log(object.deepMap(obj83, (key, value) => `${key}-${value}`)); 
  //output: { person: { name: 'David-name', age: '30-age' }, location: 'California-location' }


//----test deepCloneWithCircularReferences------//
    let obj9 = { a: 1 };
    obj9.circularRef = obj9;  // Circular reference
    let clonedObj = object.deepCloneWithCircularReferences(obj9);
    //console.log(clonedObj);
     // Output: Should be a deep clone without circular references    
    //output: <ref *1> { a: 1, circularRef: [Circular *1] }



//----test deepMergeCustomArrays------//
  let obj103 = { numbers: [1, 2, 3], data: { name: 'Alice' } };
  let obj113 = { numbers: [3, 4, 5], data: { age: 30 } };
  //console.log(object.deepMergeCustomArrays(obj103, obj113));
  //output: { numbers: [1, 2, 3, 4, 5], data: { name: 'Alice', age: 30 } }


  
  // ----- Test advancedDestructure -----
  const obj132 = { a: 1, b: 2, c: 3 };
  try {
     //const destructured = object.advancedDestructure(obj132, ['a', 'b']);
     //console.log(destructured); // Expected output: { a: 1, b: 2 }
  } catch (e) {
    //console.error(e.message); // If any key is missing, it will throw an error
  }
  

  // ----- Test setObjectValue and getObjectValue -----
     const obj21 = {};
     object.setObjectValue(obj21, 'a.b.c', 42);
      //console.log(object.getObjectValue(obj21, 'a.b.c')); // Expected output: 42
      //console.log(object.getObjectValue(obj21, 'a.b.d')); // Expected output: undefined (non-existing path)
  


  // ----- Test deepEqualWithTolerance -----
      const obj3 = { x: 1.0001, y: 2 };
      const obj4 = { x: 1.0002, y: 2 };
     //console.log(object.deepEqualWithTolerance(obj3, obj4, 0.001)); // Expected output: true (within tolerance)
     //console.log(object.deepEqualWithTolerance(obj3, obj4, 0.00001)); // Expected output: false (out of tolerance)
  


  // ----- Test createObjectWatcher -----
     const obj5 = { a: 1, b: 2 };
     const watcher = object.createObjectWatcher(obj5, (key, value) => {
     //console.log(`Key ${key} changed to ${value}`);
  });
  watcher.a = 3; // Should log: "Key a changed to 3"
  watcher.b = 4; // Should log: "Key b changed to 4"
  


  // ----- Test flattenWithSeparator -----
     const obj6 = { a: { b: { c: 3 } } };
     const flattened = object.flattenWithSeparator(obj6);
     //console.log(flattened); // Expected output: { 'a.b.c': 3 }
  


  // ----- Test invertObject -----
     const obj7 = { a: 'apple', b: 'banana' };
     const inverted = object.invertObject(obj7);
    //console.log(inverted); // Expected output: { 'apple': 'a', 'banana': 'b' }
  

  // ----- Test flipObject -----
    const obj8 = { a: { b: 1 }, c: 2 };
    const flipped = object.flipObject(obj8);
    //console.log(flipped); // Expected output: { a: { b: 1 }, c: 2 } (structure stays same but could recurse deeper)
  


  // ----- Test deepSpread -----
     const obj90 = { a: { x: 1 }, b: 2 };
     const obj10 = { a: { y: 3 }, c: 4 };
     const spreadResult = object.deepSpread(obj90, obj10);
     //console.log(spreadResult); // Expected output: { a: { x: 1, y: 3 }, b: 2, c: 4 }

  
  
  // ----- Test demonizeObject -----
    const obj11 = { name: 'John' };
    const demonized = object.demonizeObject(obj11);
    //console.log(demonized.name); // Expected output: John
    //console.log(demonized.hidden); // Expected output: undefined (hidden properties are inaccessible)
    demonized.demon = 'The Dark Lord'; // Sets the 'demon' property to 'The Dark Lord'
    //console.log(demonized.demon); // Expected output: The Dark Lord
  


  // ----- Test generateWrathObject -----
    const wrathObject = object.generateWrathObject(2, 3); // Depth 2 and max 3 keys per level
    
    //console.log(wrathObject); // Random object with depth and random keys
    /* example output : 
                 {
                h3bwf: { jlalb: 'vps4i', '9l5zj': 'a9vxd', '4sm13': '1dxa4' },
                f2d2d: { we3x9: '0baqz', '3mfm7': 't7mh2' }
              }
    */

  


  // ----- Test reverseObject -----
   const obj12 = { a: { b: 1 }, c: 2 };
   const reversedObj = object.reverseObject(obj12);
   //console.log(reversedObj); // Expected output: { a: { b: 1 }, c: 2 } (reversal works recursively)
  

  // ----- Test reincarnateObject -----
   const obj13 = { a: 1, b: 2 };
   const transformations = [
    (obj) => ({ ...obj, b: 3 }),  // Change 'b' to 3
    (obj) => ({ ...obj, c: 4 })   // Add 'c' as 4
   ];
   const reincarnated = object.reincarnateObject(obj13, transformations);
   //console.log(reincarnated); // Expected output: { a: 1, b: 3, c: 4 }
  

  // ----- Test unholyMerge -----
   const obj14 = { a: { x: 1 }, b: 2 };
   const obj15 = { a: { y: 3 }, c: 4 };
   const merged = object.unholyMerge(obj14, obj15);
   //console.log(merged); // Expected output: { a: { x: 1, y: 3 }, b: 2, c: 4 }
  