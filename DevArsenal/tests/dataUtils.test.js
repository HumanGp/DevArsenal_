import * as array from '../src/dataUtils/arrayUtils.js'

let arr=[2,2,45]
let arr2=[2,34,6,7,6,7,8,8,9,70,4]

console.log(`testing duplicate removal ${arr} : output : ${array.removeDuplicates(arr)}`)
console.log(`chunk array by two elements in each sub-array input : ${arr2}, output: ${array.chunkArray(arr2,2)}`)

