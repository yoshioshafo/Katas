//RETURN AN ARRAY WHERE THERE ARE NO DUPLICATE OF NUMBERS
let oriArr = [1,5,9,3,7,1,5];
let noDupArr = [];
for (let i=0; i<oriArr.length; i++){
    //indexOf returns -1 if not found
    if(noDupArr.indexOf(oriArr[i]) == -1){
        noDupArr.push(oriArr[i])
    }
}
console.log(noDupArr.sort())
//[ 1, 3, 5, 7, 9 ]

//ANOTHER SOLUTION
let oriArray2 = [1,3,5,7,3,5,3,7,3,6,3,2,1];
let obj = {};
for(let i of oriArray2){
    obj[i] = true;
}
let noDupArr2 = Object.keys(obj);
console.log(noDupArr2);
//[ '1', '2', '3', '5', '6', '7' ]

//ANOTHER SOLUTION
let oriArray3 = [3,5,9,3,6,5,4,7,1,4,5];
//The Set object lets you store unique values of any type, whether primitive values or object references.
let noDupArr3 = [... new Set(oriArray3)].sort();
console.log(noDupArr3);
//[1, 3, 4, 5, 6, 7, 9]