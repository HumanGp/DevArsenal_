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
