//import from central module index.js
import { array } from "../../src/dataUtils/index.js";


//----test chunking an array------//
let arr1=[1,2,3,4,5,6,7,8,9,0]
//console.log(array.chunkArray(arr1,2))
//output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 0 ] ]


//-------test removeDuplicates------//
//----test with flat array
      let duplicates=[1,2,3,4,1,1,2,3,4]

      //console.log(array.removeDuplicates(duplicates))
      //output:[ 1, 2, 3, 4 ]


//----test with nested array
      let nestedDuplicates=[1,1,2,[2,2,3,4],[4,3,2,67,8]]
     //console.log(array.removeDuplicates(nestedDuplicates))
     //output: [ 1, 2, [ 3, 4 ], [ 67, 8 ] ]


// ----test array flattening-------//
//------2D array
     let twodimentionArray=[1,2,[2,3,4]]
    //console.log(array.flattenArray(twodimentionArray))
    //output:[ 1, 2, 2, 3, 4 ]


//-----3D array
    let threedimentionArray=[1,4,[8,9,4],[7,8,1],9,0,3]
    //console.log(array.flattenArray(threedimentionArray))
    //output:[ 1, 4, 8, 9, 4,  7, 8, 1, 9, 0, 3]


//---------test intersect-------//
    let array1=[1,2,3,4]
    let array2=[3,4,5,6]
    //console.log(array.intersect(array1,array2))
    //output: [ 3, 4 ]


//-----test array difference------//
     let dif1=[1,2,3,4]
     let dif2=[1,5,6,7]
     //console.log(array.arrayDifference(dif1,dif2))
     //output:[ 2, 3, 4 ]
     //it checks the elements in array one and not in array two

     
 //----test sort array by key------//
     let arrayObj=[
        {name:'James',age:7},
        {name:'John',age:14},
        {name:'Tovald',age:27}
     ]  
     //console.log(array.sortByKey(arrayObj,'age'))
     /*output:
              [
                { name: 'James', age: 7 },
                { name: 'John', age: 14 },
                { name: 'Tovald', age: 27 }
              ]
    */
//---test group by key---//
     let keyArray=[
       {id:1,name:'Alpha'},
       {id:1, name:'humanGpt'},
       {id:2,name:'rose'},
       {id:3,name:'musk'},
       {id:1,name:'mark'}
    ]

    //console.log(array.groupByKey(keyArray,'id'))
     /*output : 
       {
        '1': [
              { id: 1, name: 'Alpha' },
              { id: 1, name: 'humanGpt' },
              { id: 1, name: 'mark' }
            ],
        '2': [ { id: 2, name: 'rose' } ],
        '3': [ { id: 3, name: 'musk' } ]
       }
    */

//--- Test sort by multiple keys ---//

const p_eople = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Chicago' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'David', age: 30, city: 'Chicago' },
  ];
  
  const sortedPeople = array.sortByMultipleKeys(p_eople, ['age', 'city']);
  //console.log(sortedPeople);
  
  /* Expected output:
  [
    { name: 'Bob', age: 25, city: 'Chicago' },
    { name: 'Charlie', age: 25, city: 'New York' },
    { name: 'David', age: 30, city: 'Chicago' },
    { name: 'Alice', age: 30, city: 'New York' }
  ]
  */

//------test partition array ----------//
//--test with even and odd
    let numbers =[1,2,3,4,5,6,7,8]

    const [even,odd] = array.partitionArray(numbers, x => x%2 === 0)
    //console.log(`even:${even}`)
    //console.log(`odd:${odd}`)
    /*output: even:2,4,6,8
              odd:1,3,5,7
    */

//--test with Objects
    const people=[
        {name:'Alice', age:30},
        {name:'Bob', age:16},
        {name:'Tom', age:26},
        {name:'Ann', age:19},
        {name:'Ruby', age:18},
        {name:'Andrew', age:10},
        {name:'Thomas', age:56},
    ]

    const [adults,minors] = array.partitionArray( people , person=> person.age >= 18 )
    //console.log(`adults :`,adults)
    //console.log(`minors :`,minors)

    /* output : 
        adults : [
           { name: 'Alice', age: 30 },
           { name: 'Tom', age: 26 },
           { name: 'Ann', age: 19 },
           { name: 'Ruby', age: 18 },
          { name: 'Thomas', age: 56 }
              ]

        minors : [ { name: 'Bob', age: 16 }, { name: 'Andrew', age: 10 } ]
    */

