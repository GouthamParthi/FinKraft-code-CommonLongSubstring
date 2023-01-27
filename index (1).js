
function targetedSum(arr1,arr2,targetSum){
  //traverse array and return if two integers adds up to give target sum
 
  for(let  integer1 of arr1){
   for(let  integer2 of arr2){
     if(integer1+integer2==targetSum){
       return [integer1,integer2]
     }
   }
  }
}
console.log(targetedSum([1,2,3,1,2],[1,2,4,6,7,5],4)) 