//--------test zip arrays-------------/
    const names=['John','Mark','Mathew','Musk','Terry']
    const ages =[24,23,13,10]
    const cities = ['New York','Nairobi','Chicago']

    //console.log(array.zipArrays(names,ages,cities))
    /* output :
          [
            [ 'John', 24, 'New York' ],
            [ 'Mark', 23, 'Nairobi' ],
            [ 'Mathew', 13, 'Chicago' ]
        ]
    */


//--------------test shuffle Array----------//
    const arrayToShuffle=[1,2,3,4,5,6,7,8,9]
    //console.log(array.shuffleArray(arrayToShuffle))
    /* output :
        [ 5, 2, 3, 4, 7, 9, 1, 8, 6]
    */

//----------- test cartesian product---//
     const cart1 = ['a','b','c']
     const cart2 = [1,2,3]
     
     //console.log(array.cartesianProduct(cart1,cart2))
     /* output :
      [
         [ 'a', 1 ], [ 'a', 2 ],
         [ 'a', 3 ], [ 'b', 1 ],
         [ 'b', 2 ], [ 'b', 3 ],
         [ 'c', 1 ], [ 'c', 2 ],
         [ 'c', 3 ]
     ]
     */

//--------------test array to object----//
    const arrayToObj1=[['Adam','Eve'],['apple','lemon'],['javascript','react']]

    //console.log(array.convertPairsToObject(arrayToObj1))

    // output : { Adam: 'Eve', apple: 'lemon', javascript: 'react' }

//--test array to object index as keys

    const arrayToObj_indexAsKeys = ['a','b','c','d']

    //console.log(array.objectFromIndexedArray(arrayToObj_indexAsKeys))
    // output: { '0': 'a', '1': 'b', '2': 'c', '3': 'd' }


//-- test array to object with custom keys
      const elements = ['apple', 'banana', 'cherry'];
      const keys = ['first', 'second', 'third'];
      const result = array.objectFromCustomKeys( elements, keys)

      //console.log(result); 
      // Output: { first: 'apple', second: 'banana', third: 'cherry' }
 
//--test  array of objects to a single object

     const objs_ToObj = [
        {name:'Tom'},
        {age:32},
        {nationality:'USA'}
     ]

     //console.log(array. mergeArrayOfObjects(objs_ToObj))
     // output : { name: 'Tom', age: 32, nationality: 'USA' }


//-----test sliding window   ---------------//
    const maxSumSubarray = (arr, k) => {
    return array.slidingWindow(arr, k, ({ windowStart, windowEnd, result }) => {
      const windowSum = arr.slice(windowStart, windowEnd + 1).reduce((sum, num) => sum + num, 0);
      return Math.max(result || -Infinity, windowSum);
    });
    };
  

    //console.log(maxSumSubarray([2, 1, 5, 1, 3, 2], 3));
    //Output: 9


//-----test find union-----------------//
    const un1=[1,2,3,4]
    const un2=[1,2,9,8]

    //console.log(array.findUnion(un1,un2))
    // output : [ 1, 2, 3, 4, 9, 8 ]


//--find rotate Array--------------------//
     const rotate=[1,2,3,4,5]

     //console.log(array.rotateArray(rotate,2))
     //outpu : [ 3, 4, 5, 1, 2 ]


//----test Array to csv------------------//
    const data = [
       { name: 'Alice', age: 25, city: 'New York' },
       { name: 'Bob', age: 30, city: 'San Francisco, CA' },
       { name: 'Charlie', age: 35, city: 'Los Angeles\nCA' },
       { name: 'Dave', age: 40, city: 'Seattle, "WA"' },
  ];
  
  console.log(array.arrayToCSV(data));
  /*
   output :
   
    name,age,city
    Alice,25,New York
    Bob,30,"San Francisco, CA"
    Charlie,35,"Los Angeles
    CA"
    Dave,40,"Seattle, ""WA"""

  */


  

